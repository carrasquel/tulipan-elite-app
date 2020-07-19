// teams.js

var vm2 = new Tulipan({

  template: {
      url: "views/teams.html",
      async: false
  },
  
  route: "/leagues/:id",

  data: {
      progress: true,
      name: "teams",
      teams: [],
  },

  methods: {

    after: function(params, query){
      this.resetTeams();
      var leagueId = params.id;
      this.progress = true,
      this.$http.get('http://elite-schedule.net/api/leaguedata/' + leagueId)
      .then(function (res){
        this.$set("teams", res.data.teams);
        this.progress = false;
      }, function(err){
        console.log(err);
      }) 
    },

    resetTeams: function(){
      this.$set("teams", {});
    },

    selectTeam: function(teamId){
      console.log(teamId);
      this.$router.navigate("#!/leagues/team/" + teamId);
    }
  }
});