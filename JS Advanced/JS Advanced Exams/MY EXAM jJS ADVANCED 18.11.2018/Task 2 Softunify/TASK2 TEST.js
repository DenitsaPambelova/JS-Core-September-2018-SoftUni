let expect=require('chai').expect;

class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

//
// describe('Test Softunify', function () {
//     let my;
//
//     beforeEach(function () {
//         my = new SoftUniFy();
//     });
//     it('initialize as empty object', function () {
//         expect(my.hasOwnProperty('allSongs')).to.equal(true, "Missing data property");
//     });
//     it('has functions attached to prototype ', function () {
//         expect(Object.getPrototypeOf(my).hasOwnProperty('downloadSong')).to.equal(true, "Missing add function");
//         expect(Object.getPrototypeOf(my).hasOwnProperty('playSong')).to.equal(true, "Missing sumNums function");
//         expect(Object.getPrototypeOf(my).hasOwnProperty('songsList')).to.equal(true, "Missing removeByFilter function");
//         expect(Object.getPrototypeOf(my).hasOwnProperty('rateArtist')).to.equal(true, "Missing removeByFilter function");
//         expect(Object.getPrototypeOf(my).hasOwnProperty('toString')).to.equal(false, "Missing toString function");
//     });
//     it('has property rate', function () {
//         my.allSongs.rate=1;
//         expect(my.allSongs.rate).to.equal(1);
//        // expect(my.downloadSong("Pesho", "Song", ['']) )
//        //  downloadSong(artist, song, lyrics) {
//        //      if (!this.allSongs[artist]) {
//        //          this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
//        //      }
//        //
//        //      this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);
//        //
//        //      return this;
//        //  }
//
//     });
//     it('has property votes', function () {
//         my.allSongs.votes = 1;
//         expect(my.allSongs.votes).to.equal(1);
//     });
//     it('downloadSong returns the entire class', function () {
//        expect(my.downloadSong()).to.be.equal(my);
//         //expect(my.allSongs.hasOwnProperty("songs")).to.be.true;
//     });
//     it ('rateArtist returns format properly',function () {
//
//         expect(my.rateArtist("Eminem")).to.be.equal("The Eminem is not on your artist list.");
//         //expect(my.allSongs.hasOwnProperty("songs")).to.be.true;
//     });
//     it ('rateArtist returns format properly',function () {
//
//         expect(my.rateArtist("Eminem",50)).to.be.equal("The Eminem is not on your artist list.");
//         //expect(my.allSongs.hasOwnProperty("songs")).to.be.true;
//     });
//     it ('downLoadSong returns format properly',function () {
//         my.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
//     expect(my.allSongs).to.not.be.equal(['Eminem', 'Phenomenal', 'IM PHENOMENAL...']);
//
//     });
//     it ('allsongs is empty',function(){
//         //my.songsList();
//         if (my.allSongs.size===0)
//         expect(my.songsList()).to.be.equal('Your song list is empty');
//     });
//     it('must initialize data to an empty object', function () {
//         expect(my.allSongs instanceof Object).to.equal(true, 'Data must be of type object');
//         //expect(my.allSongs.size).to.equal(0, 'Data object must be initialized empty');
//     });
//
// });



describe("SoftUniFly tests", function () {

    describe("Constructor tests", function () {
        it("Should be initialized correctly", function() {
            const fly = new SoftUniFy();
            expect(fly.allSongs).to.be.eql({});
            expect(Object.keys(fly.allSongs).length).to.be.equal(0);
            expect(fly.allSongs.toString()).to.be.equal('[object Object]');
            expect(fly.songsList).to.be.equal('Your song list is empty');
        });
    });
    describe("DownloadSong", function () {
        it("Should be tested", function() {
            const fly = new SoftUniFy();
            fly.downloadSong('Test', 'TestSong', 'TestLirics');
            expect(fly.songsList).to.be.equal('TestSong - TestLirics');
            expect(Object.keys(fly.allSongs).length).to.be.equal(1);
        });
    });
    describe("PlaySong", function () {
        it("Should be tested playing", function() {
            const fly = new SoftUniFy();
            fly.downloadSong('Test', 'TestSong', 'TestLirics');
            fly.downloadSong('Test1', 'TestSong1', 'TestLirics1');
            expect(fly.songsList).to.be.equal('TestSong - TestLirics\nTestSong1 - TestLirics1');
            expect(Object.keys(fly.allSongs).length).to.be.equal(2);
            expect(fly.playSong('TestSong')).to.be.equal('Test:\nTestSong - TestLirics\n');
        });
        it("Should be tested empty playing", function() {
    const fly = new SoftUniFy();
    expect(fly.playSong('TestSong')).to.be.equal(`You have not downloaded a TestSong song yet. Use SoftUniFy's function downloadSong() to change that!`);
});
})
describe("Rate artist", function () {
    it("Should be tested rating", function() {
        const fly = new SoftUniFy();
        fly.downloadSong('Test', 'TestSong', 'TestLirics');
        fly.downloadSong('Test1', 'TestSong1', 'TestLirics1');
        fly.rateArtist('Test', 50);
        expect(fly.rateArtist('Test')).to.be.equal(50);
    });
});
});