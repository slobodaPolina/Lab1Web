var app = new Vue({
  el: '#app',
  data () {
			return {
				cardsData: [
					{
						title: {
							text: 'Обыкновенная тупайя',
							link: 'https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D1%82%D1%83%D0%BF%D0%B0%D0%B9%D1%8F'
						},
						area: 'обитает в Юго-Восточной Азии: на полуострове Малакка и на островах Малайского архипелага',
						information: 'Типичная тупайя похожа своим пушистым хвостом и заострённой мордочкой на белку. Длина тела в среднем 19,5 см, хвоста — 16,5; весит тупайя около 140 г. Характерны маленькие хрящевые уши, короткие вибриссы и довольно небольшие глаза, направленные в стороны. Все конечности пятипалые, вооружены длинными острыми когтями. Насчитывают порядка 49 подвидов обыкновенной тупайи.',
						rubrics: [
              'Домен: 	Эукариоты',
              'Царство: 	Животные',
              'Тип: 	Хордовые',
              'Класс: 	Млекопитающие',
              'Отряд: 	Тупайи',
              'Семейство: 	Тупайевые',
              'Род: 	Обыкновенные тупайи',
              'Вид: 	Обыкновенная тупайя'
						],
						specialities: 'Поедая пищу, они, подобно белкам, держат её в передних лапках, сидя на задних. Известны случаи, когда тупайи поедали плоды на плантациях и похищали пищу из жилых домов.'
					},
					{
						title: {
							text: 'Злая щитоспинка',
							link: 'https://ru.wikipedia.org/wiki/%D0%97%D0%BB%D0%B0%D1%8F_%D1%89%D0%B8%D1%82%D0%BE%D1%81%D0%BF%D0%B8%D0%BD%D0%BA%D0%B0'
						},
						area: 'Обитает в северной Аргентине, на востоке Боливии, западе Парагвая.',
						information: 'Общая длина достигает 13 см. Голова короткая, толстая. У этой лягушки очень широкий рот. Глаза навыкате. Туловище уплощённое и имеет овальную форму. Кожа бугристая и морщинистая. Взрослые особи имеют тёмную окраску спины и боков, на котором располагаются мелкие красноватые и желтоватые пятна. Молодые имеют светло-зелёный рисунок на бежевом фоне.',
						rubrics: [
              'Домен: 	Эукариоты',
              'Царство: 	Животные',
              'Тип: 	Хордовые',
              'Класс: 	Земноводные',
              'Отряд: 	Бесхвостые',
              'Семейство: 	Ceratophryidae',
              'Род: 	Щитоспинки',
              'Вид: 	Злая щитоспинка'
						],
						specialities: 'Питается мелкими грызунами, лягушками, ракообразными, рыбой, для этих лягушек достаточно обычен каннибализм.'
					},
					{
						title: {
							text: 'Тупорылый крокодил',
							link: 'https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%BF%D0%BE%D1%80%D1%8B%D0%BB%D1%8B%D0%B9_%D0%BA%D1%80%D0%BE%D0%BA%D0%BE%D0%B4%D0%B8%D0%BB'
						},
						area: 'Широко распространён в пресноводных водоёмах Западной Африки.',
						information: 'Размер взрослого тупорылого крокодила обычно не превышает 1,5 м, максимальная зарегистрированная длина составляет 1,9 м. Окраска чёрная, на животе жёлтая с чёрными пятнами. Из-за небольших размеров этот вид подвергается повышенной опасности со стороны хищников, в результате он имеет хорошо бронированные бока, шею и хвост по сравнению с другими крокодилами. Своё название тупорылый крокодил получил благодаря короткой тупой морде. Челюсти этого вида содержат 60—64 зуба.',
						rubrics: [
              'Домен: 	Эукариоты',
              'Царство: 	Животные',
              'Тип: 	Позвоночные',
              'Класс: 	Пресмыкающиеся',
              'Отряд: 	Крокодилы',
              'Семейство: 	Настоящие крокодилы',
              'Род: 	Тупорылые крокодилы',
              'Вид: 	Тупорылый крокодил'
						],
						specialities: 'Тупорылый крокодил — скрытное и робкое животное, ведёт ночной образ жизни. Питается главным образом позвоночными и крупными беспозвоночными (улитками), может поедать падаль. Охотится обычно в воде или на берегу, но в дождливое время заходит далеко от берега.' +
            'Роет довольно большие норы, в которых прячется большую часть дня. Также может прятаться в корнях прибрежных деревьях.'
					}
				]
			};
		}
});
