var GAME_LEVELS = [
  ["    v         v      v             v      v       v      v       v         v    ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx        y         x!!!x          ",
   "                                                                 xx!xx          ",
   "                                   xxxxx                          xvx        e  ",
   "                                                                            xxxx",
   "xxxx                        e             o o                                x  ",
   "  x                     o                                                    x  ",
   "  x       e   y                      e   xxxxx                             o x  ",
   "  x          xxxx       o                                          e         x  ",
   "  x  @       xwwx                          e e                   xxxxx       x  ",
   "  xxxxxxxxxxxxwwxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                 zz           x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "zzzzzzzzzzzzzzzz              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       xxxxxx         xxxxxxx      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!x   ",
   "                                      x!!!x        x!!!!x         x     x      x                                  ",
   "                                      x!v!xxxxxxxxxxx!v!x      xxxx     xxxx   x                             x!x  ",
   "   @                                                    x     xx           xx  x                             x!x  ",
   "                                                        x     xx           xx  x                             x!x  ",
   "                                                        x     xx           xx  x                o    o    o  x!x  ",
   " xxxx                                 xx!!!x!!x!!!xx    x    xx             xxxx                o  | o    o  x!x  ",
   "    x            xx             xx     xxxxxxxxxx!!x    xxxxxx     oo   oo                      o    o  | o  x!x  ",
   "    x          xx  xxx                          xx!x    x          oo   oo                                  xx!x  ",
   "  y x        xx          xxxxx                   x!x    x                                    xxxxxxxxxxxxxxxx!!x  ",
   "xxxxx!!!xx xx                                    xvx    x          x     x              x!!!!!!!!!!!!!!!!!!!!!xx  ",
   "      v                 |                                     xx|     |    | xx       x  !xxxxxxxxxxxxxxxxxxxxx   ",
   "ooo                 xxx                                      xx              xx      x   !xxxxxxxxxxxxxxxxxxxxx   ",
   "ooo           x|xx|                                        xx                xx   xxx    !xxxxxxxxxxxxxxxxxxxxx   ",
   "ooo      x=          ooo    x                             xx                    xx       !xxxxxxxxxxxxxxxxxxxxx   ",
   "xxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxxxxxxx    xx!!!!!!!!!!!xx            v      x                 ",
   "           v                                                   xxxx!!!!!xxxx  xx                x                 ",
   "                                                                  xxxxxxx        xxx         xxx                  ",
   "                                               x     x                             x         x                    ",
   "                                               x     xx                          x x         x x                  ",
   "                                            |  x     x                             x         x                    ",
   "                                       o       x     x  xx                         xx        x                    ",
   "                                         x =   xx    x                             x         x                    ",
   "                 ooo                      xx x x     xx     o  o     xx  x         x         x                    ",
   "               xxxxxxx        xxx   xxx        x     x        =      x   x         x         x                    ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x    xx               x  xx   x        x      x                    ",
   "     o       x         x        x   x          x     x               x   x   x               x                    ",
   "    xxx      x         x        x   x          x     x               xx  xxxxx   xx         xx                    ",
   "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x   o     x                    ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!xxxxxxxxxxxxxxxxxx xx  o    xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                        v                            =  |   |                           !    !   !            ",
   "                                                            v                           v    v   v            ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  @           o   o                                            o                                              ",
   "xxxxx   xxx  xx  xx   =          |              xx     xx      xxx   xxx | xx                                 ",
   "                   xxxx   o    x    xx        xx                      v                                       ",
   "                       xxxx             o   xx                               xxxxx                       o    ",
   "                                      xxxxx                                        x                   o  x   ",
   "                                                                                    x                oxx  x   ",
   "                                                                                     x             o      x   ",
   "                                                                                       xxxxxxxxxxxxx      xx  ",
   "                                        x                                                         x!!!!!!x    ",
   "                                       xxx                                                         xxxxxx     ",
   "                                       x x                                 xxx                               x",
   "                                       x x                                 xxx                                ",
   "                                       x x                  x          x      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                     oooo   x       xxx                            ",
   "                                      x   x                            x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x  o   x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              xxx                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x         o x                     xxx                               ",
   "                                     xx   xx          x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x            xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                  xxx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx      xxx     xxx        x     x     x                                         x!!!x                xxx  ",
   "  x xxxxxxx   xxxxx   xxx     x    xxx    x    o                                     xxx                 x x  ",
   "  x                     x     x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                         xxxx          x         oo                   x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x          |         |         x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               xxxxx       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x   y             x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                    xxx       ",
   "         |  |             o                                                                                   ",
   "                                                                                             o o oxxx         ",
   "                   xxx                                                                         x              ",
   "       !  o  !                           xxxxxxx  x  x     xxx    xx      x   x   xx     xxx   x              ",
   "       x     x          x                   x     x  x    x   x   x xx    x   x  xx     xx     x              ",
   "       x  o  x            x      xxx        x     xxxx    xxxxx   x  xx   x   x x        xx            ooo    ",
   "       x     x  =               x           x     x  x    x   x   x    xx x   x  xx      xx            ooo    ",
   "       !  o  !            o     x           x     x  x    x   x   x      xx   x   xx   xxx     x       ooo    ",
   "                =              x                                                                              ",
   "          o              xxx                                                                                  ",
   "                            xx                                                                                ",
   "                                oo                                                                            ",
   "                   x=             x                   xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                    |                                      o                                                  ",
   "                       x  o                                o      =      o     xx     xx                      ",
   "                                                          xx     xx      o                   xx               ",
   "     ooo     xxx         xxx         xxx                                 xx                                   ",
   "     ooo                        xxx                                                    xx                     ",
   "     ooo                                                          |                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o x                                o                xxx                 ",
   "  x  | @    x   x       x   x       x   xx              o |   o          o    x     xx                        ",
   "  xy        xxxxx   o   xxxxx   o   xxxxx       oo                       o                                    ",
   "  xx   xx    o            o            o      xxxxx       xx     xx     xxx                                   ",
   "        x=                                   =x   x           x         xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;

