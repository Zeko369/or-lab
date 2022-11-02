--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Product; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    name text NOT NULL,
    brand text NOT NULL,
    "shortDescription" text NOT NULL,
    description text NOT NULL,
    images text[],
    price integer NOT NULL,
    discount integer NOT NULL,
    rating integer NOT NULL,
    stock integer NOT NULL,
    "storeId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Product" OWNER TO dev;

--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Product_id_seq" OWNER TO dev;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: Store; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public."Store" (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    image text NOT NULL,
    address text NOT NULL,
    owner text NOT NULL,
    "phoneNumber" text NOT NULL,
    "opensAt" integer NOT NULL,
    "closesAt" integer NOT NULL,
    rating double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Store" OWNER TO dev;

--
-- Name: Store_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."Store_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Store_id_seq" OWNER TO dev;

--
-- Name: Store_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."Store_id_seq" OWNED BY public."Store".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO dev;

--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Name: Store id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."Store" ALTER COLUMN id SET DEFAULT nextval('public."Store_id_seq"'::regclass);


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public."Product" (id, name, brand, "shortDescription", description, images, price, discount, rating, stock, "storeId", "createdAt", "updatedAt") FROM stdin;
1	Bespoke Metal Shirt	Haley, Kohler and Terry	Unde accusantium aliquid.	Blanditiis quo quis qui possimus voluptates pariatur enim. Tenetur eos cupiditate vitae labore. Soluta omnis beatae est aut voluptatibus asperiores reprehenderit eligendi odit.	{https://picsum.photos/seed/systemic/800/800,https://picsum.photos/seed/Hybrid/800/800,https://picsum.photos/seed/and/800/800,https://picsum.photos/seed/wireless/800/800,https://picsum.photos/seed/Peso/800/800}	48	0	3	15	1	2022-11-02 07:08:16.19	2022-11-02 07:08:16.19
2	Incredible Steel Cheese	Rogahn Group	Suscipit nemo optio adipisci.	Ullam fugit quidem. Delectus eum neque. Minima excepturi quae beatae animi deserunt exercitationem. Id vitae sapiente quasi est itaque similique harum officia. Facilis ut aut.	{https://picsum.photos/seed/Conroe/800/800,https://picsum.photos/seed/perform/800/800,https://picsum.photos/seed/Funk/800/800,https://picsum.photos/seed/Avon/800/800,https://picsum.photos/seed/green/800/800}	36	0	0	56	1	2022-11-02 07:08:16.19	2022-11-02 07:08:16.19
3	Handmade Soft Shoes	Miller Group	Ipsum autem accusamus ad amet.	Quidem quidem voluptate debitis odit eos quas molestiae ipsum. Totam fugiat voluptas. Iusto consectetur cumque sed odio sapiente natus.	{https://picsum.photos/seed/hacking/800/800,https://picsum.photos/seed/whereas/800/800,https://picsum.photos/seed/inventory/800/800,https://picsum.photos/seed/red/800/800,https://picsum.photos/seed/Hermaphrodite/800/800}	32	0	0	43	1	2022-11-02 07:08:16.19	2022-11-02 07:08:16.19
4	Handcrafted Plastic Chair	Ferry LLC	Deleniti quod voluptate culpa iure ea sapiente.	Iusto provident ad doloribus. Ad dignissimos magni at ad doloribus reiciendis. Officia nobis distinctio vel reprehenderit iste dignissimos aut sit modi. Ea qui minus iure dicta provident culpa.	{https://picsum.photos/seed/female/800/800,https://picsum.photos/seed/Bronze/800/800,https://picsum.photos/seed/yippee/800/800,https://picsum.photos/seed/Coupe/800/800,https://picsum.photos/seed/Cambridgeshire/800/800}	16	0	6	37	1	2022-11-02 07:08:16.19	2022-11-02 07:08:16.19
5	Luxurious Bronze Mouse	Klocko Group	Delectus magni nihil quisquam unde placeat nostrum occaecati tempora.	Velit illum quasi iste ipsam deserunt delectus atque. Culpa vel minus. Sapiente dolor perferendis molestiae eveniet nihil et. Assumenda consectetur porro.	{https://picsum.photos/seed/Borders/800/800,https://picsum.photos/seed/scared/800/800,https://picsum.photos/seed/female/800/800,https://picsum.photos/seed/deposit/800/800,https://picsum.photos/seed/Recumbent/800/800}	66	0	0	16	1	2022-11-02 07:08:16.19	2022-11-02 07:08:16.19
6	Ergonomic Metal Sausages	Gottlieb - Gorczany	Nobis esse hic dignissimos iure exercitationem.	Quaerat debitis iure ullam sequi consectetur vel vel perspiciatis. Ex iusto fuga officiis velit sunt architecto enim dicta. Praesentium vel adipisci exercitationem architecto. Accusamus nihil asperiores dolorum saepe. Provident ipsam fuga magni enim distinctio neque aspernatur.	{https://picsum.photos/seed/yesterday/800/800,https://picsum.photos/seed/Molybdenum/800/800,https://picsum.photos/seed/violet/800/800,https://picsum.photos/seed/friendly/800/800,https://picsum.photos/seed/1080p/800/800}	74	0	3	68	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
7	Sleek Soft Salad	Pagac - Hills	Animi deserunt perspiciatis placeat nesciunt quos.	Beatae odio corporis aliquam ex eum sed atque possimus quia. Exercitationem doloribus consectetur accusamus quae natus. Quidem consequuntur ratione. Odio animi a quas eius autem adipisci quia sint molestiae.	{https://picsum.photos/seed/killer/800/800,https://picsum.photos/seed/Cheese/800/800,https://picsum.photos/seed/Gasoline/800/800,https://picsum.photos/seed/bypassing/800/800,https://picsum.photos/seed/firewall/800/800}	70	0	0	9	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
8	Refined Wooden Shoes	Jerde and Sons	Nisi cumque nihil animi quae rem error porro.	Voluptatum quasi in fugit. Libero fugiat ab eveniet. Eum quaerat quis libero sed. At non unde.	{https://picsum.photos/seed/Legacy/800/800,https://picsum.photos/seed/scientific/800/800,https://picsum.photos/seed/copy/800/800,https://picsum.photos/seed/parse/800/800,https://picsum.photos/seed/Unbranded/800/800}	18	0	3	71	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
9	Fantastic Concrete Chicken	Berge Inc	Exercitationem sed eum unde reprehenderit occaecati quibusdam in maxime.	Eligendi aspernatur consectetur modi. Asperiores commodi aliquid officiis fugiat tempora. Commodi culpa officia autem cum.	{https://picsum.photos/seed/bus/800/800,https://picsum.photos/seed/ribbon/800/800,https://picsum.photos/seed/Rustic/800/800,https://picsum.photos/seed/Bedfordshire/800/800,https://picsum.photos/seed/bluetooth/800/800}	30	50	6	20	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
10	Oriental Rubber Bike	Kuhn and Sons	Unde quasi perspiciatis facilis ipsa culpa.	Quaerat magnam quo. Hic iure placeat commodi. Voluptatibus atque omnis aperiam magnam sunt occaecati eius itaque. Aut recusandae facere sequi nam sint iure necessitatibus atque. Quo non minus magnam nisi possimus. Provident enim nesciunt nemo accusantium iste.	{https://picsum.photos/seed/Manager/800/800,https://picsum.photos/seed/candela/800/800,https://picsum.photos/seed/katal/800/800,https://picsum.photos/seed/white/800/800,https://picsum.photos/seed/microchip/800/800}	88	0	3	1	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
11	Sleek Fresh Chips	Rice Inc	Nobis modi in quod blanditiis magnam impedit laudantium laboriosam.	Tempore dicta minus veniam enim. Laborum quibusdam sint. Veniam iste aliquam. Dolores labore a. Autem totam alias nisi. Veritatis minima eos dolore aspernatur minus numquam autem at sit.	{https://picsum.photos/seed/glorious/800/800,https://picsum.photos/seed/SSD/800/800,https://picsum.photos/seed/Organized/800/800,https://picsum.photos/seed/Fermium/800/800,https://picsum.photos/seed/Global/800/800}	0	38	3	38	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
12	Rustic Concrete Towels	Kunde - Pollich	Nemo praesentium nisi minus quos hic.	Mollitia rem quam id. Est dicta culpa consequuntur cum. Accusantium consequatur dolore. Esse iusto voluptate adipisci quis distinctio tenetur ea est eligendi.	{https://picsum.photos/seed/before/800/800,https://picsum.photos/seed/gray/800/800,https://picsum.photos/seed/Bicycle/800/800,https://picsum.photos/seed/hmph/800/800,https://picsum.photos/seed/copying/800/800}	54	0	6	89	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
13	Recycled Bronze Chair	Nolan Inc	Sunt dolorem doloremque ducimus facilis esse cum fuga itaque.	Officia odit reprehenderit facere praesentium debitis ducimus voluptatibus. Fuga quasi ad illo libero consequatur perspiciatis. Illum nesciunt dolorum veniam magnam enim voluptates labore incidunt laboriosam. Nam ullam sint unde ipsum voluptate minus. Dolorem repellendus tenetur deleniti. Quo adipisci nihil enim alias.	{https://picsum.photos/seed/Bermuda/800/800,https://picsum.photos/seed/male/800/800,https://picsum.photos/seed/azure/800/800,https://picsum.photos/seed/Idaho/800/800,https://picsum.photos/seed/Northwest/800/800}	16	16	0	41	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
14	Awesome Bronze Sausages	Treutel - Schulist	Architecto maiores modi.	Occaecati inventore corrupti minima architecto ipsa labore. Est dolor corporis ducimus consectetur rem incidunt aperiam natus. Perferendis delectus voluptates natus a. Sint repudiandae aut incidunt eveniet. Modi aperiam magnam repellendus provident eius natus reiciendis vitae. Amet provident deleniti veritatis dolore corrupti accusantium quod.	{https://picsum.photos/seed/Investment/800/800,https://picsum.photos/seed/payment/800/800,https://picsum.photos/seed/Gasoline/800/800,https://picsum.photos/seed/connect/800/800,https://picsum.photos/seed/hybrid/800/800}	82	0	6	80	2	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
15	Bespoke Rubber Shirt	Walter - Kulas	Maxime quod doloribus vitae totam incidunt.	Dolore accusantium doloremque eum. Ea aliquam fuga. Et qui nihil odit itaque quo cumque quo.	{https://picsum.photos/seed/Usability/800/800,https://picsum.photos/seed/Kautzer/800/800,https://picsum.photos/seed/secondary/800/800,https://picsum.photos/seed/ick/800/800,https://picsum.photos/seed/copy/800/800}	22	0	3	53	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
16	Refined Concrete Car	Kuhic, Okuneva and King	Et dolores inventore sed odit.	Delectus cum perferendis aperiam hic explicabo quam nam voluptas. Fugiat possimus eum provident optio. Earum nam maxime mollitia itaque aliquid aperiam optio deserunt omnis.	{https://picsum.photos/seed/Southeast/800/800,https://picsum.photos/seed/North/800/800,https://picsum.photos/seed/cavernous/800/800,https://picsum.photos/seed/vainly/800/800,https://picsum.photos/seed/unleash/800/800}	18	8	0	57	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
17	Practical Frozen Cheese	Romaguera LLC	Officiis maiores quis cum nihil nisi atque ducimus amet.	Modi maxime quibusdam accusamus voluptate explicabo asperiores fugiat veniam quibusdam. Ducimus ratione totam sunt dolor molestias quae consectetur cum. Esse alias fugit accusantium. Labore sit possimus. Reprehenderit dolore eveniet reprehenderit incidunt fugit. Aliquam eligendi cum doloribus occaecati neque.	{https://picsum.photos/seed/background/800/800,https://picsum.photos/seed/scarily/800/800,https://picsum.photos/seed/Uganda/800/800,https://picsum.photos/seed/Vermont/800/800,https://picsum.photos/seed/a/800/800}	42	60	3	76	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
18	Unbranded Rubber Sausages	Koss Group	Consequatur ipsum illum possimus.	Vitae consequuntur consequatur dolorem. Eum eum at. Voluptatibus provident neque iste similique occaecati aperiam provident animi. Suscipit odio sunt qui natus et.	{https://picsum.photos/seed/alarm/800/800,https://picsum.photos/seed/reinvent/800/800,https://picsum.photos/seed/Program/800/800,https://picsum.photos/seed/invoice/800/800,https://picsum.photos/seed/Chief/800/800}	50	0	0	46	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
19	Bespoke Fresh Mouse	Goyette - Fritsch	Assumenda placeat sint hic ipsam consequatur nemo architecto provident.	Natus adipisci iusto esse quia dolores. Nisi alias facere necessitatibus similique. Exercitationem cum saepe amet. Ea distinctio quo quae architecto mollitia. Vero libero consectetur reprehenderit nisi illo ea vitae. Quaerat dolore animi soluta cupiditate temporibus culpa vitae in.	{https://picsum.photos/seed/distributed/800/800,https://picsum.photos/seed/Rock/800/800,https://picsum.photos/seed/Pickup/800/800,https://picsum.photos/seed/male/800/800,https://picsum.photos/seed/calculating/800/800}	36	0	6	34	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
20	Ergonomic Cotton Ball	Oberbrunner LLC	Tenetur aperiam voluptate totam laudantium quam.	Magni nesciunt voluptatum. Quibusdam veniam minima adipisci ex repudiandae accusantium a. Facilis iusto quasi. Dolor quis doloremque tenetur et error alias laborum repudiandae laudantium.	{https://picsum.photos/seed/invoice/800/800,https://picsum.photos/seed/Steel/800/800,https://picsum.photos/seed/Porsche/800/800,https://picsum.photos/seed/Northwest/800/800,https://picsum.photos/seed/Tennessee/800/800}	66	0	6	5	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
21	Luxurious Cotton Chair	Steuber Inc	Nostrum dolores porro recusandae cupiditate nihil quod a expedita perspiciatis.	Explicabo ea autem distinctio. Blanditiis asperiores omnis ducimus. Dolor perferendis odio eum delectus dolorum sint enim ipsam doloremque. Dolorem beatae laboriosam voluptatibus modi deserunt tenetur. Mollitia harum cupiditate animi tempora assumenda exercitationem.	{https://picsum.photos/seed/itch/800/800,https://picsum.photos/seed/South/800/800,https://picsum.photos/seed/West/800/800,https://picsum.photos/seed/maroon/800/800,https://picsum.photos/seed/Elegant/800/800}	80	0	0	64	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
22	Elegant Frozen Cheese	Schuster, Schinner and Feeney	Quibusdam sunt eum quasi modi.	Odio debitis dolorum. Nemo unde ducimus. Distinctio facilis porro eos doloremque accusantium illo possimus dolores suscipit. Autem fuga exercitationem consectetur dolorem.	{https://picsum.photos/seed/concrete/800/800,https://picsum.photos/seed/Electric/800/800,https://picsum.photos/seed/Implementation/800/800,https://picsum.photos/seed/quantifying/800/800,https://picsum.photos/seed/siemens/800/800}	68	0	0	40	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
23	Sleek Plastic Bacon	Reichert, Klocko and Boyle	Iste impedit vero odio deleniti adipisci sed.	Neque tenetur adipisci voluptatibus repellendus maiores autem inventore ipsam veniam. Itaque sequi ab tempora eum odit ducimus suscipit. Recusandae veniam recusandae at neque et. Numquam quo nemo perferendis animi quae ea tempore.	{https://picsum.photos/seed/National/800/800,https://picsum.photos/seed/firewall/800/800,https://picsum.photos/seed/Gasoline/800/800,https://picsum.photos/seed/Executive/800/800,https://picsum.photos/seed/Product/800/800}	52	18	0	47	3	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
24	Rustic Rubber Chair	Roberts, Dooley and Little	Vitae sint saepe.	A totam quas consequuntur fuga quaerat porro doloribus pariatur error. Nemo corporis reiciendis voluptates deserunt nesciunt sed unde distinctio. Blanditiis dolore nobis expedita nobis. Deserunt iusto atque ratione rem sit optio expedita. Quia ab quas dicta aliquid commodi quis amet saepe. Officiis iste eaque vero repellat iusto debitis.	{https://picsum.photos/seed/Plastic/800/800,https://picsum.photos/seed/Avon/800/800,https://picsum.photos/seed/vainly/800/800,https://picsum.photos/seed/female/800/800,https://picsum.photos/seed/Shoes/800/800}	74	0	0	57	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
25	Gorgeous Fresh Salad	Langworth - Kling	Omnis placeat a in excepturi.	Ex laudantium saepe alias deleniti. Vero architecto laudantium odit commodi omnis similique voluptates. Temporibus quos optio impedit dolor. Eveniet aperiam sint unde repellat. Saepe ea eum ex. Libero ipsum adipisci ratione incidunt doloremque expedita illo tempore voluptate.	{https://picsum.photos/seed/Legacy/800/800,https://picsum.photos/seed/Rustic/800/800,https://picsum.photos/seed/Hybrid/800/800,https://picsum.photos/seed/yahoo/800/800,https://picsum.photos/seed/whether/800/800}	6	0	6	42	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
26	Elegant Concrete Salad	Kerluke - Ernser	Quidem repellat similique.	Odio quia suscipit. Eius hic sint praesentium dolores voluptas. Consequuntur doloremque beatae tenetur odio magni at quo quam quia. Eius veniam dolorum animi aliquam molestias. Aut ad qui provident nisi illum aperiam ullam repellat.	{https://picsum.photos/seed/alarm/800/800,https://picsum.photos/seed/Hat/800/800,https://picsum.photos/seed/capacity/800/800,https://picsum.photos/seed/necessitatibus/800/800,https://picsum.photos/seed/Fantastic/800/800}	28	0	3	79	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
27	Practical Fresh Pants	Conn - Wyman	Quis earum hic minima itaque excepturi.	Non consequatur maxime. Eligendi sunt aperiam fugit asperiores a nostrum. In incidunt veniam doloribus tenetur. Illo debitis ipsum alias laboriosam rerum.	{https://picsum.photos/seed/indeed/800/800,https://picsum.photos/seed/weber/800/800,https://picsum.photos/seed/Southeast/800/800,https://picsum.photos/seed/East/800/800,https://picsum.photos/seed/Austria/800/800}	86	0	3	88	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
28	Generic Rubber Sausages	Hirthe, Stokes and Renner	Possimus dolor ad.	Atque a modi ratione necessitatibus architecto magni omnis. Fuga ducimus itaque officiis labore velit. Sed odio aut alias ducimus vitae inventore beatae ad. Sint natus repudiandae officiis.	{https://picsum.photos/seed/Dynamic/800/800,https://picsum.photos/seed/Berkshire/800/800,https://picsum.photos/seed/scalable/800/800,https://picsum.photos/seed/vortals/800/800,https://picsum.photos/seed/Hybrid/800/800}	12	62	0	5	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
29	Refined Bronze Mouse	Boyer Group	Quibusdam reiciendis ab voluptatem quasi natus quod tempora minima error.	Maxime repudiandae saepe suscipit sint amet tempore perspiciatis ex. Corporis aperiam harum eligendi cumque laboriosam fugit debitis. Itaque doloribus porro sunt distinctio eligendi odit officia voluptatem. Molestias repellendus fugit numquam. Accusantium ut minima quas corrupti vel. Illum vel facilis explicabo laudantium eum voluptatibus voluptates dolorum.	{https://picsum.photos/seed/interface/800/800,https://picsum.photos/seed/Account/800/800,https://picsum.photos/seed/Ferrari/800/800,https://picsum.photos/seed/Woman/800/800,https://picsum.photos/seed/SAS/800/800}	96	0	3	30	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
30	Oriental Soft Keyboard	Lynch LLC	Ea aperiam ad nesciunt fuga consectetur et quos.	Reiciendis totam similique aliquam qui omnis laborum esse nobis. Laudantium itaque quam dolorum doloremque. Alias in pariatur assumenda quibusdam molestias. Provident temporibus soluta rerum. Excepturi fugit rem expedita quia dolorem libero ipsum eum.	{https://picsum.photos/seed/services/800/800,https://picsum.photos/seed/West/800/800,https://picsum.photos/seed/Garden/800/800,https://picsum.photos/seed/Sedan/800/800,https://picsum.photos/seed/tan/800/800}	60	54	0	0	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
31	Handmade Plastic Bacon	Bins, Sauer and Kulas	Corrupti atque facilis consequatur asperiores facilis reiciendis explicabo.	Ipsam unde eius suscipit numquam assumenda delectus alias rem. Eum reprehenderit labore mollitia. Voluptatem soluta impedit voluptas tempore unde rem. Vero velit nihil mollitia quo quidem asperiores aliquam. Cupiditate architecto doloremque rem sed velit consequuntur saepe officia.	{https://picsum.photos/seed/primary/800/800,https://picsum.photos/seed/bunt/800/800,https://picsum.photos/seed/TLS/800/800,https://picsum.photos/seed/meh/800/800,https://picsum.photos/seed/Northeast/800/800}	52	2	3	36	4	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
32	Luxurious Soft Hat	Lehner - Zemlak	A unde enim.	Itaque ipsa non quas quia sed cum eligendi sed. Blanditiis odio eligendi provident. Qui esse velit qui veniam. Nostrum maxime dignissimos eligendi veritatis consequatur nostrum molestias aperiam omnis. Odit ab enim.	{https://picsum.photos/seed/Generic/800/800,https://picsum.photos/seed/Diesel/800/800,https://picsum.photos/seed/while/800/800,https://picsum.photos/seed/Covina/800/800,https://picsum.photos/seed/Customer/800/800}	50	74	3	85	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
33	Practical Cotton Pizza	Jones Inc	Odio unde deserunt blanditiis mollitia.	Veritatis eum vero provident illo fugiat. Quasi porro doloremque expedita dolorum soluta inventore reiciendis exercitationem officiis. Sapiente tenetur nemo. At ullam repellendus. Accusantium accusamus recusandae.	{https://picsum.photos/seed/Hatchback/800/800,https://picsum.photos/seed/Southeast/800/800,https://picsum.photos/seed/Country/800/800,https://picsum.photos/seed/mint/800/800,https://picsum.photos/seed/blue/800/800}	34	32	0	5	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
34	Fantastic Soft Sausages	Heller - Beahan	Hic eos esse repudiandae alias rerum laudantium doloribus.	Repudiandae quod odio reprehenderit laudantium perspiciatis. Accusamus dicta nobis adipisci perspiciatis quia eum magni. Quae itaque quibusdam nostrum.	{https://picsum.photos/seed/Soft/800/800,https://picsum.photos/seed/Pants/800/800,https://picsum.photos/seed/Officer/800/800,https://picsum.photos/seed/maroon/800/800,https://picsum.photos/seed/Hassium/800/800}	6	0	0	25	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
35	Handcrafted Rubber Car	Brakus - Zemlak	Cum iste natus qui.	Expedita id numquam voluptates asperiores perferendis accusamus assumenda sed. Ex quam eveniet soluta. Incidunt ad omnis hic.	{https://picsum.photos/seed/incremental/800/800,https://picsum.photos/seed/Barium/800/800,https://picsum.photos/seed/meanwhile/800/800,https://picsum.photos/seed/parsing/800/800,https://picsum.photos/seed/relationships/800/800}	82	0	6	37	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
36	Modern Soft Ball	Renner, Daniel and Hilpert	Vero quos dolore nihil voluptates earum in.	Omnis numquam quis sed at magnam veritatis deserunt. Occaecati doloremque reiciendis corrupti nulla nam quisquam. Quidem minus minus earum doloribus aut nemo. Occaecati excepturi eum temporibus exercitationem asperiores. Doloribus quo natus fugit nesciunt.	{https://picsum.photos/seed/Minnesota/800/800,https://picsum.photos/seed/Tuna/800/800,https://picsum.photos/seed/methodology/800/800,https://picsum.photos/seed/Mozambique/800/800,https://picsum.photos/seed/transform/800/800}	28	60	3	10	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
37	Practical Plastic Shoes	Graham LLC	Voluptas ducimus perferendis culpa quos atque culpa aperiam debitis explicabo.	Aspernatur molestias at quod sequi. Adipisci nostrum provident dolore blanditiis. Ducimus repudiandae hic libero deserunt eum rerum id neque. Qui saepe nam non consequuntur consequatur error.	{https://picsum.photos/seed/compress/800/800,https://picsum.photos/seed/male/800/800,https://picsum.photos/seed/Internal/800/800,https://picsum.photos/seed/bitterly/800/800,https://picsum.photos/seed/Facilitator/800/800}	52	0	6	87	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
38	Incredible Rubber Pants	Gleichner - Watsica	Nemo est sed pariatur molestias cumque delectus saepe corrupti.	Quidem labore similique pariatur architecto cumque sunt consequatur voluptatibus provident. Soluta tenetur quos placeat pariatur eos. Sapiente nobis voluptas repellendus numquam corrupti delectus. Officia odit nemo. At et dolorem dolor aliquam possimus fugit mollitia dignissimos dolorum.	{https://picsum.photos/seed/City/800/800,https://picsum.photos/seed/IB/800/800,https://picsum.photos/seed/technologies/800/800,https://picsum.photos/seed/Cheese/800/800,https://picsum.photos/seed/parsing/800/800}	2	0	6	1	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
39	Awesome Rubber Table	Toy, Bartell and D'Amore	Distinctio iste quod dolores.	Voluptates velit porro. Consequuntur aliquam sint harum aliquid. Doloribus voluptate corporis.	{https://picsum.photos/seed/Health/800/800,https://picsum.photos/seed/Bicycle/800/800,https://picsum.photos/seed/Pound/800/800,https://picsum.photos/seed/reword/800/800,https://picsum.photos/seed/Hybrid/800/800}	62	0	6	88	5	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
40	Electronic Granite Bike	Bergnaum Group	Blanditiis sequi animi nulla.	Occaecati eaque iste. Cumque esse corporis soluta sequi cum ea fugit sint. Sequi porro laudantium minus pariatur in quas. Magni sed neque expedita ad dolorum.	{https://picsum.photos/seed/Soft/800/800,https://picsum.photos/seed/Assistant/800/800,https://picsum.photos/seed/Account/800/800,https://picsum.photos/seed/South/800/800,https://picsum.photos/seed/female/800/800}	68	100	0	56	6	2022-11-02 07:08:16.226	2022-11-02 07:08:16.226
41	Awesome Steel Salad	Bosco, Mosciski and Ankunding	Ipsum deserunt id sint.	Fugit quia nulla animi sunt iure vel veniam. Architecto facere vitae. Repudiandae laudantium nostrum earum quo unde explicabo possimus. Incidunt rem nihil consectetur deserunt at optio omnis.	{https://picsum.photos/seed/Watsica/800/800,https://picsum.photos/seed/generating/800/800,https://picsum.photos/seed/North/800/800,https://picsum.photos/seed/PCI/800/800,https://picsum.photos/seed/North/800/800}	14	0	3	33	6	2022-11-02 07:08:16.226	2022-11-02 07:08:16.226
42	Tasty Bronze Bike	Friesen, Schinner and Schimmel	Fugiat libero eos.	Nemo fugiat quis voluptas harum. Ut architecto beatae praesentium ipsam voluptas atque. Consequatur aut quo a ab sed reiciendis consequatur accusantium. Cum quam debitis molestias fugiat corporis iusto.	{https://picsum.photos/seed/Towels/800/800,https://picsum.photos/seed/magenta/800/800,https://picsum.photos/seed/once/800/800,https://picsum.photos/seed/infomediaries/800/800,https://picsum.photos/seed/silver/800/800}	60	94	6	47	6	2022-11-02 07:08:16.226	2022-11-02 07:08:16.226
43	Modern Cotton Table	Bernier - Roberts	Est nihil odit nam.	Vitae repellendus dolor ducimus incidunt explicabo assumenda. Fugit aspernatur officia itaque ad optio beatae ullam ullam at. Esse maxime corporis tenetur neque eveniet. Magni quia quidem repellendus quas aliquam ipsum culpa. Dolore soluta nisi nulla quam optio error asperiores ut labore.	{https://picsum.photos/seed/silver/800/800,https://picsum.photos/seed/Shoes/800/800,https://picsum.photos/seed/Apex/800/800,https://picsum.photos/seed/payment/800/800,https://picsum.photos/seed/syndicate/800/800}	58	38	6	12	6	2022-11-02 07:08:16.226	2022-11-02 07:08:16.226
44	Fantastic Soft Cheese	Wintheiser Inc	Excepturi aliquam laudantium quam.	Quod magnam fugiat. Eaque ullam velit placeat. Quis eius voluptas corrupti dolorum at reprehenderit voluptates.	{https://picsum.photos/seed/North/800/800,https://picsum.photos/seed/North/800/800,https://picsum.photos/seed/Refined/800/800,https://picsum.photos/seed/ick/800/800,https://picsum.photos/seed/yearly/800/800}	80	50	6	85	6	2022-11-02 07:08:16.226	2022-11-02 07:08:16.226
45	Handmade Frozen Fish	Conroy, Ankunding and Hegmann	Fugit veniam necessitatibus laudantium velit asperiores.	Natus ullam quas molestiae laborum ab. Nihil eligendi corporis error accusantium. Doloribus amet neque necessitatibus vel accusantium quae. Rerum iure repellendus iure assumenda deserunt facilis. Quam placeat similique voluptatum amet harum iure.	{https://picsum.photos/seed/yahoo/800/800,https://picsum.photos/seed/Architect/800/800,https://picsum.photos/seed/male/800/800,https://picsum.photos/seed/technologies/800/800,https://picsum.photos/seed/synergize/800/800}	44	88	3	30	6	2022-11-02 07:08:16.226	2022-11-02 07:08:16.226
46	Incredible Wooden Shirt	Schmeler, Kuhn and Price	Hic laudantium culpa rerum sunt.	Qui excepturi ex reprehenderit nesciunt voluptatum repellat eligendi. Voluptates repellat perspiciatis repudiandae incidunt sint iusto. Nostrum labore labore quibusdam quidem quisquam sint quaerat iure. Dolores sunt fugit.	{https://picsum.photos/seed/overriding/800/800,https://picsum.photos/seed/tunnel/800/800,https://picsum.photos/seed/invoice/800/800,https://picsum.photos/seed/override/800/800,https://picsum.photos/seed/unlike/800/800}	92	0	0	22	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
47	Fantastic Cotton Towels	Halvorson, Wisozk and Swift	Eaque error id natus error minima occaecati.	Ducimus sit ab dolorem unde vero sint harum. Impedit perspiciatis recusandae hic voluptatem ut sed illum ipsa. Nulla esse deleniti corporis aperiam tenetur hic sequi. Voluptatum unde architecto cupiditate aut nemo sequi ab. Dolores similique quasi delectus impedit molestias magnam tempore libero.	{https://picsum.photos/seed/however/800/800,https://picsum.photos/seed/Health/800/800,https://picsum.photos/seed/between/800/800,https://picsum.photos/seed/transmit/800/800,https://picsum.photos/seed/snaffle/800/800}	74	0	0	25	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
48	Tasty Plastic Soap	Powlowski, Stracke and Green	Repudiandae dolore sequi optio odit dolor nobis et.	Fuga a aliquam ut amet. Delectus eaque asperiores ad tempore ab aspernatur molestiae rerum. Harum sint saepe non expedita. Vitae aspernatur unde animi est pariatur cumque explicabo similique. Minima illo hic porro placeat saepe nihil. Aliquam facilis excepturi cumque fuga quaerat ipsum temporibus perferendis.	{https://picsum.photos/seed/zowie/800/800,https://picsum.photos/seed/North/800/800,https://picsum.photos/seed/Colombia/800/800,https://picsum.photos/seed/Applications/800/800,https://picsum.photos/seed/until/800/800}	22	0	0	59	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
49	Gorgeous Plastic Sausages	O'Connell - Gleichner	Asperiores quo non tempore occaecati pariatur distinctio assumenda.	Sunt veritatis consequuntur cum inventore. Officia rerum unde numquam ut doloremque adipisci rem debitis fuga. Aliquid cupiditate tempora deleniti dolores. Quasi error corrupti alias magni quia. Ut ipsam illum quisquam aperiam id. Praesentium ipsum ullam minima deleniti corrupti.	{https://picsum.photos/seed/white/800/800,https://picsum.photos/seed/infrastructure/800/800,https://picsum.photos/seed/Legacy/800/800,https://picsum.photos/seed/Future/800/800,https://picsum.photos/seed/Giovanny/800/800}	18	0	3	31	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
50	Awesome Bronze Sausages	Rodriguez, Murazik and Langworth	Amet repellendus ratione.	Culpa ipsa deleniti natus voluptate. Minima natus provident deleniti distinctio esse voluptatum. Aut vitae tenetur quod eum sit corrupti iusto placeat. Nostrum commodi iste odit. Doloremque blanditiis amet iste. Porro debitis sit neque itaque nobis aperiam vitae modi ducimus.	{https://picsum.photos/seed/circa/800/800,https://picsum.photos/seed/Plastic/800/800,https://picsum.photos/seed/quantify/800/800,https://picsum.photos/seed/Australia/800/800,https://picsum.photos/seed/Southwest/800/800}	34	0	0	64	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
51	Gorgeous Plastic Tuna	Gleason - Bashirian	Repellendus voluptatem delectus corrupti libero aspernatur.	Pariatur aperiam quidem. Quae illo soluta. In blanditiis consequatur. Rem dolorum temporibus.	{https://picsum.photos/seed/commodi/800/800,https://picsum.photos/seed/hard/800/800,https://picsum.photos/seed/redundant/800/800,https://picsum.photos/seed/Steel/800/800,https://picsum.photos/seed/Loan/800/800}	54	0	6	80	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
52	Licensed Steel Bacon	Aufderhar - Heathcote	Repellendus neque excepturi provident nulla ex explicabo eius perferendis sed.	Repudiandae cumque mollitia tenetur. Quam ipsa repellendus vel eaque ullam harum. Velit asperiores autem voluptatum vitae atque ipsum necessitatibus perspiciatis blanditiis.	{https://picsum.photos/seed/Passenger/800/800,https://picsum.photos/seed/Coordinator/800/800,https://picsum.photos/seed/up/800/800,https://picsum.photos/seed/neural/800/800,https://picsum.photos/seed/Porsche/800/800}	78	0	0	38	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
53	Generic Concrete Bike	Herzog Inc	Sequi inventore repellat cumque cum magnam id accusamus quos.	Numquam amet velit quos corporis quod quam hic. Exercitationem architecto voluptas voluptatem repellendus consequuntur. Dolorum omnis id laboriosam animi voluptatem beatae libero. Occaecati occaecati ratione.	{https://picsum.photos/seed/male/800/800,https://picsum.photos/seed/AI/800/800,https://picsum.photos/seed/Electric/800/800,https://picsum.photos/seed/Factors/800/800,https://picsum.photos/seed/Barbados/800/800}	26	0	0	96	7	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
54	Recycled Wooden Sausages	Beahan LLC	Vel libero doloremque deserunt ex vel magni.	Incidunt iste repellat dignissimos neque quisquam sequi. Distinctio quam labore facilis maxime occaecati. Dicta odio optio quidem aliquid esse quasi voluptas. Deserunt sequi laborum quibusdam dolor doloremque. Expedita rem nesciunt recusandae tenetur commodi atque voluptate vero. Eius aperiam animi sed eveniet quisquam repellat.	{https://picsum.photos/seed/North/800/800,https://picsum.photos/seed/Avon/800/800,https://picsum.photos/seed/Practical/800/800,https://picsum.photos/seed/midst/800/800,https://picsum.photos/seed/lime/800/800}	62	0	3	3	8	2022-11-02 07:08:16.236	2022-11-02 07:08:16.236
55	Generic Plastic Cheese	Carroll, Mohr and Hackett	Laboriosam doloremque inventore explicabo odit quas rerum officia et.	Magnam rem optio blanditiis eaque ipsa. Doloribus deserunt ullam ratione dolore voluptas eos repellendus eum corrupti. Nulla et labore culpa harum modi debitis debitis adipisci. Voluptatem ipsam ea tempore voluptatem nesciunt. Alias possimus sunt harum amet odio reprehenderit explicabo qui. Accusantium quas odio magni deserunt molestias tempora saepe qui similique.	{https://picsum.photos/seed/Southwest/800/800,https://picsum.photos/seed/Toys/800/800,https://picsum.photos/seed/Cambridgeshire/800/800,https://picsum.photos/seed/despite/800/800,https://picsum.photos/seed/Cheese/800/800}	88	0	0	89	8	2022-11-02 07:08:16.236	2022-11-02 07:08:16.236
56	Ergonomic Metal Ball	Shanahan LLC	Sit amet culpa porro ipsum voluptatibus.	Quam magni omnis eius debitis eaque. Doloremque in magni placeat itaque beatae voluptates voluptatibus quis. Iusto tenetur exercitationem animi. Debitis eos ullam iste perferendis laudantium.	{https://picsum.photos/seed/platforms/800/800,https://picsum.photos/seed/Tools/800/800,https://picsum.photos/seed/Rwanda/800/800,https://picsum.photos/seed/female/800/800,https://picsum.photos/seed/synergize/800/800}	56	72	0	21	8	2022-11-02 07:08:16.236	2022-11-02 07:08:16.236
57	Recycled Soft Shirt	Greenfelder Group	Eius voluptatum aspernatur veniam unde laudantium.	Quo omnis animi earum omnis odit exercitationem. Molestiae molestias dolorum. Voluptas eum doloribus aut.	{https://picsum.photos/seed/Borders/800/800,https://picsum.photos/seed/ick/800/800,https://picsum.photos/seed/port/800/800,https://picsum.photos/seed/outside/800/800,https://picsum.photos/seed/red/800/800}	2	0	3	5	8	2022-11-02 07:08:16.236	2022-11-02 07:08:16.236
58	Practical Metal Sausages	Hartmann - Carroll	Quam repudiandae ab inventore minus ducimus neque distinctio.	Vel consectetur pariatur ex repellendus. Doloribus hic veritatis alias dolorum eum vitae. Occaecati nam eaque impedit maiores inventore eos itaque. Nemo similique delectus exercitationem odio aliquam. Distinctio labore doloribus a explicabo excepturi. Temporibus iure ipsa molestiae vel.	{https://picsum.photos/seed/geez/800/800,https://picsum.photos/seed/male/800/800,https://picsum.photos/seed/Gloves/800/800,https://picsum.photos/seed/female/800/800,https://picsum.photos/seed/overriding/800/800}	10	0	0	89	8	2022-11-02 07:08:16.236	2022-11-02 07:08:16.236
59	Licensed Granite Shoes	Wilkinson - Boyer	Laboriosam sed possimus sint id odio.	Inventore hic occaecati. Quam ipsam neque exercitationem soluta quasi officiis labore deserunt qui. Atque vero incidunt incidunt sed.	{https://picsum.photos/seed/DNS/800/800,https://picsum.photos/seed/oh/800/800,https://picsum.photos/seed/Salad/800/800,https://picsum.photos/seed/viral/800/800,https://picsum.photos/seed/Jewelery/800/800}	72	58	3	90	9	2022-11-02 07:08:16.241	2022-11-02 07:08:16.241
60	Unbranded Steel Fish	Turcotte LLC	Incidunt hic consequuntur quibusdam quisquam nesciunt magnam quo corrupti.	Quos iusto veniam ex autem amet assumenda debitis nam. Modi sequi excepturi libero distinctio pariatur nam. Tempora esse ipsum deleniti iure aperiam.	{https://picsum.photos/seed/killer/800/800,https://picsum.photos/seed/yowza/800/800,https://picsum.photos/seed/weave/800/800,https://picsum.photos/seed/Hybrid/800/800,https://picsum.photos/seed/Hutchinson/800/800}	90	0	0	98	9	2022-11-02 07:08:16.241	2022-11-02 07:08:16.241
61	Rustic Frozen Towels	Pacocha and Sons	Ab culpa dolorum.	Quas molestias cum earum nam architecto eos consequuntur. Ipsum dignissimos ad a fuga maiores architecto placeat corporis aut. Eius earum fuga optio nostrum alias fuga quas. Numquam itaque harum autem nulla aspernatur ipsum doloribus officiis. Unde aliquam deserunt molestiae.	{https://picsum.photos/seed/kneel/800/800,https://picsum.photos/seed/Tunnel/800/800,https://picsum.photos/seed/Borders/800/800,https://picsum.photos/seed/sky/800/800,https://picsum.photos/seed/Wooden/800/800}	20	100	0	32	9	2022-11-02 07:08:16.241	2022-11-02 07:08:16.241
62	Recycled Metal Table	Streich - DuBuque	Laborum unde provident minima consequatur nihil.	Similique provident harum dicta magni sit. Recusandae blanditiis asperiores quod maiores. Debitis quidem dolorum natus. Non harum blanditiis minus porro odit libero alias. Voluptates quas dicta doloremque dolores maxime porro nostrum aspernatur recusandae. Nostrum sunt odio officiis ducimus dolor praesentium.	{https://picsum.photos/seed/volt/800/800,https://picsum.photos/seed/Jose/800/800,https://picsum.photos/seed/Specialist/800/800,https://picsum.photos/seed/Allentown/800/800,https://picsum.photos/seed/Electronics/800/800}	14	0	0	77	9	2022-11-02 07:08:16.241	2022-11-02 07:08:16.241
63	Modern Steel Car	Crist, Goodwin and Labadie	Magnam consectetur minima modi.	Molestiae quod sed. Voluptate placeat odio nobis cum tenetur. Quia amet dolor maxime laboriosam quibusdam. Temporibus quaerat dolores fuga ducimus eius.	{https://picsum.photos/seed/backing/800/800,https://picsum.photos/seed/Configuration/800/800,https://picsum.photos/seed/Bicycle/800/800,https://picsum.photos/seed/female/800/800,https://picsum.photos/seed/Supervisor/800/800}	48	0	3	33	9	2022-11-02 07:08:16.241	2022-11-02 07:08:16.241
64	Practical Concrete Pants	Lakin and Sons	Ex voluptatibus minus deserunt rerum accusantium assumenda.	Expedita voluptas deleniti earum. Accusantium voluptates amet doloribus ipsum tenetur nihil. Tempore possimus exercitationem assumenda repellendus deleniti nemo similique itaque nobis.	{https://picsum.photos/seed/Investment/800/800,https://picsum.photos/seed/green/800/800,https://picsum.photos/seed/Hybrid/800/800,https://picsum.photos/seed/onto/800/800,https://picsum.photos/seed/Southeast/800/800}	76	10	6	2	10	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
65	Fantastic Concrete Fish	Watsica, Bruen and Harvey	Minus ipsa quasi nobis facere illum.	Minus tempora ea provident enim. Necessitatibus exercitationem eius nesciunt aliquam ut necessitatibus. Nisi illum cum ex rem. Accusantium error quod ea fugit dolorum. Ea accusamus laboriosam repellendus nobis. Assumenda tempore ratione dolorem ut eum odio.	{https://picsum.photos/seed/Electric/800/800,https://picsum.photos/seed/Officer/800/800,https://picsum.photos/seed/transmitter/800/800,https://picsum.photos/seed/3rd/800/800,https://picsum.photos/seed/orange/800/800}	72	0	6	37	10	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
66	Awesome Granite Towels	Crist Group	Error delectus dolorem distinctio nihil architecto maxime.	Deserunt ad cum eaque optio ipsa possimus laborum. Praesentium necessitatibus deleniti dolorum corrupti fugiat accusamus. Rem vero laborum praesentium quos.	{https://picsum.photos/seed/Thulium/800/800,https://picsum.photos/seed/JBOD/800/800,https://picsum.photos/seed/bubble/800/800,https://picsum.photos/seed/culpa/800/800,https://picsum.photos/seed/East/800/800}	62	0	3	2	10	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
67	Gorgeous Rubber Chair	Schowalter - Gutmann	Sequi repellendus quidem repudiandae mollitia perferendis eum maiores saepe fuga.	Sit alias omnis officia. Et molestiae laboriosam architecto deleniti. Enim quam nisi delectus quaerat.	{https://picsum.photos/seed/whether/800/800,https://picsum.photos/seed/process/800/800,https://picsum.photos/seed/male/800/800,https://picsum.photos/seed/CLI/800/800,https://picsum.photos/seed/Central/800/800}	52	0	6	26	10	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
68	Handcrafted Metal Pizza	Leuschke and Sons	Voluptas aut alias quia quidem eveniet molestiae ipsa.	Autem ad esse. Deleniti magnam esse odit perspiciatis deleniti. Explicabo ipsam ab occaecati aliquid cum doloribus dolorum debitis. In nesciunt dolore.	{https://picsum.photos/seed/tired/800/800,https://picsum.photos/seed/Norway/800/800,https://picsum.photos/seed/Cambridgeshire/800/800,https://picsum.photos/seed/Optimization/800/800,https://picsum.photos/seed/Infrastructure/800/800}	68	0	3	27	10	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
69	Small Soft Computer	Cassin, Wiza and Price	Ipsa commodi quo.	Nesciunt placeat amet corrupti ad aliquid quia. Ad nesciunt repellat beatae est. Nostrum beatae cumque dolores atque hic quae.	{https://picsum.photos/seed/archive/800/800,https://picsum.photos/seed/nihil/800/800,https://picsum.photos/seed/Gasoline/800/800,https://picsum.photos/seed/Funk/800/800,https://picsum.photos/seed/next/800/800}	94	0	6	53	10	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
70	Licensed Steel Shoes	Hessel Inc	Consectetur aperiam quia architecto impedit modi fuga animi reiciendis deserunt.	Consequuntur consectetur minus. Rerum voluptates ullam consectetur. Ipsam laudantium aliquid animi nemo.	{https://picsum.photos/seed/Manganese/800/800,https://picsum.photos/seed/Robust/800/800,https://picsum.photos/seed/East/800/800,https://picsum.photos/seed/Southwest/800/800,https://picsum.photos/seed/turquoise/800/800}	72	0	6	36	10	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
\.


--
-- Data for Name: Store; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public."Store" (id, name, description, image, address, owner, "phoneNumber", "opensAt", "closesAt", rating, "createdAt", "updatedAt") FROM stdin;
1	Hirthe Group	Assumenda nostrum omnis cum maxime optio. Assumenda eligendi quam ipsa quia dolorem. Architecto incidunt alias inventore nesciunt. Fuga odio fugit. Doloribus inventore aliquid ab neque tempore id magnam.	https://picsum.photos/seed/industrialisation/800/800	985 Davonte Ports	Ms. Johanna Wehner	(443) 619-7296	21789	43182	3	2022-11-02 07:08:16.19	2022-11-02 07:08:16.19
2	Lebsack, Padberg and D'Amore	Asperiores perspiciatis voluptas dolore nemo esse accusamus. Modi perferendis praesentium consectetur odit. Earum odio commodi ut laudantium aperiam ipsa libero. Earum modi laudantium esse officia ipsa possimus.	https://picsum.photos/seed/users/800/800	666 Nikolaus Expressway	Ms. Elias Rolfson	1-931-702-9846 x410	53039	85086	0	2022-11-02 07:08:16.205	2022-11-02 07:08:16.205
3	Schaefer and Sons	Quia culpa atque. Accusantium harum quisquam. Atque alias odit reiciendis accusamus repudiandae. Molestias ipsam tempore est. Totam repellendus saepe aspernatur exercitationem nesciunt sit vel ipsa repudiandae.	https://picsum.photos/seed/Concrete/800/800	05249 Velma Passage	Paulette Koepp	899-912-3223 x699	59939	68466	0	2022-11-02 07:08:16.211	2022-11-02 07:08:16.211
4	Bruen, Hickle and Harris	Est pariatur culpa corporis illo. Veniam delectus dolore fugiat aperiam eius quisquam labore. Repellat nisi error fugiat culpa dolores similique. Unde a odit aspernatur incidunt voluptates molestiae totam. Velit eveniet suscipit ex sequi cum quo accusamus. At voluptatum tempore illo totam in facilis.	https://picsum.photos/seed/Cotton/800/800	69325 Kessler Overpass	Anna Bins	1-987-409-0308	34789	65043	0	2022-11-02 07:08:16.216	2022-11-02 07:08:16.216
5	Walker - Huel	Dignissimos itaque non facilis. Doloremque odit repellat assumenda. Quis quae at ratione iusto iste est iste. Consequuntur odit voluptas exercitationem accusamus eaque quasi. Deleniti minus eius expedita porro quo et. Architecto incidunt cupiditate rerum earum aliquid repellat illo tempora eaque.	https://picsum.photos/seed/capacity/800/800	242 Jermain Forks	Rodney Mertz	(737) 719-9356 x09192	77256	80806	6	2022-11-02 07:08:16.222	2022-11-02 07:08:16.222
6	Carroll LLC	Sint consequatur officia aperiam porro unde repellat autem ratione. Facilis laudantium dolor nobis porro. Ipsa quis reiciendis veniam saepe animi provident vitae quod ducimus. Sequi aliquid ipsa quibusdam aut repellat. Amet voluptatibus dolorum. Rem voluptates laboriosam cum.	https://picsum.photos/seed/katal/800/800	62683 Meta Square	Ms. Lester Zulauf	220.984.1378 x7130	56500	85280	3	2022-11-02 07:08:16.226	2022-11-02 07:08:16.226
7	Ondricka, Effertz and Dach	Dolorum modi consectetur dolores magni aperiam illum. Porro porro optio nulla repellendus id autem in maiores id. Non tenetur expedita accusantium corporis doloribus dolorem blanditiis.	https://picsum.photos/seed/Officer/800/800	401 Brekke Fort	Guy Bosco	(955) 467-7074 x3440	13131	44885	0	2022-11-02 07:08:16.232	2022-11-02 07:08:16.232
8	Bode, Carter and O'Keefe	Minima sit similique eligendi praesentium libero deleniti repellendus. A nemo repellat itaque suscipit veniam quam magnam. Voluptas quas dignissimos aperiam non voluptatibus suscipit maiores. Sunt accusantium numquam laborum cumque. Nihil aperiam incidunt sequi repellendus. Omnis aperiam ut est tempora consectetur.	https://picsum.photos/seed/including/800/800	8474 Trantow Fall	Molly Dibbert	(699) 670-5662 x71805	56317	60976	6	2022-11-02 07:08:16.236	2022-11-02 07:08:16.236
9	Hahn and Sons	Molestias inventore ab expedita minus quas voluptatum reprehenderit est impedit. In quam cupiditate iste magnam et officia aliquid dolor rerum. Quam tempora laborum.	https://picsum.photos/seed/optimize/800/800	3729 Davion Lakes	Sue McGlynn	1-642-372-7518 x469	23630	66928	6	2022-11-02 07:08:16.241	2022-11-02 07:08:16.241
10	Fay - Osinski	Reprehenderit atque aliquid iusto minus. Dignissimos mollitia magnam nobis consequuntur nam. Quis dignissimos est illum velit.	https://picsum.photos/seed/Pickup/800/800	428 Green Oval	Jasmine Bernier	(739) 882-9436 x743	9454	52705	3	2022-11-02 07:08:16.244	2022-11-02 07:08:16.244
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
cada2890-0c60-4477-8565-f6e2fe210912	ff29e9929d9a4be7906ae33e7a1567ce258e37629b7522aed70118625b949d56	2022-11-02 08:08:15.552368+01	20221102063058_initialize_database	\N	\N	2022-11-02 08:08:15.548023+01	1
\.


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."Product_id_seq"', 70, true);


--
-- Name: Store_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."Store_id_seq"', 10, true);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: Store Store_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."Store"
    ADD CONSTRAINT "Store_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Product Product_storeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES public."Store"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

