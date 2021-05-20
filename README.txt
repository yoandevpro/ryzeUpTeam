#my functions:
    getTeamStats()
    getUserStats(player)
    getQueueStats(player)
    getSeasonStats(player)
    getUsername(player));
    getSeasonStats(player)
    
#r6APIstats functions:

     API.getLeaderboard(platform, region, page)
      API.getGenericStats(ENVyoan, platform)
      API.getSesonalStats(ENVthibault, platform)
    API.getOperatorStats(ENVvincent, platform)
    API.getWeaponCategoryStats(ENVyoan, platform).then(weaponsStats => {console.log(weaponsStats.categories.forEach(category => {console.log(category.category)}))})