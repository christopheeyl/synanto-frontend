interface ILog {
  isUserLogedIn: boolean;
  route: string;
}

export default function log(isLoggedin: boolean): ILog {
  return isLoggedin
    ? { isUserLogedIn: isLoggedin, route: "/api/auth/logout" }
    : { isUserLogedIn: !isLoggedin, route: "/api/auth/login" };
}
