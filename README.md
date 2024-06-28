This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Proje Adı: Custom Package Selections

Projenin amacı https://beije.co internet sitesinde bulunan https://beije.co/custom-packet kişiye özel paket sayfasının bir kopyasını oluşturmak.

Proje kapsamında ilk önce Next.js ile yeni bir proje oluşturuldu. Projede gerekli olabilecek dosyaları içeren bir components dosyası oluşturuldu ve içerisinde Product.jsx, packageList.jsx ve Layout.js bileşenleri oluşturuldu. Projenin kopyası taslak olarak oluşturuldu.

Ürünler, Biz Kimiz?, Bağış Kültürü, Regl Testi!, Kendi Paketini Oluştur menülerini içeren ayrı bir Header.jsx dosyası, footer kısmını içeren Footer.jsx dosyaları eklendi.

Daha sonra beije Ped, beije Günlük Ped ve beije Tampon ürünleri için üç buton oluşturuldu ve alt seçenekleri eklendi. Seçilen ürünün tespiti için projeye useState import edildi ve const [selectedProduct, setSelectedProduct] = useState(null) değişkeni tanımlandı. Üç ürün butonunun işlevselliği için handleProductClick fonksiyonu oluşturuldu. selectedProduct değişkeninin değeri ürünün adıdır ve bu değer ürünün adı olduğu için selectedProduct değişkeninin değeri değiştiğinde ürünün adı değişecektir. Bu fonksiyonda productName parametresi kullanıcı tarafıdan tıklanan ürünün adını temsil etmektedir. Bu fonksiyon ilgili buton içerisinde onClick={() => handleProductClick('beije Ped')} şeklinde kullanılmıştır. Böylece fonksiyon butonun onClick özelliği içinde çağırılır ve hangi ürünün seçildiği anlık olarak güncellenir.

packageInputs değişkeni, kullanıcının ürün paketlerine ilişkin girişlerini (inputs) tutan bir objedir. Projede kullanılan slider bileşenleriyle ilişkilendirilen her bir ürün paketi için kullanıcının girdiği değerler bu objede saklanır. Kullanıcı bir ürün paketinin miktarını seçmek için bir slider'ı hareket ettirdiğinde bu değer packageInputs objesine kaydedilecektir.

handleSliderChange fonksiyonu bir slider bileşeninin değeri değiştiğinde çalışacak olan bir olay işleyicisidir. Bu fonksiyon iki parametre alır: title ve event.
title: Slider bileşeninin hangi ürün paketi için olduğunu belirten "Standart Ped", "Süper Ped" gibi bir dizedir.
event: Slider bileşeninin tetiklediği olay nesnesidir. Bu nesne genellikle event.target.value aracılığıyla sürgüdeki yeni değeri içerir.
Önceki packageInputs durumunu (...packageInputs) koruyarak belirtilen title anahtarına sahip değeri güncelleyen yeni bir obje oluşturuldu.
Yani, handleSliderChange fonksiyonu, her slider değeri değiştiğinde, ilgili ürün paketi (title) için yeni değeri (event.target.value) içeren packageInputs state'ini güncelleyecektir.

Daha sonra bu ürün butonlarına selectedProduct === 'beije Ped' koşulu doğruysa (yani beije Ped seçilmişse) ilgili butonun altı çizili ve bold olması için active sınıfı da eklenmiştir.

<PackageList title="Standart Ped" />: title prop'u ile 'Standart Ped' olarak belirlenmiştir. Bu bileşen 'Standart Ped' ürünü için paket seçeneklerini listelemektedir.

Daha sonra kullanıcı seçimlerini saklamak için projeye useContext dahil edilmiştir. Bu kapsamda projeye ProductContext.js dosyası eklenmiştir. ProductProvider, içindeki value prop'uyla context'in değerlerini tüm alt bileşenlere iletecektir. Bu sayede selectedProduct, packageInputs, handleProductClick, handleSliderChange gibi değerlere ve fonksiyonlara herhangi bir alt bileşen useContext(ProductContext) hook'u ile erişebilir.

Daha sonrasında sepet ekle ve kaldır butonlarına işlevsellik ekleme amacıyla { addToCart, removeFromCart } fonksiyonları tanımlanmıştır.

Sayfa ilk yüklendiğinde handleProductClick('beije Ped') fonksiyonunu çalıştırmak için projede useEffect() kullanılmıştır.

Seçilen ürünlere göre paket içeriğinin toplam fiyatını hesaplamak için calculateTotalPrice() fonksiyonu oluşturulmuştur. Seçilen ürünlerin adını temsil etmesi için Object.keys(packageInputs) kullanılmıştır. packageInputs objesinin anahtarlarını (keys) almaktadır.

map((key) => ({ ... })): ile her key için bir obje oluşturulur. Bu objeler, ürünün adı (title), miktarı (quantity) ve toplam fiyatı (price) içerir.

const Total değişkeninde kullanılan reduce((sum, item) => sum + item.price, 0) yardımcı fonksiyonu ile itemsToAdd dizisinde seçilen her ögenin fiyatı toplanır.setTotalPrice(total): total değerini totalPrice state'ine atanır. Bu sayede, toplam fiyat güncellenmiş olur ve arayüzde gösterilebilir. Ayrıca istenildiği gibi totalPrice fonksiyonu 'sepete ekle' butonunda kullanılmış ve butona eklenen veriler buton üzerinde de görüntülenmektedir.

Son olarak da sayfasının responsive olması için css düzenlemeleri yapılmıştır.
