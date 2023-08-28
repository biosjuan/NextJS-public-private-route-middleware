import { connectMongoDB } from '@/config/dbConfig';
import { UserModel } from '@/models/userModels';
import { NextRequest, NextResponse } from 'next/server';

connectMongoDB();
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    // console.log('request.nextUrl.searchParams', searchParams.getAll('sortBy'));
    let filters: any = {};
    if (searchParams.has('name')) {
      filters.name = searchParams.get('name');
    }
    if (searchParams.has('age')) {
      filters.age = searchParams.get('age');
    }
    const users = await UserModel.find(filters);
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
    const newUser = await new UserModel(reqBody);
    const response = await newUser.save();
    console.log('table name', request.nextUrl.searchParams.get('tablename'));
    return NextResponse.json(
      {
        message: 'user created successfully',
        data: response,
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
