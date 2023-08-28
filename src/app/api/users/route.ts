import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    console.log('request.nextUrl.searchParams', searchParams.getAll('sortBy'));
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'David Miller' },
      { id: 3, name: 'Alice Johnson' },
      { id: 4, name: 'Emily Smith' },
      { id: 5, name: 'Michael Brown' },
    ];
    return NextResponse.json(
      {
        data: users,
        message: 'Users fetched successfully',
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

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log('request', reqBody);
    console.log('table name', request.nextUrl.searchParams.get('tablename'));
    return NextResponse.json(
      {
        message: 'user created successfully',
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
