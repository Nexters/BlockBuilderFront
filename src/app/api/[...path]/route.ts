import { NextRequest, NextResponse } from 'next/server';

async function handleRequest(req: NextRequest, params: { path: string[] }) {
  try {
    const API_HOST = process.env.API_HOST;
    if (!API_HOST) {
      throw new Error('API_HOST is not defined');
    }

    const endpoint = params.path.join('/');
    const queryString = req.nextUrl.searchParams.toString();
    const fullUrl = queryString ? `${API_HOST}/api/v1/${endpoint}?${queryString}` : `${API_HOST}/api/v1/${endpoint}`;

    if (req.method === 'POST') {
      console.log('Proxying POST request to:', fullUrl);
    }

    const fetchOptions: RequestInit = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (req.method === 'POST') {
      const body = await req.json();
      const token = req.headers.get('x-custom-token');

      fetchOptions.body = JSON.stringify(
        token
          ? { ...body, eoa: token }
          : body
      );
    }

    const res = await fetch(fullUrl, fetchOptions);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return handleRequest(req, await params);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return handleRequest(req, await params);
}
