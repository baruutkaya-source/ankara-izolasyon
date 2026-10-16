# Ankara İzolasyon — ankara-izolasyon.com

Ankara’da su yalıtımı ve izolasyon hizmetleri için saf statik HTML/CSS/JS sitesi. Cloudflare Pages + GitHub ile derleme adımı olmadan yayınlanacak şekilde tasarlanmıştır.

**Telefon:** 0533 680 7720 (`tel:+905336807720`)

## Yerel çalıştırma

Depo kökü site köküdür (`index.html` kökte).

```bash
# Python ile (örnek port)
python3 -m http.server 43127 --bind 127.0.0.1

# veya
npx --yes serve -l 43127 .
```

Tarayıcıda: [http://127.0.0.1:43127](http://127.0.0.1:43127)

## Cloudflare Pages (GitHub)

1. Bu depoyu GitHub’a bağlayın.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → GitHub deposunu seçin.
3. Build ayarları:
   - **Framework preset:** None
   - **Build command:** (boş bırakın)
   - **Build output directory:** `/` (veya `.`)
4. Kaydedip deploy edin. Özel alan adı olarak `ankara-izolasyon.com` ekleyebilirsiniz.

`sitemap.xml` ve `robots.txt` kökte hazırdır.

## Favicon

- `/favicon.ico`
- `/assets/favicon-16x16.png`, `/assets/favicon-32x32.png`
- `/assets/apple-touch-icon.png`

Yeniden üretmek için: `python3 scripts/generate_favicons.py`

## Site yapısı

- Anasayfa + ~1400 kelimelik “Ankara İzolasyon” SEO yazısı
- Kurumsal: Hakkımızda, Neden Biz, Belgeler, SSS
- Hizmetler: temel, bodrum, sığınak, çatı, teras, gizli dere, havuz, asansör boşluğu, otopark, su deposu, enjeksiyon, polyurea, membran
- Projeler, Blog (örnek yazılar), İletişim
- Footer’da ilçe SEO linkleri, anasayfada LocalBusiness JSON-LD

İsteğe bağlı sayfa üretimi: `python3 scripts/generate_site.py` (Cloudflare’de gerekli değildir).
