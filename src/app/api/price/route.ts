
import { NextResponse } from 'next/server'

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get('ids')?.split(',')
    ?? [];
  // ignore this, it's not the bug
  // we just want to work with fake data prices 
  const prices = ids.map((id) => id.length * 1_000)

  return NextResponse.json({
    ids,
    prices
  }, {
    status: 200
  })
}
