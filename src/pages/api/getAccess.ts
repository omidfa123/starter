import type { NextApiRequest, NextApiResponse } from 'next';
import { CookieSerializeOptions, serialize } from 'cookie';

const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const cookieOptions: CookieSerializeOptions = {
        httpOnly: true,
        path: '/',
        maxAge: 240000,
      };
      if (username === 'admin' && password === 'admin1234') {
        setCookie(
          res,
          'admin_key',
          '549c9173-4c16-48bc-bf15-1cf9b1b0ac64',
          cookieOptions
        );
        res.status(200).json({ result: 'success', message: 'ورود با موفقیت' });
      } else {
        res.status(200).json({
          result: 'failed',
          message: 'نام کاربری یا رمز عبور اشتباه است',
        });
      }
    } catch (e) {
      res.status(403).json({ result: 'something go wrong' });
    }
  }
}
