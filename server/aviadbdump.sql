--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

-- Started on 2021-09-18 22:27:18

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
-- TOC entry 207 (class 1259 OID 32839)
-- Name: basket_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.basket_products (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "productId" integer
);


ALTER TABLE public.basket_products OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 32837)
-- Name: basket_products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.basket_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.basket_products_id_seq OWNER TO postgres;

--
-- TOC entry 3103 (class 0 OID 0)
-- Dependencies: 206
-- Name: basket_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.basket_products_id_seq OWNED BY public.basket_products.id;


--
-- TOC entry 203 (class 1259 OID 32812)
-- Name: baskets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.baskets OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 32810)
-- Name: baskets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.baskets_id_seq OWNER TO postgres;

--
-- TOC entry 3104 (class 0 OID 0)
-- Dependencies: 202
-- Name: baskets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;


--
-- TOC entry 217 (class 1259 OID 32934)
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    text character varying(255) NOT NULL,
    "timestamp" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "postId" integer,
    "userId" integer
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 32932)
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO postgres;

--
-- TOC entry 3105 (class 0 OID 0)
-- Dependencies: 216
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- TOC entry 215 (class 1259 OID 32914)
-- Name: post_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_tags (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "tagId" integer,
    "postId" integer
);


ALTER TABLE public.post_tags OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 32912)
-- Name: post_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_tags_id_seq OWNER TO postgres;

--
-- TOC entry 3106 (class 0 OID 0)
-- Dependencies: 214
-- Name: post_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_tags_id_seq OWNED BY public.post_tags.id;


--
-- TOC entry 211 (class 1259 OID 32893)
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    headline character varying(255),
    description character varying(255),
    body text,
    img character varying(255) NOT NULL,
    "timestamp" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 32891)
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- TOC entry 3107 (class 0 OID 0)
-- Dependencies: 210
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- TOC entry 205 (class 1259 OID 32825)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    price integer NOT NULL,
    rating integer DEFAULT 0,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 32823)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- TOC entry 3108 (class 0 OID 0)
-- Dependencies: 204
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 209 (class 1259 OID 32857)
-- Name: ratings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "productId" integer
);


ALTER TABLE public.ratings OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 32855)
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO postgres;

--
-- TOC entry 3109 (class 0 OID 0)
-- Dependencies: 208
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- TOC entry 213 (class 1259 OID 32904)
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 32902)
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO postgres;

--
-- TOC entry 3110 (class 0 OID 0)
-- Dependencies: 212
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- TOC entry 201 (class 1259 OID 32784)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    username character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "isActivated" boolean DEFAULT false,
    "activationLink" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 32782)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3111 (class 0 OID 0)
-- Dependencies: 200
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 2907 (class 2604 OID 32842)
-- Name: basket_products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_products ALTER COLUMN id SET DEFAULT nextval('public.basket_products_id_seq'::regclass);


--
-- TOC entry 2904 (class 2604 OID 32815)
-- Name: baskets id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);


--
-- TOC entry 2912 (class 2604 OID 32937)
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- TOC entry 2911 (class 2604 OID 32917)
-- Name: post_tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tags ALTER COLUMN id SET DEFAULT nextval('public.post_tags_id_seq'::regclass);


--
-- TOC entry 2909 (class 2604 OID 32896)
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- TOC entry 2905 (class 2604 OID 32828)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 2908 (class 2604 OID 32860)
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- TOC entry 2910 (class 2604 OID 32907)
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- TOC entry 2901 (class 2604 OID 32787)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3087 (class 0 OID 32839)
-- Dependencies: 207
-- Data for Name: basket_products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.basket_products (id, "createdAt", "updatedAt", "basketId", "productId") FROM stdin;
\.


--
-- TOC entry 3083 (class 0 OID 32812)
-- Dependencies: 203
-- Data for Name: baskets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
1	2021-08-23 19:45:44.877+00	2021-08-23 19:45:44.877+00	1
\.


--
-- TOC entry 3097 (class 0 OID 32934)
-- Dependencies: 217
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, text, "timestamp", "createdAt", "updatedAt", "postId", "userId") FROM stdin;
4	Hi3	2021-09-05 13:35:07.356+00	2021-09-05 13:35:07.356+00	2021-09-05 13:35:07.356+00	4	1
\.


--
-- TOC entry 3095 (class 0 OID 32914)
-- Dependencies: 215
-- Data for Name: post_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post_tags (id, "createdAt", "updatedAt", "tagId", "postId") FROM stdin;
10	2021-08-23 14:47:04.919+00	2021-08-23 14:47:04.919+00	20	4
11	2021-08-23 14:47:04.928+00	2021-08-23 14:47:04.928+00	21	4
12	2021-08-24 12:19:43.591+00	2021-08-24 12:19:43.591+00	22	5
13	2021-08-24 12:23:35.297+00	2021-08-24 12:23:35.297+00	23	6
14	2021-08-24 12:23:35.323+00	2021-08-24 12:23:35.323+00	24	6
21	2021-09-05 16:44:18.276+00	2021-09-05 16:44:18.276+00	25	10
22	2021-09-05 16:46:47.601+00	2021-09-05 16:46:47.601+00	26	11
23	2021-09-05 16:48:50.728+00	2021-09-05 16:48:50.728+00	25	12
24	2021-09-05 16:48:50.732+00	2021-09-05 16:48:50.732+00	27	12
25	2021-09-05 16:52:17.819+00	2021-09-05 16:52:17.819+00	28	13
26	2021-09-05 16:57:44.755+00	2021-09-05 16:57:44.755+00	29	14
27	2021-09-05 16:57:44.76+00	2021-09-05 16:57:44.76+00	30	14
28	2021-09-05 17:00:20.413+00	2021-09-05 17:00:20.413+00	31	15
29	2021-09-05 17:08:34.189+00	2021-09-05 17:08:34.189+00	32	16
\.


--
-- TOC entry 3091 (class 0 OID 32893)
-- Dependencies: 211
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, headline, description, body, img, "timestamp", "createdAt", "updatedAt") FROM stdin;
4	Уникальное видео, как самолет Мрия готовился к параду на День Независимости	Новые ракурсы полета самого большого самолета в мире Ан-225 Мрия показал главный пилот авиалайнера Дмитрий Антонов.	<p>Две дополнительные камеры позволили увидеть, как выглядит полет-репетация для участия в воздушном параде на День Независимости Украины.</p>\n<p>Оборудование установили снаружи на обе стороны стабилизатора. Подобный ракурс позволил увидеть, как авиалайнер взлетает, убирает шасси, приветственно машет крыльями, а также как изменяется механизация крыла в течение полета.</p>\n<p>На видео поочередно меняются ракурсы: можно увидеть, как экипаж видит происходящее за бортом, и что делает пилот Дмитрий Антонов для управления Мрией. Все это снабжается записью переговоров членов экипажа между собой и с диспетчером.</p>	80302946-4835-4895-8890-c95d7bbbe25a.jpg	2021-08-23 14:47:04.906+00	2021-08-23 14:47:04.907+00	2021-08-23 14:47:04.907+00
13	Новая почта побила рекорд по доставке посылок с помощью беспилотного самолета	«Новая почта» 29 июля доставила посылки с помощью беспилотного самолета на рекордное расстояние для этого типа летательного аппарата в мире — 480 км.	<p>Тестовое отправление загрузили в 7 утра на аэродроме &laquo;Чайка&raquo; рядом с Киевом. После 5 часов в пути &mdash; в 12 часов дня &mdash; беспилотник приземлился на аэродроме Харьковского аэроклуба &laquo;Коротич&raquo;.</p>\n<p>Полет проходил на высоте 300 метров с крейсерской скоростью 100 км/час.&nbsp;</p>\n<p><span>&laquo;Впервые в мире беспилотный летательный аппарат с отправлением пролетел расстояние в 480 км. Кроме &laquo;Новой почты&raquo; на подобное до сих пор не решилась ни одна другая логистическая компания. В наших планах сократить время полета до 3 часов и масштабировать доставку беспилотниками, сделав ее доступной для большинства клиентов&raquo;, &mdash; заявил глава &laquo;Новой почты&raquo; Александр Бульба.</span></p>\n<p>Для тестового полета курьер загрузил в беспилотный самолет только несколько посылок общим весом 5 кг, рассказали<span>&nbsp;</span><a href="https://www.avianews.com/">avianews.com</a><span>&nbsp;</span>в &laquo;Новой почте&raquo;.</p>\n<p>Полет совершил летательный аппарат с дистанционным управлением Discovery, который разработала украинская фирма &laquo;Аэродрон&raquo;. На борт он может взять 60 кг полезного груза.</p>\n<p>Для коммерческих перевозок почтовый оператор намерен использовать беспилотник со скоростью полета 150 км/час, который может перевозить 340 кг груза.</p>\n<p>&laquo;Такая перспектива позволит выполнить доставку в день отправки между городами миллионниками. Сейчас это тестирование маршрута и оборудования для управления летательным аппаратом&raquo;, &mdash; добавили в &laquo;Новой почте&raquo;.</p>	7fb1f616-e4f0-4af0-8fc0-b89e60097f71.jpg	2021-09-05 16:52:17.813+00	2021-09-05 16:52:17.814+00	2021-09-05 16:52:17.814+00
14	Лучшие аэропорты мира 2021 года: кто возглавил рейтинг	Лучшими аэропортами мира в 2021 году по версии британской консалтинговой компании Skytrax стали Хамад в столице Катара Дохе, Ханеда в столице Японии Токио и Чанги в Сингапуре. Они заняли соответственно первое, второе и третье места.	<p>Skytrax составила рейтинг на основе опроса пассажиров из 100 стран, которые должны были оценить 500 аэропортов по всему миру.</p>\n<p>При определении лучших воздушных ворот учитывалась как инфраструктура, наличие очередей, сервис, так и отношение персонала к пассажирам.</p>\n<p>Опрос проводился в период с августа 2020 года по июль 2021 года.</p>\n<p>ТОП-3 лучших аэропортов мира по версии Skytrax выглядит так:</p>\n<ol>\n<li>Хамад в Дохе, Катар<span></span></li>\n<li>Ханеда в Токио, Япония</li>\n<li>Чанги в Сингапуре</li>\n</ol>	fd8f5ff9-c4fd-42c7-bc58-8296a6f2dc72.jpg	2021-09-05 16:57:44.751+00	2021-09-05 16:57:44.752+00	2021-09-05 16:57:44.752+00
5	Все главные факты про новый аэропорт в Одессе	Новая взлетно-посадочная полоса и новый перрон со стоянками для самолетов в аэропорту Одесса заработали в полную силу 16 июля 2021 года.	<p><span>Старую полосу в Одессе строили с 1958 по 1960 год, а ввели в работу в 1961 году. За 60 лет она успела износиться и стала объектом страшных легенд среди жителей города и авиаторов. Полотно напоминало стиральную доску, а топ-менеджер одного крупного лоукостера даже заявляла, что им приходилось менять колеса после каждой посадки.</span></p>\n<p><span>Новую полосу начали строить в конце 2017 года за счет государства и сдали под ключ 16 июля 2021 года, когда сюда приземлился первый самолет SkyUp из Киева. Она имеет длину 2800 метров, ширину 45 метров, еще 15 метров приходятся на обочины.</span></p>\n<p><span>Если старая полоса состояла из бетонных плит, которые сверху покрыли слоем асфальта, то новая полоса полностью бетонная. Наверху находится слой 40 см тяжелого бетона, под ним &mdash; слой тощего бетона 30 см, затем 15 см песчано-цементного слоя и два слоя по 10 см из щебня для стабилизации основы.</span></p>\n<p>Новая полоса может принимать без ограничений все популярные модели среднемагистральных самолетов семейств Boeing 737 и Airbus A320. Они составляют основу парка украинских и иностранных авиакомпаний, которые летают в Одессу или потенциально могут начать сюда полеты.</p>\n<p>Характеристики полосы позволяют принимать и дальнемагистральные авиалайнеры, например, Boeing 767, Airbus A330 или Boeing 777.</p>\n<p>Хотя проект нового аэродрома предусматривал, что несущая способность аэродромного покрытия, или число PCN, должно быть 64, по факту оно оказалось на уровне 75. Это является лучшим показателем среди региональных аэропортов Украины. В Украине PCN больше только в аэропорту Борисполь, где он находится на уровне 80.</p>	c80cf09a-2cc1-4187-8a3d-a7bf932f9fd0.jpg	2021-08-24 12:19:43.371+00	2021-08-24 12:19:43.371+00	2021-08-24 12:19:43.371+00
6	Аэропорт Херсон закроют на несколько месяцев для работ на полосе	Аэропорт Херсон полностью прекратит свою работу с 20 сентября до конца 2021 года, сообщили avianews.com на предприятии.	<p>Это связано со стартом работ по реконструкции взлетно-посадочной полосы, которую хотят подготовить к приему тяжелых Боингов.</p>\n<p>В рамках подготовительного этапа, с 1 до 19 сентября, доступная для взлетов и посадок длина полосы уменьшится на 300 метров &mdash; с 2500 метров до 2200 метров.</p>\n<p>Сейчас Херсон обслуживает чартерные рейсы на курорты и регулярные маршруты авиакомпаний МАУ в Киев, Turkish Airlines и Pegasus Airlines в Стамбул, Bees Airline в Тбилиси.</p>\n<p>В аэропорту Николаев, который расположен в 80 км от Херсона, заявили, что готовы обслужить дополнительные рейсы, если авиакомпании примут решение лететь в Николаев.</p>\n<p>&laquo;15 июля одесский аеропорт был закрыт, мы с легкостью приняли за сутки 19 рейсов от них&raquo;, &mdash; прокомментировал<span>&nbsp;</span><a href="https://www.avianews.com/">avianews.com</a><span>&nbsp;</span>ситуацию директор аэропорта Николаев Федор Барна.</p>	c80cf09a-2cc1-4187-8a3d-a7bf932f9fd0.jpg	2021-08-24 12:23:35.28+00	2021-08-24 12:23:35.281+00	2021-08-24 12:23:35.281+00
10	Airbus досрочно передаст в авиакомпанию последние авиалайнеры-гиганты A380	Европейский производитель самолетов Airbus досрочно поставит три последних авиалайнера-гиганта A380. В ноябре воздушные суда компания передаст авиакомпании Emirates из Дубая.	<p>Первоначальные договоренности предусматривали поставку 2-палубных авиалайнеров в июне 2022 года, однако стороны решили досрочно завершить контракт.</p>\n<p>В ноябре, после доставки трех авиалайнеров, в парке Emirates будет 118 A380. Авиакомпания является крупнейшим в мире эксплуатантом самолетов этого типа. Она намерена использовать их последующие 2 десятилетия.</p>\n<p>Airbus решил закрыть программу A380 в 2019 году из-за отсутствия новых заказов на эту модель. Последний самолет компания выпустила в марте 2021 года и отправила его на установку салонов по заказу Emirates.</p>\n<p>Эти самолеты из-за своих размеров называли дворцами с крыльями. A380 имеют две полноценные палубы, и могут перевозить за один рейс до 853 пассажиров.</p>\n<p>Однако авиакомпании обычно делали ставку на роскошь и размещали меньше кресел за счет премиум-салонов. Например, Emirates установила в своих авиалайнерах-гигантах каюты первого класса, две полноценные ванные комнаты с душем и барную стойку.</p>	c23ed785-7405-4a14-a3a7-3e1f65646138.jpg	2021-09-05 16:44:18.213+00	2021-09-05 16:44:18.214+00	2021-09-05 16:44:18.214+00
11	Первый региональный аэропорт Украины преодолел отметку в миллион пассажиров	В конце августа Львов стал первым региональным аэропортом в Украине, который в 2021 году преодолел отметку в 1 млн пассажиров.	<p>По данным предприятия, с января по август оно обслужило 1 млн 54,6 тыс. пассажиров. Это на 27% меньше, чем в 2019 году, но больше показателя января-августа 2018 года.</p>\n<p>Только в августе 2021 года через воздушные ворота прошли 291,2 тыс. путешественников. Это на 15,7% превысило показатель докризисного августа 2019 года.</p>\n<p>Число рейсов в этом августе также увеличилось по сравнению с аналогичным месяцем 2019 года на 18,1% и составило 2 292.</p>\n<p>В 2021 году аэропорт Львов стал вторым аэропортом в стране по объему пассажиропотока и уступил по этому показателю только столичному Борисполю.</p>\n<p>Таким образом, два единственных государственных аэропорта в Украине заняли первое и второе место в стране по числу обслуженных пассажиров.</p>	e84bbec5-b426-425b-87cc-23e4cf65eacd.jpg	2021-09-05 16:46:47.592+00	2021-09-05 16:46:47.592+00	2021-09-05 16:46:47.592+00
12	Новые салоны самолетов Lufthansa: больше места для ручной клади, новые туалеты и освещение	Немецкая авиакомпания Lufthansa получила первый самолет Airbus A321neo с салоном по новой концепции Airspace Cabin и 4 сентября отправила его на свои рейсы.	<p>Эта концепция будет использоваться на новых авиалайнерах семейства Airbus A320, которые летают на рейсах средней протяженности и будут поступать в распоряжение Lufthansa и ее дочерних предприятий &mdash; Swiss, Brussels Airlines и Eurowings.</p>\n<p>Таким образом, новый салон смогут увидеть в том числе украинские пассажиры, поскольку в страну летают сразу три авиакомпании &mdash; Lufthansa, Swiss и Eurowings.</p>\n<p>Основной особенностью нового интерьера являются увеличенные на 40% полки для ручной клади. По заявлению Lufthansa, изменение их размера позволит размещать чемоданы пассажиров вертикально, в результате число предметов на полках можно увеличить на 60%.</p>\n<p><span>Такое решение уберет проблему недостатка места для ручной клади, из-за которой пассажиры вынуждены сдавать свои вещи в багаж непосредственно на борту самолета или размещать их на полках в другой части салона.</span></p>	88ec5027-b1f2-4543-a297-32d23dfc3cc7.jpg	2021-09-05 16:48:50.722+00	2021-09-05 16:48:50.722+00	2021-09-05 16:48:50.722+00
15	Авиакомпания сняла рекламу на вершине самого высокого здания в мире	Эмиратская авиакомпания Emirates сняла рекламу на вершине самого большого знания в мире Бурдж-Халива в Дубае.	<p>Героем ролика стала стюардесса авиаперевозчика. Ее выбрали из добровольцев, которые рискнули забраться на высоту 828 метров над землей.</p>\n<p>Идея ролика состоит в том, что камера крупным планом фиксирует таблички с рекламными лозунгами, которые сменяет стюардесса, а затем отдаляется и показывает сотрудницу авиакомпании на фоне панорамы Дубая.</p>\n<p>В Emirates отмечают, что рекламу сняли без использования спецэффектов и зеленого фона.</p>\n<p>Предварительно тренировки со стюардессой провели в ангаре с участием инструктора по прыжкам с парашюта.</p>	097d467c-0d26-4581-848f-8d06bd4767b1.jpg	2021-09-05 17:00:20.27+00	2021-09-05 17:00:20.27+00	2021-09-05 17:00:20.27+00
16	В аэропорту Катовице открыли терминал: как он выглядит после расширения	В польском аэропорту Катовице, который является крупной базой лоукостера Wizz Air, 5 августа открыли после значительного расширения и реконструкции терминал B.	<p><span>Работы длились с сентября 2019 года и включали изменение планировки здания, вынос фасада на привокзальную площадь и строительство посадочных галерей. К ним теперь можно пристыковать телескопические трапы &mdash; специальные рукава, которые позволяют пассажирам проходить прямо из зала вылета в самолет без необходимости выходить на улицу.</span></p>\n<p>Работы увеличили площадь терминала B на 5 тыс. квадратных метров &mdash; с 12,2 тыс. до 17,2 тыс. квадратных метров. Пропускная способность здания теперь составляет 4 млн пассажиров в год, а не 2 млн, как было ранее.</p>\n<p>Число стоек регистрации увеличили с 18 до 28 за счет освобождения места &mdash; контроль безопасности перенесли с первого на второй этаж.</p>\n<p><span>Обновленный зал вылета, куда попадают пассажиры после прохождения контроля на авиационную безопасность, теперь состоит из трех этажей. А число выходов на посадку увеличилось с 10 до 16. Это означает, что теперь за короткий промежуток времени в аэропорту можно организовать вылет 16 самолетов.</span></p>	564d259a-0a62-40c8-af87-557ef289de36.jpg	2021-09-05 17:08:34.185+00	2021-09-05 17:08:34.185+00	2021-09-05 17:08:34.185+00
\.


--
-- TOC entry 3085 (class 0 OID 32825)
-- Dependencies: 205
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price, rating, img, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3089 (class 0 OID 32857)
-- Dependencies: 209
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ratings (id, rate, "createdAt", "updatedAt", "userId", "productId") FROM stdin;
\.


--
-- TOC entry 3093 (class 0 OID 32904)
-- Dependencies: 213
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tags (id, name, "createdAt", "updatedAt") FROM stdin;
20	Ан-225 Мрия	2021-08-23 14:41:09.863+00	2021-08-23 14:41:09.863+00
21	Antonov	2021-08-23 14:41:09.896+00	2021-08-23 14:41:09.896+00
22	Одесса	2021-08-24 12:18:49.481+00	2021-08-24 12:18:49.481+00
23	Херсон	2021-08-24 12:23:35.017+00	2021-08-24 12:23:35.017+00
24	ремонт	2021-08-24 12:23:35.233+00	2021-08-24 12:23:35.233+00
25	Airbus	2021-09-05 16:44:18.2+00	2021-09-05 16:44:18.2+00
26	Львов	2021-09-05 16:46:47.588+00	2021-09-05 16:46:47.588+00
27	Lufthansa	2021-09-05 16:48:50.72+00	2021-09-05 16:48:50.72+00
28	Нова почта	2021-09-05 16:52:17.81+00	2021-09-05 16:52:17.81+00
29	Япония	2021-09-05 16:57:44.743+00	2021-09-05 16:57:44.743+00
30	Сингапур	2021-09-05 16:57:44.748+00	2021-09-05 16:57:44.748+00
31	Emirates	2021-09-05 17:00:20.266+00	2021-09-05 17:00:20.266+00
32	Польша	2021-09-05 17:08:34.159+00	2021-09-05 17:08:34.159+00
\.


--
-- TOC entry 3081 (class 0 OID 32784)
-- Dependencies: 201
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, username, role, "isActivated", "activationLink", "createdAt", "updatedAt") FROM stdin;
1	alexandr.tereschenko2014@gmail.com	$2b$05$f4TajHXcNSbrrua3UOduPOnVXI9Qrg3oPGmyxY3Z4i4U3j4IX/USG	alex	USER	f	69199e64-aeaf-41d8-a62f-202ae1dc7bcf	2021-08-23 19:45:44.864+00	2021-08-23 19:45:44.864+00
\.


--
-- TOC entry 3112 (class 0 OID 0)
-- Dependencies: 206
-- Name: basket_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.basket_products_id_seq', 1, false);


--
-- TOC entry 3113 (class 0 OID 0)
-- Dependencies: 202
-- Name: baskets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.baskets_id_seq', 1, true);


--
-- TOC entry 3114 (class 0 OID 0)
-- Dependencies: 216
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 4, true);


--
-- TOC entry 3115 (class 0 OID 0)
-- Dependencies: 214
-- Name: post_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_tags_id_seq', 29, true);


--
-- TOC entry 3116 (class 0 OID 0)
-- Dependencies: 210
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 16, true);


--
-- TOC entry 3117 (class 0 OID 0)
-- Dependencies: 204
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 1, false);


--
-- TOC entry 3118 (class 0 OID 0)
-- Dependencies: 208
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ratings_id_seq', 1, false);


--
-- TOC entry 3119 (class 0 OID 0)
-- Dependencies: 212
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tags_id_seq', 32, true);


--
-- TOC entry 3120 (class 0 OID 0)
-- Dependencies: 200
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- TOC entry 2926 (class 2606 OID 32844)
-- Name: basket_products basket_products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_pkey PRIMARY KEY (id);


--
-- TOC entry 2920 (class 2606 OID 32817)
-- Name: baskets baskets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);


--
-- TOC entry 2940 (class 2606 OID 32939)
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- TOC entry 2936 (class 2606 OID 32919)
-- Name: post_tags post_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_pkey PRIMARY KEY (id);


--
-- TOC entry 2938 (class 2606 OID 32921)
-- Name: post_tags post_tags_tagId_postId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT "post_tags_tagId_postId_key" UNIQUE ("tagId", "postId");


--
-- TOC entry 2930 (class 2606 OID 32901)
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- TOC entry 2922 (class 2606 OID 32836)
-- Name: products products_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);


--
-- TOC entry 2924 (class 2606 OID 32834)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 2928 (class 2606 OID 32862)
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- TOC entry 2932 (class 2606 OID 32911)
-- Name: tags tags_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_name_key UNIQUE (name);


--
-- TOC entry 2934 (class 2606 OID 32909)
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- TOC entry 2914 (class 2606 OID 32796)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 2916 (class 2606 OID 32794)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2918 (class 2606 OID 32798)
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- TOC entry 2942 (class 2606 OID 32845)
-- Name: basket_products basket_products_basketId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2943 (class 2606 OID 32850)
-- Name: basket_products basket_products_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2941 (class 2606 OID 32818)
-- Name: baskets baskets_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2948 (class 2606 OID 32940)
-- Name: comments comments_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2949 (class 2606 OID 32945)
-- Name: comments comments_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2947 (class 2606 OID 32927)
-- Name: post_tags post_tags_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT "post_tags_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2946 (class 2606 OID 32922)
-- Name: post_tags post_tags_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT "post_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public.tags(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2945 (class 2606 OID 32868)
-- Name: ratings ratings_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2944 (class 2606 OID 32863)
-- Name: ratings ratings_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2021-09-18 22:27:19

--
-- PostgreSQL database dump complete
--

