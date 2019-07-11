const apiMusic = {
  // comment: '/comment', // 获取评论
  // artists: '/artists', // 获取歌手单曲列表
  // artistAlbum: '/artist/album', // 获取歌手专辑列表
  // artistDesc: '/artist/desc', //  获取歌手信息
  recommendResource: '/recommend/resource', // 获取每日推荐歌单（用户级）
  recommendSongs: '/recommend/songs', // 获取每日推荐歌曲（用户级）
  // personalFm: '/personal_fm', // 私人FM(用户级)
  // dailySignin: '/daily_signin', // 签到(用户级)
  // likeMusic: '/like', // 添加喜欢的音乐(用户级)
  // fmTrash: '/fm_trash', // 将音乐从私人FM中移除至垃圾桶
  artistList: '/artist/list', // 获取歌手列表
  // newAlbum: '/top/albums', // 新碟上架
  // topArtists: '/top/artists', //  热门歌手
  // topList: '/top/list', //  音乐排行榜
  // privatecontent: '/personalized/privatecontent', // 独家放送
  // personalizedMv: '/personalized/mv', // 推荐MV
  // newSong: '/personalized/newsong', // 推荐音乐
  djProgram: '/personalized/djprogram', // 推荐电台
  // mv: '/mv', // 获取mv数据
  // simiMv: '/simi/mv', // 获取相似mv
  // mvComment: '/comment/mv', // 获取mv评论
  // playlistComment: '/comment/playlist', // 获取歌单评论
  // albumComment: '/comment/album', // 获取专辑评论
  // artistMv: '/artist/mv', // 获取歌手MV
  simiPlaylist: '/simi/playlist', // 相似歌单
  commentMusic: '/comment/music', // 歌曲评论
  toplist: '/toplist/detail',
  playlistDetail: '/playlist/detail', // 获取歌单详情
  topPlaylist: '/top/playlist', //  歌单(网友精选歌单)
  album: '/album', //  获取专辑内容
  search: '/search', // 搜素音乐
  lyric: '/lyric', // 获取歌词
  songDetail: '/song/detail', // 获取歌曲详情
  musicUrl: '/song/url', // 获取音乐url
  personalized: '/personalized', //  推荐歌单
  banner: '/banner', // banner pic
  allTag: '/playlist/catlist',
  hotSearch: '/search/hot', // 热搜建议
  loginEmail: '/login', // 邮箱登陆
  loginCellphone: '/login/cellphone', // 手机登陆
  logout: '/logout',
  userPlaylist: '/user/playlist', // 获取用户歌单
  userRecord: '/user/record' // history
}
export default apiMusic
