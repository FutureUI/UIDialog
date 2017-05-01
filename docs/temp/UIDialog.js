(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module != "undefined" && typeof module.exports != "undefined") {
        module.exports = factory();
    } else {
        window["UIDialog"] = factory();
    }
})(function() {
    var Dialog = {};
    var alert = UIModal();
    alert.onshown = function(text) {
        this.el.innerHTML = '<div class="ui-dialog"><div class="ui-alert">' 
        + '<div>' + text + '</div>' 
        + '<div><a href="javascript:void(0)">确定</a></div>' 
        + '</div></div>';
        var _this = this;
        this.el.addEventListener('click', function(e) {
            var el = this.target;
            if (el.name == 'A') {
                _this.close();
            }
        });
    }
    var confirm = UIModal();
    confirm.onshown = function(text, cb) {
        this.el.innerHTML = '<div class="ui-dialog"><div class="ui-confirm">' 
        + '<div>' + text + '</div>' 
        + '<div><a href="javascript:void(0)" data-act="close">取消</a><a href="javascript:void(0)" data-act="confirm">确定</a></div>' 
        + '</div></div>';
        var _this = this;
        this.el.addEventListener('click', function(e) {
            var el = this.target;
            if (el.name == 'A') {
                var data = el.getAttribute('data-act');
                if (data == 'close') _this.close();
                if (data == 'confirm') cb();
            }
        })
    }
    Dialog.alert = alert.show;
    Dialog.confirm = confirm.show;
    return Dialog;
})