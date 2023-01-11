class Rungirl {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/run.png"),
            0, 0, 60.1, 60.1, 8, 0.08);
        this.x = 0;
        this.y = 270;
        this.speed = 300;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 1024) {
            this.x = 0;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}