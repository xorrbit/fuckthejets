// ES5 Pragma
"use strict";

// Ensure the library object is instantiated
var FTBB = FTBB || {};

(function () {
    // List of sports that arent football
    FTBB.sports = [
        "Baseball",
        "Basketball",
        "Billiards",
        "Bowling",
        "Boxing",
        "Cricket",
        "Golf",
        "Handball",
        "Hockey",
        "Lacrosse",
        "Rugby",
        "Tennis"
    ];

    // List of mean adjectives
    FTBB.adj = [
        "Abysmal",
        "Annoying",
        "Appalling",
        "Atrocious",
        "Awful",
        "Belligerent",
        "Boorish",
        "Corrupt",
        "Criminal",
        "Dastardly",
        "Deplorable",
        "Deprived",
        "Despicable",
        "Detrimental",
        "Disgusting",
        "Disheveled",
        "Dishonorable",
        "Dismal",
        "Dumb",
        "Evil",
        "Faulty",
        "Filthy",
        "Ghastly",
        "Grotesque",
        "Haggard",
        "Homely",
        "Horrendous",
        "Horrible",
        "Hurtful",
        "Idiotic",
        "Ignorant",
        "Immature",
        "Insane",
        "Intolerant",
        "Irresponsible",
        "Lumpy",
        "Machiavellian",
        "Menacing",
        "Nasty",
        "Noxious",
        "Offensive",
        "Oppressive",
        "Poisonous",
        "Pompous",
        "Pug Fugly",
        "Questionable",
        "Reptilian",
        "Repulsive",
        "Revolting",
        "Rotten",
        "Rude",
        "Shoddy",
        "Sickening",
        "Sinister",
        "Smelly",
        "Stinky",
        "Stupid",
        "Suspicious",
        "Terrible",
        "Ugly",
        "Unfavorable",
        "Unpleasant",
        "Unsatisfactory",
        "Unsightly",
        "Unwanted",
        "Unwelcome",
        "Vile",
        "Villainous",
        "Vulgar",
        "Worthless",
        "Yucky"
    ];

    // Year -> Month -> Day -> Hour, Minute, Team, Place
    FTBB.schedule = {
        2016: {
            6: {
                8: {
                    hour: 19,
                    minute: 0,
                    team: "Montreal",
                    place: "Home"
                },
                13: {
                    hour: 18,
                    minute: 0,
                    team: "Ottawa",
                    place: "Away"
                },
                24: {
                    hour: 19,
                    minute: 30,
                    team: "Montreal",
                    place: "Home"
                }
            },
            7: {
                1: {
                    hour: 21,
                    minute: 0,
                    team: "Calgary",
                    place: "Away"
                },
                7: {
                    hour: 18,
                    minute: 0,
                    team: "Hamilton",
                    place: "Away"
                },
                14: {
                    hour: 19,
                    minute: 30,
                    team: "Edmonton",
                    place: "Home"
                },
                21: {
                    hour: 19,
                    minute: 30,
                    team: "Calgary",
                    place: "Home"
                },
                28: {
                    hour: 20,
                    minute: 0,
                    team: "Edmonton",
                    place: "Away"
                }
            },
            8: {
                3: {
                    hour: 19,
                    minute: 30,
                    team: "Hamilton",
                    place: "Home"
                },
                12: {
                    hour: 18,
                    minute: 30,
                    team: "Toronto",
                    place: "Away"
                },
                26: {
                    hour: 18,
                    minute: 0,
                    team: "Montreal",
                    place: "Away"
                }
            },
            9: {
                4: {
                    hour: 14,
                    minute: 0,
                    team: "Saskatchewan",
                    place: "Away"
                },
                10: {
                    hour: 15,
                    minute: 0,
                    team: "Saskatchewan",
                    place: "Home"
                },
                17: {
                    hour: 13,
                    minute: 0,
                    team: "Toronto",
                    place: "Home"
                },
                24: {
                    hour: 15,
                    minute: 0,
                    team: "Calgary",
                    place: "Away"
                },
                30: {
                    hour: 19,
                    minute: 30,
                    team: "Edmonton",
                    place: "Home"
                }
            },
            10: {
                8: {
                    hour: 15,
                    minute: 0,
                    team: "BC",
                    place: "Home"
                },
                14: {
                    hour: 21,
                    minute: 0,
                    team: "BC",
                    place: "Away"
                },
                29: {
                    hour: 15,
                    minute: 0,
                    team: "Ottawa",
                    place: "Home"
                }
            },
            11: {
                4: {
                    hour: 18,
                    minute: 0,
                    team: "Ottawa",
                    place: "Away"
                }
            }
        }
    };
}());

//good news! The !f !adj !sports fans won't be taking up all the parking tonight!
//bad news! the !f !adj !sports fans will be in all the parking spots tonight! Stay home, don't even bother!
