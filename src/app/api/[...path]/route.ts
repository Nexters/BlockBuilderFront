import { NextRequest, NextResponse } from 'next/server';

async function handleRequest(req: NextRequest, params: { path: string[] }) {
  try {
    const API_HOST = process.env.API_HOST;
    if (!API_HOST) {
      throw new Error('API_HOST is not defined');
    }

    const endpoint = params.path.join('/');
    const fullUrl = `${API_HOST}/api/v1/${endpoint}`;

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
      fetchOptions.body = JSON.stringify(
        req.cookies.get('token') ? { ...body, eoa: req.cookies.get('token')?.value } : body
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
