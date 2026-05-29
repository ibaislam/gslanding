from django.http import JsonResponse


SITE_DATA = {
    "brand": "Go Shushi",
    "displayBrand": "GOSUSHI",
    "phone": "8 747 095 00 07",
    "orderPhone": "8 700 114 00 00",
    "whatsapp": "8 747 095 00 07",
    "whatsappLink": "https://wa.me/77470950007",
    "legalName": "ИП Go Bar",
    "legalAddress": "РК, г. Алматы, мкр-н Аксай 3Б 18/5, индекс А12А2К6",
    "locations": [
        {"name": "Ақсай 3Б, 18/5", "url": "https://go.2gis.com/cyMz3"},
        {"name": "Құлжа 106 — APORT EAST", "url": "https://go.2gis.com/EzMwp"},
    ],
    "sets": [
        {
            "id": "mot",
            "name": "Сет «МОТ»",
            "price": 6090,
            "badge": "30 роллов • 1 пицца • 1 л колы",
            "split": "2 человека — 3045 тг | 3 человека — 2030 тг",
            "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
            "items": [
                "Цезарь — 10 шт",
                "Цезарь запечённая — 10 шт",
                "Каппа маки — 10 шт",
                "Пицца пепперони — 30 см",
                "Кола — 1 л",
            ],
        },
        {
            "id": "galaxy",
            "name": "Сет «ГАЛАКТИКА»",
            "price": 16990,
            "badge": "80 роллов • 2 пиццы 30 см • 2 л колы",
            "split": "",
            "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
            "items": [
                "Филадельфия — 10 шт",
                "Филадельфия гриль — 10 шт",
                "Темпура — 10 шт",
                "Цезарь — 10 шт",
                "Цезарь запечённый — 10 шт",
                "Америка — 10 шт",
                "Каппа маки — 10 шт",
                "Калифорния — 10 шт",
                "Пепперони пицца — 30 см",
                "Куриная пицца — 30 см",
                "Кола — 2 л в подарок",
            ],
        },
        {
            "id": "dara",
            "name": "Сет «ДАРА»",
            "price": 5190,
            "badge": "40 шт суши • 1 пицца • каркаде 1 л в подарок",
            "split": "Акция ограничена",
            "image": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80",
            "items": [
                "Цезарь запечённый — 10 шт",
                "Цезарь ролл — 10 шт",
                "Айсберг ролл с манго-соусом — 10 шт",
                "Жареный ролл «Самбук» с сырным соусом — 10 шт",
                "Пицца «Маргарита» — 30 см",
                "Каркаде — 1 л",
            ],
        },
        {
            "id": "univer",
            "name": "Сет «УНИВЕР»",
            "price": 10700,
            "badge": "Суши мен пиццаның нақты дәмі",
            "split": "Туған күн иелеріне — Цезарь ролл сыйлыққа",
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
            "items": [
                "Филадельфия — 10 шт",
                "Америка — 10 шт",
                "Цезарь ролл — 10 шт",
                "Чикен — 8 шт",
                "Пицца 4 сезона",
                "Каркадэ — тегін сыйлық",
            ],
        },
        {
            "id": "company",
            "name": "Сет «ТАЙНА ТОКИО»",
            "priceLabel": "от 1798 тг/чел",
            "badge": "40 роллов • 8 крылышек • 1 л колы",
            "split": "3 человека — 2397 тг | 4 человека — 1798 тг",
            "image": "https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&w=1200&q=80",
            "items": [
                "Филадельфия — 10 шт",
                "Цезарь ролл — 20 шт",
                "Каппа маки — 10 шт",
                "Крылышки — 8 шт",
                "Кола — 1 л",
            ],
        },
    ],
}


def site_data(_request):
    return JsonResponse(SITE_DATA, json_dumps_params={"ensure_ascii": False})
