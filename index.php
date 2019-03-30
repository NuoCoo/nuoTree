<html>
    <head>
        <title>nuoTree.js</title>
    </head>
    <style>
        .nuotree-hide{display: none};
    </style>
    <body>
    <table id="nuoTable" border="1">
        <thead>
        <tr>
            <th width="100">ID</th>
            <th width="100">PID</th>
            <th width="100">Name</th>
            <th width="100">Point</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    </body>
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="./master/nuoTree.js" ></script>
    <script>
        var tableData = [
            {id:1,pid:0,name:'测试1',point:123},
            {id:2,pid:0,name:'测试2',point:123},
            {id:3,pid:1,name:'测试3',point:123},
            {id:4,pid:2,name:'测试4',point:123},
            {id:5,pid:1,name:'测试5',point:123},
            {id:6,pid:2,name:'测试6',point:123},
            {id:7,pid:3,name:'测试7',point:123},
            {id:8,pid:4,name:'测试8',point:123},
            {id:9,pid:7,name:'测试9',point:123},
            {id:10,pid:1,name:'测试10',point:123},
            {id:11,pid:2,name:'测试11',point:123},
            {id:12,pid:3,name:'测12',point:123},
            {id:13,pid:4,name:'测试13',point:123},
        ];
        $(function () {
            nuoTree.init('#nuoTable', tableData);
        })
    </script>
</html>
