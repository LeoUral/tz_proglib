import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {

    return (
        <>
            <Container>
                <h1>Добро пожаловать на страницу HOME</h1>

                <h3> Тестовое задание #1</h3>
                <p>
                    Проверяем начальные навыки: react, redux, react-router<br />

                    <br />
                        Задача<br />
                        Реализовать приложение, которое умеет показывать следующие страницы:<br />

                        / - главная<br />
                        /login - страница ввода логина и пароля<br />
                        /news - страница с новостями (любая однотипная информация)<br />
                        /profile - страница с произвольным текстом, недоступная без авторизации<br />
                        На сайте, в шапке или подвале реализовать ссылки:<br />

                        На главную (/)<br />
                        Новости (/news)<br />
                        Профиль (/profile)<br />
                    <br />
                        Если пользователь кликает на страницу “профиля” и он не “авторизован” - перекидывать на страницу /login<br />

                        Форма входа (/login) принимает “фейковые” данные:<br />

                        username: Admin<br />
                        password: 12345<br />
                        Если введены другие данные, то показывается сообщения:<br />

                        Имя пользователя или пароль введены не верно<br />

                        Если введены корректные данные, то перебрасывать на страницу /profile<br />

                        Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.<br />

                        Все необходимое на ваш взгляд, прокинуть через Redux.<br />

                        Оформление (дизайн) — не важно. Сделайте, чтобы можно было комфортно смотреть пример в браузере.<br />
                    <br />
                        Условия<br />
                        Код оформить на GitHub с толковым Readme.md (описанием), ссылку прислать на почту maxpfrontend@gmail.com, в письме укажите ваш опыт работы с данными технологиями.<br />

                        В дальнейшем задание будет усложнено, поэтому не удаляйте свой репозиторий.<br />

                        P.S. задавайте вопросы в комментариях, либо отвечайте на вопросы коллег.<br />

                        Если у вас не получается сделать часть задания, то присылайте решение все равно, указывая что именно не вышло и почему.<br />
                </p>
            </Container>
        </>
    );
}