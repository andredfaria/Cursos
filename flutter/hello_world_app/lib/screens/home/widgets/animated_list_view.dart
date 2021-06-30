import 'package:flutter/material.dart';
import 'list_data.dart';

class AnimatedListView extends StatelessWidget {
  final Animation<EdgeInsets> listSlidePosition;
  AnimatedListView({@required this.listSlidePosition});

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.bottomCenter,
      children: <Widget>[
        ListData(
          title: 'Eu sou o André',
          subtitle: 'Desenvolvedor Web',
          image: AssetImage('assets/images/profile.png'),
          margin: listSlidePosition.value * 4,
        ),
        ListData(
          title: 'Meu GitHub',
          subtitle: 'Onde esta meus projetos',
          image: AssetImage('assets/images/github.png'),
          margin: listSlidePosition.value * 3,
        ),
        ListData(
          title: 'Meu Instagram',
          subtitle: 'I study a lot of Flutter',
          image: AssetImage('assets/images/flutter.png'),
          margin: listSlidePosition.value * 2,
        ),
        ListData(
          title: 'Dart Study',
          subtitle: 'also study dart',
          image: AssetImage('assets/images/dart.png'),
          margin: listSlidePosition.value * 1,
        ),
        ListData(
          title: 'Meu LinkedIn',
          subtitle: 'Veja meu LinkedIn',
          image: AssetImage('assets/images/linkedin.png'),
          margin: listSlidePosition.value * 0,
        ),
      ]
    );
  }
}
