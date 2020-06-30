module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx } = this;
      
      await ctx.renderClient('home.js', { url: ctx.url, name: '书月秋亭' });
    }
  };
};