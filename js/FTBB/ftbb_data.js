// ES5 Pragma
"use strict";

// Ensure the library object is instantiated
var FTBB = FTBB || {};

(function () {
    // List of sports that arent hockey
    FTBB.sports = [
        "Baseball",
        "Basketball",
        "Billiards",
        "Bowling",
        "Boxing",
        "Cricket",
        "Golf",
        "Handball",
        "Football",
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

    // Year -> Month -> Day ->
    FTBB.schedule = {
        2016: {
            12: {
                1:{},
		6:{},
		8:{},
		15:{},
		18:{},
		29:{},
		31:{}
            }
        },
	2017: {
	    1: {
               9:{},
	       11:{},
               18:{},
               21:{},
               23:{},
               24:{}
	    },
	    2: {
	       7:{},
               10:{},
               11:{},
               14:{},
               28:{}
            },
	    3:{
	       3:{},
               4:{},
               6:{},
               8:{},
               11:{},
               19:{},
               21:{},
               26:{},
               30:{}
	    },
            4:{
               1:{},
               8:{}
            }
        }
    };
}());

//good news! The !f !adj !sports fans won't be taking up all the parking tonight!
//bad news! the !f !adj !sports fans will be in all the parking spots tonight! Stay home, don't even bother!
