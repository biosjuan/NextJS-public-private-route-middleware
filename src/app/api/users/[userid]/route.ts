import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  nextRequest: NextRequest,
  { params }: { params: { userid: string } }
) {
  try {
    console.log(params);
    const reqBody = await nextRequest.json();
    console.log(reqBody);
    return NextResponse.json(
      {
        message: 'Users udated successfully for user id of ' + params.userid,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}
