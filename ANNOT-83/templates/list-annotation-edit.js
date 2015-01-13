define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"background-color:"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.category)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.abbreviation)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program5(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  
  return "edit-on";
  }

function program9(depth0,data) {
  
  
  return " (double-click to edit)";
  }

function program11(depth0,data) {
  
  
  return " ";
  }

function program13(depth0,data) {
  
  
  return "disabled";
  }

function program15(depth0,data) {
  
  
  return "has-duration";
  }

function program17(depth0,data) {
  
  
  return "no-duration";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <span class=\"scaling\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMine), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scalevalue), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n        </span>\n        ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <select class=\"edit\">\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.scalevalues), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </select>\n                ";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isSelected), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                        ";
  return buffer;
  }
function program22(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <span class=\"read-only\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scalevalue)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scalevalue)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                ";
  return buffer;
  }

function program26(depth0,data) {
  
  
  return "\n        <i class=\"private icon-user\" title=\"You own this annotation\"></i>\n        ";
  }

function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "title=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.category)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.abbreviation)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\"";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <span class=\"abbreviation\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.abbreviation)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                    <span class=\"label-value print\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scalevalue), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n                ";
  return buffer;
  }
function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <span class=\"scalevalue print\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scalevalue)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.scalevalue)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</span>\n                    ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"no-label\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                ";
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <i class=\"icon-info-sign\" title=\"added by ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.created_by_nickname), {hash:{},inverse:self.program(38, program38, data),fn:self.program(36, program36, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " on ";
  if (helper = helpers.track) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.track); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n        ";
  return buffer;
  }
function program36(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.created_by_nickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_by_nickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program38(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.nickname || (depth0 && depth0.nickname),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_by), options) : helperMissing.call(depth0, "nickname", (depth0 && depth0.created_by), options)));
  }

function program40(depth0,data) {
  
  
  return "\n        <i class=\"delete icon-trash\" title=\"Delete annotation.\"></i>\n        ";
  }

function program42(depth0,data) {
  
  
  return "\n        <i class=\"toggle-edit icon-pencil\" title=\"Edit annotation.\"></i>\n        ";
  }

function program44(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " \n        <span class=\"text\">\n                <span class=\"freetext\">\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMine), {hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <span class=\"read-only\">";
  if (helper = helpers.textReadOnly) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.textReadOnly); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n                </span>\n        </span>\n        ";
  return buffer;
  }
function program45(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <textarea class=\"edit\" placeholder=\"free text...\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n                    ";
  return buffer;
  }

  buffer += "<tr class=\"header-container\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.label)),stack1 == null || stack1 === false ? stack1 : stack1.category), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.label), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditEnable), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <td class=\"left\">\n        <a href=\"#";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"proxy-anchor\"></a>\n        <button class=\"btn in edit\" title=\"Set the video playhead as start point.\">IN</button>\n        <span class=\"start\">\n                <input title=\"Start time";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMine), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"start-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"start-value\" type=\"text\" value=\""
    + escapeExpression((helper = helpers.time || (depth0 && depth0.time),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start), options) : helperMissing.call(depth0, "time", (depth0 && depth0.start), options)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditEnable), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></input>\n        </span>\n\n        <span class=\"end ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.duration), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                <input title=\"End time";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMine), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" id=\"end-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"end-value\" type=\"text\" value=\""
    + escapeExpression((helper = helpers.end || (depth0 && depth0.end),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start), (depth0 && depth0.duration), options) : helperMissing.call(depth0, "end", (depth0 && depth0.start), (depth0 && depth0.duration), options)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditEnable), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "></input>\n        </span>\n        <button class=\"btn out edit\" title=\"Set the video playhead as end point.\">OUT</button>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scalevalues), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n        \n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMine), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        \n        <span class=\"category\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.label), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.label), {hash:{},inverse:self.program(33, program33, data),fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n    </td>\n\n    <td class=\"right\">\n        <i class=\"icon-comment-amount\" title=\"";
  if (helper = helpers.numberOfComments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.numberOfComments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Comment(s)\"><span class=\"comment-amount\">";
  if (helper = helpers.numberOfComments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.numberOfComments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></i>\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.created_by), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  options={hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data}
  if (helper = helpers.canBeDeleted) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.canBeDeleted); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.canBeDeleted) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMine), {hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n</tr>\n<tr id=\"text-container";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"in text-container ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isEditEnable), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <td colspan=\"2\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.label), {hash:{},inverse:self.program(44, program44, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n</tr>";
  return buffer;
  })

});