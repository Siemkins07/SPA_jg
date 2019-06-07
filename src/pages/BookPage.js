import React from 'react';
import Paragraph from '../components/Paragraph';

const paragraphs = [
    { id: 1, chapter: 1, title: "Dywanowe początki", text: "Brak tradycji motoryzacyjnych w rodzinie nie był powodem moich zmartwień, przynajmniej w tamtym okresie. Z samochodów na ulicy potrafłem rozpoznać dosłownie kilka, z naszym rodzimym Maluchem na czele. Z daleka nie wiedziałem czy to jedzie Polonez czy może Fiat 125, o poprawnym wskazywaniu marki po dźwięku silnika nawet nie wspominając. Właściwie nie było mi to potrzebne do szczęścia, miałem to w... poważaniu i nie narzekałem na braki w swojej wiedzy. Jedną z ulubionych zabaw z dzieciństwa były „wyścigi” resoraków (...). Z perspektywy czasu okazało się, że był to mój pierwszy Test Drive Unlimited, w jakiego miałem okazję grać. Nie potrzebowałem komputera ani nawet klawiatury, których posiadanie wówczas i tak było raczej niemożliwe. Zabawa totalnie unplugged, ale zabawa przednia, ograniczona jedynie moją wyobraźnią, która z dnia na dzień powiększała się chyba o całą galaktykę. Niestety, mój dywan zaprogramowany był tylko na tryb single player. Dało się co prawda zagrać z siostrą w trybie współdzielonego dywanu, ale po pierwsze jej jakoś bliżej było do lalek, a po drugie bardzo nie lubiłem włosów z tej strony dywanu." },
    { id: 2, chapter: 1, title: "Ja kontra świat", text: "Do komputera dorwałem się dosyć późno. Patrząc z perspektywy dzisiejszych dzieciaków, to byłem już stary. Prawdę mówiąc, cieszę się, że pierwsze lata swojego życia spędziłem z dala od komputera, ganiając za piłką, przynosząc do domu pozdzierane łokcie i kolana, a także siniaki w coraz to ciekawszych miejscach. Wcześniej jedyny dostęp do rozrywki komputerowej był dla mnie możliwy przy okazji odwiedzania starszych o kilka lat kuzynów. Rodzice rozmawiali z wujkami, a my łupaliśmy na Commodore 64 w jakieś Olimpiady, co chwilę regulując głowicę wsuwką do włosów należącą do kuzynki (...)" },
    { id: 3, chapter: 1, title: "Król Anton", text: " (...) Wtedy nie wiedziałem, że był w tym zagraniu dodatkowy podtekst i policzek dla mnie, bo w swej dziecinnej ignorancji nie miałem pojęcia kim u licha jest Prost, jaką ma historię i jakie były jego relacje z Senną? Co prawda, sięgałem już sporo ponad stół, na boisku zdążyłem zgubić łańcuszek, który dostałem na Komunię i pierwsze myśli o dziewczynach także miałem już za sobą, ale wybaczcie, tego akurat nie wiedziałem. W gazetach o tym nie pisali, a na pewno nie w tych, które były w domu. TV był bardziej ograniczony od mojego dywanu i serwował tylko dwa kanały, w porywach do trzech. W tym wszystkim było coś dużo gorszego – dzięki kuzynowi dotarło do mnie, że Ayrton Senna nie żyje. Poza dziwnym uczuciem pustki, które niestety towarzyszyło mi jeszcze kilka razy w życiu, dla mnie znaczyło to jedno: (...)" },
    { id: 4, chapter: 1, title: "Infekcja", text: "Zanim zachorowałem na dobre i obdarzyłem grę uczuciem, które zazwyczaj zarezerwowane jest dla pięknych kobiet, zostałem nieodwracalnie zarażony. Miało to miejsce gdzieś w połowie 2007 roku. Mój kuzyn zdążył jużznaleźć wybrankę swojego życia, ale mimo mocno ograniczonego czasu, pozostał oddanym fanem gier komputerowych. Podczas jednej z moich wizyt w ich nowym mieszkaniu, zaprezentował mi produkcję, w którą się wówczas zagrywał – nie było to nic innego jak Test Drive Unlimited. Pierwszy kontakt z tym tytułem był dla mnie tym ciekawszy, gdyż od razu posadził mnie na swoimfotelu przy biurku, do którego była przymocowana kierownica (...)" },
    { id: 5, chapter: 1, title: "YouTube", text: "Przyjazdy do domu ze studiów stały się jeszcze rzadsze, a co dopiero mówić o odwiedzinach u bliższej czy dalszej rodziny. Czas od piątkowego wieczoru do niedzielnych godzin popołudniowych miał tę dziwną cechę, którą porównać można tylko do Usaina Bolta – po prostu zapierdalał. Człowiek ledwo przyjechał, przywitał się, rozpakował, chwilę pobiesiadował i już musiał szukać opcji powrotnej, a nie zawsze był to samochód kolegi. TDU mocno zapadło mi w pamięć, ale czułem się nieszczęśliwy, gdy klikałem prawym przyciskiem myszy na Mój komputer i z menu kontekstowego wybierałem Właściwości, a następnie porównywałem bebechy mojego blaszaka z minimalnymi wymaganiami upragnionej gry. Do celu było dalej niż daleko, ale wiedziałem, że kiedyś ta chwila nadejdzie, a ja dołożę starań, bym nie musiał czekać w nieskończoność (...)" },
]


const BookPage = () => {

    const paragraphList = paragraphs.map(paragraph => (
        <Paragraph key={paragraph.id} {...paragraph} />
    ))

    return (
        <div className="book" >
            {paragraphList}
        </div>
    );
}

export default BookPage;