const find = await import('appium-flutter-finder');

class orgSelectObj{
    get selectOrg(){
        return find.bySemanticsLabel('Smrity test hospital ');
    }
    get drugsTabTxt(){
        return find.byText('Drugs');
    }
    get orgTxt(){
        return find.byText('Select Organization');
    }
}
export default new orgSelectObj();