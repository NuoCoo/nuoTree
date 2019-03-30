window.nuoTree = {
    element:'',
    tableData:[],
    treeData:[],
    init:function (element,tableData) {
        const that = this;
        if((typeof element) !== 'string'){
            console.log('nuoTree Error: init Function 缺少 element 参数');
            return false;
        }
        
        if((typeof tableData) !== 'object'){
            console.log('nuoTree Error: init Function 缺少 tableData 参数');
            return false;
        }
        if($(element).find('tbody').length <= 0){
        
        }
        that.tableData =  tableData;
        that.element =  element;
        tableData.forEach(function(val){
            if(parseInt(val.pid) == 0){
                that.treeData[val.id] = val;
            }
        });
        
        that.treeData.forEach(function(item){
            $(element).find('tbody').append(" <tr nuoTree-id='"+item.id+"' nuoTree-pid='"+item.pid+"' class='nuoTree-children'>\n" +
                "            <th width=\"100\">"+item.id+"</th>\n" +
                "            <th width=\"100\">"+item.pid+"</th>\n" +
                "            <th width=\"100\">"+item.name+"</th>\n" +
                "            <th width=\"100\">"+item.point+"</th>\n" +
                "        </tr>");
        });
    },
    children:function (pid, obj) {
        const that = this;
        that.treeData = [];
        tableData.forEach(function(val){
            if(parseInt(val.pid) == pid){
                that.treeData[val.id] = val;
            }
        });

        that.treeData.forEach(function(item){
            $(obj).after(" <tr nuoTree-id='"+item.id+"' nuoTree-pid='"+item.pid+"' class='nuoTree-children'>\n" +
                "            <th width=\"100\">--"+item.id+"</th>\n" +
                "            <th width=\"100\">"+item.pid+"</th>\n" +
                "            <th width=\"100\">"+item.name+"</th>\n" +
                "            <th width=\"100\">"+item.point+"</th>\n" +
                "        </tr>");
        });
    },

    
    log:function (msg) {
        console.log(msg);
    } ,

    fasdfa:function () {
        const that = this;
        $(document).on('click', ".nuoTree-children", function () {
           var nuotree_id = $(this).attr('nuotree-id');
            if($(this).hasClass('open')){
               var $nextObj = $(this).nextAll();
                $nextObj.each(function () {
                   if($(this).attr('nuotree-pid') == nuotree_id){
                       $(this).addClass('nuotree-hide');
                   } else{
                       return true;
                   }
                });
                $(this).removeClass('open')
                return false;
            }
            $(this).addClass('open');
            that.children($(this).attr('nuotree-id'), this);
        });
        $(document).on('click', ".nuoTree-childrens", function () {
            console.log(this, 'nuoTree-childrens');
        });
    },
};
nuoTree.fasdfa();
