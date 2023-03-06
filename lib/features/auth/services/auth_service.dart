import 'package:flutter/material.dart';
import 'package:myecommerce/constants/error_handling.dart';
import 'package:myecommerce/constants/global_variables.dart';
import 'package:myecommerce/constants/utils.dart';
import 'package:myecommerce/user.dart';
import 'package:http/http.dart' as http;

class AuthService {
  //sign up user

  void signUpUser({
    required BuildContext context,
    required String email,
    required String name,
    required String password,
  }) async {
    try {
      User user = User(
        id: '',
        name: name,
        email: '',
        password: password,
        address: '',
        type: '',
        token: '',
        //cart: '',
      );

      http.Response res = await http.post(
        Uri.parse('$uri/api/signup'),
        body: user.toJson(),
        headers: <String, String>{
          'Content_Type': 'application/json: charset=UTF-8',
        },
      );
      httpErrorHandler(
        response: res,
        context: context,
        onSuccess: () {
          showSnackBar(
              context, 'Account has been created, login with your credentials');
        },
      );
    } catch (e) {
      showSnackBar(context, e.toString());
    }
  }
}
