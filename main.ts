function create_dealer_card (first: boolean, num: number) {
    if (first == false) {
        card_number = card_number_list[randint(0, 12)]
        if (card_number == 11) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111111eeeee11111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e11111eeeee1eeeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e1111eeee11111eeee1111e1e
                e1e1111eeee11111eeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eee1111111eee1111e1e
                e1e1111eee1111111eee1111e1e
                e1e1111eee1111111eee1111e1e
                e1e1111eee1111111eee1111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 2) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111111eeeeeee111111e1e
                e1e1111111eeeeeeee111111e1e
                e1e111111eeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeee1eeeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e1111111111eeeee111111e1e
                e1e111111111eeeeee111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111eeeeeee11111111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e111111eeeeeeeeee11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 3) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111eeeeeeeee1111111e1e
                e1e1111eeeeeeeeeeee11111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111111eeeeeeeeee1111e1e
                e1e1111111111eeeeeee1111e1e
                e1e111111111eeeeeeee1111e1e
                e1e111111111eeeeeee11111e1e
                e1e111111111eeeeeee11111e1e
                e1e11111111111eeeeee1111e1e
                e1e11111eeee1eeeeeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeee11111e1e
                e1e11111eeeeeeeeee111111e1e
                e1e111111eeeeeeee1111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 4) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111eee111eee111111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e111111eeeeeeeeee11111e1e
                e1e111111111111eeee11111e1e
                e1e111111111111eeee11111e1e
                e1e111111111111eeee11111e1e
                e1e111111111111eeee11111e1e
                e1e1111111111111ee111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 5) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeeee1111e1e
                e1e11111eeeeeeeeeeee1111e1e
                e1e11111eeeeeeeeeeee1111e1e
                e1e11111eeeeee1111111111e1e
                e1e11111eeeeee1111111111e1e
                e1e11111eeeeeeeeee111111e1e
                e1e111111eeeeeeeeee11111e1e
                e1e1111111eeeeeeeeee1111e1e
                e1e11111111eeeeeeeee1111e1e
                e1e111111111eeeeeeee1111e1e
                e1e11111eeeeeeeeeeee1111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e111111eeeeeeeee111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 6) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111eeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeee1111eee11111e1e
                e1e11111eeee111111111111e1e
                e1e11111eeee111111111111e1e
                e1e11111eeee111111111111e1e
                e1e11111eeeeeeeeee111111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e111111eeeeeeeee111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 7) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111eeeeeeeeee11111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e11111eeeeeeeeeeee1111e1e
                e1e111111111111eeeee1111e1e
                e1e11111111111eeeeee1111e1e
                e1e1111111111eeeeee11111e1e
                e1e1111111111eeeeee11111e1e
                e1e111111111eeeeee111111e1e
                e1e11111111eeeeee1111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111eeeeeee11111111e1e
                e1e111111eeeeee111111111e1e
                e1e11111eeeeee1111111111e1e
                e1e11111eeeee11111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 8) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e111111eeee11eee111111e1e
                e1e111111eee111eee111111e1e
                e1e111111eee11eeee111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeee1eeeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeeee1eeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e111111eeeeeeeee111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 9) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeee111eeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e111111eeeeeeeeee11111e1e
                e1e111111111111eeee11111e1e
                e1e111111111111eeee11111e1e
                e1e111111111111eeee11111e1e
                e1e11111eee1111eeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e11111eeeeeeeeee111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 10) {
            _10_j_q_k = randint(0, 3)
            if (_10_j_q_k == 0) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e11111ee11111eeee11111e1e
                    e1e1111eeee111eeeeee1111e1e
                    e1e1111eeee11eeeeeeee111e1e
                    e1e1111eeee11eeeeeeee111e1e
                    e1e1111eeee11eee11eee111e1e
                    e1e1111eeee11eee11eee111e1e
                    e1e1111eeee11eee11eee111e1e
                    e1e1111eeee11eee11eee111e1e
                    e1e1111eeee11eee11eee111e1e
                    e1e1111eeee11eee11eee111e1e
                    e1e1111eeee11eeeeeeee111e1e
                    e1e1111eeee11eeeeeeee111e1e
                    e1e1111eeee111eeeeee1111e1e
                    e1e11111ee11111eeee11111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            } else if (_10_j_q_k == 1) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e11111111111eeee111111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e11111111111eeeee11111e1e
                    e1e1111eee1111eeeee11111e1e
                    e1e111eeee111eeeeee11111e1e
                    e1e111eeeee11eeeeee11111e1e
                    e1e111eeeeeeeeeeeee11111e1e
                    e1e1111eeeeeeeeeee111111e1e
                    e1e1111eeeeeeeeeee111111e1e
                    e1e11111eeeeeeeee1111111e1e
                    e1e1111111eeeeee11111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            } else if (_10_j_q_k == 2) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111eeeeeee11111111e1e
                    e1e11111eeeeeeeee1111111e1e
                    e1e1111eeeeeeeeeee111111e1e
                    e1e111eeeeeeeeeeeee11111e1e
                    e1e111eeeeee1eeeeee11111e1e
                    e1e111eeeee111eeeee11111e1e
                    e1e111eeeee111eeeee11111e1e
                    e1e111eeeee111eeeee11111e1e
                    e1e111eeeeee1eeeeee11111e1e
                    e1e111eeeeeeeeeeeee11111e1e
                    e1e1111eeeeeeeeeeeee1111e1e
                    e1e11111eeeeeeeeeeee1111e1e
                    e1e111111eeeeeeeeeeee111e1e
                    e1e1111111111111eeeee111e1e
                    e1e111111111111111eee111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            } else if (_10_j_q_k == 3) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e11111eee111111eee1111e1e
                    e1e1111eeeee1111eeeee111e1e
                    e1e1111eeeee11eeeeeee111e1e
                    e1e1111eeeee1eeeeeeee111e1e
                    e1e1111eeeeeeeeeeeee1111e1e
                    e1e1111eeeeeeeeeeee11111e1e
                    e1e1111eeeeeeeeeee111111e1e
                    e1e1111eeeeeeeeee1111111e1e
                    e1e1111eeeeeeeee11111111e1e
                    e1e1111eeeeeeee111111111e1e
                    e1e1111eeeeeeee111111111e1e
                    e1e1111eeeeeeeee11111111e1e
                    e1e1111eeeeeeeeee1111111e1e
                    e1e1111eeeeeeeeeeee11111e1e
                    e1e1111eeeeeeeeeeee11111e1e
                    e1e1111eeeee1eeeeeee1111e1e
                    e1e1111eeeee11eeeeee1111e1e
                    e1e1111eeeee111eeeee1111e1e
                    e1e1111eeeee111eeeee1111e1e
                    e1e11111eee11111eee11111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            }
        }
        dealer_card.setPosition(180, 27)
        dealer_card.setVelocity(-2000 + 20 * num, 0)
        pause(200)
        dealer_card.setVelocity(0, 0)
        dealer_card.setPosition(80 + 20 * num, 27)
        pause(100)
    } else {
        card_number = card_number_list[randint(0, 12)]
        hidden_dealer_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            e1eeecb1111111111111bceee1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1e111ecb1ebd1dbe1bce111e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee11111111ecbce11111111eee
            e1e111eee111ece111eee111e1e
            eee11eddde11ded11eddde11eee
            e1e11ed1de11ded11ed1de11e1e
            eee111e1de11ded11ed1e111eee
            e1e11bddde1deeed1edddb11e1e
            eee1beeee11deced11eeeeb1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1e1deeecbdddbceeed1e1e1e
            e1e1e1deeecbdddbceeed1e1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1beeee11deced11eeeeb1eee
            e1e11bddde1deeed1edddb11e1e
            eee111e1de11ded11ed1e111eee
            e1e11ed1de11ded11ed1de11e1e
            eee11eddde11ded11eddde11eee
            e1e111eee111ece111eee111e1e
            eee11111111ecbce11111111eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e111ecb1ebd1dbe1bce111e1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1eeecb1111111111111bceee1e
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
        if (first) {
            hidden_dealer_card.setPosition(180, 27)
            hidden_dealer_card.setVelocity(-2000, 0)
            pause(200)
            hidden_dealer_card.setVelocity(0, 0)
            hidden_dealer_card.setPosition(80, 27)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    start_game()
})
function draw_cards () {
    while (game.ask("Draw Card?")) {
        create_card(2 + draws)
        player_sum += card_number
        draws += 1
        if (card_number == 11 && player_sum > 21) {
            player_sum += -10
        }
        if (player_sum > 21) {
            game.splash("BUST!")
            game.gameOver(false)
        } else if (player_sum == 21) {
            break;
        }
        pause(100)
    }
}
function create_card (num2: number) {
    card_number = card_number_list[randint(0, 12)]
    if (card_number == 11) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111111eeeee11111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e11111eeeee1eeeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e1111eeee11111eeee1111e1e
            e1e1111eeee11111eeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eee1111111eee1111e1e
            e1e1111eee1111111eee1111e1e
            e1e1111eee1111111eee1111e1e
            e1e1111eee1111111eee1111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 2) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111111eeeeeee111111e1e
            e1e1111111eeeeeeee111111e1e
            e1e111111eeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeee1eeeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111111111eeeee11111e1e
            e1e1111111111eeeee111111e1e
            e1e111111111eeeeee111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111eeeeeee11111111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e111111eeeeeeeeee11111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 3) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111eeeeeeeee1111111e1e
            e1e1111eeeeeeeeeeee11111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111111eeeeeeeeee1111e1e
            e1e1111111111eeeeeee1111e1e
            e1e111111111eeeeeeee1111e1e
            e1e111111111eeeeeee11111e1e
            e1e111111111eeeeeee11111e1e
            e1e11111111111eeeeee1111e1e
            e1e11111eeee1eeeeeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eeeeeeeeeeee11111e1e
            e1e11111eeeeeeeeee111111e1e
            e1e111111eeeeeeee1111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 4) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111eee111eee111111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e111111eeeeeeeeee11111e1e
            e1e111111111111eeee11111e1e
            e1e111111111111eeee11111e1e
            e1e111111111111eeee11111e1e
            e1e111111111111eeee11111e1e
            e1e1111111111111ee111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 5) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeeee1111e1e
            e1e11111eeeeeeeeeeee1111e1e
            e1e11111eeeeeeeeeeee1111e1e
            e1e11111eeeeee1111111111e1e
            e1e11111eeeeee1111111111e1e
            e1e11111eeeeeeeeee111111e1e
            e1e111111eeeeeeeeee11111e1e
            e1e1111111eeeeeeeeee1111e1e
            e1e11111111eeeeeeeee1111e1e
            e1e111111111eeeeeeee1111e1e
            e1e11111eeeeeeeeeeee1111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e111111eeeeeeeee111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 6) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111eeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeee1111eee11111e1e
            e1e11111eeee111111111111e1e
            e1e11111eeee111111111111e1e
            e1e11111eeee111111111111e1e
            e1e11111eeeeeeeeee111111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e111111eeeeeeeee111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 7) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111eeeeeeeeee11111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e1111eeeeeeeeeeeee1111e1e
            e1e11111eeeeeeeeeeee1111e1e
            e1e111111111111eeeee1111e1e
            e1e11111111111eeeeee1111e1e
            e1e1111111111eeeeee11111e1e
            e1e1111111111eeeeee11111e1e
            e1e111111111eeeeee111111e1e
            e1e11111111eeeeee1111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111eeeeeee11111111e1e
            e1e111111eeeeee111111111e1e
            e1e11111eeeeee1111111111e1e
            e1e11111eeeee11111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 8) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e111111eeee11eee111111e1e
            e1e111111eee111eee111111e1e
            e1e111111eee11eeee111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeee1eeeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeeee1eeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e111111eeeeeeeee111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 9) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeee111eeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e111111eeeeeeeeee11111e1e
            e1e111111111111eeee11111e1e
            e1e111111111111eeee11111e1e
            e1e111111111111eeee11111e1e
            e1e11111eee1111eeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeeee11111e1e
            e1e11111eeeeeeeeee111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 10) {
        _10_j_q_k = randint(0, 3)
        if (_10_j_q_k == 0) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111ee11111eeee11111e1e
                e1e1111eeee111eeeeee1111e1e
                e1e1111eeee11eeeeeeee111e1e
                e1e1111eeee11eeeeeeee111e1e
                e1e1111eeee11eee11eee111e1e
                e1e1111eeee11eee11eee111e1e
                e1e1111eeee11eee11eee111e1e
                e1e1111eeee11eee11eee111e1e
                e1e1111eeee11eee11eee111e1e
                e1e1111eeee11eee11eee111e1e
                e1e1111eeee11eeeeeeee111e1e
                e1e1111eeee11eeeeeeee111e1e
                e1e1111eeee111eeeeee1111e1e
                e1e11111ee11111eeee11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (_10_j_q_k == 1) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111111111eeee111111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e11111111111eeeee11111e1e
                e1e1111eee1111eeeee11111e1e
                e1e111eeee111eeeeee11111e1e
                e1e111eeeee11eeeeee11111e1e
                e1e111eeeeeeeeeeeee11111e1e
                e1e1111eeeeeeeeeee111111e1e
                e1e1111eeeeeeeeeee111111e1e
                e1e11111eeeeeeeee1111111e1e
                e1e1111111eeeeee11111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (_10_j_q_k == 2) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111eeeeeee11111111e1e
                e1e11111eeeeeeeee1111111e1e
                e1e1111eeeeeeeeeee111111e1e
                e1e111eeeeeeeeeeeee11111e1e
                e1e111eeeeee1eeeeee11111e1e
                e1e111eeeee111eeeee11111e1e
                e1e111eeeee111eeeee11111e1e
                e1e111eeeee111eeeee11111e1e
                e1e111eeeeee1eeeeee11111e1e
                e1e111eeeeeeeeeeeee11111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e11111eeeeeeeeeeee1111e1e
                e1e111111eeeeeeeeeeee111e1e
                e1e1111111111111eeeee111e1e
                e1e111111111111111eee111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (_10_j_q_k == 3) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111eee111111eee1111e1e
                e1e1111eeeee1111eeeee111e1e
                e1e1111eeeee11eeeeeee111e1e
                e1e1111eeeee1eeeeeeee111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111eeeeeeeeeeee11111e1e
                e1e1111eeeeeeeeeee111111e1e
                e1e1111eeeeeeeeee1111111e1e
                e1e1111eeeeeeeee11111111e1e
                e1e1111eeeeeeee111111111e1e
                e1e1111eeeeeeee111111111e1e
                e1e1111eeeeeeeee11111111e1e
                e1e1111eeeeeeeeee1111111e1e
                e1e1111eeeeeeeeeeee11111e1e
                e1e1111eeeeeeeeeeee11111e1e
                e1e1111eeeee1eeeeeee1111e1e
                e1e1111eeeee11eeeeee1111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        }
    }
    player_card.setPosition(180, 92)
    player_card.setVelocity(-2000 + 20 * num2, 0)
    pause(200)
    player_card.setVelocity(0, 0)
    player_card.setPosition(80 + 20 * num2, 92)
}
function dealer_draw_cards () {
    while (true) {
        if (dealer_sum < player_sum || dealer_sum == player_sum && dealer_sum < 14) {
            create_dealer_card(false, 2 + dealer_draws)
        }
        dealer_sum += card_number
        dealer_draws += 1
        if (card_number == 11 && dealer_sum > 21) {
            dealer_sum += -10
        }
        if (dealer_sum > 21) {
            game.splash("DEALER BUST!")
            game.gameOver(true)
        } else if (dealer_sum == 21) {
            break;
        }
        pause(100)
    }
}
function start_game () {
    if (can_start_game) {
        can_start_game = false
        create_card(0)
        player_sum = card_number
        create_card(1)
        player_sum += card_number
        create_dealer_card(true, 0)
        dealer_sum = card_number
        create_dealer_card(false, 1)
        dealer_sum += card_number
        if (player_sum == 21) {
            game.splash("BLACKJACK!")
        } else {
            draws = 0
            draw_cards()
        }
        animation.runImageAnimation(
        hidden_dealer_card,
        [img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            e1eeecb1111111111111bceee1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1e111ecb1ebd1dbe1bce111e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee11111111ecbce11111111eee
            e1e111eee111ece111eee111e1e
            eee11eddde11ded11eddde11eee
            e1e11ed1de11ded11ed1de11e1e
            eee111e1de11ded11ed1e111eee
            e1e11bddde1deeed1edddb11e1e
            eee1beeee11deced11eeeeb1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1e1deeecbdddbceeed1e1e1e
            e1e1e1deeecbdddbceeed1e1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1beeee11deced11eeeeb1eee
            e1e11bddde1deeed1edddb11e1e
            eee111e1de11ded11ed1e111eee
            e1e11ed1de11ded11ed1de11e1e
            eee11eddde11ded11eddde11eee
            e1e111eee111ece111eee111e1e
            eee11111111ecbce11111111eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e111ecb1ebd1dbe1bce111e1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1eeecb1111111111111bceee1e
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `,img`
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            `],
        500,
        false
        )
        if (dealer_sum == 21) {
            game.splash("DEALER BLACKJACK!")
            game.gameOver(false)
        } else {
            dealer_draws = 0
            dealer_draw_cards()
        }
        if (dealer_sum == player_sum) {
            game.splash("Tie...")
            game.reset()
        } else if (dealer_sum > player_sum) {
            game.gameOver(false)
        } else if (dealer_sum < player_sum) {
            game.gameOver(true)
        }
    }
}
let dealer_draws = 0
let dealer_sum = 0
let player_card: Sprite = null
let player_sum = 0
let draws = 0
let hidden_dealer_card: Sprite = null
let _10_j_q_k = 0
let dealer_card: Sprite = null
let card_number = 0
let can_start_game = false
let card_number_list: number[] = []
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777555555555555555557777777777777777777777777777777777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555557777777777777777777777777777777777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555557777777777777777777777777777777777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555557777777777777777777777777777777777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555557777777777777777777777777777777777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555557777777777777777777777777777777777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555557777777777777777777777777777777777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555557777777775555555555555555555557777777775555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555555777777757777777777777777777775777777755555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777555555555555555555777777577777777777777777777777577777755555555555555555577777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777755555555555555555577775777777777777777777777777757777555555555555555555777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777755555555555555555577775777777777777777777777777757777555555555555555555777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777755555555555555555557775777777777777777777777777757775555555555555555555777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777755555555555555555557775777777777777777777777777757775555555555555555555777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777775555555555555555555775777777777777777777777777757755555555555555555557777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777775555555555555555555575777777777777777777777777757555555555555555555557777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777555555555555555555555777777777777777777777777755555555555555555555577777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777555555555555555555555777777777777777777777777755555555555555555555577777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777755555555555555555555777777777777777777777777755555555555555555555777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777755555555555555555555777777777777777777777777755555555555555555555777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777775555555555555555555777777777777777777777777755555555555555555557777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777775555555555555555555777777777777777777777777755555555555555555557777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777555555555555555555777777777777777777777777755555555555555555577777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777755555555555555555777777777777777777777777755555555555555555777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777775555555555555555777777777777777777777777755555555555555557777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777775555555555555555777777777777777777777777755555555555555557777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777555555555555555777777777777777777777777755555555555555577777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777755555555555555777777777777777777777777755555555555555777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777775555555555555777777777777777777777777755555555555557777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777555555555555777777777777777777777777755555555555577777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777775555555555777777777777777777777777755555555557777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777555555555777777777777777777777777755555555577777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777755555555777777777777777777777777755555555777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777555555777777777777777777777777755555577777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777775555777777777777777777777777755557777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777755777777777777777777777777755777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777577777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777757777777777777777777775777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777775555555555555555555557777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777775555555555555555555557777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777757777777777777777777775777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777577777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777775777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777577777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777757777777777777777777775777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777775555555555555555555557777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
card_number_list = [
11,
2,
3,
4,
5,
6,
7,
8,
9,
10,
10,
10,
10
]
game.splash("Press A to play")
can_start_game = true
