'use strict';
var $userfeedback$api$startFeedback$$ = function($configuration$jscomp$3_script$jscomp$16$$, $argArray_opt_productData_value$jscomp$173$$, $opt_window$jscomp$5_serverUri$$) {
  $configuration$jscomp$3_script$jscomp$16$$.timeOfStartCall = (new Date).getTime();
  var $src$jscomp$10_win$jscomp$11$$ = $opt_window$jscomp$5_serverUri$$ || $goog$global$$, $doc$jscomp$36$$ = $src$jscomp$10_win$jscomp$11$$.document, $nonce$jscomp$6$$ = $goog$getScriptNonce$$($src$jscomp$10_win$jscomp$11$$);
  $nonce$jscomp$6$$ && ($configuration$jscomp$3_script$jscomp$16$$.nonce = $nonce$jscomp$6$$);
  if ("help" == $configuration$jscomp$3_script$jscomp$16$$.flow) {
    var $href$jscomp$1_isValidPsd_startFeedback$$ = $goog$getObjectByName$$("document.location.href", $src$jscomp$10_win$jscomp$11$$);
    !$configuration$jscomp$3_script$jscomp$16$$.helpCenterContext && $href$jscomp$1_isValidPsd_startFeedback$$ && ($configuration$jscomp$3_script$jscomp$16$$.helpCenterContext = $href$jscomp$1_isValidPsd_startFeedback$$.substring(0, 1200));
    $href$jscomp$1_isValidPsd_startFeedback$$ = !0;
    if ($argArray_opt_productData_value$jscomp$173$$ && JSON && JSON.stringify) {
      var $psdJson$$ = JSON.stringify($argArray_opt_productData_value$jscomp$173$$);
      ($href$jscomp$1_isValidPsd_startFeedback$$ = 1200 >= $psdJson$$.length) && ($configuration$jscomp$3_script$jscomp$16$$.psdJson = $psdJson$$);
    }
    $href$jscomp$1_isValidPsd_startFeedback$$ || ($argArray_opt_productData_value$jscomp$173$$ = {invalidPsd:!0});
  }
  $argArray_opt_productData_value$jscomp$173$$ = [$configuration$jscomp$3_script$jscomp$16$$, $argArray_opt_productData_value$jscomp$173$$, $opt_window$jscomp$5_serverUri$$];
  $src$jscomp$10_win$jscomp$11$$.GOOGLE_FEEDBACK_START_ARGUMENTS = $argArray_opt_productData_value$jscomp$173$$;
  $opt_window$jscomp$5_serverUri$$ = $configuration$jscomp$3_script$jscomp$16$$.serverUri || "//www.google.com/tools/feedback";
  if ($href$jscomp$1_isValidPsd_startFeedback$$ = $src$jscomp$10_win$jscomp$11$$.GOOGLE_FEEDBACK_START) {
    $href$jscomp$1_isValidPsd_startFeedback$$.apply($src$jscomp$10_win$jscomp$11$$, $argArray_opt_productData_value$jscomp$173$$);
  } else {
    $src$jscomp$10_win$jscomp$11$$ = $opt_window$jscomp$5_serverUri$$ + "/load.js?";
    for (var $key$jscomp$100$$ in $configuration$jscomp$3_script$jscomp$16$$) {
      $argArray_opt_productData_value$jscomp$173$$ = $configuration$jscomp$3_script$jscomp$16$$[$key$jscomp$100$$], null != $argArray_opt_productData_value$jscomp$173$$ && !$goog$isObject$$($argArray_opt_productData_value$jscomp$173$$) && ($src$jscomp$10_win$jscomp$11$$ += encodeURIComponent($key$jscomp$100$$) + "=" + encodeURIComponent($argArray_opt_productData_value$jscomp$173$$) + "&");
    }
    $configuration$jscomp$3_script$jscomp$16$$ = ($doc$jscomp$36$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($doc$jscomp$36$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)).$b$.createElement("SCRIPT");
    $nonce$jscomp$6$$ && $configuration$jscomp$3_script$jscomp$16$$.setAttribute("nonce", $nonce$jscomp$6$$);
    $goog$dom$safe$setScriptSrc$$($configuration$jscomp$3_script$jscomp$16$$, new $goog$html$TrustedResourceUrl$$($goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$, $src$jscomp$10_win$jscomp$11$$, null));
    $doc$jscomp$36$$.body.appendChild($configuration$jscomp$3_script$jscomp$16$$);
  }
};
$goog$exportSymbol$$("userfeedback.api.startFeedback", $userfeedback$api$startFeedback$$);
var $mr$FeedbackUtils$ProductInfo$$ = function() {
  this.$g$ = this.$f$ = this.$s$ = this.modelName = this.$h$ = this.$b$ = this.$logs$ = "";
  this.$o$ = this.$m$ = this.$l$ = !1;
};
var $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_BUG_OR_ERROR$$ = chrome.i18n.getMessage("4163185390680253103"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_FEATURE_REQUEST$$ = chrome.i18n.getMessage("492097680647953484"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_PROJECTION_QUALITY$$ = chrome.i18n.getMessage("2575016469622936324"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_DISCOVERY$$ = chrome.i18n.getMessage("128276876460319075"), $mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_OTHER$$ = chrome.i18n.getMessage("3326722026796849289"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_FREEZES$$ = chrome.i18n.getMessage("1018984561488520517"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_JERKY$$ = chrome.i18n.getMessage("8205999658352447129"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_STUTTER$$ = chrome.i18n.getMessage("5723583529370342957"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_SMOOTH$$ = chrome.i18n.getMessage("1550904064710828958"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_PERFECT$$ = chrome.i18n.getMessage("5014364904504073524"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$ = chrome.i18n.getMessage("2194670894476780934"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_UNWATCHABLE$$ = chrome.i18n.getMessage("6614468912728530636"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_POOR$$ = chrome.i18n.getMessage("5910595154486533449"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_ACCEPTABLE$$ = chrome.i18n.getMessage("5363086287710390513"), $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GOOD$$ = chrome.i18n.getMessage("244647017322945605"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GREAT$$ = chrome.i18n.getMessage("5375576275991472719"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_UNINTELLIGIBLE$$ = chrome.i18n.getMessage("4592127349908255218"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_POOR$$ = chrome.i18n.getMessage("843316808366399491"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_ACCEPTABLE$$ = chrome.i18n.getMessage("5699813974548050528"), $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_GOOD$$ = chrome.i18n.getMessage("8515148417333877999"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_PERFECT$$ = chrome.i18n.getMessage("1636686747687494376"), $mr$feedback$Messages$MSG_MR_FEEDBACK_DISCARD_CONFIRMATION$$ = chrome.i18n.getMessage("4148300086676792937"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SENDING$$ = chrome.i18n.getMessage("3219866268410307919"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_FAIL$$ = chrome.i18n.getMessage("9211708838274008657"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_SUCCESS$$ = chrome.i18n.getMessage("8706273405040403641"), 
$mr$feedback$Messages$MSG_MR_FEEDBACK_RESENDING$$ = chrome.i18n.getMessage("4756056595565370923"), $mr$feedback$Messages$MSG_MR_FEEDBACK_LOGS_HEADER$$ = chrome.i18n.getMessage("7876724262035435114"), $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_LOGS$$ = chrome.i18n.getMessage("5485620192329479690"), $mr$feedback$Messages$MSG_MR_FEEDBACK_FINE_LOGS_WARNING$$ = chrome.i18n.getMessage("6963873398546068901"), $mr$feedback$Messages$MSG_MR_FEEDBACK_OK$$ = chrome.i18n.getMessage("3567591856726172993"), $mr$feedback$Messages$MSG_MR_FEEDBACK_YOUR_ANSWER$$ = 
chrome.i18n.getMessage("3239956785410157548");
var $goog$html$sanitizer$AttributeWhitelist$$ = {"* ARIA-CHECKED":!0, "* ARIA-COLCOUNT":!0, "* ARIA-COLINDEX":!0, "* ARIA-DESCRIBEDBY":!0, "* ARIA-DISABLED":!0, "* ARIA-GOOG-EDITABLE":!0, "* ARIA-LABEL":!0, "* ARIA-LABELLEDBY":!0, "* ARIA-MULTILINE":!0, "* ARIA-MULTISELECTABLE":!0, "* ARIA-ORIENTATION":!0, "* ARIA-PLACEHOLDER":!0, "* ARIA-READONLY":!0, "* ARIA-REQUIRED":!0, "* ARIA-ROLEDESCRIPTION":!0, "* ARIA-ROWCOUNT":!0, "* ARIA-ROWINDEX":!0, "* ARIA-SELECTED":!0, "* ABBR":!0, "* ACCEPT":!0, "* ACCESSKEY":!0, 
"* ALIGN":!0, "* ALT":!0, "* AUTOCOMPLETE":!0, "* AXIS":!0, "* BGCOLOR":!0, "* BORDER":!0, "* CELLPADDING":!0, "* CELLSPACING":!0, "* CHAROFF":!0, "* CHAR":!0, "* CHECKED":!0, "* CLEAR":!0, "* COLOR":!0, "* COLSPAN":!0, "* COLS":!0, "* COMPACT":!0, "* COORDS":!0, "* DATETIME":!0, "* DIR":!0, "* DISABLED":!0, "* ENCTYPE":!0, "* FACE":!0, "* FRAME":!0, "* HEIGHT":!0, "* HREFLANG":!0, "* HSPACE":!0, "* ISMAP":!0, "* LABEL":!0, "* LANG":!0, "* MAX":!0, "* MAXLENGTH":!0, "* METHOD":!0, "* MULTIPLE":!0, 
"* NOHREF":!0, "* NOSHADE":!0, "* NOWRAP":!0, "* OPEN":!0, "* READONLY":!0, "* REQUIRED":!0, "* REL":!0, "* REV":!0, "* ROLE":!0, "* ROWSPAN":!0, "* ROWS":!0, "* RULES":!0, "* SCOPE":!0, "* SELECTED":!0, "* SHAPE":!0, "* SIZE":!0, "* SPAN":!0, "* START":!0, "* SUMMARY":!0, "* TABINDEX":!0, "* TITLE":!0, "* TYPE":!0, "* VALIGN":!0, "* VALUE":!0, "* VSPACE":!0, "* WIDTH":!0}, $goog$html$sanitizer$AttributeSanitizedWhitelist$$ = {"* USEMAP":!0, "* ACTION":!0, "* CITE":!0, "* HREF":!0, "* LONGDESC":!0, 
"* SRC":!0, "LINK HREF":!0, "* FOR":!0, "* HEADERS":!0, "* NAME":!0, "A TARGET":!0, "* CLASS":!0, "* ID":!0, "* STYLE":!0};
var $module$contents$goog$html$CssSpecificity_specificityCache$$ = {};
function $module$contents$goog$html$CssSpecificity_getSpecificity$$($selector$jscomp$3$$) {
  if ($goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$(9)) {
    return [0, 0, 0, 0];
  }
  var $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_specificityCache$$.hasOwnProperty($selector$jscomp$3$$) ? $module$contents$goog$html$CssSpecificity_specificityCache$$[$selector$jscomp$3$$] : null;
  if ($selector$jscomp$inline_1139_specificity$$) {
    return $selector$jscomp$inline_1139_specificity$$;
  }
  65536 < Object.keys($module$contents$goog$html$CssSpecificity_specificityCache$$).length && ($module$contents$goog$html$CssSpecificity_specificityCache$$ = {});
  var $specificity$jscomp$inline_1140$$ = [0, 0, 0, 0];
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithPlainText$$($selector$jscomp$3$$, /\\[0-9A-Fa-f]{6}\s?/g);
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithPlainText$$($selector$jscomp$inline_1139_specificity$$, /\\[0-9A-Fa-f]{1,5}\s/g);
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithPlainText$$($selector$jscomp$inline_1139_specificity$$, /\\./g);
  $selector$jscomp$inline_1139_specificity$$ = $selector$jscomp$inline_1139_specificity$$.replace(/:not\(([^\)]*)\)/g, "     $1 ");
  $selector$jscomp$inline_1139_specificity$$ = $selector$jscomp$inline_1139_specificity$$.replace(/{[^]*/gm, "");
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$inline_1139_specificity$$, $specificity$jscomp$inline_1140$$, /(\[[^\]]+\])/g, 2);
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$inline_1139_specificity$$, $specificity$jscomp$inline_1140$$, /(#[^\#\s\+>~\.\[:]+)/g, 1);
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$inline_1139_specificity$$, $specificity$jscomp$inline_1140$$, /(\.[^\s\+>~\.\[:]+)/g, 2);
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$inline_1139_specificity$$, $specificity$jscomp$inline_1140$$, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$inline_1139_specificity$$, $specificity$jscomp$inline_1140$$, /(:[\w-]+\([^\)]*\))/gi, 2);
  $selector$jscomp$inline_1139_specificity$$ = $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$inline_1139_specificity$$, $specificity$jscomp$inline_1140$$, /(:[^\s\+>~\.\[:]+)/g, 2);
  $selector$jscomp$inline_1139_specificity$$ = $selector$jscomp$inline_1139_specificity$$.replace(/[\*\s\+>~]/g, " ");
  $selector$jscomp$inline_1139_specificity$$ = $selector$jscomp$inline_1139_specificity$$.replace(/[#\.]/g, " ");
  $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$inline_1139_specificity$$, $specificity$jscomp$inline_1140$$, /([^\s\+>~\.\[:]+)/g, 3);
  $selector$jscomp$inline_1139_specificity$$ = $specificity$jscomp$inline_1140$$;
  return $module$contents$goog$html$CssSpecificity_specificityCache$$[$selector$jscomp$3$$] = $selector$jscomp$inline_1139_specificity$$;
}
function $module$contents$goog$html$CssSpecificity_replaceWithEmptyText$$($selector$jscomp$4$$, $specificity$jscomp$1$$, $regex$$, $typeIndex$$) {
  return $selector$jscomp$4$$.replace($regex$$, function($match$jscomp$10$$) {
    $specificity$jscomp$1$$[$typeIndex$$] += 1;
    return Array($match$jscomp$10$$.length + 1).join(" ");
  });
}
function $module$contents$goog$html$CssSpecificity_replaceWithPlainText$$($selector$jscomp$5$$, $regex$jscomp$1$$) {
  return $selector$jscomp$5$$.replace($regex$jscomp$1$$, function($match$jscomp$11$$) {
    return Array($match$jscomp$11$$.length + 1).join("A");
  });
}
;var $module$contents$goog$html$sanitizer$CssPropertySanitizer_ALLOWED_FUNCTIONS$$ = {rgb:!0, rgba:!0, alpha:!0, rect:!0, image:!0, "linear-gradient":!0, "radial-gradient":!0, "repeating-linear-gradient":!0, "repeating-radial-gradient":!0, "cubic-bezier":!0, matrix:!0, perspective:!0, rotate:!0, rotate3d:!0, rotatex:!0, rotatey:!0, steps:!0, rotatez:!0, scale:!0, scale3d:!0, scalex:!0, scaley:!0, scalez:!0, skew:!0, skewx:!0, skewy:!0, translate:!0, translate3d:!0, translatex:!0, translatey:!0, translatez:!0}, 
$module$contents$goog$html$sanitizer$CssPropertySanitizer_NORM_URL_REGEXP$$ = /[\n\f\r"'()*<>]/g, $module$contents$goog$html$sanitizer$CssPropertySanitizer_NORM_URL_REPLACEMENTS$$ = {"\n":"%0a", "\f":"%0c", "\r":"%0d", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "*":"%2a", "<":"%3c", ">":"%3e"};
function $module$contents$goog$html$sanitizer$CssPropertySanitizer_normalizeUrlChar$$($ch$jscomp$4$$) {
  return $goog$asserts$assert$$($module$contents$goog$html$sanitizer$CssPropertySanitizer_NORM_URL_REPLACEMENTS$$[$ch$jscomp$4$$]);
}
var $goog$html$sanitizer$CssPropertySanitizer$sanitizeProperty$$ = function($JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$, $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$, $match$jscomp$12_opt_uriRewriter$$) {
  $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$ = $goog$string$internal$trim$$($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$);
  if ("" == $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$) {
    return null;
  }
  if (0 == $goog$string$internal$caseInsensitiveCompare$$("url(", $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.substr(0, 4))) {
    if (!$JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.endsWith(")") || 1 < ($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$ ? $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.split("(").length - 1 : 0) || 1 < ($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$ ? $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.split(")").length - 1 : 0) || !$match$jscomp$12_opt_uriRewriter$$) {
      $JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$ = null;
    } else {
      a: {
        $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$ = $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.substring(4, $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.length - 1);
        for (var $i$jscomp$inline_1148$$ = 0; 2 > $i$jscomp$inline_1148$$; $i$jscomp$inline_1148$$++) {
          var $quoteChar$jscomp$inline_1149$$ = "\"'".charAt($i$jscomp$inline_1148$$);
          if ($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.charAt(0) == $quoteChar$jscomp$inline_1149$$ && $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.charAt($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.length - 1) == $quoteChar$jscomp$inline_1149$$) {
            $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$ = $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.substring(1, $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.length - 1);
            break a;
          }
        }
      }
      $JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$ = $match$jscomp$12_opt_uriRewriter$$ ? ($JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$ = $match$jscomp$12_opt_uriRewriter$$($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$, $JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$)) && "about:invalid#zClosurez" != $goog$html$SafeUrl$unwrapTrustedURL$$($JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$).toString() ? 
      'url("' + $goog$html$SafeUrl$unwrapTrustedURL$$($JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$).toString().replace($module$contents$goog$html$sanitizer$CssPropertySanitizer_NORM_URL_REGEXP$$, $module$contents$goog$html$sanitizer$CssPropertySanitizer_normalizeUrlChar$$) + '")' : null : null;
    }
    return $JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$;
  }
  if (0 < $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$.indexOf("(")) {
    if (/"|'/.test($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$)) {
      return null;
    }
    for ($JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$ = /([\-\w]+)\(/g; $match$jscomp$12_opt_uriRewriter$$ = $JSCompiler_temp$jscomp$445_propName$jscomp$1_regex$jscomp$2_safeUri$jscomp$inline_1154$$.exec($JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$);) {
      if (!($match$jscomp$12_opt_uriRewriter$$[1] in $module$contents$goog$html$sanitizer$CssPropertySanitizer_ALLOWED_FUNCTIONS$$)) {
        return null;
      }
    }
  }
  return $JSCompiler_inline_result$jscomp$446_propValue_str$jscomp$inline_1145$$;
};
function $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$($className$jscomp$14_ctor$jscomp$2$$, $descriptor$jscomp$4_property$jscomp$8$$) {
  $className$jscomp$14_ctor$jscomp$2$$ = $goog$global$$[$className$jscomp$14_ctor$jscomp$2$$];
  return $className$jscomp$14_ctor$jscomp$2$$ && $className$jscomp$14_ctor$jscomp$2$$.prototype ? ($descriptor$jscomp$4_property$jscomp$8$$ = Object.getOwnPropertyDescriptor($className$jscomp$14_ctor$jscomp$2$$.prototype, $descriptor$jscomp$4_property$jscomp$8$$)) && $descriptor$jscomp$4_property$jscomp$8$$.get || null : null;
}
function $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$($className$jscomp$15_ctor$jscomp$3$$, $method$jscomp$8$$) {
  return ($className$jscomp$15_ctor$jscomp$3$$ = $goog$global$$[$className$jscomp$15_ctor$jscomp$3$$]) && $className$jscomp$15_ctor$jscomp$3$$.prototype && $className$jscomp$15_ctor$jscomp$3$$.prototype[$method$jscomp$8$$] || null;
}
var $module$contents$goog$html$sanitizer$noclobber_Methods$ATTRIBUTES_GETTER$$ = $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("Element", "attributes") || $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("Node", "attributes"), $module$contents$goog$html$sanitizer$noclobber_Methods$HAS_ATTRIBUTE$$ = $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("Element", "hasAttribute"), $module$contents$goog$html$sanitizer$noclobber_Methods$GET_ATTRIBUTE$$ = 
$module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("Element", "getAttribute"), $module$contents$goog$html$sanitizer$noclobber_Methods$SET_ATTRIBUTE$$ = $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("Element", "setAttribute"), $module$contents$goog$html$sanitizer$noclobber_Methods$REMOVE_ATTRIBUTE$$ = $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("Element", "removeAttribute"), $module$contents$goog$html$sanitizer$noclobber_Methods$GET_ELEMENTS_BY_TAG_NAME$$ = 
$module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("Element", "getElementsByTagName"), $module$contents$goog$html$sanitizer$noclobber_Methods$MATCHES$$ = $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("Element", "matches") || $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("Element", "msMatchesSelector"), $module$contents$goog$html$sanitizer$noclobber_Methods$NODE_NAME_GETTER$$ = $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("Node", 
"nodeName"), $module$contents$goog$html$sanitizer$noclobber_Methods$NODE_TYPE_GETTER$$ = $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("Node", "nodeType"), $module$contents$goog$html$sanitizer$noclobber_Methods$PARENT_NODE_GETTER$$ = $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("Node", "parentNode"), $module$contents$goog$html$sanitizer$noclobber_Methods$STYLE_GETTER$$ = $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("HTMLElement", "style") || $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("Element", 
"style"), $module$contents$goog$html$sanitizer$noclobber_Methods$SHEET_GETTER$$ = $module$contents$goog$html$sanitizer$noclobber_getterOrNull$$("HTMLStyleElement", "sheet"), $module$contents$goog$html$sanitizer$noclobber_Methods$GET_PROPERTY_VALUE$$ = $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("CSSStyleDeclaration", "getPropertyValue"), $module$contents$goog$html$sanitizer$noclobber_Methods$SET_PROPERTY$$ = $module$contents$goog$html$sanitizer$noclobber_prototypeMethodOrNull$$("CSSStyleDeclaration", 
"setProperty");
function $module$contents$goog$html$sanitizer$noclobber_genericPropertyGet$$($fn$jscomp$24_propertyValue$$, $object$jscomp$15$$, $fallbackPropertyName$$, $fallbackTest$$) {
  if ($fn$jscomp$24_propertyValue$$) {
    return $fn$jscomp$24_propertyValue$$.apply($object$jscomp$15$$);
  }
  $fn$jscomp$24_propertyValue$$ = $object$jscomp$15$$[$fallbackPropertyName$$];
  if (!$fallbackTest$$($fn$jscomp$24_propertyValue$$)) {
    throw Error("Clobbering detected");
  }
  return $fn$jscomp$24_propertyValue$$;
}
function $module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($fn$jscomp$25$$, $object$jscomp$16$$, $fallbackMethodName$$, $args$jscomp$16$$) {
  if ($fn$jscomp$25$$) {
    return $fn$jscomp$25$$.apply($object$jscomp$16$$, $args$jscomp$16$$);
  }
  if ($goog$userAgent$IE$$ && 10 > document.documentMode) {
    if (!$object$jscomp$16$$[$fallbackMethodName$$].call) {
      throw Error("IE Clobbering detected");
    }
  } else {
    if ("function" != typeof $object$jscomp$16$$[$fallbackMethodName$$]) {
      throw Error("Clobbering detected");
    }
  }
  return $object$jscomp$16$$[$fallbackMethodName$$].apply($object$jscomp$16$$, $args$jscomp$16$$);
}
function $module$contents$goog$html$sanitizer$noclobber_getElementAttributes$$($element$jscomp$52$$) {
  return $module$contents$goog$html$sanitizer$noclobber_genericPropertyGet$$($module$contents$goog$html$sanitizer$noclobber_Methods$ATTRIBUTES_GETTER$$, $element$jscomp$52$$, "attributes", function($attributes$jscomp$7$$) {
    return $attributes$jscomp$7$$ instanceof NamedNodeMap;
  });
}
function $module$contents$goog$html$sanitizer$noclobber_setElementAttribute$$($element$jscomp$55$$, $name$jscomp$156$$, $value$jscomp$174$$) {
  try {
    $module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$SET_ATTRIBUTE$$, $element$jscomp$55$$, "setAttribute", [$name$jscomp$156$$, $value$jscomp$174$$]);
  } catch ($e$jscomp$33$$) {
    if (-1 == $e$jscomp$33$$.message.indexOf("A security problem occurred")) {
      throw $e$jscomp$33$$;
    }
  }
}
function $module$contents$goog$html$sanitizer$noclobber_getElementStyle$$($element$jscomp$58$$) {
  $module$contents$goog$html$sanitizer$noclobber_assertHTMLElement$$($element$jscomp$58$$);
  return $module$contents$goog$html$sanitizer$noclobber_genericPropertyGet$$($module$contents$goog$html$sanitizer$noclobber_Methods$STYLE_GETTER$$, $element$jscomp$58$$, "style", function($style$jscomp$13$$) {
    return $style$jscomp$13$$ instanceof CSSStyleDeclaration;
  });
}
function $module$contents$goog$html$sanitizer$noclobber_assertHTMLElement$$($element$jscomp$59$$) {
  if (!($element$jscomp$59$$ instanceof HTMLElement)) {
    throw Error("Not an HTMLElement");
  }
}
function $module$contents$goog$html$sanitizer$noclobber_getElementStyleSheet$$($element$jscomp$61$$) {
  $module$contents$goog$html$sanitizer$noclobber_assertHTMLElement$$($element$jscomp$61$$);
  return $module$contents$goog$html$sanitizer$noclobber_genericPropertyGet$$($module$contents$goog$html$sanitizer$noclobber_Methods$SHEET_GETTER$$, $element$jscomp$61$$, "sheet", function($sheet$$) {
    return $sheet$$ instanceof CSSStyleSheet;
  });
}
function $module$contents$goog$html$sanitizer$noclobber_getNodeName$$($node$jscomp$31$$) {
  return $module$contents$goog$html$sanitizer$noclobber_genericPropertyGet$$($module$contents$goog$html$sanitizer$noclobber_Methods$NODE_NAME_GETTER$$, $node$jscomp$31$$, "nodeName", function($name$jscomp$158$$) {
    return "string" == typeof $name$jscomp$158$$;
  });
}
function $module$contents$goog$html$sanitizer$noclobber_getNodeType$$($node$jscomp$32$$) {
  return $module$contents$goog$html$sanitizer$noclobber_genericPropertyGet$$($module$contents$goog$html$sanitizer$noclobber_Methods$NODE_TYPE_GETTER$$, $node$jscomp$32$$, "nodeType", function($type$jscomp$164$$) {
    return "number" == typeof $type$jscomp$164$$;
  });
}
function $module$contents$goog$html$sanitizer$noclobber_getParentNode$$($node$jscomp$33$$) {
  return $module$contents$goog$html$sanitizer$noclobber_genericPropertyGet$$($module$contents$goog$html$sanitizer$noclobber_Methods$PARENT_NODE_GETTER$$, $node$jscomp$33$$, "parentNode", function($parentNode$$) {
    return !($parentNode$$ && "string" == typeof $parentNode$$.name && $parentNode$$.name && "parentnode" == $parentNode$$.name.toLowerCase());
  });
}
function $module$contents$goog$html$sanitizer$noclobber_getCssPropertyValue$$($cssStyle$$, $propName$jscomp$2$$) {
  return $module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$GET_PROPERTY_VALUE$$, $cssStyle$$, $cssStyle$$.getPropertyValue ? "getPropertyValue" : "getAttribute", [$propName$jscomp$2$$]) || "";
}
function $module$contents$goog$html$sanitizer$noclobber_setCssProperty$$($cssStyle$jscomp$1$$, $propName$jscomp$3$$, $sanitizedValue$$) {
  $module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$SET_PROPERTY$$, $cssStyle$jscomp$1$$, $cssStyle$jscomp$1$$.setProperty ? "setProperty" : "setAttribute", [$propName$jscomp$3$$, $sanitizedValue$$]);
}
;var $goog$html$sanitizer$CssSanitizer$SELECTOR_REGEX_$$ = $goog$userAgent$IE$$ && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g, $goog$html$sanitizer$CHROME_INCLUDE_VENDOR_PREFIX_WHITELIST_$$ = {"-webkit-border-horizontal-spacing":!0, "-webkit-border-vertical-spacing":!0}, $goog$html$sanitizer$CssSanitizer$sanitizeStyleSheet_$$ = function($cssRules_cssStyleSheet$$, $containerId$$, $uriRewriter$jscomp$1$$) {
  var $sanitizedRules$$ = [];
  $cssRules_cssStyleSheet$$ = $goog$html$sanitizer$CssSanitizer$getOnlyStyleRules_$$($goog$array$toArray$$($cssRules_cssStyleSheet$$.cssRules));
  $goog$array$forEach$$($cssRules_cssStyleSheet$$, function($cssRule$$) {
    if ($containerId$$ && !/[a-zA-Z][\w-:\.]*/.test($containerId$$)) {
      throw Error("Invalid container id");
    }
    if (!($containerId$$ && $goog$userAgent$IE$$ && 10 == document.documentMode && /\\['"]/.test($cssRule$$.selectorText))) {
      var $scopedSelector$$ = $containerId$$ ? $cssRule$$.selectorText.replace($goog$html$sanitizer$CssSanitizer$SELECTOR_REGEX_$$, "#" + $containerId$$ + " $1") : $cssRule$$.selectorText;
      $sanitizedRules$$.push($goog$html$SafeStyleSheet$createRule$$($scopedSelector$$, $goog$html$sanitizer$CssSanitizer$sanitizeInlineStyle$$($cssRule$$.style, $uriRewriter$jscomp$1$$)));
    }
  });
  return $goog$html$SafeStyleSheet$concat$$($sanitizedRules$$);
}, $goog$html$sanitizer$CssSanitizer$getOnlyStyleRules_$$ = function($cssRules$jscomp$1$$) {
  return $goog$array$filter$$($cssRules$jscomp$1$$, function($cssRule$jscomp$1$$) {
    return $cssRule$jscomp$1$$ instanceof CSSStyleRule || $cssRule$jscomp$1$$.type == CSSRule.STYLE_RULE;
  });
}, $goog$html$sanitizer$CssSanitizer$sanitizeStyleSheetString$$ = function($styleTag_textContent$jscomp$7$$, $opt_containerId$$, $opt_uriRewriter$jscomp$1$$) {
  $styleTag_textContent$jscomp$7$$ = $goog$html$sanitizer$CssSanitizer$safeParseHtmlAndGetInertElement$$("<style>" + $styleTag_textContent$jscomp$7$$ + "</style>");
  return null == $styleTag_textContent$jscomp$7$$ || null == $styleTag_textContent$jscomp$7$$.sheet ? $goog$html$SafeStyleSheet$EMPTY$$ : $goog$html$sanitizer$CssSanitizer$sanitizeStyleSheet_$$($styleTag_textContent$jscomp$7$$.sheet, void 0 != $opt_containerId$$ ? $opt_containerId$$ : null, $opt_uriRewriter$jscomp$1$$);
}, $goog$html$sanitizer$CssSanitizer$safeParseHtmlAndGetInertElement$$ = function($html$jscomp$26_safeHtml$jscomp$3$$) {
  if ($goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$(10) || "function" != typeof $goog$global$$.DOMParser) {
    return null;
  }
  $html$jscomp$26_safeHtml$jscomp$3$$ = $goog$html$uncheckedconversions$safeHtmlFromStringKnownToSatisfyTypeContract$$($goog$string$Const$from$$("Never attached to DOM."), "<html><head></head><body>" + $html$jscomp$26_safeHtml$jscomp$3$$ + "</body></html>");
  return (new DOMParser).parseFromString($goog$html$SafeHtml$unwrapTrustedHTML$$($html$jscomp$26_safeHtml$jscomp$3$$), "text/html").body.children[0];
}, $goog$html$sanitizer$CssSanitizer$sanitizeInlineStyle$$ = function($cssStyle$jscomp$2$$, $opt_uriRewriter$jscomp$2$$) {
  if (!$cssStyle$jscomp$2$$) {
    return $goog$html$SafeStyle$EMPTY$$;
  }
  var $cleanCssStyle$$ = document.createElement("div").style, $cssPropNames$$ = $goog$html$sanitizer$CssSanitizer$getCssPropNames_$$($cssStyle$jscomp$2$$);
  $goog$array$forEach$$($cssPropNames$$, function($propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$) {
    var $propNameWithoutPrefix$$ = $goog$userAgent$WEBKIT$$ && $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$ in $goog$html$sanitizer$CHROME_INCLUDE_VENDOR_PREFIX_WHITELIST_$$ ? $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$ : $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
    $goog$string$internal$startsWith$$($propNameWithoutPrefix$$, "--") || $goog$string$internal$startsWith$$($propNameWithoutPrefix$$, "var") || ($propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$ = $module$contents$goog$html$sanitizer$noclobber_getCssPropertyValue$$($cssStyle$jscomp$2$$, $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$), $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$ = $goog$html$sanitizer$CssPropertySanitizer$sanitizeProperty$$($propNameWithoutPrefix$$, 
    $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$, $opt_uriRewriter$jscomp$2$$), null != $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$ && $module$contents$goog$html$sanitizer$noclobber_setCssProperty$$($cleanCssStyle$$, $propNameWithoutPrefix$$, $propName$jscomp$5_propValue$jscomp$1_sanitizedValue$jscomp$1$$));
  });
  return $goog$html$uncheckedconversions$safeStyleFromStringKnownToSatisfyTypeContract$$($cleanCssStyle$$.cssText || "");
}, $goog$html$sanitizer$CssSanitizer$inlineStyleRules$$ = function($element$jscomp$63_subTreeWalker$$) {
  var $styleTags$$ = Array.from($module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$GET_ELEMENTS_BY_TAG_NAME$$, $element$jscomp$63_subTreeWalker$$, "getElementsByTagName", ["STYLE"])), $cssRules$jscomp$2$$ = $goog$array$concatMap$$($styleTags$$, function($styleTag$jscomp$1$$) {
    return $goog$array$toArray$$($module$contents$goog$html$sanitizer$noclobber_getElementStyleSheet$$($styleTag$jscomp$1$$).cssRules);
  });
  $cssRules$jscomp$2$$ = $goog$html$sanitizer$CssSanitizer$getOnlyStyleRules_$$($cssRules$jscomp$2$$);
  $cssRules$jscomp$2$$.sort(function($JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$, $arr2$jscomp$inline_1160_b$jscomp$20$$) {
    $JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$ = $module$contents$goog$html$CssSpecificity_getSpecificity$$($JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$.selectorText);
    a: {
      $arr2$jscomp$inline_1160_b$jscomp$20$$ = $module$contents$goog$html$CssSpecificity_getSpecificity$$($arr2$jscomp$inline_1160_b$jscomp$20$$.selectorText);
      for (var $compare$jscomp$inline_1162$$ = $goog$array$defaultCompare$$, $l$jscomp$inline_1163$$ = Math.min($JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$.length, $arr2$jscomp$inline_1160_b$jscomp$20$$.length), $i$jscomp$inline_1164$$ = 0; $i$jscomp$inline_1164$$ < $l$jscomp$inline_1163$$; $i$jscomp$inline_1164$$++) {
        var $result$jscomp$inline_1165$$ = $compare$jscomp$inline_1162$$($JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$[$i$jscomp$inline_1164$$], $arr2$jscomp$inline_1160_b$jscomp$20$$[$i$jscomp$inline_1164$$]);
        if (0 != $result$jscomp$inline_1165$$) {
          $JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$ = $result$jscomp$inline_1165$$;
          break a;
        }
      }
      $JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$ = $goog$array$defaultCompare$$($JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$.length, $arr2$jscomp$inline_1160_b$jscomp$20$$.length);
    }
    return -$JSCompiler_inline_result$jscomp$433_a$jscomp$24_aSpecificity$$;
  });
  $element$jscomp$63_subTreeWalker$$ = document.createTreeWalker($element$jscomp$63_subTreeWalker$$, NodeFilter.SHOW_ELEMENT, null, !1);
  for (var $currentElement$$; $currentElement$$ = $element$jscomp$63_subTreeWalker$$.nextNode();) {
    $goog$array$forEach$$($cssRules$jscomp$2$$, function($rule$jscomp$3$$) {
      $module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$MATCHES$$, $currentElement$$, $currentElement$$.matches ? "matches" : "msMatchesSelector", [$rule$jscomp$3$$.selectorText]) && $rule$jscomp$3$$.style && $goog$html$sanitizer$CssSanitizer$mergeStyleDeclarations_$$($currentElement$$, $rule$jscomp$3$$.style);
    });
  }
  $goog$array$forEach$$($styleTags$$, $goog$dom$removeNode$$);
}, $goog$html$sanitizer$CssSanitizer$mergeStyleDeclarations_$$ = function($element$jscomp$64$$, $styleDeclaration$$) {
  var $existingPropNames$$ = $goog$html$sanitizer$CssSanitizer$getCssPropNames_$$($element$jscomp$64$$.style), $newPropNames$$ = $goog$html$sanitizer$CssSanitizer$getCssPropNames_$$($styleDeclaration$$);
  $goog$array$forEach$$($newPropNames$$, function($propName$jscomp$6$$) {
    if (!(0 <= $existingPropNames$$.indexOf($propName$jscomp$6$$))) {
      var $propValue$jscomp$2$$ = $module$contents$goog$html$sanitizer$noclobber_getCssPropertyValue$$($styleDeclaration$$, $propName$jscomp$6$$);
      $module$contents$goog$html$sanitizer$noclobber_setCssProperty$$($element$jscomp$64$$.style, $propName$jscomp$6$$, $propValue$jscomp$2$$);
    }
  });
}, $goog$html$sanitizer$CssSanitizer$getCssPropNames_$$ = function($cssStyle$jscomp$3_propNames$$) {
  $goog$isArrayLike$$($cssStyle$jscomp$3_propNames$$) ? $cssStyle$jscomp$3_propNames$$ = $goog$array$toArray$$($cssStyle$jscomp$3_propNames$$) : ($cssStyle$jscomp$3_propNames$$ = $goog$object$getKeys$$($cssStyle$jscomp$3_propNames$$), $goog$array$remove$$($cssStyle$jscomp$3_propNames$$, "cssText"));
  return $cssStyle$jscomp$3_propNames$$;
};
var $module$contents$goog$html$sanitizer$ElementWeakMap_NATIVE_WEAKMAP_SUPPORTED$$ = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"), $module$contents$goog$html$sanitizer$ElementWeakMap_weakMapCount$$ = 0, $module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap$$ = function() {
  this.$g$ = [];
  this.$f$ = [];
  this.$b$ = "data-elementweakmap-index-" + $module$contents$goog$html$sanitizer$ElementWeakMap_weakMapCount$$++;
};
$module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap$$.prototype.set = function($elementKey$$, $value$jscomp$175$$) {
  if ($module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$HAS_ATTRIBUTE$$, $elementKey$$, "hasAttribute", [this.$b$])) {
    var $itemIndex$$ = parseInt($module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$GET_ATTRIBUTE$$, $elementKey$$, "getAttribute", [this.$b$]) || null, 10);
    this.$f$[$itemIndex$$] = $value$jscomp$175$$;
  } else {
    $itemIndex$$ = this.$f$.push($value$jscomp$175$$) - 1, $module$contents$goog$html$sanitizer$noclobber_setElementAttribute$$($elementKey$$, this.$b$, $itemIndex$$.toString()), this.$g$.push($elementKey$$);
  }
  return this;
};
$module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap$$.prototype.get = function($elementKey$jscomp$1_itemIndex$jscomp$1$$) {
  if ($module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$HAS_ATTRIBUTE$$, $elementKey$jscomp$1_itemIndex$jscomp$1$$, "hasAttribute", [this.$b$])) {
    return $elementKey$jscomp$1_itemIndex$jscomp$1$$ = parseInt($module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$GET_ATTRIBUTE$$, $elementKey$jscomp$1_itemIndex$jscomp$1$$, "getAttribute", [this.$b$]) || null, 10), this.$f$[$elementKey$jscomp$1_itemIndex$jscomp$1$$];
  }
};
$module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap$$.prototype.clear = function() {
  this.$g$.forEach(function($el$jscomp$4$$) {
    $module$contents$goog$html$sanitizer$noclobber_genericMethodCall$$($module$contents$goog$html$sanitizer$noclobber_Methods$REMOVE_ATTRIBUTE$$, $el$jscomp$4$$, "removeAttribute", [this.$b$]);
  }, this);
  this.$g$ = [];
  this.$f$ = [];
};
var $module$contents$goog$html$sanitizer$SafeDomTreeProcessor_logger$$ = $goog$debug$LogManager$getLogger$$("goog.html.sanitizer.SafeDomTreeProcessor"), $module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SAFE_PARSING_SUPPORTED$$ = !$goog$userAgent$IE$$ || 10 <= Number($JSCompiler_inline_result$jscomp$450$$), $module$contents$goog$html$sanitizer$SafeDomTreeProcessor_HTML_SANITIZER_TEMPLATE_SUPPORTED$$ = !$goog$userAgent$IE$$ || null == document.documentMode, $module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor$$ = 
function() {
};
var $goog$html$sanitizer$TagBlacklist$$ = {APPLET:!0, AUDIO:!0, BASE:!0, BGSOUND:!0, EMBED:!0, FORM:!0, IFRAME:!0, ISINDEX:!0, KEYGEN:!0, LAYER:!0, LINK:!0, META:!0, OBJECT:!0, SCRIPT:!0, SVG:!0, STYLE:!0, TEMPLATE:!0, VIDEO:!0};
var $goog$html$sanitizer$TagWhitelist$$ = {A:!0, ABBR:!0, ACRONYM:!0, ADDRESS:!0, AREA:!0, ARTICLE:!0, ASIDE:!0, B:!0, BDI:!0, BDO:!0, BIG:!0, BLOCKQUOTE:!0, BR:!0, BUTTON:!0, CAPTION:!0, CENTER:!0, CITE:!0, CODE:!0, COL:!0, COLGROUP:!0, DATA:!0, DATALIST:!0, DD:!0, DEL:!0, DETAILS:!0, DFN:!0, DIALOG:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, EM:!0, FIELDSET:!0, FIGCAPTION:!0, FIGURE:!0, FONT:!0, FOOTER:!0, FORM:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, HGROUP:!0, HR:!0, I:!0, IMG:!0, INPUT:!0, 
INS:!0, KBD:!0, LABEL:!0, LEGEND:!0, LI:!0, MAIN:!0, MAP:!0, MARK:!0, MENU:!0, METER:!0, NAV:!0, NOSCRIPT:!0, OL:!0, OPTGROUP:!0, OPTION:!0, OUTPUT:!0, P:!0, PRE:!0, PROGRESS:!0, Q:!0, S:!0, SAMP:!0, SECTION:!0, SELECT:!0, SMALL:!0, SOURCE:!0, SPAN:!0, STRIKE:!0, STRONG:!0, STYLE:!0, SUB:!0, SUMMARY:!0, SUP:!0, TABLE:!0, TBODY:!0, TD:!0, TEXTAREA:!0, TFOOT:!0, TH:!0, THEAD:!0, TIME:!0, TR:!0, TT:!0, U:!0, UL:!0, VAR:!0, WBR:!0};
var $goog$html$sanitizer$HTML_SANITIZER_INVALID_CUSTOM_TAGS_$$ = {"ANNOTATION-XML":!0, "COLOR-PROFILE":!0, "FONT-FACE":!0, "FONT-FACE-SRC":!0, "FONT-FACE-URI":!0, "FONT-FACE-FORMAT":!0, "FONT-FACE-NAME":!0, "MISSING-GLYPH":!0}, $goog$html$sanitizer$HtmlSanitizer$$ = function($builder_opt_builder$$) {
  $builder_opt_builder$$ = $builder_opt_builder$$ || new $goog$html$sanitizer$HtmlSanitizer$Builder$$;
  $JSCompiler_StaticMethods_installPolicies_$$($builder_opt_builder$$);
  this.$b$ = $goog$object$clone$$($builder_opt_builder$$.$b$);
  this.$l$ = $goog$object$clone$$($builder_opt_builder$$.$H$);
  this.$g$ = $goog$object$clone$$($builder_opt_builder$$.$J$);
  this.$s$ = $builder_opt_builder$$.$C$;
  $goog$array$forEach$$($builder_opt_builder$$.$o$, function($dataAttr$$) {
    if (!$goog$string$internal$startsWith$$($dataAttr$$, "data-")) {
      throw new $goog$asserts$AssertionError$$('Only "data-" attributes allowed, got: %s.', [$dataAttr$$]);
    }
    if ($goog$string$internal$startsWith$$($dataAttr$$, "data-sanitizer-")) {
      throw new $goog$asserts$AssertionError$$('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", $dataAttr$$]);
    }
    this.$b$["* " + $dataAttr$$.toUpperCase()] = $goog$html$sanitizer$HtmlSanitizer$cleanUpAttribute_$$;
  }, this);
  $goog$array$forEach$$($builder_opt_builder$$.$m$, function($customTag$$) {
    $customTag$$ = $customTag$$.toUpperCase();
    if (-1 == $customTag$$.indexOf("-") || $goog$html$sanitizer$HTML_SANITIZER_INVALID_CUSTOM_TAGS_$$[$customTag$$]) {
      throw new $goog$asserts$AssertionError$$("Only valid custom element tag names allowed, got: %s.", [$customTag$$]);
    }
    this.$g$[$customTag$$] = !0;
  }, this);
  this.$o$ = $builder_opt_builder$$.$g$;
  this.$h$ = $builder_opt_builder$$.$G$;
  this.$f$ = null;
  this.$m$ = $builder_opt_builder$$.$s$;
};
$goog$inherits$$($goog$html$sanitizer$HtmlSanitizer$$, $module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor$$);
var $goog$html$sanitizer$HtmlSanitizer$wrapUrlPolicy_$$ = function($urlPolicy$$) {
  return function($safeUrl$jscomp$14_url$jscomp$94$$, $policyHints$$) {
    return ($safeUrl$jscomp$14_url$jscomp$94$$ = $urlPolicy$$($goog$string$internal$trim$$($safeUrl$jscomp$14_url$jscomp$94$$), $policyHints$$)) && "about:invalid#zClosurez" != $goog$html$SafeUrl$unwrapTrustedURL$$($safeUrl$jscomp$14_url$jscomp$94$$).toString() ? $goog$html$SafeUrl$unwrapTrustedURL$$($safeUrl$jscomp$14_url$jscomp$94$$).toString() : null;
  };
}, $goog$html$sanitizer$HtmlSanitizer$Builder$$ = function() {
  this.$b$ = {};
  $goog$array$forEach$$([$goog$html$sanitizer$AttributeWhitelist$$, $goog$html$sanitizer$AttributeSanitizedWhitelist$$], function($wl$$) {
    $goog$array$forEach$$($goog$object$getKeys$$($wl$$), function($attr$jscomp$1$$) {
      this.$b$[$attr$jscomp$1$$] = $goog$html$sanitizer$HtmlSanitizer$cleanUpAttribute_$$;
    }, this);
  }, this);
  this.$f$ = {};
  this.$o$ = [];
  this.$m$ = [];
  this.$H$ = $goog$object$clone$$($goog$html$sanitizer$TagBlacklist$$);
  this.$J$ = $goog$object$clone$$($goog$html$sanitizer$TagWhitelist$$);
  this.$C$ = !1;
  this.$M$ = $goog$html$SafeUrl$sanitize$$;
  this.$L$ = this.$l$ = this.$K$ = this.$g$ = $goog$functions$NULL$$;
  this.$G$ = null;
  this.$h$ = this.$s$ = !1;
}, $goog$html$sanitizer$HtmlSanitizer$wrapPolicy_$$ = function($customPolicy$$, $defaultPolicy$$) {
  return function($result$jscomp$24_value$jscomp$176$$, $hints$$, $ctx$$, $policy$jscomp$3$$) {
    $result$jscomp$24_value$jscomp$176$$ = $customPolicy$$($result$jscomp$24_value$jscomp$176$$, $hints$$, $ctx$$, $policy$jscomp$3$$);
    return null == $result$jscomp$24_value$jscomp$176$$ ? null : $defaultPolicy$$($result$jscomp$24_value$jscomp$176$$, $hints$$, $ctx$$, $policy$jscomp$3$$);
  };
}, $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$ = function($whitelist$$, $overrideList$$, $key$jscomp$101$$, $defaultPolicy$jscomp$1$$) {
  $whitelist$$[$key$jscomp$101$$] && !$overrideList$$[$key$jscomp$101$$] && ($whitelist$$[$key$jscomp$101$$] = $goog$html$sanitizer$HtmlSanitizer$wrapPolicy_$$($whitelist$$[$key$jscomp$101$$], $defaultPolicy$jscomp$1$$));
};
$goog$html$sanitizer$HtmlSanitizer$Builder$$.prototype.$build$ = function() {
  return new $goog$html$sanitizer$HtmlSanitizer$$(this);
};
var $JSCompiler_StaticMethods_installPolicies_$$ = function($JSCompiler_StaticMethods_installPolicies_$self$$) {
  if ($JSCompiler_StaticMethods_installPolicies_$self$$.$h$) {
    throw Error("HtmlSanitizer.Builder.build() can only be used once.");
  }
  $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$($JSCompiler_StaticMethods_installPolicies_$self$$.$b$, $JSCompiler_StaticMethods_installPolicies_$self$$.$f$, "* USEMAP", $goog$html$sanitizer$HtmlSanitizer$sanitizeUrlFragment_$$);
  var $urlPolicy$jscomp$1$$ = $goog$html$sanitizer$HtmlSanitizer$wrapUrlPolicy_$$($JSCompiler_StaticMethods_installPolicies_$self$$.$M$);
  $goog$array$forEach$$(["* ACTION", "* CITE", "* HREF"], function($attribute$jscomp$2$$) {
    $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$(this.$b$, this.$f$, $attribute$jscomp$2$$, $urlPolicy$jscomp$1$$);
  }, $JSCompiler_StaticMethods_installPolicies_$self$$);
  var $networkRequestUrlPolicy$$ = $goog$html$sanitizer$HtmlSanitizer$wrapUrlPolicy_$$($JSCompiler_StaticMethods_installPolicies_$self$$.$g$);
  $goog$array$forEach$$(["* LONGDESC", "* SRC", "LINK HREF"], function($attribute$jscomp$3$$) {
    $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$(this.$b$, this.$f$, $attribute$jscomp$3$$, $networkRequestUrlPolicy$$);
  }, $JSCompiler_StaticMethods_installPolicies_$self$$);
  $goog$array$forEach$$(["* FOR", "* HEADERS", "* NAME"], function($attribute$jscomp$4$$) {
    $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$(this.$b$, this.$f$, $attribute$jscomp$4$$, $goog$partial$$($goog$html$sanitizer$HtmlSanitizer$sanitizeName_$$, this.$K$));
  }, $JSCompiler_StaticMethods_installPolicies_$self$$);
  $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$($JSCompiler_StaticMethods_installPolicies_$self$$.$b$, $JSCompiler_StaticMethods_installPolicies_$self$$.$f$, "A TARGET", $goog$partial$$($goog$html$sanitizer$HtmlSanitizer$allowedAttributeValues_$$, ["_blank", "_self"]));
  $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$($JSCompiler_StaticMethods_installPolicies_$self$$.$b$, $JSCompiler_StaticMethods_installPolicies_$self$$.$f$, "* CLASS", $goog$partial$$($goog$html$sanitizer$HtmlSanitizer$sanitizeClasses_$$, $JSCompiler_StaticMethods_installPolicies_$self$$.$l$));
  $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$($JSCompiler_StaticMethods_installPolicies_$self$$.$b$, $JSCompiler_StaticMethods_installPolicies_$self$$.$f$, "* ID", $goog$partial$$($goog$html$sanitizer$HtmlSanitizer$sanitizeId_$$, $JSCompiler_StaticMethods_installPolicies_$self$$.$l$));
  $goog$html$sanitizer$HtmlSanitizer$installDefaultPolicy_$$($JSCompiler_StaticMethods_installPolicies_$self$$.$b$, $JSCompiler_StaticMethods_installPolicies_$self$$.$f$, "* STYLE", $goog$partial$$($JSCompiler_StaticMethods_installPolicies_$self$$.$L$, $networkRequestUrlPolicy$$));
  $JSCompiler_StaticMethods_installPolicies_$self$$.$h$ = !0;
}, $goog$html$sanitizer$HtmlSanitizer$attrIdentifier_$$ = function($nodeName$$, $attributeName$jscomp$1$$) {
  $nodeName$$ || ($nodeName$$ = "*");
  return ($nodeName$$ + " " + $attributeName$jscomp$1$$).toUpperCase();
}, $goog$html$sanitizer$HtmlSanitizer$cleanUpAttribute_$$ = function($attrValue$jscomp$1$$) {
  return $goog$string$internal$trim$$($attrValue$jscomp$1$$);
}, $goog$html$sanitizer$HtmlSanitizer$allowedAttributeValues_$$ = function($allowedValues$$, $attrValue$jscomp$2_trimmed$jscomp$1$$) {
  $attrValue$jscomp$2_trimmed$jscomp$1$$ = $goog$string$internal$trim$$($attrValue$jscomp$2_trimmed$jscomp$1$$);
  return $goog$array$contains$$($allowedValues$$, $attrValue$jscomp$2_trimmed$jscomp$1$$.toLowerCase()) ? $attrValue$jscomp$2_trimmed$jscomp$1$$ : null;
}, $goog$html$sanitizer$HtmlSanitizer$sanitizeUrlFragment_$$ = function($trimmed$jscomp$2_urlFragment$$) {
  return ($trimmed$jscomp$2_urlFragment$$ = $goog$string$internal$trim$$($trimmed$jscomp$2_urlFragment$$)) && "#" == $trimmed$jscomp$2_urlFragment$$.charAt(0) ? $trimmed$jscomp$2_urlFragment$$ : null;
}, $goog$html$sanitizer$HtmlSanitizer$sanitizeName_$$ = function($namePolicy$$, $attrName$jscomp$3$$, $policyHints$jscomp$4$$) {
  return $namePolicy$$($goog$string$internal$trim$$($attrName$jscomp$3$$), $policyHints$jscomp$4$$);
}, $goog$html$sanitizer$HtmlSanitizer$sanitizeClasses_$$ = function($tokenPolicy$$, $attrValue$jscomp$3_classes$$, $policyHints$jscomp$5$$) {
  $attrValue$jscomp$3_classes$$ = $attrValue$jscomp$3_classes$$.split(/(?:\s+)/);
  for (var $sanitizedClasses$$ = [], $i$jscomp$99$$ = 0; $i$jscomp$99$$ < $attrValue$jscomp$3_classes$$.length; $i$jscomp$99$$++) {
    var $sanitizedClass$$ = $tokenPolicy$$($attrValue$jscomp$3_classes$$[$i$jscomp$99$$], $policyHints$jscomp$5$$);
    $sanitizedClass$$ && $sanitizedClasses$$.push($sanitizedClass$$);
  }
  return 0 == $sanitizedClasses$$.length ? null : $sanitizedClasses$$.join(" ");
}, $goog$html$sanitizer$HtmlSanitizer$sanitizeId_$$ = function($tokenPolicy$jscomp$1$$, $attrValue$jscomp$4$$, $policyHints$jscomp$6$$) {
  return $tokenPolicy$jscomp$1$$($goog$string$internal$trim$$($attrValue$jscomp$4$$), $policyHints$jscomp$6$$);
}, $JSCompiler_StaticMethods_module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor_prototype$createTextNode$$ = function($JSCompiler_StaticMethods_module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor_prototype$createTextNode$self$$, $dirtyNode_dirtyParent$$) {
  var $textContent$jscomp$8$$ = $dirtyNode_dirtyParent$$.data;
  ($dirtyNode_dirtyParent$$ = $module$contents$goog$html$sanitizer$noclobber_getParentNode$$($dirtyNode_dirtyParent$$)) && "style" == $module$contents$goog$html$sanitizer$noclobber_getNodeName$$($dirtyNode_dirtyParent$$).toLowerCase() && !("STYLE" in $JSCompiler_StaticMethods_module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor_prototype$createTextNode$self$$.$l$) && "STYLE" in $JSCompiler_StaticMethods_module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor_prototype$createTextNode$self$$.$g$ && 
  ($textContent$jscomp$8$$ = $goog$html$SafeStyleSheet$unwrap$$($goog$html$sanitizer$CssSanitizer$sanitizeStyleSheetString$$($textContent$jscomp$8$$, $JSCompiler_StaticMethods_module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor_prototype$createTextNode$self$$.$f$, $goog$bind$$(function($uri$jscomp$14$$, $propName$jscomp$8$$) {
    return this.$o$($uri$jscomp$14$$, {$cssProperty$:$propName$jscomp$8$$});
  }, $JSCompiler_StaticMethods_module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor_prototype$createTextNode$self$$))));
  return document.createTextNode($textContent$jscomp$8$$);
}, $goog$html$sanitizer$HtmlSanitizer$sanitize$$ = function($newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$) {
  var $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$ = (new $goog$html$sanitizer$HtmlSanitizer$Builder$$).$build$();
  var $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ = !("STYLE" in $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$l$) && "STYLE" in $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$g$;
  $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ = "*" == $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$h$ && $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ ? 
  "sanitizer-" + $goog$string$getRandomString$$() : $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$h$;
  $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$f$ = $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$;
  if ($module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SAFE_PARSING_SUPPORTED$$) {
    $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ = $newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$;
    if ($module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SAFE_PARSING_SUPPORTED$$) {
      $newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$ = document.createElement("SPAN");
      $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$f$ && "*" == $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$h$ && ($newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$.id = $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$f$);
      $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.$m$ && ($JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ = $goog$html$sanitizer$CssSanitizer$safeParseHtmlAndGetInertElement$$("<div>" + $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ + 
      "</div>"), $goog$asserts$assert$$($JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$, "Older browsers that don't support inert parsing should not get to this branch"), $goog$html$sanitizer$CssSanitizer$inlineStyleRules$$($JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$), 
      $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ = $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$.innerHTML);
      $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ = $goog$html$uncheckedconversions$safeHtmlFromStringKnownToSatisfyTypeContract$$($goog$string$Const$from$$("Never attached to DOM."), $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$);
      var $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$ = document.createElement("template");
      if ($module$contents$goog$html$sanitizer$SafeDomTreeProcessor_HTML_SANITIZER_TEMPLATE_SUPPORTED$$ && "content" in $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$) {
        $goog$dom$safe$unsafeSetInnerHtmlDoNotUseOrElse$$($elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$, $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$), $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$ = $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$.content;
      } else {
        var $doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$ = document.implementation.createHTMLDocument("x");
        $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$ = $doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$.body;
        $goog$dom$safe$unsafeSetInnerHtmlDoNotUseOrElse$$($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$.body, $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$);
      }
      $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$ = document.createTreeWalker($elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
      for ($elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$ = $module$contents$goog$html$sanitizer$ElementWeakMap_NATIVE_WEAKMAP_SUPPORTED$$ ? new WeakMap : new $module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap$$; $doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$ = $JSCompiler_inline_result$jscomp$6416_html$jscomp$inline_7977_inertUnsanitizedDom$jscomp$inline_7979_originalTreeWalker$jscomp$inline_7980_randomStyleContainmentNecessary$jscomp$inline_6598_safeHtml$jscomp$inline_7982$$.nextNode();) {
        c: {
          var $JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$ = $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$;
          var $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$ = $doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$;
          var $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $module$contents$goog$html$sanitizer$noclobber_getNodeType$$($JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$);
          switch($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$) {
            case 3:
              $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$ = $JSCompiler_StaticMethods_module$contents$goog$html$sanitizer$SafeDomTreeProcessor_SafeDomTreeProcessor_prototype$createTextNode$$($JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$, $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$);
              break c;
            case 1:
              $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$;
              1 == $module$contents$goog$html$sanitizer$noclobber_getNodeType$$($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$) || $goog$asserts$fail$$("Expected Node of type Element but got Node of type %s", $module$contents$goog$html$sanitizer$noclobber_getNodeType$$($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$));
              $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$ = $JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$;
              $JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$ = $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$;
              if ("TEMPLATE" == $module$contents$goog$html$sanitizer$noclobber_getNodeName$$($JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$).toUpperCase()) {
                $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$ = null;
              } else {
                $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $module$contents$goog$html$sanitizer$noclobber_getNodeName$$($JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$).toUpperCase();
                if ($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ in $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$.$l$) {
                  var $newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$ = null;
                } else {
                  $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$.$g$[$attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$] ? $newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$ = document.createElement($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$) : 
                  ($newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$ = document.createElement("SPAN"), $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$.$s$ && $module$contents$goog$html$sanitizer$noclobber_setElementAttribute$$($newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$, "data-sanitizer-original-tag", $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$.toLowerCase()));
                }
                if ($newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$) {
                  var $newElement$jscomp$inline_8000_originalGrandParent$jscomp$inline_8008$$ = $newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$, $attributes$jscomp$inline_8001$$ = $module$contents$goog$html$sanitizer$noclobber_getElementAttributes$$($JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$);
                  if (null != $attributes$jscomp$inline_8001$$) {
                    for (var $i$jscomp$inline_8002$$ = 0; $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $attributes$jscomp$inline_8001$$[$i$jscomp$inline_8002$$]; $i$jscomp$inline_8002$$++) {
                      if ($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$.specified) {
                        var $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ = $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$;
                        var $dirtyElement$jscomp$inline_8499_tagHandlerIndex$jscomp$inline_8506$$ = $JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$, $attribute$jscomp$inline_8500_unsanitizedAttrValue$jscomp$inline_8503$$ = $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$, 
                        $attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$ = $attribute$jscomp$inline_8500_unsanitizedAttrValue$jscomp$inline_8503$$.name;
                        if ($goog$string$internal$startsWith$$($attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$, "data-sanitizer-")) {
                          $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ = null;
                        } else {
                          var $elementName$jscomp$inline_8502$$ = $module$contents$goog$html$sanitizer$noclobber_getNodeName$$($dirtyElement$jscomp$inline_8499_tagHandlerIndex$jscomp$inline_8506$$);
                          $attribute$jscomp$inline_8500_unsanitizedAttrValue$jscomp$inline_8503$$ = $attribute$jscomp$inline_8500_unsanitizedAttrValue$jscomp$inline_8503$$.value;
                          var $policyHints$jscomp$inline_8504$$ = {tagName:$goog$string$internal$trim$$($elementName$jscomp$inline_8502$$).toLowerCase(), attributeName:$goog$string$internal$trim$$($attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$).toLowerCase()}, $policyContext$jscomp$inline_8505$$ = {$cssStyle$:void 0};
                          "style" == $policyHints$jscomp$inline_8504$$.attributeName && ($policyContext$jscomp$inline_8505$$.$cssStyle$ = $module$contents$goog$html$sanitizer$noclobber_getElementStyle$$($dirtyElement$jscomp$inline_8499_tagHandlerIndex$jscomp$inline_8506$$));
                          $dirtyElement$jscomp$inline_8499_tagHandlerIndex$jscomp$inline_8506$$ = $goog$html$sanitizer$HtmlSanitizer$attrIdentifier_$$($elementName$jscomp$inline_8502$$, $attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$);
                          $dirtyElement$jscomp$inline_8499_tagHandlerIndex$jscomp$inline_8506$$ in $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$.$b$ ? ($JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ = $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$.$b$[$dirtyElement$jscomp$inline_8499_tagHandlerIndex$jscomp$inline_8506$$], 
                          $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ = $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$($attribute$jscomp$inline_8500_unsanitizedAttrValue$jscomp$inline_8503$$, $policyHints$jscomp$inline_8504$$, $policyContext$jscomp$inline_8505$$)) : ($attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$ = 
                          $goog$html$sanitizer$HtmlSanitizer$attrIdentifier_$$(null, $attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$), $attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$ in $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$.$b$ ? ($JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ = 
                          $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$.$b$[$attributeName$jscomp$inline_8501_genericHandlerIndex$jscomp$inline_8508$$], $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ = $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$($attribute$jscomp$inline_8500_unsanitizedAttrValue$jscomp$inline_8503$$, 
                          $policyHints$jscomp$inline_8504$$, $policyContext$jscomp$inline_8505$$)) : $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ = null);
                        }
                        null === $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$ || $module$contents$goog$html$sanitizer$noclobber_setElementAttribute$$($newElement$jscomp$inline_8000_originalGrandParent$jscomp$inline_8008$$, $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$.name, 
                        $JSCompiler_StaticMethods_processElementAttribute$self$jscomp$inline_8498_handler$jscomp$inline_8507_newValue$jscomp$inline_8003$$);
                      }
                    }
                  }
                  $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$ = $newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$;
                } else {
                  $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$ = null;
                }
              }
              break c;
            default:
              $goog$log$warning$$($module$contents$goog$html$sanitizer$SafeDomTreeProcessor_logger$$, "Dropping unknown node type: " + $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$), $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$ = null;
          }
        }
        if ($JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$) {
          if (1 == $module$contents$goog$html$sanitizer$noclobber_getNodeType$$($JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$) && $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$.set($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$, $JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$), 
          $doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$ = $module$contents$goog$html$sanitizer$noclobber_getParentNode$$($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$), $JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$ = !1, $doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$) {
            $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $module$contents$goog$html$sanitizer$noclobber_getNodeType$$($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$), $newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$ = 
            $module$contents$goog$html$sanitizer$noclobber_getNodeName$$($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$).toLowerCase(), $newElement$jscomp$inline_8000_originalGrandParent$jscomp$inline_8008$$ = $module$contents$goog$html$sanitizer$noclobber_getParentNode$$($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$), 11 != $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ || 
            $newElement$jscomp$inline_8000_originalGrandParent$jscomp$inline_8008$$ ? "body" == $newElement$jscomp$inline_7995_originalParentNodeName$jscomp$inline_8007_spanElement$jscomp$inline_7999$$ && $newElement$jscomp$inline_8000_originalGrandParent$jscomp$inline_8008$$ && ($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = 
            $module$contents$goog$html$sanitizer$noclobber_getParentNode$$($newElement$jscomp$inline_8000_originalGrandParent$jscomp$inline_8008$$)) && !$module$contents$goog$html$sanitizer$noclobber_getParentNode$$($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$) && ($JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$ = 
            !0) : $JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$ = !0, $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = null, $JSCompiler_StaticMethods_createNode_$self$jscomp$inline_7988_JSCompiler_temp_const$jscomp$inline_7991_isParentRoot$jscomp$inline_8005_originalElement$jscomp$inline_7997$$ || 
            !$doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$ ? $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$ : 1 == $module$contents$goog$html$sanitizer$noclobber_getNodeType$$($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$) && 
            ($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$.get($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$)), $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$.content && 
            ($attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$ = $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$.content), $attribute$jscomp$inline_7994_dirtyGreatGrandParent$jscomp$inline_8009_dirtyName$jscomp$inline_7998_newParent$jscomp$inline_8010_node$jscomp$inline_7993_nodeType$jscomp$inline_7990_originalParentNodeType$jscomp$inline_8006$$.appendChild($JSCompiler_StaticMethods_createElement_$self$jscomp$inline_7996_newNode$jscomp$inline_7987_originalNode$jscomp$inline_7989$$);
          }
        } else {
          $goog$dom$removeChildren$$($doc$jscomp$inline_7984_originalNode$jscomp$inline_7986_originalParent$jscomp$inline_8004$$);
        }
      }
      $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$.clear && $elementMap$jscomp$inline_7985_iteratorParent$jscomp$inline_7981_templateElement$jscomp$inline_7983$$.clear();
      $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$ = $newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$;
    } else {
      $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$ = document.createElement("SPAN");
    }
    0 < $module$contents$goog$html$sanitizer$noclobber_getElementAttributes$$($JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$).length && ($newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$ = document.createElement("SPAN"), $newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$.appendChild($JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$), 
    $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$ = $newRoot$jscomp$inline_6603_newRoot$jscomp$inline_7978_unsanitizedHtml$jscomp$3$$);
    $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$ = (new XMLSerializer).serializeToString($JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$);
    $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$ = $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.slice($JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.indexOf(">") + 
    1, $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$.lastIndexOf("</"));
  } else {
    $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$ = "";
  }
  return $goog$html$uncheckedconversions$safeHtmlFromStringKnownToSatisfyTypeContract$$($goog$string$Const$from$$("Output of HTML sanitizer"), $JSCompiler_StaticMethods_sanitize$self$jscomp$inline_1204_newTree$jscomp$inline_6602_sanitizedString$jscomp$inline_1206_serializedNewTree$jscomp$inline_6604$$);
};
if ("undefined" != typeof angular) {
  var $module$$ = angular.module("chrome_18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && $module$$.directive("angularMessage", function() {
    return {restrict:"E", replace:!0, controller:["$scope", function($$scope$$) {
      var $$jscomp$this$jscomp$3$$ = this;
      this.$bidiFormatter_$ = this.$dir_$ = null;
      $$scope$$.dirForText = function($text$jscomp$16_tokens$jscomp$inline_6611$$) {
        $$jscomp$this$jscomp$3$$.$dir_$ || ($$jscomp$this$jscomp$3$$.$dir_$ = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        $$jscomp$this$jscomp$3$$.$bidiFormatter_$ || ($$jscomp$this$jscomp$3$$.$bidiFormatter_$ = new $goog$i18n$BidiFormatter$$("rtl" == $$jscomp$this$jscomp$3$$.$dir_$));
        var $JSCompiler_temp_const$jscomp$6411$$ = $$jscomp$this$jscomp$3$$.$bidiFormatter_$, $JSCompiler_inline_result$jscomp$6412_rtlCount$jscomp$inline_6608$$, $totalCount$jscomp$inline_6609$$ = $JSCompiler_inline_result$jscomp$6412_rtlCount$jscomp$inline_6608$$ = 0, $hasWeaklyLtr$jscomp$inline_6610$$ = !1;
        $text$jscomp$16_tokens$jscomp$inline_6611$$ = ($text$jscomp$16_tokens$jscomp$inline_6611$$ || "").split($goog$i18n$bidi$wordSeparatorRe_$$);
        for (var $i$jscomp$inline_6612$$ = 0; $i$jscomp$inline_6612$$ < $text$jscomp$16_tokens$jscomp$inline_6611$$.length; $i$jscomp$inline_6612$$++) {
          var $token$jscomp$inline_6613$$ = $text$jscomp$16_tokens$jscomp$inline_6611$$[$i$jscomp$inline_6612$$];
          $goog$i18n$bidi$rtlDirCheckRe_$$.test($token$jscomp$inline_6613$$) ? ($JSCompiler_inline_result$jscomp$6412_rtlCount$jscomp$inline_6608$$++, $totalCount$jscomp$inline_6609$$++) : $goog$i18n$bidi$isRequiredLtrRe_$$.test($token$jscomp$inline_6613$$) ? $hasWeaklyLtr$jscomp$inline_6610$$ = !0 : $goog$i18n$bidi$ltrCharReg_$$.test($token$jscomp$inline_6613$$) ? $totalCount$jscomp$inline_6609$$++ : $goog$i18n$bidi$hasNumeralsRe_$$.test($token$jscomp$inline_6613$$) && ($hasWeaklyLtr$jscomp$inline_6610$$ = 
          !0);
        }
        $JSCompiler_inline_result$jscomp$6412_rtlCount$jscomp$inline_6608$$ = 0 == $totalCount$jscomp$inline_6609$$ ? $hasWeaklyLtr$jscomp$inline_6610$$ ? 1 : 0 : 0.40 < $JSCompiler_inline_result$jscomp$6412_rtlCount$jscomp$inline_6608$$ / $totalCount$jscomp$inline_6609$$ ? -1 : 1;
        return -1 == (0 == $JSCompiler_inline_result$jscomp$6412_rtlCount$jscomp$inline_6608$$ ? $JSCompiler_temp_const$jscomp$6411$$.$b$ : $JSCompiler_inline_result$jscomp$6412_rtlCount$jscomp$inline_6608$$) ? "rtl" : "ltr";
      };
    }], compile:function($element$jscomp$66$$, $attrs$jscomp$2_msgId$$) {
      $attrs$jscomp$2_msgId$$ = $attrs$jscomp$2_msgId$$.key;
      var $args$jscomp$17_msg$jscomp$21$$ = null, $replaceElement$$ = document.createElement("amr");
      $attrs$jscomp$2_msgId$$ && !$attrs$jscomp$2_msgId$$.match(/^\d+$/) && ($attrs$jscomp$2_msgId$$ = chrome.i18n.getMessage($attrs$jscomp$2_msgId$$), null == $attrs$jscomp$2_msgId$$ && $replaceElement$$.setAttribute("id", "missing"));
      if ($attrs$jscomp$2_msgId$$) {
        var $i$jscomp$100_placeholders$$ = chrome.i18n.getMessage($attrs$jscomp$2_msgId$$ + "_ph");
        $args$jscomp$17_msg$jscomp$21$$ = [];
        if (null != $i$jscomp$100_placeholders$$) {
          for ($args$jscomp$17_msg$jscomp$21$$ = $i$jscomp$100_placeholders$$.split("\ue000"), $i$jscomp$100_placeholders$$ = 0; $i$jscomp$100_placeholders$$ < $args$jscomp$17_msg$jscomp$21$$.length; ++$i$jscomp$100_placeholders$$) {
            $args$jscomp$17_msg$jscomp$21$$[$i$jscomp$100_placeholders$$] = $args$jscomp$17_msg$jscomp$21$$[$i$jscomp$100_placeholders$$].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        $args$jscomp$17_msg$jscomp$21$$ = chrome.i18n.getMessage($attrs$jscomp$2_msgId$$, $args$jscomp$17_msg$jscomp$21$$);
      } else {
        $replaceElement$$.setAttribute("r", "nokey");
      }
      $args$jscomp$17_msg$jscomp$21$$ ? $goog$dom$safe$setInnerHtml$$($replaceElement$$, $goog$html$sanitizer$HtmlSanitizer$sanitize$$($args$jscomp$17_msg$jscomp$21$$)) : ($replaceElement$$.setAttribute("tl", "false"), $goog$dom$safe$setInnerHtml$$($replaceElement$$, $goog$html$sanitizer$HtmlSanitizer$sanitize$$($element$jscomp$66$$.html())));
      $element$jscomp$66$$.replaceWith($replaceElement$$);
    }};
  });
}
;var $FeedbackCtrl$$ = function($$scope$jscomp$1$$, $$mdDialog$$) {
  var $$jscomp$this$jscomp$4$$ = this;
  this.$m$ = $$mdDialog$$;
  this.$b$ = $$scope$jscomp$1$$;
  this.$b$.top = $$scope$jscomp$1$$;
  this.$o$ = [];
  this.$h$ = !1;
  this.$f$ = new $mr$FeedbackUtils$ProductInfo$$;
  this.$b$.videoSmoothnessRatings = this.$toStandardRatings_$($mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_FREEZES$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_JERKY$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_STUTTER$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_SMOOTH$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_PERFECT$$);
  this.$b$.videoQualityRatings = this.$toStandardRatings_$($mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_UNWATCHABLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_POOR$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_ACCEPTABLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GOOD$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_VIDEO_GREAT$$);
  this.$b$.audioQualityRatings = this.$toStandardRatings_$($mr$feedback$Messages$MSG_MR_FEEDBACK_NA$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_UNINTELLIGIBLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_POOR$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_ACCEPTABLE$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_GOOD$$, $mr$feedback$Messages$MSG_MR_FEEDBACK_AUDIO_PERFECT$$);
  this.$o$ = [{value:"Bug", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_BUG_OR_ERROR$$}, {value:"FeatureRequest", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_FEATURE_REQUEST$$}, {value:"MirroringQuality", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_PROJECTION_QUALITY$$}, {value:"Discovery", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_DISCOVERY$$}, {value:"Other", desc:$mr$feedback$Messages$MSG_MR_FEEDBACK_TYPE_OTHER$$}];
  this.$b$.feedbackTypes = this.$o$;
  this.$b$.includeFineLogs = !0;
  this.$b$.feedbackType = "Bug";
  this.$b$.sendFeedback = this.$sendFeedback_$.bind(this);
  this.$b$.cancel = this.$cancel_$.bind(this);
  this.$b$.attachLogsClick = this.$l$.bind(this);
  this.$b$.viewLogs = this.$G$.bind(this);
  this.$b$.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "), this.$checkHasSufficientFeedback_$.bind(this));
  this.$b$.sufficientFeedback = !1;
  this.$b$.$watch("attachLogs", this.$l$.bind(this));
  this.$b$.attachLogs = !0;
  this.$s$ = $goog$string$getRandomString$$();
  this.$b$.userEmail = "";
  chrome.identity.getProfileUserInfo(function($info$jscomp$5$$) {
    $$jscomp$this$jscomp$4$$.$b$.userEmail = $info$jscomp$5$$.email;
    $JSCompiler_StaticMethods_safeApply_$$($$jscomp$this$jscomp$4$$);
  });
  this.$b$.yourAnswerText = $mr$feedback$Messages$MSG_MR_FEEDBACK_YOUR_ANSWER$$;
  this.$b$.language = chrome.i18n && chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : chrome.runtime.getManifest().default_locale;
  this.$b$.requestLogsInProgress = !1;
  this.$b$.mrVersion = chrome.runtime.getManifest().version;
};
$JSCompiler_prototypeAlias$$ = $FeedbackCtrl$$.prototype;
$JSCompiler_prototypeAlias$$.$toStandardRatings_$ = function($var_args$jscomp$95$$) {
  for (var $arr$jscomp$65$$ = [], $i$jscomp$101$$ = 1; $i$jscomp$101$$ < arguments.length; $i$jscomp$101$$++) {
    $arr$jscomp$65$$.push(new $FeedbackCtrl$Rating_$$($i$jscomp$101$$, arguments[$i$jscomp$101$$]));
  }
  $arr$jscomp$65$$.push(new $FeedbackCtrl$Rating_$$(0, arguments[0]));
  return $arr$jscomp$65$$;
};
$JSCompiler_prototypeAlias$$.$cancel_$ = function() {
  this.$b$.feedbackDescription && !confirm($mr$feedback$Messages$MSG_MR_FEEDBACK_DISCARD_CONFIRMATION$$) || window.close();
};
$JSCompiler_prototypeAlias$$.$checkHasSufficientFeedback_$ = function() {
  var $type$jscomp$165$$ = this.$b$.feedbackType;
  this.$b$.sufficientFeedback = "MirroringQuality" == $type$jscomp$165$$ ? this.$b$.videoSmoothness || this.$b$.videoQuality || this.$b$.audioQuality || this.$b$.comments : "Discovery" == $type$jscomp$165$$ ? this.$b$.visibleInSetup || this.$b$.comments : !!this.$b$.feedbackDescription;
};
$JSCompiler_prototypeAlias$$.$sendFeedback_$ = function() {
  if (this.$b$.sufficientFeedback) {
    var $description$jscomp$inline_1223_type$jscomp$166$$ = this.$b$.feedbackType, $text$jscomp$17$$ = "";
    "MirroringQuality" == $description$jscomp$inline_1223_type$jscomp$166$$ ? (this.$b$.videoSmoothness && ($text$jscomp$17$$ += "\nVideo Smoothness: " + this.$b$.videoSmoothness), this.$b$.videoQuality && ($text$jscomp$17$$ += "\nVideo Quality: " + this.$b$.videoQuality), this.$b$.audioQuality && ($text$jscomp$17$$ += "\nAudio: " + this.$b$.audioQuality), this.$b$.projectedContentUrl && ($text$jscomp$17$$ += "\nProjected Content/URL: " + this.$b$.projectedContentUrl), this.$b$.comments && ($text$jscomp$17$$ += 
    "\nComments: " + this.$b$.comments)) : "Discovery" == $description$jscomp$inline_1223_type$jscomp$166$$ ? (this.$b$.visibleInSetup && ($text$jscomp$17$$ += "\nChromecast Visible in Setup: " + this.$b$.visibleInSetup), this.$b$.hasNetworkSoftware && ($text$jscomp$17$$ += "\nUsing VPN/proxy/firewall/NAS Software: " + this.$b$.hasNetworkSoftware), this.$b$.networkDescription && ($text$jscomp$17$$ += "\nNetwork Description: " + this.$b$.networkDescription), this.$b$.comments && ($text$jscomp$17$$ += 
    "\nComments: " + this.$b$.comments)) : $text$jscomp$17$$ = this.$b$.feedbackDescription;
    $description$jscomp$inline_1223_type$jscomp$166$$ = "Type: " + $description$jscomp$inline_1223_type$jscomp$166$$ + "\n\n" + $text$jscomp$17$$;
    this.$b$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_SENDING$$;
    this.$b$.okButton = $mr$feedback$Messages$MSG_MR_FEEDBACK_OK$$;
    this.$b$.feedbackSent = !1;
    this.$m$.show({locals:{$feedbackSent$:this.$b$.feedbackSent, $sendDialogText$:this.$b$.sendDialogText, $okButton$:this.$b$.okButton}, scope:this.$b$, preserveScope:!0, bindToController:!0, template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>', 
    controller:this.$g$});
    this.$sendFeedbackWithLogsOrAfterTimeout_$($description$jscomp$inline_1223_type$jscomp$166$$, Date.now());
  }
};
$JSCompiler_prototypeAlias$$.$sendFeedbackWithLogsOrAfterTimeout_$ = function($description$jscomp$6$$, $startTime$jscomp$7$$) {
  var $currentTime$$ = Date.now();
  !this.$b$.requestLogsInProgress || 5000 < $currentTime$$ - $startTime$jscomp$7$$ ? $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$$(this, $description$jscomp$6$$) : setTimeout(this.$sendFeedbackWithLogsOrAfterTimeout_$.bind(this), 1000, $description$jscomp$6$$, $startTime$jscomp$7$$);
};
var $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$$ = function($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$, $description$jscomp$7$$) {
  var $attemptNumber$$ = 0, $sendCallback$$ = function($resolve$jscomp$8$$, $reject$jscomp$7$$, $isSuccess$$) {
    $isSuccess$$ ? $resolve$jscomp$8$$(!0) : ($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$b$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_RESENDING$$, $JSCompiler_StaticMethods_safeApply_$$($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$), $reject$jscomp$7$$(Error("Failed to send")));
  };
  (new $module$exports$mr$Retry$$(function() {
    $attemptNumber$$++;
    return new Promise(function($callback$jscomp$inline_1229_resolve$jscomp$9$$, $manifest$jscomp$inline_1230_reject$jscomp$8$$) {
      var $userEmail$jscomp$inline_1227$$ = $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$b$.userEmail, $productInfo$jscomp$inline_1228$$ = $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$f$;
      $callback$jscomp$inline_1229_resolve$jscomp$9$$ = $sendCallback$$.bind(null, $callback$jscomp$inline_1229_resolve$jscomp$9$$, $manifest$jscomp$inline_1230_reject$jscomp$8$$);
      $manifest$jscomp$inline_1230_reject$jscomp$8$$ = chrome.runtime.getManifest();
      $userfeedback$api$startFeedback$$({productId:85561, bucket:"Canary", flow:"submit", serverUri:"https://www.google.com/tools/feedback", allowNonLoggedInFeedback:!0, locale:$manifest$jscomp$inline_1230_reject$jscomp$8$$.default_locale, enableAnonymousFeedback:!$userEmail$jscomp$inline_1227$$, report:{description:$description$jscomp$7$$}, callback:$callback$jscomp$inline_1229_resolve$jscomp$9$$}, {version:$manifest$jscomp$inline_1230_reject$jscomp$8$$.version, description:$manifest$jscomp$inline_1230_reject$jscomp$8$$.description, 
      user_email:$userEmail$jscomp$inline_1227$$ || "NA", logs:$productInfo$jscomp$inline_1228$$.$logs$ || "NA", external_logs:$productInfo$jscomp$inline_1228$$.$b$ || "NA", device_model:$productInfo$jscomp$inline_1228$$.modelName || "NA", receiver_version:$productInfo$jscomp$inline_1228$$.$s$ || "NA", dash_report_url:$productInfo$jscomp$inline_1228$$.$h$ || "NA", cast_device_counts:$productInfo$jscomp$inline_1228$$.$f$, dial_device_counts:$productInfo$jscomp$inline_1228$$.$g$, mirroring_service_enabled:$productInfo$jscomp$inline_1228$$.$l$, 
      native_cast_mrp_enabled:$productInfo$jscomp$inline_1228$$.$m$, native_dial_mrp_enabled:$productInfo$jscomp$inline_1228$$.$o$});
    });
  }, 10000, 4)).start().then(function() {
    $mr$Analytics$recordEvent$$("MediaRouter.Ui.Action.Feedback");
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$b$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_SUCCESS$$;
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$b$.feedbackSent = !0;
    $JSCompiler_StaticMethods_safeApply_$$($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$);
  }, function() {
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$b$.sendDialogText = $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_FAIL$$;
    $JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$.$b$.feedbackSent = !0;
    $JSCompiler_StaticMethods_safeApply_$$($JSCompiler_StaticMethods_doSendFeedbackWithRetry_$self$$);
  });
};
$FeedbackCtrl$$.prototype.$l$ = function() {
  var $$jscomp$this$jscomp$6$$ = this;
  this.$f$ = new $mr$FeedbackUtils$ProductInfo$$;
  this.$b$.attachLogs && (this.$b$.requestLogsInProgress = !0, chrome.runtime.sendMessage(new $mr$InternalMessage$$(this.$s$, "retrieve_log_data"), function($receiver_response$jscomp$7$$) {
    $$jscomp$this$jscomp$6$$.$b$.requestLogsInProgress = !1;
    $$jscomp$this$jscomp$6$$.$f$.$logs$ = $receiver_response$jscomp$7$$.logs || "no extension";
    $$jscomp$this$jscomp$6$$.$f$.$logs$ += "\n";
    $$jscomp$this$jscomp$6$$.$f$.$logs$ += $receiver_response$jscomp$7$$.mediaSinkServiceStatus || "no media sink service status from browser";
    $receiver_response$jscomp$7$$.castStreamingLogs && ($$jscomp$this$jscomp$6$$.$f$.$h$ = $receiver_response$jscomp$7$$.castStreamingLogs);
    $receiver_response$jscomp$7$$.castDeviceCounts && ($$jscomp$this$jscomp$6$$.$f$.$f$ = $receiver_response$jscomp$7$$.castDeviceCounts);
    $receiver_response$jscomp$7$$.dialDeviceCounts && ($$jscomp$this$jscomp$6$$.$f$.$g$ = $receiver_response$jscomp$7$$.dialDeviceCounts);
    $$jscomp$this$jscomp$6$$.$f$.$l$ = !!$receiver_response$jscomp$7$$.mirroringServiceEnabled;
    $$jscomp$this$jscomp$6$$.$f$.$m$ = !!$receiver_response$jscomp$7$$.nativeCastMrpEnabled;
    $$jscomp$this$jscomp$6$$.$f$.$o$ = !!$receiver_response$jscomp$7$$.nativeDialMrpEnabled;
    if ($receiver_response$jscomp$7$$ = $receiver_response$jscomp$7$$.device) {
      if ($receiver_response$jscomp$7$$.model && ($$jscomp$this$jscomp$6$$.$f$.modelName = $receiver_response$jscomp$7$$.model), $receiver_response$jscomp$7$$.version && ($$jscomp$this$jscomp$6$$.$f$.$s$ = $receiver_response$jscomp$7$$.version), !$$jscomp$this$jscomp$6$$.$h$) {
        var $logId$jscomp$1$$ = $goog$string$getRandomString$$();
        $$jscomp$this$jscomp$6$$.$h$ = !0;
        $$jscomp$this$jscomp$6$$.$f$.$b$ = $module$contents$mr$DongleUtils_DongleUtils$requestDeviceToSendLogs$$($receiver_response$jscomp$7$$.ip, $logId$jscomp$1$$, $$jscomp$this$jscomp$6$$.$C$.bind($$jscomp$this$jscomp$6$$));
      }
    }
  }));
};
$FeedbackCtrl$$.prototype.$G$ = function() {
  this.$b$.logs = this.$f$.$logs$;
  this.$b$.logsHeader = $mr$feedback$Messages$MSG_MR_FEEDBACK_LOGS_HEADER$$;
  this.$b$.sendLogs = $mr$feedback$Messages$MSG_MR_FEEDBACK_SEND_LOGS$$;
  this.$b$.fineLogsWarning = $mr$feedback$Messages$MSG_MR_FEEDBACK_FINE_LOGS_WARNING$$;
  this.$b$.okButton = $mr$feedback$Messages$MSG_MR_FEEDBACK_OK$$;
  this.$m$.show({locals:{$attachLogs$:this.$b$.attachLogs, $logs$:this.$b$.logs, $includeFineLogs$:this.$b$.includeFineLogs, $logsHeader$:this.$b$.logsHeader, $sendLogs$:this.$b$.sendLogs, $fineLogsWarning$:this.$b$.fineLogsWarning, $okButton$:this.$b$.okButton}, scope:this.$b$, preserveScope:!0, bindToController:!0, clickOutsideToClose:!0, template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>', 
  controller:this.$g$});
};
$FeedbackCtrl$$.prototype.$C$ = function($status$jscomp$1$$, $content$jscomp$12$$) {
  this.$h$ = !1;
  this.$f$.$b$ = "error" == $status$jscomp$1$$ ? "" : $content$jscomp$12$$;
  this.$b$.attachLogs || (this.$f$.$b$ = "");
  $JSCompiler_StaticMethods_safeApply_$$(this);
};
var $JSCompiler_StaticMethods_safeApply_$$ = function($JSCompiler_StaticMethods_safeApply_$self$$) {
  $JSCompiler_StaticMethods_safeApply_$self$$.$b$.$$phase || $JSCompiler_StaticMethods_safeApply_$self$$.$b$.$apply();
};
$FeedbackCtrl$$.prototype.$g$ = function($$scope$jscomp$2$$, $$mdDialog$jscomp$1$$) {
  $$scope$jscomp$2$$.closeWindow = function() {
    window.close();
  };
  $$scope$jscomp$2$$.closeDialog = function() {
    $$mdDialog$jscomp$1$$.hide();
  };
};
$FeedbackCtrl$$.prototype.$g$.$inject = ["$scope", "$mdDialog"];
var $FeedbackCtrl$Rating_$$ = function($value$jscomp$177$$, $rating$$) {
  this.id = $value$jscomp$177$$;
  this.desc = $rating$$;
  this.text = 0 == $value$jscomp$177$$ ? $rating$$ : $value$jscomp$177$$ + " (" + $rating$$ + ")";
};
angular.module("feedbackApp", "chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl", ["$scope", "$mdDialog", $FeedbackCtrl$$]);
$goog$exportSymbol$$("ng.safehtml.googSceHelper.isGoogHtmlType", function($value$jscomp$178$$) {
  return $value$jscomp$178$$ && $value$jscomp$178$$.$implementsGoogStringTypedString$ ? !0 : !1;
});
$goog$exportSymbol$$("ng.safehtml.googSceHelper.isCOMPILED", function() {
  return !0;
});
$goog$exportSymbol$$("ng.safehtml.googSceHelper.unwrapAny", function($value$jscomp$179$$) {
  if ($value$jscomp$179$$ instanceof $goog$html$TrustedResourceUrl$$) {
    return $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($value$jscomp$179$$).toString();
  }
  if ($value$jscomp$179$$ instanceof $goog$html$SafeHtml$$) {
    return $goog$html$SafeHtml$unwrapTrustedHTML$$($value$jscomp$179$$).toString();
  }
  if ($value$jscomp$179$$ instanceof $goog$html$SafeUrl$$) {
    return $goog$html$SafeUrl$unwrapTrustedURL$$($value$jscomp$179$$).toString();
  }
  if ($value$jscomp$179$$ instanceof $goog$html$SafeStyle$$) {
    return $goog$html$SafeStyle$unwrap$$($value$jscomp$179$$);
  }
  if ($value$jscomp$179$$ instanceof $goog$html$SafeScript$$) {
    return $goog$html$SafeScript$unwrapTrustedScript$$($value$jscomp$179$$).toString();
  }
  throw Error();
});
$goog$exportSymbol$$("ng.safehtml.googSceHelper.unwrapGivenContext", function($type$jscomp$167$$, $maybeTrusted$jscomp$7$$) {
  if ("html" == $type$jscomp$167$$) {
    return $goog$html$SafeHtml$unwrapTrustedHTML$$($maybeTrusted$jscomp$7$$).toString();
  }
  if ("resourceUrl" == $type$jscomp$167$$ || "templateUrl" == $type$jscomp$167$$) {
    return $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($maybeTrusted$jscomp$7$$).toString();
  }
  if ("url" == $type$jscomp$167$$) {
    return $maybeTrusted$jscomp$7$$ instanceof $goog$html$TrustedResourceUrl$$ ? $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($maybeTrusted$jscomp$7$$).toString() : $goog$html$SafeUrl$unwrapTrustedURL$$($maybeTrusted$jscomp$7$$).toString();
  }
  if ("css" == $type$jscomp$167$$) {
    return $goog$html$SafeStyle$unwrap$$($maybeTrusted$jscomp$7$$);
  }
  if ("js" == $type$jscomp$167$$) {
    return $goog$html$SafeScript$unwrapTrustedScript$$($maybeTrusted$jscomp$7$$).toString();
  }
  throw Error();
});

