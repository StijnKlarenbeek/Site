import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        scholing: [
            {
                title: 'ICT - INF',
                date: 'Sep 2015 - Jul 2019',
                location: 'Hogeschool het Saxion, Enschede',
                animation: 'fade-up',
                animationDelay: '150',
                animationDuration: '750',
                style: {
                    'padding-top': 0,
                }
            },
            {
                title: 'Havo/VWO',
                date: 'Sep 2011 - Jul 2015',
                location: 'De Waerdenborch, Holten',
                animation: 'fade-up',
                animationDelay: '300',
                animationDuration: '750',
            }
        ],
        workExperience: {
            pagination : {
                totalPages: 2,
                currentPage: 1,
                perPage: 3,
                total: 6
            },
            items: [
                {
                    title: 'Afstudeerstage',
                    date: 'Feb 2019 - heden',
                    'location': 'Mobina IT, Enschede',
                    animation: 'fade-up',
                    animationDelay: '150',
                    animationDuration: '750',
                    style: {
                        'padding-top': 0,
                        width: '45%'
                    }
                },
                {
                    title: 'JR. Software engineer',
                    date: 'Mei 2018 - heden',
                    location: 'ISV Software B.V., Enschede',
                    animation: 'fade-up',
                    animationDelay: '300',
                    animationDuration: '750',
                    style: {
                        width: '45%'
                    }
                },
                {
                    title: 'Co Founder',
                    date: 'Dec 2016 - Sep 2018',
                    location: 'Suprentive, Enschede',
                    animation: 'fade-up',
                    animationDelay: '450',
                    animationDuration: '750',
                    style: {
                        width: '45%'
                    }
                },
                {
                    title: 'Stagiair',
                    date: 'Sep 2017 - Jan 2018',
                    location: 'Sigmax Law Enforcement, Enschede',
                    animation: 'fade-up',
                    animationDelay: '450',
                    animationDuration: '750',
                    style: {
                        'padding-top': 0,
                        width: '45%'
                    }
                },
                {
                    title: 'Keukenmedewerker',
                    date: 'Mrt 2015 - Dec 2017',
                    location: 'Erve Brooks, Gelselaar',
                    animation: 'fade-up',
                    animationDelay: '450',
                    animationDuration: '750',
                    style: {
                        width: '45%'
                    }
                },
                {
                    title: 'Inpakker/Magazijn',
                    date: 'Apr 2013 - Mrt. 2015',
                    location: 'De Jumbo, Goor',
                    animation: 'fade-up',
                    animationDelay: '450',
                    animationDuration: '750',
                    style: {
                        width: '45%'
                    }
                }
            ],
        },
        skills: {
            interval: 10,
            seconds: 5000 / 1000,
            percentTime: 0,
            currentActive: 9,
            items: [
                {
                    title: 'CSS 3',
                    active: false,
                    background: '#67D3FF',
                    animation: 'fade-up',
                    animationDelay: '150',
                    animationDuration: '750',
                },
                {
                    title: 'HTML 5',
                    active: false,
                    background: '#FF8C67',
                    animation: 'fade-up',
                    animationDelay: '250',
                    animationDuration: '750',
                },
                {
                    title: 'PHP 7',
                    active: false,
                    background: '#B067FF',
                    animation: 'fade-up',
                    animationDelay: '350',
                    animationDuration: '750',
                },
                {
                    title: 'SQL',
                    active: false,
                    background: '#F367FF',
                    animation: 'fade-up',
                    animationDelay: '450',
                    animationDuration: '750',
                },
                {
                    title: 'JavaScript',
                    active: false,
                    background: '#FFE467',
                    animation: 'fade-up',
                    animationDelay: '550',
                    animationDuration: '750',
                },
                {
                    title: 'Java',
                    active: false,
                    background: '#008AFF',
                    animation: 'fade-up',
                    animationDelay: '550',
                    animationDuration: '750',
                },
                {
                    title: 'Android',
                    active: false,
                    background: '#67FFB2',
                    animation: 'fade-up',
                    animationDelay: '650',
                    animationDuration: '750',
                },
                {
                    title: 'Python',
                    active: false,
                    background: 'linear-gradient(to top right, #FFE867, #676EFF)',
                    animation: 'fade-up',
                    animationDelay: '650',
                    animationDuration: '750',
                },
                {
                    title: 'Java FX',
                    active: false,
                    background: '#FF6787',
                    animation: 'fade-up',
                    animationDelay: '750',
                    animationDuration: '750',
                },
                {
                    title: 'Vue.js',
                    active: true,
                    background: '#76DEB6',
                    animation: 'fade-up',
                    animationDelay: '850',
                    animationDuration: '750',
                }
            ]
        },
        contact: {
            animation: {
                colOne: {
                    animation: 'fade-up',
                    animationDelay: '150',
                    animationDuration: '750',
                },
                colTwo: {
                    animation: 'fade-up',
                    animationDelay: '300',
                    animationDuration: '750',
                },
            },
            items: [
                {
                    title: 'Geslacht',
                    info: 'Man'
                },
                {
                    title: 'Naam',
                    info: 'Stijn Klarenbeek'
                },
                {
                    title: 'Adres',
                    info: 'Merelstraat 75, 7471GB Goor'
                },
                {
                    title: 'Geboortedatum',
                    info: '6 Maart 1998',
                },
                {
                    title: 'Telefoonnummer',
                    info: '+31(6)11333548',
                },
                {
                    title: 'E-mail',
                    info: 's.klarenbeek@hotmail.com',
                    linkable: true,
                    type: 'mail',
                    class: {
                        'email': true
                    }
                }
            ]
        },
    },
    getters: {
        getScholing: state => {
            return state.scholing;
        },
        getWorkExperience: state => {
            return state.workExperience;
        },
        getSkills: state => {
            return state.skills;
        },
        getContact: state => {
            return state.contact
        }
    },
    mutations: {},
    actions: {}
})
