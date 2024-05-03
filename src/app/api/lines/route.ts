import { NextResponse } from "next/server";
import { getLine, createLine } from "@/services/lineServices";
export async function POST(req: Request) {
  try {
    const { pickupLine, contributor } = await req.json();
    const data = { pickupLine, contributor };
    const response = await createLine(data);
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Creation failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const response = await getLine();
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error while Fetching" },
      { status: 500 }
    );
  }
}
