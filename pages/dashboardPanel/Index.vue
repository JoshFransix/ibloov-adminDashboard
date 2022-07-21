<template>
  <div>
    <div id='zohoSupportWebToCase' align='center'>
      <form name='zsWebToCase_757212000000220001' id='zsWebToCase_757212000000220001'
        action='https://desk.zoho.com/support/WebToCase' method='POST' onSubmit='return zsValidateMandatoryFields()'
        enctype='multipart/form-data'> <input type='hidden' name='xnQsjsdp'
          value='edbsnedd452fade55818564e449cede7e03fa' />
        <input type='hidden' name='xmIwtLD'
          value='edbsn49fa765c0bc9d94d0e3323e82365d1e36ccc292d57ef2e8e74b9fe52799501bf' />
        <input type='hidden' name='xJdfEaS' value='' /> <input type='hidden' name='actionType' value='Q2FzZXM=' />
        <input type="hidden" id="property(module)" value="Cases" /> <input type="hidden"
          id="dependent_field_values_Cases"
          value="&#x7b;&quot;JSON_VALUES&quot;&#x3a;&#x7b;&#x7d;,&quot;JSON_SELECT_VALUES&quot;&#x3a;&#x7b;&#x7d;,&quot;JSON_MAP_DEP_LABELS&quot;&#x3a;&#x5b;&#x5d;&#x7d;" />
        <input type='hidden' name='returnURL' value='https&#x3a;&#x2f;&#x2f;ibloovadmin.netlify.app&#x2f;' />
        <table border='0' cellspacing='0' class='zsFormClass'>
          <tr>
            <td colspan='2' class='zsFontClass'><strong>Web Form</strong></td>
          </tr><br>
          <tr>
            <td nowrap class='zsFontClass ' width='25%' align='left'>First Name&nbsp;&nbsp;</td>
            <td align='left' width='75%'><input type='text' maxlength='120' name='First Name' value='' /></td>
          </tr>
          <tr>
            <td nowrap class='zsFontClass ' width='25%' align='left'>Last Name&nbsp;&nbsp;</td>
            <td align='left' width='75%'><input type='text' maxlength='120' name='Contact Name' class='manfieldbdr' />
            </td>
          </tr>
          <tr>
            <td nowrap class='zsFontClass ' width='25%' align='left'>Email&nbsp;&nbsp;</td>
            <td align='left' width='75%'><input type='text' maxlength='120' name='Email' value='' class='manfieldbdr' />
            </td>
          </tr>
          <tr>
            <td nowrap class='zsFontClass ' width='25%' align='left'>Subject&nbsp;&nbsp;</td>
            <td align='left' width='75%'><input type='text' maxlength='255' name='Subject' value=''
                class='manfieldbdr' />
            </td>
          </tr>
          <tr>
            <td nowrap class='zsFontClass ' width='25%' align='left'>Phone&nbsp;&nbsp;</td>
            <td align='left' width='75%'><input type='text' maxlength='120' name='Phone' value='' /></td>
          </tr>
          <tr>
            <td nowrap class='zsFontClass ' width='25%' align='left'>Description &nbsp;&nbsp;</td>
            <td align='left' width='75%'> <textarea name='Description' maxlength='3000' width='250'
                height='250'></textarea>
            </td>
          </tr>
          <tr>
            <td style='padding: 11px 5px 0px 5px;' colspan='2' align='center' width='25%'> <input type='submit'
                id="zsSubmitButton_757212000000220001" class='zsFontClass' value='Submit'> &nbsp; &nbsp; <input
                type='button' class='zsFontClass' value='Reset' onclick="zsResetWebForm('757212000000220001')"> </td>
          </tr>
          <tr>
            <td width='25%' align='left'></td>
            <td style='padding: 0px 5px;' align='left' width='75%'>
              <div class='wb_FtCon wb_common'><span>powered by </span><a target='_blank' rel='noopener noreferrer'
                  href='https://zoho.com/desk' class='wb_logoCon'><img class='wb_logo'
                    src='https://d1ydxa2xvtn0b5.cloudfront.net/app/images/portalLogo.de847024ebc0131731a3.png' /></a>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {

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
</style>