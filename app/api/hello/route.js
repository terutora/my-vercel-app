export async function GET() {
  return Response.json({ text: "こんにちは、Vercel!" });
}

// POSTリクエストにも対応する場合
export async function POST(request) {
  const body = await request.json();
  return Response.json({ received: body });
}
