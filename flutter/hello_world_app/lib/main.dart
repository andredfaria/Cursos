import 'package:flutter/material.dart';
import 'screens/login/login_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'André',
      debugShowCheckedModeBanner: false,
      home: LoginScreen(),
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: const Color(0xFF4377B2),
        accentColor: const Color(0xFF5FAEBE),
        fontFamily: 'OpenSans',
      )
    );
  }
}
