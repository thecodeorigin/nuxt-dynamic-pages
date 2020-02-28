// This is where you can get stuff, FOR FREE! YAY!
// Use this.$shop_item_name to get your variable in any where
/////////////////////////////////////////////////////////////
///////             List of shop's items             ////////
/////////////////////////////////////////////////////////////
///////       Use it with this.$shop_item_name       ////////
/////////////////////////////////////////////////////////////
// - base_url
// - api_url
// - fake(DATA_NAME)
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export default ({ app }, inject) => {
    // Example call this.$base_url() in any where // 'http://localhost:3000' is the result
    inject('base_url', () => { return 'http://localhost:3000' });
    inject('api_url', () => { return 'http://localhost:8000' });
    inject('fake', (data_name) => {  // Get seed data in ~/data
        // You must have module.exports = ... in your data_file.js
        return require('~/data/fake/' + data_name + '.js');
    });
}