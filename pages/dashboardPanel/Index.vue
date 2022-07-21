<template>
  <div>
    <div id="zohoSupportWebToCase" align='center'>
      <form name="zsWebToCase_757212000000220001" id="zsWebToCase_757212000000220001"
        ref="zsWebToCase_757212000000220001" action="https://desk.zoho.com/support/WebToCase" method='POST'
        @submit="zsValidateMandatoryFields()" enctype="multipart/form-data"> <input type="hidden"
          name="xnQsjsdp" value="edbsnedd452fade55818564e449cede7e03fa" />
        <input type="hidden" name="xmIwtLD"
          value="edbsn49fa765c0bc9d94d0e3323e82365d1e36ccc292d57ef2e8e74b9fe52799501bf" />
        <input type="hidden" name="xJdfEaS" value="" /> <input type="hidden" name="actionType" value="Q2FzZXM=" />
        <input type="hidden" id="property(module)" value="Cases" /> <input type="hidden"
          id="dependent_field_values_Cases"
          
           />
        <input type="hidden" name="returnURL" value="https://ibloovadmin.netlify.app/" />
        <table border="0" cellspacing="0" class="zsFormClass">
          <thead>
            <td colspan="2" class="zsFontClass"><strong>Web Form</strong></td>
          </thead><br>
          <tbody>
          <tr>
            <td nowrap class="zsFontClass " width="25%" align="left">First Name  </td>
            <td align="left" width="75%"><input type="text" maxlength="120" name="First Name" value="" /></td>
          </tr>
          <tr>
            <td nowrap class="zsFontClass " width="25%" align="left">Last Name  </td>
            <td align="left" width="75%"><input type="text" maxlength="120" name="Contact Name" class="manfieldbdr" />
            </td>
          </tr>
          <tr>
            <td nowrap class="zsFontClass " width="25%" align="left">Email  </td>
            <td align="left" width="75%"><input type="text" maxlength="120" name="Email" value="" class="manfieldbdr" />
            </td>
          </tr>
          <tr>
            <td nowrap class="zsFontClass " width="25%" align="left">Subject  </td>
            <td align="left" width="75%"><input type="text" maxlength="255" name="Subject" value=""
                class="manfieldbdr" />
            </td>
          </tr>
          <tr>
            <td nowrap class="zsFontClass " width="25%" align="left">Phone  </td>
            <td align="left" width="75%"><input type="text" maxlength="120" name="Phone" value="" /></td>
          </tr>
          <tr>
            <td nowrap class="zsFontClass " width="25%" align="left">Description   </td>
            <td align="left" width="75%"> <textarea name="Description" maxlength="3000" width="250"
                height="250"></textarea>
            </td>
          </tr>
          <tr>
            <td style="padding: 11px 5px 0px 5px; margin-right:10px" colspan="2" align="center" width="25%"> <input type="submit"
                id="zsSubmitButton_757212000000220001" ref="zsSubmitButton_757212000000220001" class="zsFontClass"
                value="Submit"> &nbsp; &nbsp; <input type="button" class="zsFontClass" value="Reset"
                @click="zsResetWebForm('757212000000220001')"> </td>
          </tr>
          <tr>
            <td width="25%" align="left"></td>
            <td style="padding: 0px 5px;" align="left" width="75%">
              <div class="wb_FtCon wb_common"><span>powered by </span><a target="_blank" rel="noopener noreferrer"
                  href="https://zoho.com/desk" class="wb_logoCon"><img class="wb_logo"
                    src="https://d1ydxa2xvtn0b5.cloudfront.net/app/images/portalLogo.de847024ebc0131731a3.png" /></a>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newElement: 'test'
    }
  },
  // render(createElement) {
  //   let newHeading = createElement("h1", {}, "Hello World")
  //   console.log(newHeading)
  //   // this.newElement = newHeading
  //   return newHeading
  // },
  // mounted() {
  //   console.log(this.newElement)
  // },
  // methods: {
  //   trimBoth(str) {
  //     return jQuery.trim(str);
  //   },
  //   setAllDependancyFieldsMapping() {
  //     var mapDependancyLabels = this.getMapDependenySelectValues(jQuery("[id='property(module)']").val(), "JSON_MAP_DEP_LABELS");
  //     if (mapDependancyLabels) {
  //       for (var i = 0; i < mapDependancyLabels.length; i++) {
  //         var label = mapDependancyLabels[i]
  //         var obj = this.$refs.zsWebToCase_757212000000220001[label]
  //         if (obj) {
  //           this.setDependent(obj, true);
  //         }
  //       }
  //     }
  //   },
  //   getMapDependenySelectValues(module, key) {
  //     var dependencyObj = jQuery.parseJSON(jQuery("[id='dependent_field_values_" + module + "']").val())
  //     if (dependencyObj == undefined) { return dependencyObj; }
  //     return dependencyObj[key];
  //   },
  //   setDependent(obj, isload) {
  //     var name = obj.id || (obj[0] && obj[0].id) || ""
  //     var module = jQuery("[id='property(module)']").val()
  //     var val = ""
  //     var myObject = this.getMapDependenySelectValues(module, "JSON_VALUES")
  //     if (myObject != undefined) { val = myObject[name] }
  //     var mySelObject = this.getMapDependenySelectValues(module, "JSON_SELECT_VALUES")
  //     if (val != null && val != "" && val != "null" && mySelObject) {
  //       var fields = val
  //       for (var i in fields) {
  //         if (fields.hasOwnProperty(i)) {
  //           var isDependent = false
  //           var label = i
  //           var values = fields[i]
  //           if (label.indexOf(")") > -1) {
  //             label = label.replace(/\)/g, '_____')
  //           }
  //           if (label.indexOf("(") > -1) {
  //             label = label.replace(/\(/g, '____')
  //           }
  //           if (label.indexOf(".") > -1) {
  //             label = label.replace(/\./g, '___')
  //           }
  //           var depObj = this.$refs.zsWebToCase_757212000000220001[label];
  //           if (depObj && depObj.options) {
  //             var mapValues = ""
  //             var selected_val = depObj.value
  //             var depLen = depObj.options.length - 1
  //             for (var n = depLen; n >= 0; n--) {
  //               if (depObj.options[n].selected) {
  //                 if (mapValues == "") {
  //                   mapValues = depObj.options[n].value
  //                 } else {
  //                   mapValues = mapValues + ";;;" + depObj.options[n].value
  //                 }
  //               }
  //               depObj.value = ""
  //               var selectValues = mySelObject[label]
  //               for (var k in values) {
  //                 var rat = k
  //                 if (rat == "-None-") { rat = "" }
  //                 var parentValues = mySelObject[name]
  //                 if (rat == trimBoth(obj.value)) {
  //                   isDependent = true
  //                   depObj.length = 0
  //                   var depvalues = values[k]
  //                   var depLen = depvalues.length - 1
  //                   for (var j = 0; j <= depLen; j++) {
  //                     var optionElement = document.createElement("OPTION")
  //                     var displayValue = depvalues[j]
  //                     var actualValue = displayValue
  //                     if (actualValue == "-None-") {

  //                     }
  //                   }
  //                 }
  //               }
  //             }

  //           }
  //         }
  //       }
  //     }
  //   }
  // }

}
</script>

<style scoped>
/* Styling 1 */
#zohoSupportWebToCase textarea,
#zohoSupportWebToCase input[type='text'],
#zohoSupportWebToCase select,
.wb_common {
  width: 280px;
}

#zohoSupportWebToCase td {
  padding: 11px 5px;
}

#zohoSupportWebToCase textarea,
#zohoSupportWebToCase input[type='text'],
#zohoSupportWebToCase select {
  border: 1px solid #ddd;
  padding: 3px 5px;
  border-radius: 3px;
}

#zohoSupportWebToCase select {
  box-sizing: unset
}

#zohoSupportWebToCase .wb_selectDate {
  width: auto
}

#zohoSupportWebToCase input.wb_cusInput {
  width: 108px
}

.wb_FtCon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
  padding-left: 10px
}

.wb_logoCon {
  display: flex;
  margin-left: 5px
}

.wb_logo {
  max-width: 16px;
  max-height: 16px;
}

.zsFormClass {
  background-color: #FFFFFF;
  width: 600px
}

/* Styling 2 */
.zsFontClass {
  color: #000000;
  font-family: Arial;
  font-size: 13px
}

/* Styling 3 */
.manfieldbdr {
  border-left: 1px solid #FF6448 !important
}

.hleft {
  text-align: left;
}

input[type=file]::-webkit-file-upload-button {
  cursor: pointer;
}

.wtcsepcode {
  margin: 0px 15px;
  color: #aaa;
  float: left;
}

.wtccloudattach {
  float: left;
  color: #00a3fe !important;
  cursor: pointer;
  text-decoration: none !important;
}

.wtccloudattach:hover {
  text-decoration: none !important;
}

.wtcuploadinput {
  cursor: pointer;
  float: left;
  width: 62px;
  margin-top: -20px;
  opacity: 0;
  clear: both;
}

.wtcuploadfile {
  float: left;
  color: #00A3FE;
}

.filenamecls {
  margin-right: 15px;
  float: left;
  margin-top: 5px;
}

.clboth {
  clear: both;
}

#zsFileBrowseAttachments {
  clear: both;
  margin: 5px 0px 10px;
}

.zsFontClass {
  vertical-align: top;
}

#tooltip-zc {
  font: normal 12px Arial, Helvetica, sans-serif;
  line-height: 18px;
  position: absolute;
  padding: 8px;
  margin: 20px 0 0;
  background: #fff;
  border: 1px solid #528DD1;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  color: #eee;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  color: #777
}

.wtcmanfield {
  color: #f00;
  font-size: 16px;
  position: relative;
  top: 2px;
  left: 1px;
}

#zsCloudAttachmentIframe {
  width: 100%;
  height: 100%;
  z-index: 99999 !important;
  position: fixed;
  left: 0px;
  top: 0px;
  border-style: none;
  display: none;
  background-color: #fff;
}

.wtchelpinfo {
  background-position: -246px -485px;
  width: 15px;
  height: 15px;
  display: inline-block;
  position: relative;
  top: 2px;
  background-image: url('https://css.zohostatic.com/support/5238869/images/zs-mpro.png');
}

.zsMaxSizeMessage {
  font-size: 13px;
}
 /* Id=property(module)
          :value="{"JSON_VALUES":{},"JSON_SELECT_VALUES":{},"JSON_MAP_DEP_LABELS":[]}" */
</style>
