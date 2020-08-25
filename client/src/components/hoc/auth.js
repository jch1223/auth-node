import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../_actions/user_action";

const Auth = (SpecificComponent, option, adminRoute = null) => {
  // option
  // null => 아무나
  // true => 로그인 한 사람만
  // false => 로그인 한 사람은 출입 불가

  const AuthenticationCheck = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);
        // 로그인하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/loginpage");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};

export default Auth;
