import orgSelectObj from "../page_objects/common_pages/orgSelect.obj.js";

class orgSelection{
    async orgSelectAction (){
        await driver.elementClick(orgSelectObj.selectOrg);
    }
}
export default new orgSelection();