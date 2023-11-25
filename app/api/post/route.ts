import { NextResponse } from "next/server"
import { postSchema } from "./schema";
import { error } from "console";



export const GET = () => {
    return NextResponse.json('hello')
};



export const POST = async(request: { json: () => any; }) => {
    const body = await request.json();

    const validation = postSchema.safeParse(body);

    if(validation.success){
        return NextResponse.json({message: "succsess"}, {status:200,});
    }else{
        return NextResponse.json({message: validation.error.errors},{status: 400,});
    }
}




