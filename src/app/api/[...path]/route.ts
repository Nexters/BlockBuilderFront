import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const API_HOST = process.env.API_HOST;
    if (!API_HOST) {
      throw new Error("API_HOST is not defined");
    }

    const endpoint = params.path.join("/");
    const fullUrl = `${API_HOST}/api/v1/${endpoint}`;

    const res = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const API_HOST = process.env.API_HOST;
    if (!API_HOST) {
      throw new Error("API_HOST is not defined");
    }

    const endpoint = params.path.join("/");
    const fullUrl = `${API_HOST}/api/v1/${endpoint}`;
    console.log("Proxying POST request to:", fullUrl);

    const body = await req.json();

    const res = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.cookies.get("token") ? { ...body, eoa: req.cookies.get("token")?.value } : body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
