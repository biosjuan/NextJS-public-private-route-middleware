import { connectMongoDB } from '@/config/dbConfig';
import { UserModel } from '@/models/userModels';
import { request } from 'http';
import { NextRequest, NextResponse } from 'next/server';

connectMongoDB();

export async function GET(
  nextRequest: NextRequest,
  { params }: { params: { userid: string } }
) {
  try {
    const userid = params.userid;
    const user = await UserModel.findById(userid);

    if (!user) throw new Error('user not found');

    return NextResponse.json(
      {
        message: 'user fetched successfully',
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  nextRequest: NextRequest,
  { params }: { params: { userid: string } }
) {
  try {
    const userid = params.userid;
    const reqBody = await nextRequest.json();
    const response = await UserModel.findByIdAndUpdate(userid, reqBody, {
      new: true,
    });

    return NextResponse.json(
      {
        message: 'Users udated successfully for user id of ' + params.userid,
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

export async function DELETE(
  nextRequest: NextRequest,
  { params }: { params: { userid: string } }
) {
  try {
    const userid = params.userid;
    const response = await UserModel.findByIdAndDelete(userid);

    if (!response) throw new Error('user not found!');

    return NextResponse.json(
      {
        message:
          'Users deleted successfully for user id of ' + params.userid + '!',
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
