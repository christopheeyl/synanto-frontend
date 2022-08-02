import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
            httpOnly: true,
            secure: false,
            expires: new Date(0),
            sameSite: "strict",
            path: "/",
        })
    )
    res.status(200).json({ success: true });
}