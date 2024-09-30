/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/lib/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
  const data = await retrieveData("messages");

  if (data) {
    res.status(200).json({ status: true, message: "Success", data: data });
  } else {
    res.status(400).json({ status: true, message: "Success", data: data });
  }
}
