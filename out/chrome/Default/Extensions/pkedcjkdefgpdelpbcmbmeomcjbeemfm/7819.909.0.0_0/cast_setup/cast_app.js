'use strict';
var $JSCompiler_prototypeAlias$$, $$jscomp$arrayIteratorImpl$$ = function $$$jscomp$arrayIteratorImpl$$$($array$jscomp$6$$) {
  var $index$jscomp$66$$ = 0;
  return function() {
    return $index$jscomp$66$$ < $array$jscomp$6$$.length ? {done:!1, value:$array$jscomp$6$$[$index$jscomp$66$$++]} : {done:!0};
  };
}, $$jscomp$makeIterator$$ = function $$$jscomp$makeIterator$$$($iterable$jscomp$2$$) {
  var $iteratorFunction$$ = "undefined" != typeof Symbol && Symbol.iterator && $iterable$jscomp$2$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$jscomp$2$$) : {next:$$jscomp$arrayIteratorImpl$$($iterable$jscomp$2$$)};
}, $$jscomp$objectCreate$$ = "function" == typeof Object.create ? Object.create : function($prototype$$) {
  var $ctor$$ = function $$ctor$$$() {
  };
  $ctor$$.prototype = $prototype$$;
  return new $ctor$$;
}, $JSCompiler_temp$jscomp$7$$;
if ("function" == typeof Object.setPrototypeOf) {
  $JSCompiler_temp$jscomp$7$$ = Object.setPrototypeOf;
} else {
  var $JSCompiler_inline_result$jscomp$8$$;
  a: {
    var $x$jscomp$inline_67$$ = {$a$:!0}, $y$jscomp$inline_68$$ = {};
    try {
      $y$jscomp$inline_68$$.__proto__ = $x$jscomp$inline_67$$;
      $JSCompiler_inline_result$jscomp$8$$ = $y$jscomp$inline_68$$.$a$;
      break a;
    } catch ($e$jscomp$inline_69$$) {
    }
    $JSCompiler_inline_result$jscomp$8$$ = !1;
  }
  $JSCompiler_temp$jscomp$7$$ = $JSCompiler_inline_result$jscomp$8$$ ? function($target$jscomp$83$$, $proto$jscomp$4$$) {
    $target$jscomp$83$$.__proto__ = $proto$jscomp$4$$;
    if ($target$jscomp$83$$.__proto__ !== $proto$jscomp$4$$) {
      throw new TypeError($target$jscomp$83$$ + " is not extensible");
    }
    return $target$jscomp$83$$;
  } : null;
}
var $$jscomp$setPrototypeOf$$ = $JSCompiler_temp$jscomp$7$$, $$jscomp$inherits$$ = function $$$jscomp$inherits$$$($childCtor$$, $parentCtor$$) {
  $childCtor$$.prototype = $$jscomp$objectCreate$$($parentCtor$$.prototype);
  $childCtor$$.prototype.constructor = $childCtor$$;
  if ($$jscomp$setPrototypeOf$$) {
    $$jscomp$setPrototypeOf$$($childCtor$$, $parentCtor$$);
  } else {
    for (var $p$$ in $parentCtor$$) {
      if ("prototype" != $p$$) {
        if (Object.defineProperties) {
          var $descriptor$jscomp$2$$ = Object.getOwnPropertyDescriptor($parentCtor$$, $p$$);
          $descriptor$jscomp$2$$ && Object.defineProperty($childCtor$$, $p$$, $descriptor$jscomp$2$$);
        } else {
          $childCtor$$[$p$$] = $parentCtor$$[$p$$];
        }
      }
    }
  }
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
}, $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$84$$, $property$jscomp$4$$, $descriptor$jscomp$3$$) {
  $target$jscomp$84$$ != Array.prototype && $target$jscomp$84$$ != Object.prototype && ($target$jscomp$84$$[$property$jscomp$4$$] = $descriptor$jscomp$3$$.value);
}, $$jscomp$global$$ = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, $$jscomp$polyfill$$ = function $$$jscomp$polyfill$$$($property$jscomp$5_split_target$jscomp$85$$, $impl_polyfill$$) {
  if ($impl_polyfill$$) {
    var $obj$jscomp$30$$ = $$jscomp$global$$;
    $property$jscomp$5_split_target$jscomp$85$$ = $property$jscomp$5_split_target$jscomp$85$$.split(".");
    for (var $i$jscomp$4_orig$$ = 0; $i$jscomp$4_orig$$ < $property$jscomp$5_split_target$jscomp$85$$.length - 1; $i$jscomp$4_orig$$++) {
      var $key$jscomp$37$$ = $property$jscomp$5_split_target$jscomp$85$$[$i$jscomp$4_orig$$];
      $key$jscomp$37$$ in $obj$jscomp$30$$ || ($obj$jscomp$30$$[$key$jscomp$37$$] = {});
      $obj$jscomp$30$$ = $obj$jscomp$30$$[$key$jscomp$37$$];
    }
    $property$jscomp$5_split_target$jscomp$85$$ = $property$jscomp$5_split_target$jscomp$85$$[$property$jscomp$5_split_target$jscomp$85$$.length - 1];
    $i$jscomp$4_orig$$ = $obj$jscomp$30$$[$property$jscomp$5_split_target$jscomp$85$$];
    $impl_polyfill$$ = $impl_polyfill$$($i$jscomp$4_orig$$);
    $impl_polyfill$$ != $i$jscomp$4_orig$$ && null != $impl_polyfill$$ && $$jscomp$defineProperty$$($obj$jscomp$30$$, $property$jscomp$5_split_target$jscomp$85$$, {configurable:!0, writable:!0, value:$impl_polyfill$$});
  }
}, $$jscomp$checkStringArgs$$ = function $$$jscomp$checkStringArgs$$$($thisArg$jscomp$3$$, $arg$jscomp$6$$, $func$jscomp$3$$) {
  if (null == $thisArg$jscomp$3$$) {
    throw new TypeError("The 'this' value for String.prototype." + $func$jscomp$3$$ + " must not be null or undefined");
  }
  if ($arg$jscomp$6$$ instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + $func$jscomp$3$$ + " must not be a regular expression");
  }
  return $thisArg$jscomp$3$$ + "";
};
$$jscomp$polyfill$$("String.prototype.endsWith", function($orig$jscomp$3$$) {
  return $orig$jscomp$3$$ ? $orig$jscomp$3$$ : function($searchString$jscomp$3$$, $i$jscomp$5_opt_position$jscomp$3$$) {
    var $string$jscomp$3$$ = $$jscomp$checkStringArgs$$(this, $searchString$jscomp$3$$, "endsWith");
    $searchString$jscomp$3$$ += "";
    void 0 === $i$jscomp$5_opt_position$jscomp$3$$ && ($i$jscomp$5_opt_position$jscomp$3$$ = $string$jscomp$3$$.length);
    $i$jscomp$5_opt_position$jscomp$3$$ = Math.max(0, Math.min($i$jscomp$5_opt_position$jscomp$3$$ | 0, $string$jscomp$3$$.length));
    for (var $j$$ = $searchString$jscomp$3$$.length; 0 < $j$$ && 0 < $i$jscomp$5_opt_position$jscomp$3$$;) {
      if ($string$jscomp$3$$[--$i$jscomp$5_opt_position$jscomp$3$$] != $searchString$jscomp$3$$[--$j$$]) {
        return !1;
      }
    }
    return 0 >= $j$$;
  };
});
$$jscomp$polyfill$$("String.prototype.startsWith", function($orig$jscomp$4$$) {
  return $orig$jscomp$4$$ ? $orig$jscomp$4$$ : function($searchString$jscomp$4$$, $i$jscomp$6_opt_position$jscomp$4$$) {
    var $string$jscomp$4$$ = $$jscomp$checkStringArgs$$(this, $searchString$jscomp$4$$, "startsWith");
    $searchString$jscomp$4$$ += "";
    var $strLen$$ = $string$jscomp$4$$.length, $searchLen$$ = $searchString$jscomp$4$$.length;
    $i$jscomp$6_opt_position$jscomp$4$$ = Math.max(0, Math.min($i$jscomp$6_opt_position$jscomp$4$$ | 0, $string$jscomp$4$$.length));
    for (var $j$jscomp$1$$ = 0; $j$jscomp$1$$ < $searchLen$$ && $i$jscomp$6_opt_position$jscomp$4$$ < $strLen$$;) {
      if ($string$jscomp$4$$[$i$jscomp$6_opt_position$jscomp$4$$++] != $searchString$jscomp$4$$[$j$jscomp$1$$++]) {
        return !1;
      }
    }
    return $j$jscomp$1$$ >= $searchLen$$;
  };
});
$$jscomp$polyfill$$("Number.parseInt", function($orig$jscomp$6$$) {
  return $orig$jscomp$6$$ || parseInt;
});
var $goog$$ = $goog$$ || {}, $goog$global$$ = this || self, $goog$isDef$$ = function $$goog$isDef$$$($val$$) {
  return void 0 !== $val$$;
}, $goog$isString$$ = function $$goog$isString$$$($val$jscomp$1$$) {
  return "string" == typeof $val$jscomp$1$$;
}, $goog$nullFunction$$ = function $$goog$nullFunction$$$() {
}, $goog$addSingletonGetter$$ = function $$goog$addSingletonGetter$$$($ctor$jscomp$1$$) {
  $ctor$jscomp$1$$.$instance_$ = void 0;
  $ctor$jscomp$1$$.$getInstance$ = function $$ctor$jscomp$1$$$$getInstance$$() {
    return $ctor$jscomp$1$$.$instance_$ ? $ctor$jscomp$1$$.$instance_$ : $ctor$jscomp$1$$.$instance_$ = new $ctor$jscomp$1$$;
  };
}, $goog$typeOf$$ = function $$goog$typeOf$$$($value$jscomp$91$$) {
  var $s$jscomp$6$$ = typeof $value$jscomp$91$$;
  if ("object" == $s$jscomp$6$$) {
    if ($value$jscomp$91$$) {
      if ($value$jscomp$91$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$91$$ instanceof Object) {
        return $s$jscomp$6$$;
      }
      var $className$$ = Object.prototype.toString.call($value$jscomp$91$$);
      if ("[object Window]" == $className$$) {
        return "object";
      }
      if ("[object Array]" == $className$$ || "number" == typeof $value$jscomp$91$$.length && "undefined" != typeof $value$jscomp$91$$.splice && "undefined" != typeof $value$jscomp$91$$.propertyIsEnumerable && !$value$jscomp$91$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$ || "undefined" != typeof $value$jscomp$91$$.call && "undefined" != typeof $value$jscomp$91$$.propertyIsEnumerable && !$value$jscomp$91$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$6$$ && "undefined" == typeof $value$jscomp$91$$.call) {
      return "object";
    }
  }
  return $s$jscomp$6$$;
}, $goog$isArray$$ = function $$goog$isArray$$$($val$jscomp$6$$) {
  return "array" == $goog$typeOf$$($val$jscomp$6$$);
}, $goog$isArrayLike$$ = function $$goog$isArrayLike$$$($val$jscomp$7$$) {
  var $type$jscomp$143$$ = $goog$typeOf$$($val$jscomp$7$$);
  return "array" == $type$jscomp$143$$ || "object" == $type$jscomp$143$$ && "number" == typeof $val$jscomp$7$$.length;
}, $goog$isFunction$$ = function $$goog$isFunction$$$($val$jscomp$9$$) {
  return "function" == $goog$typeOf$$($val$jscomp$9$$);
}, $goog$isObject$$ = function $$goog$isObject$$$($val$jscomp$10$$) {
  var $type$jscomp$144$$ = typeof $val$jscomp$10$$;
  return "object" == $type$jscomp$144$$ && null != $val$jscomp$10$$ || "function" == $type$jscomp$144$$;
}, $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$bindNative_$$ = function $$goog$bindNative_$$$($fn$$, $selfObj$jscomp$2$$, $var_args$jscomp$34$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
}, $goog$bindJs_$$ = function $$goog$bindJs_$$$($fn$jscomp$1$$, $selfObj$jscomp$3$$, $var_args$jscomp$35$$) {
  if (!$fn$jscomp$1$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$jscomp$1$$.apply($selfObj$jscomp$3$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$jscomp$1$$.apply($selfObj$jscomp$3$$, arguments);
  };
}, $goog$bind$$ = function $$goog$bind$$$($fn$jscomp$2$$, $selfObj$jscomp$4$$, $var_args$jscomp$36$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bind$$ = $goog$bindNative_$$ : $goog$bind$$ = $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}, $goog$partial$$ = function $$goog$partial$$$($fn$jscomp$3$$, $var_args$jscomp$37$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$jscomp$1$$ = $args$$.slice();
    $newArgs$jscomp$1$$.push.apply($newArgs$jscomp$1$$, arguments);
    return $fn$jscomp$3$$.apply(this, $newArgs$jscomp$1$$);
  };
}, $goog$now$$ = Date.now || function() {
  return +new Date;
}, $goog$exportSymbol$$ = function $$goog$exportSymbol$$$($parts$jscomp$inline_74_publicPath$$, $object$$) {
  $parts$jscomp$inline_74_publicPath$$ = $parts$jscomp$inline_74_publicPath$$.split(".");
  var $cur$jscomp$inline_75$$ = $goog$global$$;
  $parts$jscomp$inline_74_publicPath$$[0] in $cur$jscomp$inline_75$$ || "undefined" == typeof $cur$jscomp$inline_75$$.execScript || $cur$jscomp$inline_75$$.execScript("var " + $parts$jscomp$inline_74_publicPath$$[0]);
  for (var $part$jscomp$inline_76$$; $parts$jscomp$inline_74_publicPath$$.length && ($part$jscomp$inline_76$$ = $parts$jscomp$inline_74_publicPath$$.shift());) {
    !$parts$jscomp$inline_74_publicPath$$.length && $goog$isDef$$($object$$) ? $cur$jscomp$inline_75$$[$part$jscomp$inline_76$$] = $object$$ : $cur$jscomp$inline_75$$[$part$jscomp$inline_76$$] && $cur$jscomp$inline_75$$[$part$jscomp$inline_76$$] !== Object.prototype[$part$jscomp$inline_76$$] ? $cur$jscomp$inline_75$$ = $cur$jscomp$inline_75$$[$part$jscomp$inline_76$$] : $cur$jscomp$inline_75$$ = $cur$jscomp$inline_75$$[$part$jscomp$inline_76$$] = {};
  }
}, $goog$inherits$$ = function $$goog$inherits$$$($childCtor$jscomp$1$$, $parentCtor$jscomp$1$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.$superClass_$ = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.prototype = new $tempCtor$$;
  $childCtor$jscomp$1$$.prototype.constructor = $childCtor$jscomp$1$$;
};
var $goog$debug$Error$$ = function $$goog$debug$Error$$$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
};
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
var $goog$asserts$AssertionError$$ = function $$goog$asserts$AssertionError$$$($messagePattern_splitParts$jscomp$inline_80$$, $messageArgs$$) {
  $messagePattern_splitParts$jscomp$inline_80$$ = $messagePattern_splitParts$jscomp$inline_80$$.split("%s");
  for (var $returnString$jscomp$inline_81$$ = "", $subLast$jscomp$inline_82$$ = $messagePattern_splitParts$jscomp$inline_80$$.length - 1, $i$jscomp$inline_83$$ = 0; $i$jscomp$inline_83$$ < $subLast$jscomp$inline_82$$; $i$jscomp$inline_83$$++) {
    $returnString$jscomp$inline_81$$ += $messagePattern_splitParts$jscomp$inline_80$$[$i$jscomp$inline_83$$] + ($i$jscomp$inline_83$$ < $messageArgs$$.length ? $messageArgs$$[$i$jscomp$inline_83$$] : "%s");
  }
  $goog$debug$Error$$.call(this, $returnString$jscomp$inline_81$$ + $messagePattern_splitParts$jscomp$inline_80$$[$subLast$jscomp$inline_82$$]);
};
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
var $goog$asserts$fail$$ = function $$goog$asserts$fail$$$($opt_message$jscomp$10$$, $var_args$jscomp$43$$) {
  throw new $goog$asserts$AssertionError$$("Failure" + ($opt_message$jscomp$10$$ ? ": " + $opt_message$jscomp$10$$ : ""), Array.prototype.slice.call(arguments, 1));
};
var $goog$array$indexOf$$ = Array.prototype.indexOf ? function($arr$jscomp$8$$, $obj$jscomp$37$$) {
  return Array.prototype.indexOf.call($arr$jscomp$8$$, $obj$jscomp$37$$, void 0);
} : function($arr$jscomp$9$$, $obj$jscomp$38$$) {
  if ($goog$isString$$($arr$jscomp$9$$)) {
    return $goog$isString$$($obj$jscomp$38$$) && 1 == $obj$jscomp$38$$.length ? $arr$jscomp$9$$.indexOf($obj$jscomp$38$$, 0) : -1;
  }
  for (var $i$jscomp$24$$ = 0; $i$jscomp$24$$ < $arr$jscomp$9$$.length; $i$jscomp$24$$++) {
    if ($i$jscomp$24$$ in $arr$jscomp$9$$ && $arr$jscomp$9$$[$i$jscomp$24$$] === $obj$jscomp$38$$) {
      return $i$jscomp$24$$;
    }
  }
  return -1;
}, $goog$array$lastIndexOf$$ = Array.prototype.lastIndexOf ? function($arr$jscomp$10$$, $obj$jscomp$39$$) {
  return Array.prototype.lastIndexOf.call($arr$jscomp$10$$, $obj$jscomp$39$$, $arr$jscomp$10$$.length - 1);
} : function($arr$jscomp$11$$, $obj$jscomp$40$$) {
  var $fromIndex$jscomp$2_i$jscomp$25$$ = $arr$jscomp$11$$.length - 1;
  0 > $fromIndex$jscomp$2_i$jscomp$25$$ && ($fromIndex$jscomp$2_i$jscomp$25$$ = Math.max(0, $arr$jscomp$11$$.length + $fromIndex$jscomp$2_i$jscomp$25$$));
  if ($goog$isString$$($arr$jscomp$11$$)) {
    return $goog$isString$$($obj$jscomp$40$$) && 1 == $obj$jscomp$40$$.length ? $arr$jscomp$11$$.lastIndexOf($obj$jscomp$40$$, $fromIndex$jscomp$2_i$jscomp$25$$) : -1;
  }
  for (; 0 <= $fromIndex$jscomp$2_i$jscomp$25$$; $fromIndex$jscomp$2_i$jscomp$25$$--) {
    if ($fromIndex$jscomp$2_i$jscomp$25$$ in $arr$jscomp$11$$ && $arr$jscomp$11$$[$fromIndex$jscomp$2_i$jscomp$25$$] === $obj$jscomp$40$$) {
      return $fromIndex$jscomp$2_i$jscomp$25$$;
    }
  }
  return -1;
}, $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$2$$) {
  Array.prototype.forEach.call($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$2$$);
} : function($arr$jscomp$13$$, $f$jscomp$2$$, $opt_obj$jscomp$3$$) {
  for (var $l$jscomp$1$$ = $arr$jscomp$13$$.length, $arr2$$ = $goog$isString$$($arr$jscomp$13$$) ? $arr$jscomp$13$$.split("") : $arr$jscomp$13$$, $i$jscomp$26$$ = 0; $i$jscomp$26$$ < $l$jscomp$1$$; $i$jscomp$26$$++) {
    $i$jscomp$26$$ in $arr2$$ && $f$jscomp$2$$.call($opt_obj$jscomp$3$$, $arr2$$[$i$jscomp$26$$], $i$jscomp$26$$, $arr$jscomp$13$$);
  }
}, $goog$array$map$$ = Array.prototype.map ? function($arr$jscomp$17$$, $f$jscomp$6$$) {
  return Array.prototype.map.call($arr$jscomp$17$$, $f$jscomp$6$$, void 0);
} : function($arr$jscomp$18$$, $f$jscomp$7$$) {
  for (var $l$jscomp$4$$ = $arr$jscomp$18$$.length, $res$jscomp$1$$ = Array($l$jscomp$4$$), $arr2$jscomp$3$$ = $goog$isString$$($arr$jscomp$18$$) ? $arr$jscomp$18$$.split("") : $arr$jscomp$18$$, $i$jscomp$29$$ = 0; $i$jscomp$29$$ < $l$jscomp$4$$; $i$jscomp$29$$++) {
    $i$jscomp$29$$ in $arr2$jscomp$3$$ && ($res$jscomp$1$$[$i$jscomp$29$$] = $f$jscomp$7$$.call(void 0, $arr2$jscomp$3$$[$i$jscomp$29$$], $i$jscomp$29$$, $arr$jscomp$18$$));
  }
  return $res$jscomp$1$$;
}, $goog$array$find$$ = function $$goog$array$find$$$($arr$jscomp$29$$, $f$jscomp$17_i$jscomp$32$$) {
  a: {
    for (var $l$jscomp$inline_90$$ = $arr$jscomp$29$$.length, $arr2$jscomp$inline_91$$ = $goog$isString$$($arr$jscomp$29$$) ? $arr$jscomp$29$$.split("") : $arr$jscomp$29$$, $i$jscomp$inline_92$$ = 0; $i$jscomp$inline_92$$ < $l$jscomp$inline_90$$; $i$jscomp$inline_92$$++) {
      if ($i$jscomp$inline_92$$ in $arr2$jscomp$inline_91$$ && $f$jscomp$17_i$jscomp$32$$.call(void 0, $arr2$jscomp$inline_91$$[$i$jscomp$inline_92$$], $i$jscomp$inline_92$$, $arr$jscomp$29$$)) {
        $f$jscomp$17_i$jscomp$32$$ = $i$jscomp$inline_92$$;
        break a;
      }
    }
    $f$jscomp$17_i$jscomp$32$$ = -1;
  }
  return 0 > $f$jscomp$17_i$jscomp$32$$ ? null : $goog$isString$$($arr$jscomp$29$$) ? $arr$jscomp$29$$.charAt($f$jscomp$17_i$jscomp$32$$) : $arr$jscomp$29$$[$f$jscomp$17_i$jscomp$32$$];
}, $goog$array$clear$$ = function $$goog$array$clear$$$($arr$jscomp$35$$) {
  if (!$goog$isArray$$($arr$jscomp$35$$)) {
    for (var $i$jscomp$36$$ = $arr$jscomp$35$$.length - 1; 0 <= $i$jscomp$36$$; $i$jscomp$36$$--) {
      delete $arr$jscomp$35$$[$i$jscomp$36$$];
    }
  }
  $arr$jscomp$35$$.length = 0;
}, $goog$array$remove$$ = function $$goog$array$remove$$$($arr$jscomp$40$$, $i$jscomp$38_obj$jscomp$45$$) {
  $i$jscomp$38_obj$jscomp$45$$ = $goog$array$indexOf$$($arr$jscomp$40$$, $i$jscomp$38_obj$jscomp$45$$);
  var $rv$$;
  ($rv$$ = 0 <= $i$jscomp$38_obj$jscomp$45$$) && $goog$array$removeAt$$($arr$jscomp$40$$, $i$jscomp$38_obj$jscomp$45$$);
  return $rv$$;
}, $goog$array$removeAt$$ = function $$goog$array$removeAt$$$($arr$jscomp$42$$, $i$jscomp$40$$) {
  Array.prototype.splice.call($arr$jscomp$42$$, $i$jscomp$40$$, 1);
}, $goog$array$concat$$ = function $$goog$array$concat$$$($var_args$jscomp$53$$) {
  return Array.prototype.concat.apply([], arguments);
}, $goog$array$join$$ = function $$goog$array$join$$$($var_args$jscomp$54$$) {
  return Array.prototype.concat.apply([], arguments);
}, $goog$array$toArray$$ = function $$goog$array$toArray$$$($object$jscomp$2$$) {
  var $length$jscomp$16$$ = $object$jscomp$2$$.length;
  if (0 < $length$jscomp$16$$) {
    for (var $rv$jscomp$1$$ = Array($length$jscomp$16$$), $i$jscomp$42$$ = 0; $i$jscomp$42$$ < $length$jscomp$16$$; $i$jscomp$42$$++) {
      $rv$jscomp$1$$[$i$jscomp$42$$] = $object$jscomp$2$$[$i$jscomp$42$$];
    }
    return $rv$jscomp$1$$;
  }
  return [];
}, $goog$array$extend$$ = function $$goog$array$extend$$$($arr1$$, $var_args$jscomp$55$$) {
  for (var $i$jscomp$43$$ = 1; $i$jscomp$43$$ < arguments.length; $i$jscomp$43$$++) {
    var $arr2$jscomp$8$$ = arguments[$i$jscomp$43$$];
    if ($goog$isArrayLike$$($arr2$jscomp$8$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$jscomp$8$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$jscomp$3$$ = 0; $j$jscomp$3$$ < $len2$$; $j$jscomp$3$$++) {
        $arr1$$[$len1$$ + $j$jscomp$3$$] = $arr2$jscomp$8$$[$j$jscomp$3$$];
      }
    } else {
      $arr1$$.push($arr2$jscomp$8$$);
    }
  }
}, $goog$array$splice$$ = function $$goog$array$splice$$$($arr$jscomp$45$$, $index$jscomp$71$$, $howMany$jscomp$1$$, $var_args$jscomp$56$$) {
  Array.prototype.splice.apply($arr$jscomp$45$$, $goog$array$slice$$(arguments, 1));
}, $goog$array$slice$$ = function $$goog$array$slice$$$($arr$jscomp$46$$, $start$jscomp$12$$, $opt_end$jscomp$10$$) {
  return 2 >= arguments.length ? Array.prototype.slice.call($arr$jscomp$46$$, $start$jscomp$12$$) : Array.prototype.slice.call($arr$jscomp$46$$, $start$jscomp$12$$, $opt_end$jscomp$10$$);
}, $goog$array$defaultCompare$$ = function $$goog$array$defaultCompare$$$($a$jscomp$3$$, $b$jscomp$2$$) {
  return $a$jscomp$3$$ > $b$jscomp$2$$ ? 1 : $a$jscomp$3$$ < $b$jscomp$2$$ ? -1 : 0;
};
var $goog$string$internal$trim$$ = String.prototype.trim ? function($str$jscomp$13$$) {
  return $str$jscomp$13$$.trim();
} : function($str$jscomp$14$$) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec($str$jscomp$14$$)[1];
}, $goog$string$internal$caseInsensitiveCompare$$ = function $$goog$string$internal$caseInsensitiveCompare$$$($str1$jscomp$1_test1$$, $str2$jscomp$1_test2$$) {
  $str1$jscomp$1_test1$$ = String($str1$jscomp$1_test1$$).toLowerCase();
  $str2$jscomp$1_test2$$ = String($str2$jscomp$1_test2$$).toLowerCase();
  return $str1$jscomp$1_test1$$ < $str2$jscomp$1_test2$$ ? -1 : $str1$jscomp$1_test1$$ == $str2$jscomp$1_test2$$ ? 0 : 1;
}, $goog$string$internal$compareVersions$$ = function $$goog$string$internal$compareVersions$$$($v1Subs_version1$$, $v2Subs_version2$$) {
  var $order$$ = 0;
  $v1Subs_version1$$ = $goog$string$internal$trim$$(String($v1Subs_version1$$)).split(".");
  $v2Subs_version2$$ = $goog$string$internal$trim$$(String($v2Subs_version2$$)).split(".");
  for (var $subCount$$ = Math.max($v1Subs_version1$$.length, $v2Subs_version2$$.length), $subIdx$$ = 0; 0 == $order$$ && $subIdx$$ < $subCount$$; $subIdx$$++) {
    var $v1Comp_v1Sub$$ = $v1Subs_version1$$[$subIdx$$] || "", $v2Comp_v2Sub$$ = $v2Subs_version2$$[$subIdx$$] || "";
    do {
      $v1Comp_v1Sub$$ = /(\d*)(\D*)(.*)/.exec($v1Comp_v1Sub$$) || ["", "", "", ""];
      $v2Comp_v2Sub$$ = /(\d*)(\D*)(.*)/.exec($v2Comp_v2Sub$$) || ["", "", "", ""];
      if (0 == $v1Comp_v1Sub$$[0].length && 0 == $v2Comp_v2Sub$$[0].length) {
        break;
      }
      $order$$ = $goog$string$internal$compareElements_$$(0 == $v1Comp_v1Sub$$[1].length ? 0 : parseInt($v1Comp_v1Sub$$[1], 10), 0 == $v2Comp_v2Sub$$[1].length ? 0 : parseInt($v2Comp_v2Sub$$[1], 10)) || $goog$string$internal$compareElements_$$(0 == $v1Comp_v1Sub$$[2].length, 0 == $v2Comp_v2Sub$$[2].length) || $goog$string$internal$compareElements_$$($v1Comp_v1Sub$$[2], $v2Comp_v2Sub$$[2]);
      $v1Comp_v1Sub$$ = $v1Comp_v1Sub$$[3];
      $v2Comp_v2Sub$$ = $v2Comp_v2Sub$$[3];
    } while (0 == $order$$);
  }
  return $order$$;
}, $goog$string$internal$compareElements_$$ = function $$goog$string$internal$compareElements_$$$($left$jscomp$4$$, $right$jscomp$3$$) {
  return $left$jscomp$4$$ < $right$jscomp$3$$ ? -1 : $left$jscomp$4$$ > $right$jscomp$3$$ ? 1 : 0;
};
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$jscomp$inline_94$$ = $goog$global$$.navigator;
  if ($navigator$jscomp$inline_94$$) {
    var $userAgent$jscomp$inline_95$$ = $navigator$jscomp$inline_94$$.userAgent;
    if ($userAgent$jscomp$inline_95$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$jscomp$inline_95$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
var $goog$labs$userAgent$util$matchUserAgent$$ = function $$goog$labs$userAgent$util$matchUserAgent$$$($str$jscomp$20$$) {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$jscomp$20$$);
};
var $goog$object$forEach$$ = function $$goog$object$forEach$$$($obj$jscomp$48$$, $f$jscomp$24$$, $opt_obj$jscomp$28$$) {
  for (var $key$jscomp$50$$ in $obj$jscomp$48$$) {
    $f$jscomp$24$$.call($opt_obj$jscomp$28$$, $obj$jscomp$48$$[$key$jscomp$50$$], $key$jscomp$50$$, $obj$jscomp$48$$);
  }
}, $goog$object$map$$ = function $$goog$object$map$$$($obj$jscomp$50$$, $f$jscomp$26$$) {
  var $res$jscomp$3$$ = {}, $key$jscomp$52$$;
  for ($key$jscomp$52$$ in $obj$jscomp$50$$) {
    $res$jscomp$3$$[$key$jscomp$52$$] = $f$jscomp$26$$.call(void 0, $obj$jscomp$50$$[$key$jscomp$52$$], $key$jscomp$52$$, $obj$jscomp$50$$);
  }
  return $res$jscomp$3$$;
}, $goog$object$getValues$$ = function $$goog$object$getValues$$$($obj$jscomp$57$$) {
  var $res$jscomp$4$$ = [], $i$jscomp$54$$ = 0, $key$jscomp$58$$;
  for ($key$jscomp$58$$ in $obj$jscomp$57$$) {
    $res$jscomp$4$$[$i$jscomp$54$$++] = $obj$jscomp$57$$[$key$jscomp$58$$];
  }
  return $res$jscomp$4$$;
}, $goog$object$getKeys$$ = function $$goog$object$getKeys$$$($obj$jscomp$58$$) {
  var $res$jscomp$5$$ = [], $i$jscomp$55$$ = 0, $key$jscomp$59$$;
  for ($key$jscomp$59$$ in $obj$jscomp$58$$) {
    $res$jscomp$5$$[$i$jscomp$55$$++] = $key$jscomp$59$$;
  }
  return $res$jscomp$5$$;
}, $goog$object$setIfUndefined$$ = function $$goog$object$setIfUndefined$$$($obj$jscomp$70$$, $key$jscomp$69$$, $value$jscomp$109$$) {
  $key$jscomp$69$$ in $obj$jscomp$70$$ || ($obj$jscomp$70$$[$key$jscomp$69$$] = $value$jscomp$109$$);
}, $goog$object$clone$$ = function $$goog$object$clone$$$($obj$jscomp$72$$) {
  var $res$jscomp$6$$ = {}, $key$jscomp$71$$;
  for ($key$jscomp$71$$ in $obj$jscomp$72$$) {
    $res$jscomp$6$$[$key$jscomp$71$$] = $obj$jscomp$72$$[$key$jscomp$71$$];
  }
  return $res$jscomp$6$$;
}, $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), $goog$object$extend$$ = function $$goog$object$extend$$$($target$jscomp$90$$, $var_args$jscomp$60$$) {
  for (var $key$jscomp$74$$, $source$jscomp$14$$, $i$jscomp$58$$ = 1; $i$jscomp$58$$ < arguments.length; $i$jscomp$58$$++) {
    $source$jscomp$14$$ = arguments[$i$jscomp$58$$];
    for ($key$jscomp$74$$ in $source$jscomp$14$$) {
      $target$jscomp$90$$[$key$jscomp$74$$] = $source$jscomp$14$$[$key$jscomp$74$$];
    }
    for (var $j$jscomp$6$$ = 0; $j$jscomp$6$$ < $goog$object$PROTOTYPE_FIELDS_$$.length; $j$jscomp$6$$++) {
      $key$jscomp$74$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$jscomp$6$$], Object.prototype.hasOwnProperty.call($source$jscomp$14$$, $key$jscomp$74$$) && ($target$jscomp$90$$[$key$jscomp$74$$] = $source$jscomp$14$$[$key$jscomp$74$$]);
    }
  }
};
var $goog$labs$userAgent$browser$matchFirefox_$$ = function $$goog$labs$userAgent$browser$matchFirefox_$$$() {
  return $goog$labs$userAgent$util$matchUserAgent$$("Firefox") || $goog$labs$userAgent$util$matchUserAgent$$("FxiOS");
}, $goog$labs$userAgent$browser$matchChrome_$$ = function $$goog$labs$userAgent$browser$matchChrome_$$$() {
  return ($goog$labs$userAgent$util$matchUserAgent$$("Chrome") || $goog$labs$userAgent$util$matchUserAgent$$("CriOS")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge");
};
var $goog$string$Const$$ = function $$goog$string$Const$$$($opt_token$$, $opt_content$$) {
  this.$b$ = $opt_token$$ === $goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_content$$ || "";
  this.$c$ = $goog$string$Const$TYPE_MARKER_$$;
};
$goog$string$Const$$.prototype.toString = function $$goog$string$Const$$$$toString$() {
  return "Const{" + this.$b$ + "}";
};
var $goog$string$Const$TYPE_MARKER_$$ = {}, $goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$ = {}, $goog$string$Const$EMPTY$$ = new $goog$string$Const$$($goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$, "");
var $goog$html$TrustedResourceUrl$$ = function $$goog$html$TrustedResourceUrl$$$($opt_token$jscomp$1$$, $opt_content$jscomp$1$$, $opt_trustedUrl$$) {
  this.$b$ = $opt_token$jscomp$1$$ === $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_content$jscomp$1$$ || "";
  this.$c$ = $opt_token$jscomp$1$$ === $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_trustedUrl$$ || null;
  this.$f$ = $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$TrustedResourceUrl$$.prototype.toString = function $$goog$html$TrustedResourceUrl$$$$toString$() {
  return "TrustedResourceUrl{" + this.$b$ + "}";
};
var $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ = {};
var $goog$html$SafeHtml$$ = function $$goog$html$SafeHtml$$$() {
  this.$b$ = "";
  this.$c$ = $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeHtml$$.prototype.toString = function $$goog$html$SafeHtml$$$$toString$() {
  return "SafeHtml{" + this.$b$ + "}";
};
var $goog$html$SafeHtml$unwrapTrustedHTML$$ = function $$goog$html$SafeHtml$unwrapTrustedHTML$$$() {
  var $safeHtml$jscomp$1$$ = $goog$html$SafeHtml$EMPTY$$;
  if ($safeHtml$jscomp$1$$ instanceof $goog$html$SafeHtml$$ && $safeHtml$jscomp$1$$.constructor === $goog$html$SafeHtml$$ && $safeHtml$jscomp$1$$.$c$ === $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeHtml$jscomp$1$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type SafeHtml, got '" + $safeHtml$jscomp$1$$ + "' of type " + $goog$typeOf$$($safeHtml$jscomp$1$$));
  return "type_error:SafeHtml";
}, $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$ = function $$goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$$($html$jscomp$7$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$jscomp$inline_98$$ = new $goog$html$SafeHtml$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$jscomp$inline_98$$.$b$ = $html$jscomp$7$$;
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$jscomp$inline_98$$;
};
$goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$("<!DOCTYPE html>");
var $goog$html$SafeHtml$EMPTY$$ = $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$("");
$goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse$$("<br>");
var $goog$dom$safe$setIframeSrc$$ = function $$goog$dom$safe$setIframeSrc$$$($iframe$$) {
  if ($goog$string$Const$EMPTY$$ instanceof $goog$string$Const$$ && $goog$string$Const$EMPTY$$.constructor === $goog$string$Const$$ && $goog$string$Const$EMPTY$$.$c$ === $goog$string$Const$TYPE_MARKER_$$) {
    var $url$jscomp$54_url$jscomp$inline_978$$ = $goog$string$Const$EMPTY$$.$b$;
  } else {
    $goog$asserts$fail$$("expected object of type Const, got '" + $goog$string$Const$EMPTY$$ + "'"), $url$jscomp$54_url$jscomp$inline_978$$ = "type_error:Const";
  }
  $url$jscomp$54_url$jscomp$inline_978$$ = new $goog$html$TrustedResourceUrl$$($goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$, $url$jscomp$54_url$jscomp$inline_978$$, null);
  a: {
    try {
      var $doc$jscomp$inline_1112$$ = $iframe$$ && $iframe$$.ownerDocument, $win$jscomp$inline_1113$$ = $doc$jscomp$inline_1112$$ && ($doc$jscomp$inline_1112$$.defaultView || $doc$jscomp$inline_1112$$.parentWindow);
      $win$jscomp$inline_1113$$ = $win$jscomp$inline_1113$$ || $goog$global$$;
      if ($win$jscomp$inline_1113$$.Element && $win$jscomp$inline_1113$$.Location) {
        var $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$ = $win$jscomp$inline_1113$$;
        break a;
      }
    } catch ($ex$jscomp$inline_1114$$) {
    }
    $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$ = null;
  }
  if ($JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$ && "undefined" != typeof $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$.HTMLIFrameElement && (!$iframe$$ || !($iframe$$ instanceof $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$.HTMLIFrameElement) && ($iframe$$ instanceof $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$.Location || 
  $iframe$$ instanceof $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$.Element))) {
    if ($goog$isObject$$($iframe$$)) {
      try {
        var $JSCompiler_inline_result$jscomp$1106$$ = $iframe$$.constructor.displayName || $iframe$$.constructor.name || Object.prototype.toString.call($iframe$$);
      } catch ($e$jscomp$inline_1117$$) {
        $JSCompiler_inline_result$jscomp$1106$$ = "<object could not be stringified>";
      }
    } else {
      $JSCompiler_inline_result$jscomp$1106$$ = void 0 === $iframe$$ ? "undefined" : null === $iframe$$ ? "null" : typeof $iframe$$;
    }
    $goog$asserts$fail$$("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLIFrameElement", $JSCompiler_inline_result$jscomp$1106$$);
  }
  $url$jscomp$54_url$jscomp$inline_978$$.$c$ ? $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$ = $url$jscomp$54_url$jscomp$inline_978$$.$c$ : ($url$jscomp$54_url$jscomp$inline_978$$ instanceof $goog$html$TrustedResourceUrl$$ && $url$jscomp$54_url$jscomp$inline_978$$.constructor === $goog$html$TrustedResourceUrl$$ && $url$jscomp$54_url$jscomp$inline_978$$.$f$ === $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$ = 
  $url$jscomp$54_url$jscomp$inline_978$$.$b$ : ($goog$asserts$fail$$("expected object of type TrustedResourceUrl, got '" + $url$jscomp$54_url$jscomp$inline_978$$ + "' of type " + $goog$typeOf$$($url$jscomp$54_url$jscomp$inline_978$$)), $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$ = "type_error:TrustedResourceUrl"), $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$ = $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$.toString());
  $iframe$$.src = $JSCompiler_inline_result$jscomp$1108_JSCompiler_temp$jscomp$1107_win$jscomp$inline_981$$;
};
var $goog$string$getRandomString$$ = function $$goog$string$getRandomString$$$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36);
}, $goog$string$splitLimit$$ = function $$goog$string$splitLimit$$$($parts$jscomp$6_str$jscomp$73$$) {
  var $limit$$ = 1;
  $parts$jscomp$6_str$jscomp$73$$ = $parts$jscomp$6_str$jscomp$73$$.split(":");
  for (var $returnVal$$ = []; 0 < $limit$$ && $parts$jscomp$6_str$jscomp$73$$.length;) {
    $returnVal$$.push($parts$jscomp$6_str$jscomp$73$$.shift()), $limit$$--;
  }
  $parts$jscomp$6_str$jscomp$73$$.length && $returnVal$$.push($parts$jscomp$6_str$jscomp$73$$.join(":"));
  return $returnVal$$;
};
var $goog$labs$userAgent$platform$isIphone$$ = function $$goog$labs$userAgent$platform$isIphone$$$() {
  return $goog$labs$userAgent$util$matchUserAgent$$("iPhone") && !$goog$labs$userAgent$util$matchUserAgent$$("iPod") && !$goog$labs$userAgent$util$matchUserAgent$$("iPad");
};
var $goog$reflect$sinkValue$$ = function $$goog$reflect$sinkValue$$$($x$jscomp$87$$) {
  $goog$reflect$sinkValue$$[" "]($x$jscomp$87$$);
  return $x$jscomp$87$$;
};
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
var $goog$reflect$cache$$ = function $$goog$reflect$cache$$$($cacheObj$$, $key$jscomp$79$$, $valueFn$$) {
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $key$jscomp$79$$) ? $cacheObj$$[$key$jscomp$79$$] : $cacheObj$$[$key$jscomp$79$$] = $valueFn$$($key$jscomp$79$$);
};
var $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera"), $goog$userAgent$IE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE"), $goog$userAgent$EDGE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge")) && 
!($goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$WEBKIT$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$getDocumentMode_$$ = function $$goog$userAgent$getDocumentMode_$$$() {
  var $doc$jscomp$12$$ = $goog$global$$.document;
  return $doc$jscomp$12$$ ? $doc$jscomp$12$$.documentMode : void 0;
}, $JSCompiler_inline_result$jscomp$17$$;
a: {
  var $version$jscomp$inline_104$$ = "", $arr$jscomp$inline_105$$ = function() {
    var $userAgent$jscomp$6$$ = $goog$labs$userAgent$util$userAgent_$$;
    if ($goog$userAgent$GECKO$$) {
      return /rv:([^\);]+)(\)|;)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$EDGE$$) {
      return /Edge\/([\d\.]+)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$IE$$) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$WEBKIT$$) {
      return /WebKit\/(\S+)/.exec($userAgent$jscomp$6$$);
    }
    if ($goog$userAgent$OPERA$$) {
      return /(?:Version)[ \/]?(\S+)/.exec($userAgent$jscomp$6$$);
    }
  }();
  $arr$jscomp$inline_105$$ && ($version$jscomp$inline_104$$ = $arr$jscomp$inline_105$$ ? $arr$jscomp$inline_105$$[1] : "");
  if ($goog$userAgent$IE$$) {
    var $docMode$jscomp$inline_106$$ = $goog$userAgent$getDocumentMode_$$();
    if (null != $docMode$jscomp$inline_106$$ && $docMode$jscomp$inline_106$$ > parseFloat($version$jscomp$inline_104$$)) {
      $JSCompiler_inline_result$jscomp$17$$ = String($docMode$jscomp$inline_106$$);
      break a;
    }
  }
  $JSCompiler_inline_result$jscomp$17$$ = $version$jscomp$inline_104$$;
}
var $goog$userAgent$VERSION$$ = $JSCompiler_inline_result$jscomp$17$$, $goog$userAgent$isVersionOrHigherCache_$$ = {}, $goog$userAgent$isVersionOrHigher$$ = function $$goog$userAgent$isVersionOrHigher$$$($version$jscomp$10$$) {
  return $goog$reflect$cache$$($goog$userAgent$isVersionOrHigherCache_$$, $version$jscomp$10$$, function() {
    return 0 <= $goog$string$internal$compareVersions$$($goog$userAgent$VERSION$$, $version$jscomp$10$$);
  });
}, $JSCompiler_inline_result$jscomp$19$$;
$JSCompiler_inline_result$jscomp$19$$ = $goog$global$$.document && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() : void 0;
var $goog$debug$freezeInternal_$$ = Object.freeze || function($arg$jscomp$9$$) {
  return $arg$jscomp$9$$;
};
var $goog$debug$LogRecord$$ = function $$goog$debug$LogRecord$$$($level$jscomp$18$$, $msg$jscomp$1$$, $loggerName$$) {
  this.reset($level$jscomp$18$$, $msg$jscomp$1$$, $loggerName$$, void 0, void 0);
};
$goog$debug$LogRecord$$.prototype.$b$ = null;
var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
$goog$debug$LogRecord$$.prototype.reset = function $$goog$debug$LogRecord$$$$reset$($level$jscomp$19$$, $msg$jscomp$2$$, $loggerName$jscomp$1$$, $opt_time$jscomp$1$$, $opt_sequenceNumber$jscomp$1$$) {
  "number" == typeof $opt_sequenceNumber$jscomp$1$$ || $goog$debug$LogRecord$nextSequenceNumber_$$++;
  this.$time_$ = $opt_time$jscomp$1$$ || $goog$now$$();
  this.$c$ = $level$jscomp$19$$;
  this.$f$ = $msg$jscomp$2$$;
  this.$loggerName_$ = $loggerName$jscomp$1$$;
  delete this.$b$;
};
$goog$debug$LogRecord$$.prototype.$getLevel$ = function $$goog$debug$LogRecord$$$$$getLevel$$() {
  return this.$c$;
};
$goog$debug$LogRecord$$.prototype.getMessage = function $$goog$debug$LogRecord$$$$getMessage$() {
  return this.$f$;
};
var $goog$debug$Logger$$ = function $$goog$debug$Logger$$$($name$jscomp$84$$) {
  this.$h$ = $name$jscomp$84$$;
  this.$b$ = this.$g$ = this.$c$ = this.$f$ = null;
}, $goog$debug$Logger$Level$$ = function $$goog$debug$Logger$Level$$$($name$jscomp$85$$, $value$jscomp$128$$) {
  this.name = $name$jscomp$85$$;
  this.value = $value$jscomp$128$$;
};
$goog$debug$Logger$Level$$.prototype.toString = function $$goog$debug$Logger$Level$$$$toString$() {
  return this.name;
};
var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1000), $goog$debug$Logger$Level$WARNING$$ = new $goog$debug$Logger$Level$$("WARNING", 900), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700), $goog$debug$Logger$Level$FINE$$ = new $goog$debug$Logger$Level$$("FINE", 500), $JSCompiler_StaticMethods_addHandler$$ = function $$JSCompiler_StaticMethods_addHandler$$$($handler$jscomp$1$$) {
  $goog$debug$LogManager$initialize$$();
  var $JSCompiler_StaticMethods_addHandler$self$$ = $goog$debug$LogManager$rootLogger_$$;
  $JSCompiler_StaticMethods_addHandler$self$$.$b$ || ($JSCompiler_StaticMethods_addHandler$self$$.$b$ = []);
  $JSCompiler_StaticMethods_addHandler$self$$.$b$.push($handler$jscomp$1$$);
};
$goog$debug$Logger$$.prototype.getChildren = function $$goog$debug$Logger$$$$getChildren$() {
  this.$g$ || (this.$g$ = {});
  return this.$g$;
};
$goog$debug$Logger$$.prototype.$getLevel$ = function $$goog$debug$Logger$$$$$getLevel$$() {
  return this.$c$;
};
var $JSCompiler_StaticMethods_getEffectiveLevel$$ = function $$JSCompiler_StaticMethods_getEffectiveLevel$$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$c$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$c$;
  }
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$f$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$f$);
  }
  $goog$asserts$fail$$("Root logger has no level set.");
  return null;
};
$goog$debug$Logger$$.prototype.log = function $$goog$debug$Logger$$$$log$($level$jscomp$26_logRecord$jscomp$inline_114$$, $msg$jscomp$6$$, $opt_exception$$) {
  $level$jscomp$26_logRecord$jscomp$inline_114$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value && ($goog$isFunction$$($msg$jscomp$6$$) && ($msg$jscomp$6$$ = $msg$jscomp$6$$()), $level$jscomp$26_logRecord$jscomp$inline_114$$ = new $goog$debug$LogRecord$$($level$jscomp$26_logRecord$jscomp$inline_114$$, String($msg$jscomp$6$$), this.$h$), $opt_exception$$ && ($level$jscomp$26_logRecord$jscomp$inline_114$$.$b$ = $opt_exception$$), $JSCompiler_StaticMethods_doLogRecord_$$(this, $level$jscomp$26_logRecord$jscomp$inline_114$$));
};
$goog$debug$Logger$$.prototype.logRecord = function $$goog$debug$Logger$$$$logRecord$($logRecord$jscomp$1$$) {
  $logRecord$jscomp$1$$.$getLevel$().value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value && $JSCompiler_StaticMethods_doLogRecord_$$(this, $logRecord$jscomp$1$$);
};
var $JSCompiler_StaticMethods_doLogRecord_$$ = function $$JSCompiler_StaticMethods_doLogRecord_$$$($JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$92$$, $logRecord$jscomp$2$$) {
  for (; $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$92$$;) {
    var $handler$jscomp$inline_122$$, $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_119$$ = $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$92$$, $logRecord$jscomp$inline_120$$ = $logRecord$jscomp$2$$;
    if ($JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_119$$.$b$) {
      for (var $i$jscomp$inline_121$$ = 0; $handler$jscomp$inline_122$$ = $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_119$$.$b$[$i$jscomp$inline_121$$]; $i$jscomp$inline_121$$++) {
        $handler$jscomp$inline_122$$($logRecord$jscomp$inline_120$$);
      }
    }
    $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$92$$ = $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$92$$.$f$;
  }
}, $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = null, $goog$debug$LogManager$initialize$$ = function $$goog$debug$LogManager$initialize$$$() {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$c$ = $goog$debug$Logger$Level$CONFIG$$);
}, $goog$debug$LogManager$getLogger$$ = function $$goog$debug$LogManager$getLogger$$$($name$jscomp$89$$) {
  $goog$debug$LogManager$initialize$$();
  var $JSCompiler_temp$jscomp$24_logger$jscomp$inline_128$$;
  if (!($JSCompiler_temp$jscomp$24_logger$jscomp$inline_128$$ = $goog$debug$LogManager$loggers_$$[$name$jscomp$89$$])) {
    $JSCompiler_temp$jscomp$24_logger$jscomp$inline_128$$ = new $goog$debug$Logger$$($name$jscomp$89$$);
    var $lastDotIndex$jscomp$inline_129_parentLogger$jscomp$inline_131$$ = $name$jscomp$89$$.lastIndexOf("."), $leafName$jscomp$inline_130$$ = $name$jscomp$89$$.substr($lastDotIndex$jscomp$inline_129_parentLogger$jscomp$inline_131$$ + 1);
    $lastDotIndex$jscomp$inline_129_parentLogger$jscomp$inline_131$$ = $goog$debug$LogManager$getLogger$$($name$jscomp$89$$.substr(0, $lastDotIndex$jscomp$inline_129_parentLogger$jscomp$inline_131$$));
    $lastDotIndex$jscomp$inline_129_parentLogger$jscomp$inline_131$$.getChildren()[$leafName$jscomp$inline_130$$] = $JSCompiler_temp$jscomp$24_logger$jscomp$inline_128$$;
    $JSCompiler_temp$jscomp$24_logger$jscomp$inline_128$$.$f$ = $lastDotIndex$jscomp$inline_129_parentLogger$jscomp$inline_131$$;
    $goog$debug$LogManager$loggers_$$[$name$jscomp$89$$] = $JSCompiler_temp$jscomp$24_logger$jscomp$inline_128$$;
  }
  return $JSCompiler_temp$jscomp$24_logger$jscomp$inline_128$$;
};
var $goog$log$log$$ = function $$goog$log$log$$$($logger$jscomp$6$$, $level$jscomp$29$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$) {
  $logger$jscomp$6$$ && $logger$jscomp$6$$.log($level$jscomp$29$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$);
}, $goog$log$fine$$ = function $$goog$log$fine$$$($logger$jscomp$10$$, $msg$jscomp$20$$) {
  $logger$jscomp$10$$ && $logger$jscomp$10$$.log($goog$debug$Logger$Level$FINE$$, $msg$jscomp$20$$, void 0);
};
var $goog$async$FreeList$$ = function $$goog$async$FreeList$$$($create$jscomp$1$$, $reset$$) {
  this.$f$ = $create$jscomp$1$$;
  this.$g$ = $reset$$;
  this.$c$ = 0;
  this.$b$ = null;
};
$goog$async$FreeList$$.prototype.get = function $$goog$async$FreeList$$$$get$() {
  if (0 < this.$c$) {
    this.$c$--;
    var $item$jscomp$3$$ = this.$b$;
    this.$b$ = $item$jscomp$3$$.next;
    $item$jscomp$3$$.next = null;
  } else {
    $item$jscomp$3$$ = this.$f$();
  }
  return $item$jscomp$3$$;
};
var $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$ = function $$JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$$($JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$, $item$jscomp$4$$) {
  $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$g$($item$jscomp$4$$);
  100 > $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$c$ && ($JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$c$++, $item$jscomp$4$$.next = $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$b$, $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$b$ = $item$jscomp$4$$);
};
var $goog$async$throwException$$ = function $$goog$async$throwException$$$($exception$jscomp$5$$) {
  $goog$global$$.setTimeout(function() {
    throw $exception$jscomp$5$$;
  }, 0);
}, $goog$async$nextTick$setImmediate_$$, $goog$async$nextTick$getSetImmediateEmulator_$$ = function $$goog$async$nextTick$getSetImmediateEmulator_$$$() {
  var $Channel$$ = $goog$global$$.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && !$goog$labs$userAgent$util$matchUserAgent$$("Presto") && ($Channel$$ = function $$Channel$$$() {
    var $doc$jscomp$14_iframe$jscomp$2_onmessage$$ = document.createElement("IFRAME");
    $doc$jscomp$14_iframe$jscomp$2_onmessage$$.style.display = "none";
    $goog$dom$safe$setIframeSrc$$($doc$jscomp$14_iframe$jscomp$2_onmessage$$);
    document.documentElement.appendChild($doc$jscomp$14_iframe$jscomp$2_onmessage$$);
    var $win$jscomp$5$$ = $doc$jscomp$14_iframe$jscomp$2_onmessage$$.contentWindow;
    $doc$jscomp$14_iframe$jscomp$2_onmessage$$ = $win$jscomp$5$$.document;
    $doc$jscomp$14_iframe$jscomp$2_onmessage$$.open();
    $doc$jscomp$14_iframe$jscomp$2_onmessage$$.write($goog$html$SafeHtml$unwrapTrustedHTML$$());
    $doc$jscomp$14_iframe$jscomp$2_onmessage$$.close();
    var $message$jscomp$39$$ = "callImmediate" + Math.random(), $origin$$ = "file:" == $win$jscomp$5$$.location.protocol ? "*" : $win$jscomp$5$$.location.protocol + "//" + $win$jscomp$5$$.location.host;
    $doc$jscomp$14_iframe$jscomp$2_onmessage$$ = $goog$bind$$(function($e$jscomp$21$$) {
      if (("*" == $origin$$ || $e$jscomp$21$$.origin == $origin$$) && $e$jscomp$21$$.data == $message$jscomp$39$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$jscomp$5$$.addEventListener("message", $doc$jscomp$14_iframe$jscomp$2_onmessage$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $win$jscomp$5$$.postMessage($message$jscomp$39$$, $origin$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && !$goog$labs$userAgent$util$matchUserAgent$$("Trident") && !$goog$labs$userAgent$util$matchUserAgent$$("MSIE")) {
    var $channel$jscomp$3$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
    $channel$jscomp$3$$.port1.onmessage = function $$channel$jscomp$3$$$port1$onmessage$() {
      if ($goog$isDef$$($head$$.next)) {
        $head$$ = $head$$.next;
        var $cb$jscomp$2$$ = $head$$.$cb$;
        $head$$.$cb$ = null;
        $cb$jscomp$2$$();
      }
    };
    return function($cb$jscomp$3$$) {
      $tail$$.next = {$cb$:$cb$jscomp$3$$};
      $tail$$ = $tail$$.next;
      $channel$jscomp$3$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function($cb$jscomp$4$$) {
    var $script$jscomp$15$$ = document.createElement("SCRIPT");
    $script$jscomp$15$$.onreadystatechange = function $$script$jscomp$15$$$onreadystatechange$() {
      $script$jscomp$15$$.onreadystatechange = null;
      $script$jscomp$15$$.parentNode.removeChild($script$jscomp$15$$);
      $script$jscomp$15$$ = null;
      $cb$jscomp$4$$();
      $cb$jscomp$4$$ = null;
    };
    document.documentElement.appendChild($script$jscomp$15$$);
  } : function($cb$jscomp$5$$) {
    $goog$global$$.setTimeout($cb$jscomp$5$$, 0);
  };
};
var $goog$async$WorkQueue$$ = function $$goog$async$WorkQueue$$$() {
  this.$c$ = this.$b$ = null;
}, $goog$async$WorkQueue$freelist_$$ = new $goog$async$FreeList$$(function() {
  return new $goog$async$WorkItem$$;
}, function($item$jscomp$5$$) {
  $item$jscomp$5$$.reset();
});
$goog$async$WorkQueue$$.prototype.add = function $$goog$async$WorkQueue$$$$add$($fn$jscomp$15$$, $scope$$) {
  var $item$jscomp$6$$ = $goog$async$WorkQueue$freelist_$$.get();
  $item$jscomp$6$$.set($fn$jscomp$15$$, $scope$$);
  this.$c$ ? this.$c$.next = $item$jscomp$6$$ : this.$b$ = $item$jscomp$6$$;
  this.$c$ = $item$jscomp$6$$;
};
$goog$async$WorkQueue$$.prototype.remove = function $$goog$async$WorkQueue$$$$remove$() {
  var $item$jscomp$7$$ = null;
  this.$b$ && ($item$jscomp$7$$ = this.$b$, this.$b$ = this.$b$.next, this.$b$ || (this.$c$ = null), $item$jscomp$7$$.next = null);
  return $item$jscomp$7$$;
};
var $goog$async$WorkItem$$ = function $$goog$async$WorkItem$$$() {
  this.next = this.$c$ = this.$b$ = null;
};
$goog$async$WorkItem$$.prototype.set = function $$goog$async$WorkItem$$$$set$($fn$jscomp$16$$, $scope$jscomp$1$$) {
  this.$b$ = $fn$jscomp$16$$;
  this.$c$ = $scope$jscomp$1$$;
  this.next = null;
};
$goog$async$WorkItem$$.prototype.reset = function $$goog$async$WorkItem$$$$reset$() {
  this.next = this.$c$ = this.$b$ = null;
};
var $goog$async$run$$ = function $$goog$async$run$$$($callback$jscomp$348$$, $opt_context$jscomp$7$$) {
  $goog$async$run$schedule_$$ || $goog$async$run$initializeRunner_$$();
  $goog$async$run$workQueueScheduled_$$ || ($goog$async$run$schedule_$$(), $goog$async$run$workQueueScheduled_$$ = !0);
  $goog$async$run$workQueue_$$.add($callback$jscomp$348$$, $opt_context$jscomp$7$$);
}, $goog$async$run$schedule_$$, $goog$async$run$initializeRunner_$$ = function $$goog$async$run$initializeRunner_$$$() {
  if ($goog$global$$.Promise && $goog$global$$.Promise.resolve) {
    var $promise$$ = $goog$global$$.Promise.resolve(void 0);
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      $promise$$.then($goog$async$run$processWorkQueue$$);
    };
  } else {
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      var $cb$jscomp$inline_146$$ = $goog$async$run$processWorkQueue$$;
      !$goog$isFunction$$($goog$global$$.setImmediate) || $goog$global$$.Window && $goog$global$$.Window.prototype && !$goog$labs$userAgent$util$matchUserAgent$$("Edge") && $goog$global$$.Window.prototype.setImmediate == $goog$global$$.setImmediate ? ($goog$async$nextTick$setImmediate_$$ || ($goog$async$nextTick$setImmediate_$$ = $goog$async$nextTick$getSetImmediateEmulator_$$()), $goog$async$nextTick$setImmediate_$$($cb$jscomp$inline_146$$)) : $goog$global$$.setImmediate($cb$jscomp$inline_146$$);
    };
  }
}, $goog$async$run$workQueueScheduled_$$ = !1, $goog$async$run$workQueue_$$ = new $goog$async$WorkQueue$$, $goog$async$run$processWorkQueue$$ = function $$goog$async$run$processWorkQueue$$$() {
  for (var $item$jscomp$9$$; $item$jscomp$9$$ = $goog$async$run$workQueue_$$.remove();) {
    try {
      $item$jscomp$9$$.$b$.call($item$jscomp$9$$.$c$);
    } catch ($e$jscomp$22$$) {
      $goog$async$throwException$$($e$jscomp$22$$);
    }
    $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$($goog$async$WorkQueue$freelist_$$, $item$jscomp$9$$);
  }
  $goog$async$run$workQueueScheduled_$$ = !1;
};
var $goog$Promise$$ = function $$goog$Promise$$$($resolver$jscomp$1$$) {
  this.$b$ = 0;
  this.$j$ = void 0;
  this.$g$ = this.$c$ = this.$f$ = null;
  this.$h$ = this.$i$ = !1;
  if ($resolver$jscomp$1$$ != $goog$nullFunction$$) {
    try {
      var $self$jscomp$8$$ = this;
      $resolver$jscomp$1$$.call(void 0, function($value$jscomp$130$$) {
        $JSCompiler_StaticMethods_resolve_$$($self$jscomp$8$$, 2, $value$jscomp$130$$);
      }, function($reason$jscomp$6$$) {
        if (!($reason$jscomp$6$$ instanceof $goog$Promise$CancellationError$$)) {
          try {
            if ($reason$jscomp$6$$ instanceof Error) {
              throw $reason$jscomp$6$$;
            }
            throw Error("Promise rejected.");
          } catch ($e$jscomp$24$$) {
          }
        }
        $JSCompiler_StaticMethods_resolve_$$($self$jscomp$8$$, 3, $reason$jscomp$6$$);
      });
    } catch ($e$jscomp$25$$) {
      $JSCompiler_StaticMethods_resolve_$$(this, 3, $e$jscomp$25$$);
    }
  }
}, $goog$Promise$CallbackEntry_$$ = function $$goog$Promise$CallbackEntry_$$$() {
  this.next = this.context = this.$c$ = this.$g$ = this.$b$ = null;
  this.$f$ = !1;
};
$goog$Promise$CallbackEntry_$$.prototype.reset = function $$goog$Promise$CallbackEntry_$$$$reset$() {
  this.context = this.$c$ = this.$g$ = this.$b$ = null;
  this.$f$ = !1;
};
var $goog$Promise$freelist_$$ = new $goog$async$FreeList$$(function() {
  return new $goog$Promise$CallbackEntry_$$;
}, function($item$jscomp$10$$) {
  $item$jscomp$10$$.reset();
}), $goog$Promise$getCallbackEntry_$$ = function $$goog$Promise$getCallbackEntry_$$$($onFulfilled$$, $onRejected$jscomp$1$$, $context$jscomp$15$$) {
  var $entry$jscomp$4$$ = $goog$Promise$freelist_$$.get();
  $entry$jscomp$4$$.$g$ = $onFulfilled$$;
  $entry$jscomp$4$$.$c$ = $onRejected$jscomp$1$$;
  $entry$jscomp$4$$.context = $context$jscomp$15$$;
  return $entry$jscomp$4$$;
}, $goog$Promise$resolve$$ = function $$goog$Promise$resolve$$$($opt_value$jscomp$10$$) {
  if ($opt_value$jscomp$10$$ instanceof $goog$Promise$$) {
    return $opt_value$jscomp$10$$;
  }
  var $promise$jscomp$1$$ = new $goog$Promise$$($goog$nullFunction$$);
  $JSCompiler_StaticMethods_resolve_$$($promise$jscomp$1$$, 2, $opt_value$jscomp$10$$);
  return $promise$jscomp$1$$;
}, $goog$Promise$reject$$ = function $$goog$Promise$reject$$$($opt_reason$jscomp$1$$) {
  return new $goog$Promise$$(function($resolve$jscomp$1$$, $reject$$) {
    $reject$$($opt_reason$jscomp$1$$);
  });
}, $goog$Promise$resolveThen_$$ = function $$goog$Promise$resolveThen_$$$($value$jscomp$131$$, $onFulfilled$jscomp$1$$, $onRejected$jscomp$2$$) {
  $goog$Promise$maybeThen_$$($value$jscomp$131$$, $onFulfilled$jscomp$1$$, $onRejected$jscomp$2$$, null) || $goog$async$run$$($goog$partial$$($onFulfilled$jscomp$1$$, $value$jscomp$131$$));
}, $goog$Promise$all$$ = function $$goog$Promise$all$$$($promises$jscomp$1$$) {
  return new $goog$Promise$$(function($resolve$jscomp$3$$, $reject$jscomp$2$$) {
    var $toFulfill$$ = $promises$jscomp$1$$.length, $values$jscomp$10$$ = [];
    if ($toFulfill$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($index$jscomp$78$$, $value$jscomp$132$$) {
        $toFulfill$$--;
        $values$jscomp$10$$[$index$jscomp$78$$] = $value$jscomp$132$$;
        0 == $toFulfill$$ && $resolve$jscomp$3$$($values$jscomp$10$$);
      }, $onReject$$ = function $$onReject$$$($reason$jscomp$7$$) {
        $reject$jscomp$2$$($reason$jscomp$7$$);
      }, $i$jscomp$95$$ = 0, $promise$jscomp$3$$; $i$jscomp$95$$ < $promises$jscomp$1$$.length; $i$jscomp$95$$++) {
        $promise$jscomp$3$$ = $promises$jscomp$1$$[$i$jscomp$95$$], $goog$Promise$resolveThen_$$($promise$jscomp$3$$, $goog$partial$$($onFulfill$$, $i$jscomp$95$$), $onReject$$);
      }
    } else {
      $resolve$jscomp$3$$($values$jscomp$10$$);
    }
  });
}, $goog$Promise$withResolver$$ = function $$goog$Promise$withResolver$$$() {
  var $resolve$jscomp$6$$, $reject$jscomp$5$$, $promise$jscomp$6$$ = new $goog$Promise$$(function($rs$$, $rj$$) {
    $resolve$jscomp$6$$ = $rs$$;
    $reject$jscomp$5$$ = $rj$$;
  });
  return new $goog$Promise$Resolver_$$($promise$jscomp$6$$, $resolve$jscomp$6$$, $reject$jscomp$5$$);
};
$goog$Promise$$.prototype.then = function $$goog$Promise$$$$then$($opt_onFulfilled$jscomp$3$$, $opt_onRejected$jscomp$3$$, $opt_context$jscomp$10$$) {
  return $JSCompiler_StaticMethods_addChildPromise_$$(this, $goog$isFunction$$($opt_onFulfilled$jscomp$3$$) ? $opt_onFulfilled$jscomp$3$$ : null, $goog$isFunction$$($opt_onRejected$jscomp$3$$) ? $opt_onRejected$jscomp$3$$ : null, $opt_context$jscomp$10$$);
};
$goog$Promise$$.prototype.$goog_Thenable = !0;
var $JSCompiler_StaticMethods_thenAlways$$ = function $$JSCompiler_StaticMethods_thenAlways$$$($JSCompiler_StaticMethods_thenAlways$self$$, $entry$jscomp$6_onSettled$jscomp$1$$) {
  $entry$jscomp$6_onSettled$jscomp$1$$ = $goog$Promise$getCallbackEntry_$$($entry$jscomp$6_onSettled$jscomp$1$$, $entry$jscomp$6_onSettled$jscomp$1$$, void 0);
  $entry$jscomp$6_onSettled$jscomp$1$$.$f$ = !0;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_thenAlways$self$$, $entry$jscomp$6_onSettled$jscomp$1$$);
  return $JSCompiler_StaticMethods_thenAlways$self$$;
}, $JSCompiler_StaticMethods_thenCatch$$ = function $$JSCompiler_StaticMethods_thenCatch$$$($JSCompiler_StaticMethods_thenCatch$self$$, $onRejected$jscomp$3$$, $opt_context$jscomp$13$$) {
  return $JSCompiler_StaticMethods_addChildPromise_$$($JSCompiler_StaticMethods_thenCatch$self$$, null, $onRejected$jscomp$3$$, $opt_context$jscomp$13$$);
};
$goog$Promise$$.prototype.cancel = function $$goog$Promise$$$$cancel$($opt_message$jscomp$21$$) {
  0 == this.$b$ && $goog$async$run$$(function() {
    var $err$jscomp$12$$ = new $goog$Promise$CancellationError$$($opt_message$jscomp$21$$);
    $JSCompiler_StaticMethods_cancelInternal_$$(this, $err$jscomp$12$$);
  }, this);
};
var $JSCompiler_StaticMethods_cancelInternal_$$ = function $$JSCompiler_StaticMethods_cancelInternal_$$$($JSCompiler_StaticMethods_cancelInternal_$self$$, $err$jscomp$13$$) {
  if (0 == $JSCompiler_StaticMethods_cancelInternal_$self$$.$b$) {
    if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$f$) {
      var $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$ = $JSCompiler_StaticMethods_cancelInternal_$self$$.$f$;
      if ($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$.$c$) {
        for (var $childCount$jscomp$inline_156_previous$jscomp$inline_1004$$ = 0, $childEntry$jscomp$inline_157$$ = null, $beforeChildEntry$jscomp$inline_158$$ = null, $entry$jscomp$inline_159$$ = $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$.$c$; $entry$jscomp$inline_159$$ && ($entry$jscomp$inline_159$$.$f$ || ($childCount$jscomp$inline_156_previous$jscomp$inline_1004$$++, $entry$jscomp$inline_159$$.$b$ == $JSCompiler_StaticMethods_cancelInternal_$self$$ && ($childEntry$jscomp$inline_157$$ = 
        $entry$jscomp$inline_159$$), !($childEntry$jscomp$inline_157$$ && 1 < $childCount$jscomp$inline_156_previous$jscomp$inline_1004$$))); $entry$jscomp$inline_159$$ = $entry$jscomp$inline_159$$.next) {
          $childEntry$jscomp$inline_157$$ || ($beforeChildEntry$jscomp$inline_158$$ = $entry$jscomp$inline_159$$);
        }
        $childEntry$jscomp$inline_157$$ && (0 == $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$.$b$ && 1 == $childCount$jscomp$inline_156_previous$jscomp$inline_1004$$ ? $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$, $err$jscomp$13$$) : ($beforeChildEntry$jscomp$inline_158$$ ? ($childCount$jscomp$inline_156_previous$jscomp$inline_1004$$ = $beforeChildEntry$jscomp$inline_158$$, $childCount$jscomp$inline_156_previous$jscomp$inline_1004$$.next == 
        $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$.$g$ && ($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$.$g$ = $childCount$jscomp$inline_156_previous$jscomp$inline_1004$$), $childCount$jscomp$inline_156_previous$jscomp$inline_1004$$.next = $childCount$jscomp$inline_156_previous$jscomp$inline_1004$$.next.next) : $JSCompiler_StaticMethods_popEntry_$$($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$), $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_153$$, 
        $childEntry$jscomp$inline_157$$, 3, $err$jscomp$13$$)));
      }
      $JSCompiler_StaticMethods_cancelInternal_$self$$.$f$ = null;
    } else {
      $JSCompiler_StaticMethods_resolve_$$($JSCompiler_StaticMethods_cancelInternal_$self$$, 3, $err$jscomp$13$$);
    }
  }
}, $JSCompiler_StaticMethods_addCallbackEntry_$$ = function $$JSCompiler_StaticMethods_addCallbackEntry_$$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$, $callbackEntry$$) {
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$c$ || 2 != $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$b$ && 3 != $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$b$ || $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$);
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$g$ ? $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$g$.next = $callbackEntry$$ : $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$c$ = $callbackEntry$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$g$ = $callbackEntry$$;
}, $JSCompiler_StaticMethods_addChildPromise_$$ = function $$JSCompiler_StaticMethods_addChildPromise_$$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $onFulfilled$jscomp$2$$, $onRejected$jscomp$4$$, $opt_context$jscomp$14$$) {
  var $callbackEntry$jscomp$1$$ = $goog$Promise$getCallbackEntry_$$(null, null, null);
  $callbackEntry$jscomp$1$$.$b$ = new $goog$Promise$$(function($resolve$jscomp$7$$, $reject$jscomp$6$$) {
    $callbackEntry$jscomp$1$$.$g$ = $onFulfilled$jscomp$2$$ ? function($value$jscomp$134$$) {
      try {
        var $result$jscomp$16$$ = $onFulfilled$jscomp$2$$.call($opt_context$jscomp$14$$, $value$jscomp$134$$);
        $resolve$jscomp$7$$($result$jscomp$16$$);
      } catch ($err$jscomp$15$$) {
        $reject$jscomp$6$$($err$jscomp$15$$);
      }
    } : $resolve$jscomp$7$$;
    $callbackEntry$jscomp$1$$.$c$ = $onRejected$jscomp$4$$ ? function($reason$jscomp$9$$) {
      try {
        var $result$jscomp$17$$ = $onRejected$jscomp$4$$.call($opt_context$jscomp$14$$, $reason$jscomp$9$$);
        !$goog$isDef$$($result$jscomp$17$$) && $reason$jscomp$9$$ instanceof $goog$Promise$CancellationError$$ ? $reject$jscomp$6$$($reason$jscomp$9$$) : $resolve$jscomp$7$$($result$jscomp$17$$);
      } catch ($err$jscomp$16$$) {
        $reject$jscomp$6$$($err$jscomp$16$$);
      }
    } : $reject$jscomp$6$$;
  });
  $callbackEntry$jscomp$1$$.$b$.$f$ = $JSCompiler_StaticMethods_addChildPromise_$self$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $callbackEntry$jscomp$1$$);
  return $callbackEntry$jscomp$1$$.$b$;
};
$goog$Promise$$.prototype.$m$ = function $$goog$Promise$$$$$m$$($value$jscomp$135$$) {
  this.$b$ = 0;
  $JSCompiler_StaticMethods_resolve_$$(this, 2, $value$jscomp$135$$);
};
$goog$Promise$$.prototype.$o$ = function $$goog$Promise$$$$$o$$($reason$jscomp$10$$) {
  this.$b$ = 0;
  $JSCompiler_StaticMethods_resolve_$$(this, 3, $reason$jscomp$10$$);
};
var $JSCompiler_StaticMethods_resolve_$$ = function $$JSCompiler_StaticMethods_resolve_$$$($JSCompiler_StaticMethods_resolve_$self$$, $state$jscomp$1$$, $x$jscomp$91$$) {
  0 == $JSCompiler_StaticMethods_resolve_$self$$.$b$ && ($JSCompiler_StaticMethods_resolve_$self$$ === $x$jscomp$91$$ && ($state$jscomp$1$$ = 3, $x$jscomp$91$$ = new TypeError("Promise cannot resolve to itself")), $JSCompiler_StaticMethods_resolve_$self$$.$b$ = 1, $goog$Promise$maybeThen_$$($x$jscomp$91$$, $JSCompiler_StaticMethods_resolve_$self$$.$m$, $JSCompiler_StaticMethods_resolve_$self$$.$o$, $JSCompiler_StaticMethods_resolve_$self$$) || ($JSCompiler_StaticMethods_resolve_$self$$.$j$ = $x$jscomp$91$$, 
  $JSCompiler_StaticMethods_resolve_$self$$.$b$ = $state$jscomp$1$$, $JSCompiler_StaticMethods_resolve_$self$$.$f$ = null, $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_resolve_$self$$), 3 != $state$jscomp$1$$ || $x$jscomp$91$$ instanceof $goog$Promise$CancellationError$$ || $goog$Promise$addUnhandledRejection_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$jscomp$91$$)));
}, $goog$Promise$maybeThen_$$ = function $$goog$Promise$maybeThen_$$$($value$jscomp$136$$, $onFulfilled$jscomp$3$$, $onRejected$jscomp$5$$, $context$jscomp$16$$) {
  if ($value$jscomp$136$$ instanceof $goog$Promise$$) {
    return $JSCompiler_StaticMethods_addCallbackEntry_$$($value$jscomp$136$$, $goog$Promise$getCallbackEntry_$$($onFulfilled$jscomp$3$$ || $goog$nullFunction$$, $onRejected$jscomp$5$$ || null, $context$jscomp$16$$)), !0;
  }
  if ($value$jscomp$136$$) {
    try {
      var $JSCompiler_inline_result$jscomp$25$$ = !!$value$jscomp$136$$.$goog_Thenable;
    } catch ($e$jscomp$inline_170$$) {
      $JSCompiler_inline_result$jscomp$25$$ = !1;
    }
  } else {
    $JSCompiler_inline_result$jscomp$25$$ = !1;
  }
  if ($JSCompiler_inline_result$jscomp$25$$) {
    return $value$jscomp$136$$.then($onFulfilled$jscomp$3$$, $onRejected$jscomp$5$$, $context$jscomp$16$$), !0;
  }
  if ($goog$isObject$$($value$jscomp$136$$)) {
    try {
      var $then$$ = $value$jscomp$136$$.then;
      if ($goog$isFunction$$($then$$)) {
        return $goog$Promise$tryThen_$$($value$jscomp$136$$, $then$$, $onFulfilled$jscomp$3$$, $onRejected$jscomp$5$$, $context$jscomp$16$$), !0;
      }
    } catch ($e$jscomp$26$$) {
      return $onRejected$jscomp$5$$.call($context$jscomp$16$$, $e$jscomp$26$$), !0;
    }
  }
  return !1;
}, $goog$Promise$tryThen_$$ = function $$goog$Promise$tryThen_$$$($thenable$$, $then$jscomp$1$$, $onFulfilled$jscomp$4$$, $onRejected$jscomp$6$$, $context$jscomp$17$$) {
  var $called$jscomp$1$$ = !1, $resolve$jscomp$8$$ = function $$resolve$jscomp$8$$$($value$jscomp$137$$) {
    $called$jscomp$1$$ || ($called$jscomp$1$$ = !0, $onFulfilled$jscomp$4$$.call($context$jscomp$17$$, $value$jscomp$137$$));
  }, $reject$jscomp$7$$ = function $$reject$jscomp$7$$$($reason$jscomp$11$$) {
    $called$jscomp$1$$ || ($called$jscomp$1$$ = !0, $onRejected$jscomp$6$$.call($context$jscomp$17$$, $reason$jscomp$11$$));
  };
  try {
    $then$jscomp$1$$.call($thenable$$, $resolve$jscomp$8$$, $reject$jscomp$7$$);
  } catch ($e$jscomp$27$$) {
    $reject$jscomp$7$$($e$jscomp$27$$);
  }
}, $JSCompiler_StaticMethods_scheduleCallbacks_$$ = function $$JSCompiler_StaticMethods_scheduleCallbacks_$$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$) {
  $JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$i$ || ($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$i$ = !0, $goog$async$run$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$l$, $JSCompiler_StaticMethods_scheduleCallbacks_$self$$));
}, $JSCompiler_StaticMethods_popEntry_$$ = function $$JSCompiler_StaticMethods_popEntry_$$$($JSCompiler_StaticMethods_popEntry_$self$$) {
  var $entry$jscomp$9$$ = null;
  $JSCompiler_StaticMethods_popEntry_$self$$.$c$ && ($entry$jscomp$9$$ = $JSCompiler_StaticMethods_popEntry_$self$$.$c$, $JSCompiler_StaticMethods_popEntry_$self$$.$c$ = $entry$jscomp$9$$.next, $entry$jscomp$9$$.next = null);
  $JSCompiler_StaticMethods_popEntry_$self$$.$c$ || ($JSCompiler_StaticMethods_popEntry_$self$$.$g$ = null);
  return $entry$jscomp$9$$;
};
$goog$Promise$$.prototype.$l$ = function $$goog$Promise$$$$$l$$() {
  for (var $entry$jscomp$10$$; $entry$jscomp$10$$ = $JSCompiler_StaticMethods_popEntry_$$(this);) {
    $JSCompiler_StaticMethods_executeCallback_$$(this, $entry$jscomp$10$$, this.$b$, this.$j$);
  }
  this.$i$ = !1;
};
var $JSCompiler_StaticMethods_executeCallback_$$ = function $$JSCompiler_StaticMethods_executeCallback_$$$($JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_173$$, $callbackEntry$jscomp$2$$, $state$jscomp$2$$, $result$jscomp$18$$) {
  if (3 == $state$jscomp$2$$ && $callbackEntry$jscomp$2$$.$c$ && !$callbackEntry$jscomp$2$$.$f$) {
    for (; $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_173$$ && $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_173$$.$h$; $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_173$$ = $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_173$$.$f$) {
      $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_173$$.$h$ = !1;
    }
  }
  if ($callbackEntry$jscomp$2$$.$b$) {
    $callbackEntry$jscomp$2$$.$b$.$f$ = null, $goog$Promise$invokeCallback_$$($callbackEntry$jscomp$2$$, $state$jscomp$2$$, $result$jscomp$18$$);
  } else {
    try {
      $callbackEntry$jscomp$2$$.$f$ ? $callbackEntry$jscomp$2$$.$g$.call($callbackEntry$jscomp$2$$.context) : $goog$Promise$invokeCallback_$$($callbackEntry$jscomp$2$$, $state$jscomp$2$$, $result$jscomp$18$$);
    } catch ($err$jscomp$17$$) {
      $goog$Promise$handleRejection_$$.call(null, $err$jscomp$17$$);
    }
  }
  $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$($goog$Promise$freelist_$$, $callbackEntry$jscomp$2$$);
}, $goog$Promise$invokeCallback_$$ = function $$goog$Promise$invokeCallback_$$$($callbackEntry$jscomp$3$$, $state$jscomp$3$$, $result$jscomp$19$$) {
  2 == $state$jscomp$3$$ ? $callbackEntry$jscomp$3$$.$g$.call($callbackEntry$jscomp$3$$.context, $result$jscomp$19$$) : $callbackEntry$jscomp$3$$.$c$ && $callbackEntry$jscomp$3$$.$c$.call($callbackEntry$jscomp$3$$.context, $result$jscomp$19$$);
}, $goog$Promise$addUnhandledRejection_$$ = function $$goog$Promise$addUnhandledRejection_$$$($promise$jscomp$8$$, $reason$jscomp$12$$) {
  $promise$jscomp$8$$.$h$ = !0;
  $goog$async$run$$(function() {
    $promise$jscomp$8$$.$h$ && $goog$Promise$handleRejection_$$.call(null, $reason$jscomp$12$$);
  });
}, $goog$Promise$handleRejection_$$ = $goog$async$throwException$$, $goog$Promise$CancellationError$$ = function $$goog$Promise$CancellationError$$$($opt_message$jscomp$22$$) {
  $goog$debug$Error$$.call(this, $opt_message$jscomp$22$$);
};
$goog$inherits$$($goog$Promise$CancellationError$$, $goog$debug$Error$$);
$goog$Promise$CancellationError$$.prototype.name = "cancel";
var $goog$Promise$Resolver_$$ = function $$goog$Promise$Resolver_$$$($promise$jscomp$9$$, $resolve$jscomp$9$$, $reject$jscomp$8$$) {
  this.$b$ = $promise$jscomp$9$$;
  this.$c$ = $resolve$jscomp$9$$;
  this.$f$ = $reject$jscomp$8$$;
};
var $castApp$log$anonymizeString$$ = function $$castApp$log$anonymizeString$$$($str$jscomp$80$$) {
  return $JSCompiler_StaticMethods_anonymizeString$$($castApp$log$Manager_$$.$getInstance$(), $str$jscomp$80$$);
}, $castApp$log$fine$$ = function $$castApp$log$fine$$$($logger$jscomp$11$$, $var_args$jscomp$80$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$11$$, $goog$debug$Logger$Level$FINE$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$info$$ = function $$castApp$log$info$$$($logger$jscomp$12$$, $var_args$jscomp$81$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$12$$, $goog$debug$Logger$Level$INFO$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$warning$$ = function $$castApp$log$warning$$$($logger$jscomp$13$$, $var_args$jscomp$82$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$13$$, $goog$debug$Logger$Level$WARNING$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$error$$ = function $$castApp$log$error$$$($logger$jscomp$14$$, $var_args$jscomp$83$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$14$$, $goog$debug$Logger$Level$SEVERE$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$infoWithCause$$ = function $$castApp$log$infoWithCause$$$($logger$jscomp$16$$, $exception$jscomp$7$$, $var_args$jscomp$85$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$16$$, $goog$debug$Logger$Level$INFO$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 2)), $exception$jscomp$7$$);
}, $castApp$log$warningWithCause$$ = function $$castApp$log$warningWithCause$$$($logger$jscomp$17$$, $exception$jscomp$8$$, $var_args$jscomp$86$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$17$$, $goog$debug$Logger$Level$WARNING$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 2)), $exception$jscomp$8$$);
}, $castApp$log$errorWithCause$$ = function $$castApp$log$errorWithCause$$$($logger$jscomp$18$$, $exception$jscomp$9$$, $var_args$jscomp$87$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$18$$, $goog$debug$Logger$Level$SEVERE$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 2)), $exception$jscomp$9$$);
}, $castApp$log$joinMessageParts$$ = function $$castApp$log$joinMessageParts$$$($stringSources$$) {
  return $goog$Promise$all$$($stringSources$$.map($castApp$log$getMessageString_$$)).then(function($msgParts$$) {
    return $msgParts$$.join("");
  });
}, $castApp$log$getMessageString_$$ = function $$castApp$log$getMessageString_$$$($source$jscomp$15$$) {
  var $promise$jscomp$10$$ = null;
  $promise$jscomp$10$$ = "string" === typeof $source$jscomp$15$$ ? $goog$Promise$resolve$$($source$jscomp$15$$) : "function" === typeof $source$jscomp$15$$ ? $castApp$log$getMessageString_$$($source$jscomp$15$$()) : $source$jscomp$15$$;
  var $timeoutId$$ = setTimeout(function() {
    return $promise$jscomp$10$$.cancel();
  }, 5000);
  return $JSCompiler_StaticMethods_thenAlways$$($promise$jscomp$10$$, function() {
    return clearTimeout($timeoutId$$);
  });
}, $castApp$log$Logger$$ = function $$castApp$log$Logger$$$($googLogger$$) {
  this.$b$ = $googLogger$$;
}, $castApp$log$getLogger$$ = function $$castApp$log$getLogger$$$($googLogger$jscomp$1_name$jscomp$92$$) {
  return ($googLogger$jscomp$1_name$jscomp$92$$ = $goog$debug$LogManager$getLogger$$("castApp." + $googLogger$jscomp$1_name$jscomp$92$$)) ? new $castApp$log$Logger$$($googLogger$jscomp$1_name$jscomp$92$$) : null;
}, $castApp$log$Manager_$$ = function $$castApp$log$Manager_$$$() {
  this.$b$ = [];
  this.$f$ = this.$c$ = null;
}, $JSCompiler_StaticMethods_initAnonymizer$$ = function $$JSCompiler_StaticMethods_initAnonymizer$$$($JSCompiler_StaticMethods_initAnonymizer$self$$, $crypto$jscomp$2$$, $salt$jscomp$1$$) {
  $crypto$jscomp$2$$.importKey("raw", $salt$jscomp$1$$, {name:"HMAC", hash:{name:"SHA-256"}}, !1, ["sign"]).then(function($saltKey$$) {
    $JSCompiler_StaticMethods_initAnonymizer$self$$.$c$ = $crypto$jscomp$2$$;
    $JSCompiler_StaticMethods_initAnonymizer$self$$.$f$ = $saltKey$$;
  });
};
$castApp$log$Manager_$$.prototype.log = function $$castApp$log$Manager_$$$$log$($logger$jscomp$19$$, $level$jscomp$30$$, $logArgsPromise_msgPromise$$, $opt_exception$jscomp$15$$) {
  500 <= this.$b$.length || ($logArgsPromise_msgPromise$$ = $logArgsPromise_msgPromise$$.then(function($msg$jscomp$21$$) {
    return [$logger$jscomp$19$$.$b$, $level$jscomp$30$$, $msg$jscomp$21$$, $opt_exception$jscomp$15$$];
  }), this.$b$.push($logArgsPromise_msgPromise$$), 1 === this.$b$.length && $JSCompiler_StaticMethods_waitForNextLogArgs_$$(this));
};
var $JSCompiler_StaticMethods_waitForNextLogArgs_$$ = function $$JSCompiler_StaticMethods_waitForNextLogArgs_$$$($JSCompiler_StaticMethods_waitForNextLogArgs_$self$$) {
  0 < $JSCompiler_StaticMethods_waitForNextLogArgs_$self$$.$b$.length && $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_waitForNextLogArgs_$self$$.$b$[0].then(function($logArgs$$) {
    return $goog$log$log$$.apply(null, $logArgs$$);
  }), function() {
    $JSCompiler_StaticMethods_waitForNextLogArgs_$self$$.$b$.shift();
    $JSCompiler_StaticMethods_waitForNextLogArgs_$$($JSCompiler_StaticMethods_waitForNextLogArgs_$self$$);
  });
}, $JSCompiler_StaticMethods_anonymizeString$$ = function $$JSCompiler_StaticMethods_anonymizeString$$$($JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$, $str$jscomp$81$$) {
  if (!$JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$c$ || !$JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$f$) {
    return $goog$Promise$resolve$$("*****");
  }
  for (var $strLen$jscomp$1$$ = $str$jscomp$81$$.length, $utf16Array$$ = new Uint16Array($strLen$jscomp$1$$), $i$jscomp$99$$ = 0; $i$jscomp$99$$ < $strLen$jscomp$1$$; ++$i$jscomp$99$$) {
    $utf16Array$$[$i$jscomp$99$$] = $str$jscomp$81$$.charCodeAt($i$jscomp$99$$);
  }
  $JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$ = $JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$c$.sign({name:"HMAC"}, $JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$f$, $utf16Array$$.buffer).then(function($hmacBuffer$$) {
    var $result$jscomp$20$$ = "";
    (new Uint8Array($hmacBuffer$$)).slice(0, 8).forEach(function($byte$$) {
      $result$jscomp$20$$ += $byte$$.toString(16);
    });
    return $result$jscomp$20$$;
  });
  return $goog$Promise$resolve$$($JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$);
};
$goog$addSingletonGetter$$($castApp$log$Manager_$$);
var $castApp$protocol$Message$$ = function $$castApp$protocol$Message$$$($type$jscomp$152$$) {
  this.type = $type$jscomp$152$$;
};
$goog$exportSymbol$$("castApp.protocol.Message", $castApp$protocol$Message$$);
var $castApp$protocol$Request$$ = function $$castApp$protocol$Request$$$($type$jscomp$153$$) {
  this.type = $type$jscomp$153$$;
  this.requestId = $goog$string$getRandomString$$();
};
$goog$inherits$$($castApp$protocol$Request$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.Request", $castApp$protocol$Request$$);
var $castApp$protocol$Response$$ = function $$castApp$protocol$Response$$$($type$jscomp$154$$, $request$jscomp$7$$) {
  this.type = $type$jscomp$154$$;
  this.responseTo = $request$jscomp$7$$.requestId;
};
$goog$inherits$$($castApp$protocol$Response$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.Response", $castApp$protocol$Response$$);
var $castApp$protocol$Error$$ = function $$castApp$protocol$Error$$$($request$jscomp$8$$, $opt_errorName$$) {
  $castApp$protocol$Response$$.call(this, "Error", $request$jscomp$8$$);
  this.errorName = $opt_errorName$$ || "err-unknown";
};
$goog$inherits$$($castApp$protocol$Error$$, $castApp$protocol$Response$$);
$goog$exportSymbol$$("castApp.protocol.Error", $castApp$protocol$Error$$);
var $castApp$protocol$Handshake$$ = function $$castApp$protocol$Handshake$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Handshake", $castApp$protocol$Handshake$$);
var $castApp$protocol$Handshake$Request$$ = function $$castApp$protocol$Handshake$Request$$$() {
  $castApp$protocol$Request$$.call(this, "Handshake.Request");
  this.coreVersion = 6;
};
$goog$inherits$$($castApp$protocol$Handshake$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$Handshake$$.Request = $castApp$protocol$Handshake$Request$$;
var $castApp$protocol$Handshake$Response$$ = function $$castApp$protocol$Handshake$Response$$$($request$jscomp$9$$) {
  $castApp$protocol$Response$$.call(this, "Handshake.Response", $request$jscomp$9$$);
  this.version = 6;
  this.latestVersion = void 0;
};
$goog$inherits$$($castApp$protocol$Handshake$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$Handshake$$.Response = $castApp$protocol$Handshake$Response$$;
var $castApp$protocol$Handshake$UiVersionNotSupported$$ = function $$castApp$protocol$Handshake$UiVersionNotSupported$$$($request$jscomp$10$$, $latestVersion$$) {
  $castApp$protocol$Response$$.call(this, "Handshake.UiVersionNotSupported", $request$jscomp$10$$);
  this.latestVersion = $latestVersion$$;
};
$goog$inherits$$($castApp$protocol$Handshake$UiVersionNotSupported$$, $castApp$protocol$Response$$);
$castApp$protocol$Handshake$$.UiVersionNotSupported = $castApp$protocol$Handshake$UiVersionNotSupported$$;
var $castApp$protocol$SetSimpleState$$ = function $$castApp$protocol$SetSimpleState$$$($state$jscomp$4$$) {
  this.type = "SetSimpleState";
  this.state = $state$jscomp$4$$;
};
$goog$inherits$$($castApp$protocol$SetSimpleState$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.SetSimpleState", $castApp$protocol$SetSimpleState$$);
var $castApp$protocol$ModalDialog$$ = function $$castApp$protocol$ModalDialog$$$() {
};
$goog$exportSymbol$$("castApp.protocol.ModalDialog", $castApp$protocol$ModalDialog$$);
var $castApp$protocol$ModalDialog$Request$$ = function $$castApp$protocol$ModalDialog$Request$$$($dialogId$$) {
  $castApp$protocol$Request$$.call(this, "ModalDialog.Request");
  this.dialogId = $dialogId$$;
};
$goog$inherits$$($castApp$protocol$ModalDialog$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$ModalDialog$$.Request = $castApp$protocol$ModalDialog$Request$$;
var $castApp$protocol$ModalDialog$Response$$ = function $$castApp$protocol$ModalDialog$Response$$$($request$jscomp$11$$, $button$jscomp$1$$) {
  $castApp$protocol$Response$$.call(this, "ModalDialog.Response", $request$jscomp$11$$);
  this.button = $button$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$ModalDialog$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$ModalDialog$$.Response = $castApp$protocol$ModalDialog$Response$$;
var $castApp$protocol$MessageWithDeviceType$$ = function $$castApp$protocol$MessageWithDeviceType$$$($messageType$$, $deviceType$$) {
  this.type = $messageType$$;
  this.deviceType = $deviceType$$;
};
$goog$inherits$$($castApp$protocol$MessageWithDeviceType$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.MessageWithDeviceType", $castApp$protocol$MessageWithDeviceType$$);
var $castApp$protocol$DeviceDiscovery$$ = function $$castApp$protocol$DeviceDiscovery$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DeviceDiscovery", $castApp$protocol$DeviceDiscovery$$);
var $castApp$protocol$DeviceDiscovery$ShowScanner$$ = function $$castApp$protocol$DeviceDiscovery$ShowScanner$$$($showTips$$) {
  this.type = "DeviceDiscovery.ShowScanner";
  this.showTips = $showTips$$;
};
$goog$inherits$$($castApp$protocol$DeviceDiscovery$ShowScanner$$, $castApp$protocol$Message$$);
$castApp$protocol$DeviceDiscovery$$.ShowScanner = $castApp$protocol$DeviceDiscovery$ShowScanner$$;
var $castApp$protocol$SetupStart$$ = function $$castApp$protocol$SetupStart$$$() {
};
$goog$exportSymbol$$("castApp.protocol.SetupStart", $castApp$protocol$SetupStart$$);
var $castApp$protocol$SetupStart$ShowDevice$$ = function $$castApp$protocol$SetupStart$ShowDevice$$$($state$jscomp$5$$, $deviceType$jscomp$1$$, $deviceName$$) {
  this.type = "SetupStart.ShowDevice";
  this.state = $state$jscomp$5$$;
  this.deviceType = $deviceType$jscomp$1$$;
  this.deviceName = $deviceName$$;
  this.analyticsOptIn = this.otherDevicesExist = !1;
};
$goog$inherits$$($castApp$protocol$SetupStart$ShowDevice$$, $castApp$protocol$Message$$);
$castApp$protocol$SetupStart$$.ShowDevice = $castApp$protocol$SetupStart$ShowDevice$$;
var $castApp$protocol$SetupStart$TosAccepted$$ = function $$castApp$protocol$SetupStart$TosAccepted$$$($analyticsOptIn$$) {
  this.type = "SetupStart.TosAccepted";
  this.analyticsOptIn = $analyticsOptIn$$;
};
$goog$inherits$$($castApp$protocol$SetupStart$TosAccepted$$, $castApp$protocol$Message$$);
$castApp$protocol$SetupStart$$.TosAccepted = $castApp$protocol$SetupStart$TosAccepted$$;
var $castApp$protocol$WiFiSwitching$$ = function $$castApp$protocol$WiFiSwitching$$$() {
};
$goog$exportSymbol$$("castApp.protocol.WiFiSwitching", $castApp$protocol$WiFiSwitching$$);
var $castApp$protocol$WiFiSwitching$ConnectHotSpot$$ = function $$castApp$protocol$WiFiSwitching$ConnectHotSpot$$$($state$jscomp$6$$, $deviceName$jscomp$1$$, $ssid$jscomp$1$$) {
  this.type = "WiFiSwitching.ConnectHotSpot";
  this.state = $state$jscomp$6$$;
  this.deviceName = $deviceName$jscomp$1$$;
  this.ssid = $ssid$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$WiFiSwitching$ConnectHotSpot$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiSwitching$$.ConnectHotSpot = $castApp$protocol$WiFiSwitching$ConnectHotSpot$$;
var $castApp$protocol$WiFiSwitching$ReconnectWiFi$$ = function $$castApp$protocol$WiFiSwitching$ReconnectWiFi$$$($state$jscomp$7$$, $ssid$jscomp$2$$) {
  this.type = "WiFiSwitching.ReconnectWiFi";
  this.state = $state$jscomp$7$$;
  this.ssid = $ssid$jscomp$2$$;
};
$goog$inherits$$($castApp$protocol$WiFiSwitching$ReconnectWiFi$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiSwitching$$.ReconnectWiFi = $castApp$protocol$WiFiSwitching$ReconnectWiFi$$;
var $castApp$protocol$CodeConfirmation$$ = function $$castApp$protocol$CodeConfirmation$$$() {
};
$goog$exportSymbol$$("castApp.protocol.CodeConfirmation", $castApp$protocol$CodeConfirmation$$);
var $castApp$protocol$CodeConfirmation$Request$$ = function $$castApp$protocol$CodeConfirmation$Request$$$($code$jscomp$8$$) {
  $castApp$protocol$Request$$.call(this, "CodeConfirmation.Request");
  this.code = $code$jscomp$8$$;
};
$goog$inherits$$($castApp$protocol$CodeConfirmation$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$CodeConfirmation$$.Request = $castApp$protocol$CodeConfirmation$Request$$;
var $castApp$protocol$CodeConfirmation$Response$$ = function $$castApp$protocol$CodeConfirmation$Response$$$($request$jscomp$12$$, $confirmed$$) {
  $castApp$protocol$Response$$.call(this, "CodeConfirmation.Response", $request$jscomp$12$$);
  this.confirmed = $confirmed$$;
};
$goog$inherits$$($castApp$protocol$CodeConfirmation$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$CodeConfirmation$$.Response = $castApp$protocol$CodeConfirmation$Response$$;
var $castApp$protocol$AudioConfirmation$$ = function $$castApp$protocol$AudioConfirmation$$$() {
};
$goog$exportSymbol$$("castApp.protocol.AudioConfirmation", $castApp$protocol$AudioConfirmation$$);
var $castApp$protocol$AudioConfirmation$PromptUser$$ = function $$castApp$protocol$AudioConfirmation$PromptUser$$$($state$jscomp$8$$) {
  this.type = "AudioConfirmation.PromptUser";
  this.state = $state$jscomp$8$$;
};
$goog$inherits$$($castApp$protocol$AudioConfirmation$PromptUser$$, $castApp$protocol$Message$$);
$castApp$protocol$AudioConfirmation$$.PromptUser = $castApp$protocol$AudioConfirmation$PromptUser$$;
var $castApp$protocol$AudioConfirmation$UserAction$$ = function $$castApp$protocol$AudioConfirmation$UserAction$$$($action$$) {
  this.type = "AudioConfirmation.UserAction";
  this.action = $action$$;
};
$goog$inherits$$($castApp$protocol$AudioConfirmation$UserAction$$, $castApp$protocol$Message$$);
$castApp$protocol$AudioConfirmation$$.UserAction = $castApp$protocol$AudioConfirmation$UserAction$$;
var $castApp$protocol$DeviceConfig$$ = function $$castApp$protocol$DeviceConfig$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DeviceConfig", $castApp$protocol$DeviceConfig$$);
var $castApp$protocol$DeviceConfig$Request$$ = function $$castApp$protocol$DeviceConfig$Request$$$($deviceType$jscomp$2$$, $name$jscomp$93$$, $country$$) {
  $castApp$protocol$Request$$.call(this, "DeviceConfig.Request");
  this.deviceType = $deviceType$jscomp$2$$;
  this.name = $name$jscomp$93$$;
  this.country = $country$$;
};
$goog$inherits$$($castApp$protocol$DeviceConfig$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$DeviceConfig$$.Request = $castApp$protocol$DeviceConfig$Request$$;
var $castApp$protocol$DeviceConfig$Response$$ = function $$castApp$protocol$DeviceConfig$Response$$$($request$jscomp$13$$, $name$jscomp$94$$, $country$jscomp$1$$) {
  $castApp$protocol$Response$$.call(this, "DeviceConfig.Response", $request$jscomp$13$$);
  this.name = $name$jscomp$94$$;
  this.country = $country$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$DeviceConfig$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$DeviceConfig$$.Response = $castApp$protocol$DeviceConfig$Response$$;
var $castApp$protocol$WiFiConfig$$ = function $$castApp$protocol$WiFiConfig$$$() {
};
$goog$exportSymbol$$("castApp.protocol.WiFiConfig", $castApp$protocol$WiFiConfig$$);
var $castApp$protocol$WiFiConfig$Network$$ = function $$castApp$protocol$WiFiConfig$Network$$$($id$jscomp$47$$, $ssid$jscomp$3$$, $security$$) {
  this.id = $id$jscomp$47$$;
  this.ssid = $ssid$jscomp$3$$;
  this.security = $security$$;
};
$castApp$protocol$WiFiConfig$$.Network = $castApp$protocol$WiFiConfig$Network$$;
var $castApp$protocol$WiFiConfig$Show$$ = function $$castApp$protocol$WiFiConfig$Show$$$($state$jscomp$9$$, $deviceType$jscomp$3$$, $networks$$, $selectedNetwork$$) {
  this.type = "WiFiConfig.Show";
  this.state = $state$jscomp$9$$;
  this.deviceType = $deviceType$jscomp$3$$;
  this.networks = $networks$$;
  this.selectedNetwork = $selectedNetwork$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$Show$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.Show = $castApp$protocol$WiFiConfig$Show$$;
var $castApp$protocol$WiFiConfig$UpdateNetworks$$ = function $$castApp$protocol$WiFiConfig$UpdateNetworks$$$($networks$jscomp$1$$) {
  this.type = "WiFiConfig.UpdateNetworks";
  this.networks = $networks$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$UpdateNetworks$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.UpdateNetworks = $castApp$protocol$WiFiConfig$UpdateNetworks$$;
var $castApp$protocol$WiFiConfig$Connect$$ = function $$castApp$protocol$WiFiConfig$Connect$$$($network$$, $password$$) {
  this.type = "WiFiConfig.Connect";
  this.network = $network$$;
  this.password = $password$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$Connect$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.Connect = $castApp$protocol$WiFiConfig$Connect$$;
var $castApp$protocol$WiFiConfig$Retry$$ = function $$castApp$protocol$WiFiConfig$Retry$$$($network$jscomp$1$$) {
  this.type = "WiFiConfig.Retry";
  this.network = $network$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$Retry$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.Retry = $castApp$protocol$WiFiConfig$Retry$$;
var $castApp$protocol$Features$$ = function $$castApp$protocol$Features$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Features", $castApp$protocol$Features$$);
var $castApp$protocol$Features$DeviceSettings$$ = function $$castApp$protocol$Features$DeviceSettings$$$() {
};
$castApp$protocol$Features$$.DeviceSettings = $castApp$protocol$Features$DeviceSettings$$;
var $castApp$protocol$Features$Device$$ = function $$castApp$protocol$Features$Device$$$() {
  this.supportsDisplay = this.supportsSetup = !1;
};
$castApp$protocol$Features$$.Device = $castApp$protocol$Features$Device$$;
var $castApp$protocol$Devices$$ = function $$castApp$protocol$Devices$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Devices", $castApp$protocol$Devices$$);
var $castApp$protocol$Devices$DeviceProperties$$ = function $$castApp$protocol$Devices$DeviceProperties$$$($id$jscomp$48$$, $type$jscomp$155$$, $displayName$jscomp$1$$) {
  this.id = $id$jscomp$48$$;
  this.type = $type$jscomp$155$$;
  this.displayName = $displayName$jscomp$1$$;
};
$castApp$protocol$Devices$$.DeviceProperties = $castApp$protocol$Devices$DeviceProperties$$;
var $castApp$protocol$Devices$Show$$ = function $$castApp$protocol$Devices$Show$$$($devices$jscomp$1$$, $opt_deviceName$$) {
  this.type = "Devices.Show";
  this.devices = $devices$jscomp$1$$;
  this.deviceName = $opt_deviceName$$;
};
$goog$inherits$$($castApp$protocol$Devices$Show$$, $castApp$protocol$Message$$);
$castApp$protocol$Devices$$.Show = $castApp$protocol$Devices$Show$$;
var $castApp$protocol$Devices$UserAction$$ = function $$castApp$protocol$Devices$UserAction$$$($device$jscomp$3$$, $action$jscomp$1$$) {
  this.type = "Devices.UserAction";
  this.device = $device$jscomp$3$$;
  this.action = $action$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$Devices$UserAction$$, $castApp$protocol$Message$$);
$castApp$protocol$Devices$$.UserAction = $castApp$protocol$Devices$UserAction$$;
var $castApp$protocol$DeviceSettings$$ = function $$castApp$protocol$DeviceSettings$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DeviceSettings", $castApp$protocol$DeviceSettings$$);
var $castApp$protocol$DeviceSettings$Locale$$ = function $$castApp$protocol$DeviceSettings$Locale$$$($localeId$$, $displayString$$) {
  this.localeId = $localeId$$;
  this.displayString = $displayString$$;
};
$castApp$protocol$DeviceSettings$$.Locale = $castApp$protocol$DeviceSettings$Locale$$;
var $castApp$protocol$DeviceSettings$TimeZone$$ = function $$castApp$protocol$DeviceSettings$TimeZone$$$($timeZoneId$$, $displayString$jscomp$1$$, $offset$jscomp$22$$) {
  this.timeZoneId = $timeZoneId$$;
  this.displayString = $displayString$jscomp$1$$;
  this.offset = $offset$jscomp$22$$;
};
$castApp$protocol$DeviceSettings$$.TimeZone = $castApp$protocol$DeviceSettings$TimeZone$$;
var $castApp$protocol$DeviceSettings$Show$$ = function $$castApp$protocol$DeviceSettings$Show$$$($state$jscomp$10$$, $features$jscomp$2$$, $settings$$) {
  this.type = "DeviceSettings.Show";
  this.state = $state$jscomp$10$$;
  this.features = $features$jscomp$2$$;
  this.deviceType = $settings$$.deviceType;
  this.name = $settings$$.name;
  this.ssid = $settings$$.ssid;
  this.timeZoneId = $settings$$.timeZoneId;
  this.supportedTimeZones = $settings$$.supportedTimeZones;
  this.timeFormat = $settings$$.timeFormat;
  this.localeId = $settings$$.localeId;
  this.supportedLocales = $settings$$.supportedLocales;
  this.statsOptIn = $settings$$.statsOptIn;
  this.firmwareVersion = $settings$$.firmwareVersion;
  this.countryCode = $settings$$.countryCode;
  this.macAddress = $settings$$.macAddress;
  this.ipAddress = $settings$$.ipAddress;
};
$goog$inherits$$($castApp$protocol$DeviceSettings$Show$$, $castApp$protocol$Message$$);
$castApp$protocol$DeviceSettings$$.Show = $castApp$protocol$DeviceSettings$Show$$;
var $castApp$protocol$DeviceSettings$Apply$$ = function $$castApp$protocol$DeviceSettings$Apply$$$($settings$jscomp$1$$) {
  this.type = "DeviceSettings.Apply";
  this.name = $settings$jscomp$1$$.name;
  this.timeZoneId = $settings$jscomp$1$$.timeZoneId;
  this.timeFormat = $settings$jscomp$1$$.timeFormat;
  this.localeId = $settings$jscomp$1$$.localeId;
  this.statsOptIn = $settings$jscomp$1$$.statsOptIn;
};
$goog$inherits$$($castApp$protocol$DeviceSettings$Apply$$, $castApp$protocol$Message$$);
$castApp$protocol$DeviceSettings$$.Apply = $castApp$protocol$DeviceSettings$Apply$$;
var $castApp$protocol$DetectCountry$$ = function $$castApp$protocol$DetectCountry$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DetectCountry", $castApp$protocol$DetectCountry$$);
var $castApp$protocol$DetectCountry$Request$$ = function $$castApp$protocol$DetectCountry$Request$$$() {
  $castApp$protocol$Request$$.call(this, "DetectCountry.Request");
};
$goog$inherits$$($castApp$protocol$DetectCountry$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$DetectCountry$$.Request = $castApp$protocol$DetectCountry$Request$$;
var $castApp$protocol$DetectCountry$Response$$ = function $$castApp$protocol$DetectCountry$Response$$$($request$jscomp$14$$, $countryCode$$) {
  $castApp$protocol$Response$$.call(this, "DetectCountry.Response", $request$jscomp$14$$);
  this.countryCode = $countryCode$$;
};
$goog$inherits$$($castApp$protocol$DetectCountry$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$DetectCountry$$.Response = $castApp$protocol$DetectCountry$Response$$;
var $castApp$protocol$Offers$$ = function $$castApp$protocol$Offers$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Offers", $castApp$protocol$Offers$$);
var $castApp$protocol$Offers$Scan$$ = function $$castApp$protocol$Offers$Scan$$$() {
  this.type = "Offers.Scan";
  this.scanId = $goog$string$getRandomString$$();
};
$goog$inherits$$($castApp$protocol$Offers$Scan$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.Scan = $castApp$protocol$Offers$Scan$$;
var $castApp$protocol$Offers$Device$$ = function $$castApp$protocol$Offers$Device$$$($token$jscomp$6$$, $displayName$jscomp$2$$, $deviceType$jscomp$4$$, $ssdpUdn$$) {
  this.token = $token$jscomp$6$$;
  this.displayName = $displayName$jscomp$2$$;
  this.deviceType = $deviceType$jscomp$4$$;
  this.ssdpUdn = $ssdpUdn$$;
};
$castApp$protocol$Offers$$.Device = $castApp$protocol$Offers$Device$$;
var $castApp$protocol$Offers$ScanResults$$ = function $$castApp$protocol$Offers$ScanResults$$$($scanId$$, $devices$jscomp$2$$, $scanComplete$$) {
  this.type = "Offers.ScanResults";
  this.scanId = $scanId$$;
  this.devices = $devices$jscomp$2$$;
  this.scanComplete = $scanComplete$$;
};
$goog$inherits$$($castApp$protocol$Offers$ScanResults$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.ScanResults = $castApp$protocol$Offers$ScanResults$$;
var $castApp$protocol$Offers$Redeem$$ = function $$castApp$protocol$Offers$Redeem$$$($url$jscomp$63$$) {
  this.type = "Offers.Redeem";
  this.url = $url$jscomp$63$$;
};
$goog$inherits$$($castApp$protocol$Offers$Redeem$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.Redeem = $castApp$protocol$Offers$Redeem$$;
var $castApp$protocol$Offers$AnalyticsEvent$$ = function $$castApp$protocol$Offers$AnalyticsEvent$$$($eventType$jscomp$3$$, $opt_offerId$$) {
  this.type = "Offers.AnalyticsEvent";
  this.eventType = $eventType$jscomp$3$$;
  this.offerId = $opt_offerId$$;
};
$goog$inherits$$($castApp$protocol$Offers$AnalyticsEvent$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.AnalyticsEvent = $castApp$protocol$Offers$AnalyticsEvent$$;
var $goog$math$Integer$$ = function $$goog$math$Integer$$$($bits$$, $sign$$) {
  this.$b$ = $sign$$;
  for (var $localBits$$ = [], $top$jscomp$4$$ = !0, $i$jscomp$100$$ = $bits$$.length - 1; 0 <= $i$jscomp$100$$; $i$jscomp$100$$--) {
    var $val$jscomp$25$$ = $bits$$[$i$jscomp$100$$] | 0;
    $top$jscomp$4$$ && $val$jscomp$25$$ == $sign$$ || ($localBits$$[$i$jscomp$100$$] = $val$jscomp$25$$, $top$jscomp$4$$ = !1);
  }
  this.$c$ = $localBits$$;
}, $goog$math$Integer$IntCache_$$ = {}, $goog$math$Integer$fromInt$$ = function $$goog$math$Integer$fromInt$$$($value$jscomp$138$$) {
  return -128 <= $value$jscomp$138$$ && 128 > $value$jscomp$138$$ ? $goog$reflect$cache$$($goog$math$Integer$IntCache_$$, $value$jscomp$138$$, function($val$jscomp$26$$) {
    return new $goog$math$Integer$$([$val$jscomp$26$$ | 0], 0 > $val$jscomp$26$$ ? -1 : 0);
  }) : new $goog$math$Integer$$([$value$jscomp$138$$ | 0], 0 > $value$jscomp$138$$ ? -1 : 0);
}, $goog$math$Integer$fromNumber$$ = function $$goog$math$Integer$fromNumber$$$($value$jscomp$139$$) {
  if (isNaN($value$jscomp$139$$) || !isFinite($value$jscomp$139$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if (0 > $value$jscomp$139$$) {
    return $JSCompiler_StaticMethods_negate$$($goog$math$Integer$fromNumber$$(-$value$jscomp$139$$));
  }
  for (var $bits$jscomp$1$$ = [], $pow$$ = 1, $i$jscomp$101$$ = 0; $value$jscomp$139$$ >= $pow$$; $i$jscomp$101$$++) {
    $bits$jscomp$1$$[$i$jscomp$101$$] = $value$jscomp$139$$ / $pow$$ | 0, $pow$$ *= 4294967296;
  }
  return new $goog$math$Integer$$($bits$jscomp$1$$, 0);
}, $goog$math$Integer$fromString$$ = function $$goog$math$Integer$fromString$$$($str$jscomp$82$$, $opt_radix$jscomp$1_radix$jscomp$1$$) {
  if (0 == $str$jscomp$82$$.length) {
    throw Error("number format error: empty string");
  }
  $opt_radix$jscomp$1_radix$jscomp$1$$ = $opt_radix$jscomp$1_radix$jscomp$1$$ || 10;
  if (2 > $opt_radix$jscomp$1_radix$jscomp$1$$ || 36 < $opt_radix$jscomp$1_radix$jscomp$1$$) {
    throw Error("radix out of range: " + $opt_radix$jscomp$1_radix$jscomp$1$$);
  }
  if ("-" == $str$jscomp$82$$.charAt(0)) {
    return $JSCompiler_StaticMethods_negate$$($goog$math$Integer$fromString$$($str$jscomp$82$$.substring(1), $opt_radix$jscomp$1_radix$jscomp$1$$));
  }
  if (0 <= $str$jscomp$82$$.indexOf("-")) {
    throw Error('number format error: interior "-" character');
  }
  for (var $radixToPower$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$1_radix$jscomp$1$$, 8)), $result$jscomp$21$$ = $goog$math$Integer$ZERO$$, $i$jscomp$102$$ = 0; $i$jscomp$102$$ < $str$jscomp$82$$.length; $i$jscomp$102$$ += 8) {
    var $power_size$jscomp$19$$ = Math.min(8, $str$jscomp$82$$.length - $i$jscomp$102$$), $value$jscomp$140$$ = parseInt($str$jscomp$82$$.substring($i$jscomp$102$$, $i$jscomp$102$$ + $power_size$jscomp$19$$), $opt_radix$jscomp$1_radix$jscomp$1$$);
    8 > $power_size$jscomp$19$$ ? ($power_size$jscomp$19$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$1_radix$jscomp$1$$, $power_size$jscomp$19$$)), $result$jscomp$21$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($result$jscomp$21$$, $power_size$jscomp$19$$).add($goog$math$Integer$fromNumber$$($value$jscomp$140$$))) : ($result$jscomp$21$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($result$jscomp$21$$, $radixToPower$$), $result$jscomp$21$$ = 
    $result$jscomp$21$$.add($goog$math$Integer$fromNumber$$($value$jscomp$140$$)));
  }
  return $result$jscomp$21$$;
}, $goog$math$Integer$ZERO$$ = $goog$math$Integer$fromInt$$(0), $goog$math$Integer$ONE$$ = $goog$math$Integer$fromInt$$(1), $goog$math$Integer$TWO_PWR_24_$$ = $goog$math$Integer$fromInt$$(16777216), $JSCompiler_StaticMethods_toNumber$$ = function $$JSCompiler_StaticMethods_toNumber$$$($JSCompiler_StaticMethods_toNumber$self$$) {
  if (-1 == $JSCompiler_StaticMethods_toNumber$self$$.$b$) {
    return -$JSCompiler_StaticMethods_toNumber$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_toNumber$self$$));
  }
  for (var $val$jscomp$27$$ = 0, $pow$jscomp$1$$ = 1, $i$jscomp$103$$ = 0; $i$jscomp$103$$ < $JSCompiler_StaticMethods_toNumber$self$$.$c$.length; $i$jscomp$103$$++) {
    $val$jscomp$27$$ += $JSCompiler_StaticMethods_getBitsUnsigned$$($JSCompiler_StaticMethods_toNumber$self$$, $i$jscomp$103$$) * $pow$jscomp$1$$, $pow$jscomp$1$$ *= 4294967296;
  }
  return $val$jscomp$27$$;
};
$goog$math$Integer$$.prototype.toString = function $$goog$math$Integer$$$$toString$($opt_radix$jscomp$2_radix$jscomp$2$$) {
  $opt_radix$jscomp$2_radix$jscomp$2$$ = $opt_radix$jscomp$2_radix$jscomp$2$$ || 10;
  if (2 > $opt_radix$jscomp$2_radix$jscomp$2$$ || 36 < $opt_radix$jscomp$2_radix$jscomp$2$$) {
    throw Error("radix out of range: " + $opt_radix$jscomp$2_radix$jscomp$2$$);
  }
  if ($JSCompiler_StaticMethods_isZero$$(this)) {
    return "0";
  }
  if (-1 == this.$b$) {
    return "-" + $JSCompiler_StaticMethods_negate$$(this).toString($opt_radix$jscomp$2_radix$jscomp$2$$);
  }
  for (var $radixToPower$jscomp$1$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$2_radix$jscomp$2$$, 6)), $JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$ = this, $result$jscomp$22$$ = "";;) {
    var $remDiv$$ = $JSCompiler_StaticMethods_divideAndRemainder$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$, $radixToPower$jscomp$1$$).$b$;
    $JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$, $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($remDiv$$, $radixToPower$jscomp$1$$));
    var $digits$$ = ((0 < $JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$.$c$.length ? $JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$.$c$[0] : $JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$.$b$) >>> 0).toString($opt_radix$jscomp$2_radix$jscomp$2$$);
    $JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$ = $remDiv$$;
    if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_371_rem$$)) {
      return $digits$$ + $result$jscomp$22$$;
    }
    for (; 6 > $digits$$.length;) {
      $digits$$ = "0" + $digits$$;
    }
    $result$jscomp$22$$ = "" + $digits$$ + $result$jscomp$22$$;
  }
};
var $JSCompiler_StaticMethods_getBits$$ = function $$JSCompiler_StaticMethods_getBits$$$($JSCompiler_StaticMethods_getBits$self$$, $index$jscomp$81$$) {
  return 0 > $index$jscomp$81$$ ? 0 : $index$jscomp$81$$ < $JSCompiler_StaticMethods_getBits$self$$.$c$.length ? $JSCompiler_StaticMethods_getBits$self$$.$c$[$index$jscomp$81$$] : $JSCompiler_StaticMethods_getBits$self$$.$b$;
}, $JSCompiler_StaticMethods_getBitsUnsigned$$ = function $$JSCompiler_StaticMethods_getBitsUnsigned$$$($JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$28$$, $index$jscomp$82$$) {
  $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$28$$ = $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$28$$, $index$jscomp$82$$);
  return 0 <= $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$28$$ ? $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$28$$ : 4294967296 + $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$28$$;
}, $JSCompiler_StaticMethods_isZero$$ = function $$JSCompiler_StaticMethods_isZero$$$($JSCompiler_StaticMethods_isZero$self$$) {
  if (0 != $JSCompiler_StaticMethods_isZero$self$$.$b$) {
    return !1;
  }
  for (var $i$jscomp$104$$ = 0; $i$jscomp$104$$ < $JSCompiler_StaticMethods_isZero$self$$.$c$.length; $i$jscomp$104$$++) {
    if (0 != $JSCompiler_StaticMethods_isZero$self$$.$c$[$i$jscomp$104$$]) {
      return !1;
    }
  }
  return !0;
}, $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$ = function $$JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$, $other$jscomp$11$$) {
  $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$, $other$jscomp$11$$);
  return -1 == $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$.$b$ ? -1 : $JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$) ? 0 : 1;
}, $JSCompiler_StaticMethods_negate$$ = function $$JSCompiler_StaticMethods_negate$$$($JSCompiler_StaticMethods_negate$self$$) {
  for (var $len$jscomp$inline_374$$ = $JSCompiler_StaticMethods_negate$self$$.$c$.length, $arr$jscomp$inline_375$$ = [], $i$jscomp$inline_376$$ = 0; $i$jscomp$inline_376$$ < $len$jscomp$inline_374$$; $i$jscomp$inline_376$$++) {
    $arr$jscomp$inline_375$$[$i$jscomp$inline_376$$] = ~$JSCompiler_StaticMethods_negate$self$$.$c$[$i$jscomp$inline_376$$];
  }
  return (new $goog$math$Integer$$($arr$jscomp$inline_375$$, ~$JSCompiler_StaticMethods_negate$self$$.$b$)).add($goog$math$Integer$ONE$$);
};
$goog$math$Integer$$.prototype.abs = function $$goog$math$Integer$$$$abs$() {
  return -1 == this.$b$ ? $JSCompiler_StaticMethods_negate$$(this) : this;
};
$goog$math$Integer$$.prototype.add = function $$goog$math$Integer$$$$add$($other$jscomp$12$$) {
  for (var $len$jscomp$2$$ = Math.max(this.$c$.length, $other$jscomp$12$$.$c$.length), $arr$jscomp$63$$ = [], $carry$$ = 0, $i$jscomp$107$$ = 0; $i$jscomp$107$$ <= $len$jscomp$2$$; $i$jscomp$107$$++) {
    var $c0$$ = $carry$$ + ($JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$107$$) & 65535) + ($JSCompiler_StaticMethods_getBits$$($other$jscomp$12$$, $i$jscomp$107$$) & 65535), $c1$$ = ($c0$$ >>> 16) + ($JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$107$$) >>> 16) + ($JSCompiler_StaticMethods_getBits$$($other$jscomp$12$$, $i$jscomp$107$$) >>> 16);
    $carry$$ = $c1$$ >>> 16;
    $c0$$ &= 65535;
    $c1$$ &= 65535;
    $arr$jscomp$63$$[$i$jscomp$107$$] = $c1$$ << 16 | $c0$$;
  }
  return new $goog$math$Integer$$($arr$jscomp$63$$, $arr$jscomp$63$$[$arr$jscomp$63$$.length - 1] & -2147483648 ? -1 : 0);
};
var $JSCompiler_StaticMethods_subtract$$ = function $$JSCompiler_StaticMethods_subtract$$$($JSCompiler_StaticMethods_subtract$self$$, $other$jscomp$13$$) {
  return $JSCompiler_StaticMethods_subtract$self$$.add($JSCompiler_StaticMethods_negate$$($other$jscomp$13$$));
}, $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$ = function $$JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $other$jscomp$14$$) {
  if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$) || $JSCompiler_StaticMethods_isZero$$($other$jscomp$14$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if (-1 == $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$.$b$) {
    return -1 == $other$jscomp$14$$.$b$ ? $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$), $JSCompiler_StaticMethods_negate$$($other$jscomp$14$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$), $other$jscomp$14$$));
  }
  if (-1 == $other$jscomp$14$$.$b$) {
    return $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $JSCompiler_StaticMethods_negate$$($other$jscomp$14$$)));
  }
  if (0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $goog$math$Integer$TWO_PWR_24_$$) && 0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($other$jscomp$14$$, $goog$math$Integer$TWO_PWR_24_$$)) {
    return $goog$math$Integer$fromNumber$$($JSCompiler_StaticMethods_toNumber$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$) * $JSCompiler_StaticMethods_toNumber$$($other$jscomp$14$$));
  }
  for (var $len$jscomp$3$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$.$c$.length + $other$jscomp$14$$.$c$.length, $arr$jscomp$64$$ = [], $i$jscomp$108$$ = 0; $i$jscomp$108$$ < 2 * $len$jscomp$3$$; $i$jscomp$108$$++) {
    $arr$jscomp$64$$[$i$jscomp$108$$] = 0;
  }
  for ($i$jscomp$108$$ = 0; $i$jscomp$108$$ < $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$.$c$.length; $i$jscomp$108$$++) {
    for (var $j$jscomp$8$$ = 0; $j$jscomp$8$$ < $other$jscomp$14$$.$c$.length; $j$jscomp$8$$++) {
      var $a1$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $i$jscomp$108$$) >>> 16, $a0$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $i$jscomp$108$$) & 65535, $b1$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($other$jscomp$14$$, $j$jscomp$8$$) >>> 16, $b0$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($other$jscomp$14$$, $j$jscomp$8$$) & 65535;
      $arr$jscomp$64$$[2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$] += $a0$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$64$$, 2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$);
      $arr$jscomp$64$$[2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$ + 1] += $a1$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$64$$, 2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$ + 1);
      $arr$jscomp$64$$[2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$ + 1] += $a0$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$64$$, 2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$ + 1);
      $arr$jscomp$64$$[2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$ + 2] += $a1$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$64$$, 2 * $i$jscomp$108$$ + 2 * $j$jscomp$8$$ + 2);
    }
  }
  for ($i$jscomp$108$$ = 0; $i$jscomp$108$$ < $len$jscomp$3$$; $i$jscomp$108$$++) {
    $arr$jscomp$64$$[$i$jscomp$108$$] = $arr$jscomp$64$$[2 * $i$jscomp$108$$ + 1] << 16 | $arr$jscomp$64$$[2 * $i$jscomp$108$$];
  }
  for ($i$jscomp$108$$ = $len$jscomp$3$$; $i$jscomp$108$$ < 2 * $len$jscomp$3$$; $i$jscomp$108$$++) {
    $arr$jscomp$64$$[$i$jscomp$108$$] = 0;
  }
  return new $goog$math$Integer$$($arr$jscomp$64$$, 0);
}, $goog$math$Integer$carry16_$$ = function $$goog$math$Integer$carry16_$$$($bits$jscomp$4$$, $index$jscomp$83$$) {
  for (; ($bits$jscomp$4$$[$index$jscomp$83$$] & 65535) != $bits$jscomp$4$$[$index$jscomp$83$$];) {
    $bits$jscomp$4$$[$index$jscomp$83$$ + 1] += $bits$jscomp$4$$[$index$jscomp$83$$] >>> 16, $bits$jscomp$4$$[$index$jscomp$83$$] &= 65535, $index$jscomp$83$$++;
  }
}, $goog$math$Integer$DivisionResult$$ = function $$goog$math$Integer$DivisionResult$$$($quotient$$, $remainder$jscomp$1$$) {
  this.$b$ = $quotient$$;
  this.$c$ = $remainder$jscomp$1$$;
}, $JSCompiler_StaticMethods_divideAndRemainder$$ = function $$JSCompiler_StaticMethods_divideAndRemainder$$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$) {
  if ($JSCompiler_StaticMethods_isZero$$($other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$)) {
    throw Error("division by zero");
  }
  if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$)) {
    return new $goog$math$Integer$DivisionResult$$($goog$math$Integer$ZERO$$, $goog$math$Integer$ZERO$$);
  }
  if (-1 == $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$.$b$) {
    return $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$ = $JSCompiler_StaticMethods_divideAndRemainder$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$), $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$), new $goog$math$Integer$DivisionResult$$($JSCompiler_StaticMethods_negate$$($other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$.$b$), $JSCompiler_StaticMethods_negate$$($other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$.$c$));
  }
  if (-1 == $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$.$b$) {
    return $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$ = $JSCompiler_StaticMethods_divideAndRemainder$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $JSCompiler_StaticMethods_negate$$($other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$)), new $goog$math$Integer$DivisionResult$$($JSCompiler_StaticMethods_negate$$($other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$.$b$), $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$.$c$);
  }
  if (30 < $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$.$c$.length) {
    if (-1 == $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$.$b$ || -1 == $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$.$b$) {
      throw Error("slowDivide_ only works with positive integers.");
    }
    for (var $approx_twoPower$jscomp$inline_380$$ = $goog$math$Integer$ONE$$, $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ = $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$; 0 >= $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($delta$jscomp$2_log2_multiple$jscomp$inline_381$$, $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$);) {
      $approx_twoPower$jscomp$inline_380$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($approx_twoPower$jscomp$inline_380$$, 1), $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($delta$jscomp$2_log2_multiple$jscomp$inline_381$$, 1);
    }
    var $res$jscomp$8_res$jscomp$inline_382$$ = $JSCompiler_StaticMethods_shiftRight$$($approx_twoPower$jscomp$inline_380$$, 1), $approxRes_total$jscomp$inline_383$$ = $JSCompiler_StaticMethods_shiftRight$$($delta$jscomp$2_log2_multiple$jscomp$inline_381$$, 1);
    $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ = $JSCompiler_StaticMethods_shiftRight$$($delta$jscomp$2_log2_multiple$jscomp$inline_381$$, 2);
    for ($approx_twoPower$jscomp$inline_380$$ = $JSCompiler_StaticMethods_shiftRight$$($approx_twoPower$jscomp$inline_380$$, 2); !$JSCompiler_StaticMethods_isZero$$($delta$jscomp$2_log2_multiple$jscomp$inline_381$$);) {
      var $approxRem_total2$jscomp$inline_384$$ = $approxRes_total$jscomp$inline_383$$.add($delta$jscomp$2_log2_multiple$jscomp$inline_381$$);
      0 >= $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($approxRem_total2$jscomp$inline_384$$, $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$) && ($res$jscomp$8_res$jscomp$inline_382$$ = $res$jscomp$8_res$jscomp$inline_382$$.add($approx_twoPower$jscomp$inline_380$$), $approxRes_total$jscomp$inline_383$$ = $approxRem_total2$jscomp$inline_384$$);
      $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ = $JSCompiler_StaticMethods_shiftRight$$($delta$jscomp$2_log2_multiple$jscomp$inline_381$$, 1);
      $approx_twoPower$jscomp$inline_380$$ = $JSCompiler_StaticMethods_shiftRight$$($approx_twoPower$jscomp$inline_380$$, 1);
    }
    $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($res$jscomp$8_res$jscomp$inline_382$$, $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$));
    return new $goog$math$Integer$DivisionResult$$($res$jscomp$8_res$jscomp$inline_382$$, $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$);
  }
  for ($res$jscomp$8_res$jscomp$inline_382$$ = $goog$math$Integer$ZERO$$; 0 <= $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$);) {
    $approx_twoPower$jscomp$inline_380$$ = Math.max(1, Math.floor($JSCompiler_StaticMethods_toNumber$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$) / $JSCompiler_StaticMethods_toNumber$$($other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$)));
    $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ = Math.ceil(Math.log($approx_twoPower$jscomp$inline_380$$) / Math.LN2);
    $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ = 48 >= $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ ? 1 : Math.pow(2, $delta$jscomp$2_log2_multiple$jscomp$inline_381$$ - 48);
    $approxRes_total$jscomp$inline_383$$ = $goog$math$Integer$fromNumber$$($approx_twoPower$jscomp$inline_380$$);
    for ($approxRem_total2$jscomp$inline_384$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($approxRes_total$jscomp$inline_383$$, $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$); -1 == $approxRem_total2$jscomp$inline_384$$.$b$ || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($approxRem_total2$jscomp$inline_384$$, $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$);) {
      $approx_twoPower$jscomp$inline_380$$ -= $delta$jscomp$2_log2_multiple$jscomp$inline_381$$, $approxRes_total$jscomp$inline_383$$ = $goog$math$Integer$fromNumber$$($approx_twoPower$jscomp$inline_380$$), $approxRem_total2$jscomp$inline_384$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($approxRes_total$jscomp$inline_383$$, $other$jscomp$17_remainder$jscomp$inline_385_result$jscomp$23$$);
    }
    $JSCompiler_StaticMethods_isZero$$($approxRes_total$jscomp$inline_383$$) && ($approxRes_total$jscomp$inline_383$$ = $goog$math$Integer$ONE$$);
    $res$jscomp$8_res$jscomp$inline_382$$ = $res$jscomp$8_res$jscomp$inline_382$$.add($approxRes_total$jscomp$inline_383$$);
    $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $approxRem_total2$jscomp$inline_384$$);
  }
  return new $goog$math$Integer$DivisionResult$$($res$jscomp$8_res$jscomp$inline_382$$, $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$);
};
$goog$math$Integer$$.prototype.and = function $$goog$math$Integer$$$$and$($other$jscomp$19$$) {
  for (var $len$jscomp$5$$ = Math.max(this.$c$.length, $other$jscomp$19$$.$c$.length), $arr$jscomp$66$$ = [], $i$jscomp$110$$ = 0; $i$jscomp$110$$ < $len$jscomp$5$$; $i$jscomp$110$$++) {
    $arr$jscomp$66$$[$i$jscomp$110$$] = $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$110$$) & $JSCompiler_StaticMethods_getBits$$($other$jscomp$19$$, $i$jscomp$110$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$66$$, this.$b$ & $other$jscomp$19$$.$b$);
};
$goog$math$Integer$$.prototype.or = function $$goog$math$Integer$$$$or$($other$jscomp$20$$) {
  for (var $len$jscomp$6$$ = Math.max(this.$c$.length, $other$jscomp$20$$.$c$.length), $arr$jscomp$67$$ = [], $i$jscomp$111$$ = 0; $i$jscomp$111$$ < $len$jscomp$6$$; $i$jscomp$111$$++) {
    $arr$jscomp$67$$[$i$jscomp$111$$] = $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$111$$) | $JSCompiler_StaticMethods_getBits$$($other$jscomp$20$$, $i$jscomp$111$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$67$$, this.$b$ | $other$jscomp$20$$.$b$);
};
$goog$math$Integer$$.prototype.xor = function $$goog$math$Integer$$$$xor$($other$jscomp$21$$) {
  for (var $len$jscomp$7$$ = Math.max(this.$c$.length, $other$jscomp$21$$.$c$.length), $arr$jscomp$68$$ = [], $i$jscomp$112$$ = 0; $i$jscomp$112$$ < $len$jscomp$7$$; $i$jscomp$112$$++) {
    $arr$jscomp$68$$[$i$jscomp$112$$] = $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$112$$) ^ $JSCompiler_StaticMethods_getBits$$($other$jscomp$21$$, $i$jscomp$112$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$68$$, this.$b$ ^ $other$jscomp$21$$.$b$);
};
var $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$ = function $$JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, $bit_delta_numBits$jscomp$1$$) {
  var $arr_delta$$ = $bit_delta_numBits$jscomp$1$$ >> 5;
  $bit_delta_numBits$jscomp$1$$ %= 32;
  for (var $len$jscomp$8$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$.$c$.length + $arr_delta$$ + (0 < $bit_delta_numBits$jscomp$1$$ ? 1 : 0), $arr$jscomp$69$$ = [], $i$jscomp$113$$ = 0; $i$jscomp$113$$ < $len$jscomp$8$$; $i$jscomp$113$$++) {
    $arr$jscomp$69$$[$i$jscomp$113$$] = 0 < $bit_delta_numBits$jscomp$1$$ ? $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, $i$jscomp$113$$ - $arr_delta$$) << $bit_delta_numBits$jscomp$1$$ | $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, $i$jscomp$113$$ - $arr_delta$$ - 1) >>> 32 - $bit_delta_numBits$jscomp$1$$ : $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, 
    $i$jscomp$113$$ - $arr_delta$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$69$$, $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$.$b$);
}, $JSCompiler_StaticMethods_shiftRight$$ = function $$JSCompiler_StaticMethods_shiftRight$$$($JSCompiler_StaticMethods_shiftRight$self$$, $bit_delta$jscomp$1_numBits$jscomp$2$$) {
  var $arr_delta$jscomp$1$$ = $bit_delta$jscomp$1_numBits$jscomp$2$$ >> 5;
  $bit_delta$jscomp$1_numBits$jscomp$2$$ %= 32;
  for (var $len$jscomp$9$$ = $JSCompiler_StaticMethods_shiftRight$self$$.$c$.length - $arr_delta$jscomp$1$$, $arr$jscomp$70$$ = [], $i$jscomp$114$$ = 0; $i$jscomp$114$$ < $len$jscomp$9$$; $i$jscomp$114$$++) {
    $arr$jscomp$70$$[$i$jscomp$114$$] = 0 < $bit_delta$jscomp$1_numBits$jscomp$2$$ ? $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_shiftRight$self$$, $i$jscomp$114$$ + $arr_delta$jscomp$1$$) >>> $bit_delta$jscomp$1_numBits$jscomp$2$$ | $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_shiftRight$self$$, $i$jscomp$114$$ + $arr_delta$jscomp$1$$ + 1) << 32 - $bit_delta$jscomp$1_numBits$jscomp$2$$ : $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_shiftRight$self$$, 
    $i$jscomp$114$$ + $arr_delta$jscomp$1$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$70$$, $JSCompiler_StaticMethods_shiftRight$self$$.$b$);
};
var $goog$net$IpAddress$$ = function $$goog$net$IpAddress$$$($address$jscomp$11$$) {
  this.$b$ = $address$jscomp$11$$;
}, $goog$net$IpAddress$fromString$$ = function $$goog$net$IpAddress$fromString$$$($address$jscomp$12$$) {
  try {
    return -1 != $address$jscomp$12$$.indexOf(":") ? new $goog$net$Ipv6Address$$($address$jscomp$12$$) : new $goog$net$Ipv4Address$$($address$jscomp$12$$);
  } catch ($e$jscomp$28$$) {
    return null;
  }
}, $goog$net$Ipv4Address$$ = function $$goog$net$Ipv4Address$$$($address$jscomp$14$$) {
  this.$c$ = null;
  var $ip$$ = $goog$math$Integer$ZERO$$;
  if ($address$jscomp$14$$ instanceof $goog$math$Integer$$) {
    if (0 != $address$jscomp$14$$.$b$ || 0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$14$$, $goog$math$Integer$ZERO$$) || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$14$$, $goog$net$Ipv4Address$MAX_ADDRESS_$$)) {
      throw Error("The address does not look like an IPv4.");
    }
    $ip$$ = $goog$object$clone$$($address$jscomp$14$$);
  } else {
    if (!$goog$net$Ipv4Address$REGEX_$$.test($address$jscomp$14$$)) {
      throw Error($address$jscomp$14$$ + " does not look like an IPv4 address.");
    }
    var $octets$$ = $address$jscomp$14$$.split(".");
    if (4 != $octets$$.length) {
      throw Error($address$jscomp$14$$ + " does not look like an IPv4 address.");
    }
    for (var $i$jscomp$115$$ = 0; $i$jscomp$115$$ < $octets$$.length; $i$jscomp$115$$++) {
      var $intOctet_parsedOctet_str$jscomp$inline_387$$ = $octets$$[$i$jscomp$115$$];
      var $num$jscomp$inline_388$$ = Number($intOctet_parsedOctet_str$jscomp$inline_387$$);
      $intOctet_parsedOctet_str$jscomp$inline_387$$ = 0 == $num$jscomp$inline_388$$ && /^[\s\xa0]*$/.test($intOctet_parsedOctet_str$jscomp$inline_387$$) ? NaN : $num$jscomp$inline_388$$;
      if (isNaN($intOctet_parsedOctet_str$jscomp$inline_387$$) || 0 > $intOctet_parsedOctet_str$jscomp$inline_387$$ || 255 < $intOctet_parsedOctet_str$jscomp$inline_387$$ || 1 != $octets$$[$i$jscomp$115$$].length && 0 == $octets$$[$i$jscomp$115$$].lastIndexOf("0", 0)) {
        throw Error("In " + $address$jscomp$14$$ + ", octet " + $i$jscomp$115$$ + " is not valid");
      }
      $intOctet_parsedOctet_str$jscomp$inline_387$$ = $goog$math$Integer$fromNumber$$($intOctet_parsedOctet_str$jscomp$inline_387$$);
      $ip$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($ip$$, 8).or($intOctet_parsedOctet_str$jscomp$inline_387$$);
    }
  }
  this.$b$ = $ip$$;
};
$goog$inherits$$($goog$net$Ipv4Address$$, $goog$net$IpAddress$$);
var $goog$net$Ipv4Address$REGEX_$$ = /^[0-9.]*$/, $goog$net$Ipv4Address$MAX_ADDRESS_$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($goog$math$Integer$ONE$$, 32), $goog$math$Integer$ONE$$);
$goog$net$Ipv4Address$$.prototype.toString = function $$goog$net$Ipv4Address$$$$toString$() {
  if (this.$c$) {
    return this.$c$;
  }
  for (var $ip$jscomp$1$$ = $JSCompiler_StaticMethods_getBitsUnsigned$$(this.$b$, 0), $octets$jscomp$1$$ = [], $i$jscomp$116$$ = 3; 0 <= $i$jscomp$116$$; $i$jscomp$116$$--) {
    $octets$jscomp$1$$[$i$jscomp$116$$] = String($ip$jscomp$1$$ & 255), $ip$jscomp$1$$ >>>= 8;
  }
  return this.$c$ = $octets$jscomp$1$$.join(".");
};
var $goog$net$Ipv6Address$$ = function $$goog$net$Ipv6Address$$$($address$jscomp$15_bits$jscomp$inline_394$$) {
  this.$c$ = null;
  var $ip$jscomp$2$$ = $goog$math$Integer$ZERO$$;
  if ($address$jscomp$15_bits$jscomp$inline_394$$ instanceof $goog$math$Integer$$) {
    if (0 != $address$jscomp$15_bits$jscomp$inline_394$$.$b$ || 0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$15_bits$jscomp$inline_394$$, $goog$math$Integer$ZERO$$) || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$15_bits$jscomp$inline_394$$, $goog$net$Ipv6Address$MAX_ADDRESS_$$)) {
      throw Error("The address does not look like a valid IPv6.");
    }
    $ip$jscomp$2$$ = $goog$object$clone$$($address$jscomp$15_bits$jscomp$inline_394$$);
  } else {
    if (!$goog$net$Ipv6Address$REGEX_$$.test($address$jscomp$15_bits$jscomp$inline_394$$)) {
      throw Error($address$jscomp$15_bits$jscomp$inline_394$$ + " is not a valid IPv6 address.");
    }
    var $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$ = $address$jscomp$15_bits$jscomp$inline_394$$.split(":");
    if (-1 != $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$[$JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length - 1].indexOf(".")) {
      $address$jscomp$15_bits$jscomp$inline_394$$ = $JSCompiler_StaticMethods_getBitsUnsigned$$($goog$object$clone$$((new $goog$net$Ipv4Address$$($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$[$JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length - 1])).$b$), 0);
      var $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$ = [];
      $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$.push(($address$jscomp$15_bits$jscomp$inline_394$$ >>> 16 & 65535).toString(16));
      $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$.push(($address$jscomp$15_bits$jscomp$inline_394$$ & 65535).toString(16));
      $goog$array$removeAt$$($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$, $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length - 1);
      $goog$array$extend$$($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$, $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$);
      $address$jscomp$15_bits$jscomp$inline_394$$ = $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.join(":");
    }
    $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$ = $address$jscomp$15_bits$jscomp$inline_394$$.split("::");
    if (2 < $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$.length || 1 == $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$.length && 8 != $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length) {
      throw Error($address$jscomp$15_bits$jscomp$inline_394$$ + " is not a valid IPv6 address.");
    }
    if (1 < $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$.length) {
      $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$ = $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$[0].split(":");
      $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$ = $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$[1].split(":");
      1 == $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length && "" == $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$[0] && ($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$ = []);
      1 == $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$.length && "" == $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$[0] && ($hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$ = []);
      var $gap$jscomp$inline_400_parsedHextet$$ = 8 - ($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length + $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$.length);
      if (1 > $gap$jscomp$inline_400_parsedHextet$$) {
        $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$ = [];
      } else {
        for (var $array$jscomp$inline_1007$$ = [], $i$jscomp$inline_1008$$ = 0; $i$jscomp$inline_1008$$ < $gap$jscomp$inline_400_parsedHextet$$; $i$jscomp$inline_1008$$++) {
          $array$jscomp$inline_1007$$[$i$jscomp$inline_1008$$] = "0";
        }
        $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$ = $goog$array$join$$($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$, $array$jscomp$inline_1007$$, $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$);
      }
    }
    if (8 != $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length) {
      throw Error($address$jscomp$15_bits$jscomp$inline_394$$ + " is not a valid IPv6 address");
    }
    for ($hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$ = 0; $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$ < $JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$.length; $hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$++) {
      $gap$jscomp$inline_400_parsedHextet$$ = $goog$math$Integer$fromString$$($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$[$hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$], 16);
      if (0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($gap$jscomp$inline_400_parsedHextet$$, $goog$math$Integer$ZERO$$) || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($gap$jscomp$inline_400_parsedHextet$$, $goog$net$Ipv6Address$MAX_HEXTET_VALUE_$$)) {
        throw Error($JSCompiler_temp$jscomp$30_JSCompiler_temp$jscomp$952_basePart$jscomp$inline_398_ipArr_splitColon$$[$hextets$jscomp$inline_395_i$jscomp$117_secondPart$jscomp$inline_399_splitDoubleColon$$] + " in " + $address$jscomp$15_bits$jscomp$inline_394$$ + " is not a valid hextet.");
      }
      $ip$jscomp$2$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($ip$jscomp$2$$, 16).or($gap$jscomp$inline_400_parsedHextet$$);
    }
  }
  this.$b$ = $ip$jscomp$2$$;
};
$goog$inherits$$($goog$net$Ipv6Address$$, $goog$net$IpAddress$$);
var $goog$net$Ipv6Address$REGEX_$$ = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/, $goog$net$Ipv6Address$MAX_HEXTET_VALUE_$$ = $goog$math$Integer$fromInt$$(65535), $goog$net$Ipv6Address$MAX_ADDRESS_$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($goog$math$Integer$ONE$$, 128), $goog$math$Integer$ONE$$);
$goog$net$Ipv6Address$$.prototype.toString = function $$goog$net$Ipv6Address$$$$toString$() {
  if (this.$c$) {
    return this.$c$;
  }
  for (var $hextets$jscomp$inline_405_outputArr$$ = [], $bestStart$jscomp$inline_406_i$jscomp$118$$ = 3; 0 <= $bestStart$jscomp$inline_406_i$jscomp$118$$; $bestStart$jscomp$inline_406_i$jscomp$118$$--) {
    var $bits$jscomp$5_start$jscomp$inline_407$$ = $JSCompiler_StaticMethods_getBitsUnsigned$$(this.$b$, $bestStart$jscomp$inline_406_i$jscomp$118$$), $bestSize$jscomp$inline_408_secondHextet$$ = $bits$jscomp$5_start$jscomp$inline_407$$ & 65535;
    $hextets$jscomp$inline_405_outputArr$$.push(($bits$jscomp$5_start$jscomp$inline_407$$ >>> 16).toString(16));
    $hextets$jscomp$inline_405_outputArr$$.push($bestSize$jscomp$inline_408_secondHextet$$.toString(16));
  }
  $bits$jscomp$5_start$jscomp$inline_407$$ = $bestStart$jscomp$inline_406_i$jscomp$118$$ = -1;
  for (var $size$jscomp$inline_409$$ = $bestSize$jscomp$inline_408_secondHextet$$ = 0, $i$jscomp$inline_410$$ = 0; $i$jscomp$inline_410$$ < $hextets$jscomp$inline_405_outputArr$$.length; $i$jscomp$inline_410$$++) {
    "0" == $hextets$jscomp$inline_405_outputArr$$[$i$jscomp$inline_410$$] ? ($size$jscomp$inline_409$$++, -1 == $bits$jscomp$5_start$jscomp$inline_407$$ && ($bits$jscomp$5_start$jscomp$inline_407$$ = $i$jscomp$inline_410$$), $size$jscomp$inline_409$$ > $bestSize$jscomp$inline_408_secondHextet$$ && ($bestSize$jscomp$inline_408_secondHextet$$ = $size$jscomp$inline_409$$, $bestStart$jscomp$inline_406_i$jscomp$118$$ = $bits$jscomp$5_start$jscomp$inline_407$$)) : ($bits$jscomp$5_start$jscomp$inline_407$$ = 
    -1, $size$jscomp$inline_409$$ = 0);
  }
  0 < $bestSize$jscomp$inline_408_secondHextet$$ && ($bestStart$jscomp$inline_406_i$jscomp$118$$ + $bestSize$jscomp$inline_408_secondHextet$$ == $hextets$jscomp$inline_405_outputArr$$.length && $hextets$jscomp$inline_405_outputArr$$.push(""), $hextets$jscomp$inline_405_outputArr$$.splice($bestStart$jscomp$inline_406_i$jscomp$118$$, $bestSize$jscomp$inline_408_secondHextet$$, ""), 0 == $bestStart$jscomp$inline_406_i$jscomp$118$$ && ($hextets$jscomp$inline_405_outputArr$$ = [""].concat($hextets$jscomp$inline_405_outputArr$$)));
  return this.$c$ = $hextets$jscomp$inline_405_outputArr$$.join(":");
};
var $goog$iter$StopIteration$$ = "StopIteration" in $goog$global$$ ? $goog$global$$.StopIteration : {message:"StopIteration", stack:""}, $goog$iter$Iterator$$ = function $$goog$iter$Iterator$$$() {
};
$goog$iter$Iterator$$.prototype.next = function $$goog$iter$Iterator$$$$next$() {
  throw $goog$iter$StopIteration$$;
};
$goog$iter$Iterator$$.prototype.$__iterator__$ = function $$goog$iter$Iterator$$$$$__iterator__$$() {
  return this;
};
var $goog$iter$toIterator$$ = function $$goog$iter$toIterator$$$($iterable$jscomp$3$$) {
  if ($iterable$jscomp$3$$ instanceof $goog$iter$Iterator$$) {
    return $iterable$jscomp$3$$;
  }
  if ("function" == typeof $iterable$jscomp$3$$.$__iterator__$) {
    return $iterable$jscomp$3$$.$__iterator__$(!1);
  }
  if ($goog$isArrayLike$$($iterable$jscomp$3$$)) {
    var $i$jscomp$121$$ = 0, $newIter$$ = new $goog$iter$Iterator$$;
    $newIter$$.next = function $$newIter$$$next$() {
      for (;;) {
        if ($i$jscomp$121$$ >= $iterable$jscomp$3$$.length) {
          throw $goog$iter$StopIteration$$;
        }
        if ($i$jscomp$121$$ in $iterable$jscomp$3$$) {
          return $iterable$jscomp$3$$[$i$jscomp$121$$++];
        }
        $i$jscomp$121$$++;
      }
    };
    return $newIter$$;
  }
  throw Error("Not implemented");
}, $goog$iter$forEach$$ = function $$goog$iter$forEach$$$($iterable$jscomp$4$$, $f$jscomp$39$$) {
  if ($goog$isArrayLike$$($iterable$jscomp$4$$)) {
    try {
      $goog$array$forEach$$($iterable$jscomp$4$$, $f$jscomp$39$$, void 0);
    } catch ($ex$jscomp$2$$) {
      if ($ex$jscomp$2$$ !== $goog$iter$StopIteration$$) {
        throw $ex$jscomp$2$$;
      }
    }
  } else {
    $iterable$jscomp$4$$ = $goog$iter$toIterator$$($iterable$jscomp$4$$);
    try {
      for (;;) {
        $f$jscomp$39$$.call(void 0, $iterable$jscomp$4$$.next(), void 0, $iterable$jscomp$4$$);
      }
    } catch ($ex$3$$) {
      if ($ex$3$$ !== $goog$iter$StopIteration$$) {
        throw $ex$3$$;
      }
    }
  }
}, $goog$iter$reduce$$ = function $$goog$iter$reduce$$$($iterable$jscomp$9$$, $f$jscomp$43$$) {
  var $rval$jscomp$2$$ = null;
  $goog$iter$forEach$$($iterable$jscomp$9$$, function($val$jscomp$34$$) {
    $rval$jscomp$2$$ = $f$jscomp$43$$.call(void 0, $rval$jscomp$2$$, $val$jscomp$34$$);
  });
  return $rval$jscomp$2$$;
}, $goog$iter$every$$ = function $$goog$iter$every$$$($iterable$jscomp$11$$, $f$jscomp$45$$) {
  $iterable$jscomp$11$$ = $goog$iter$toIterator$$($iterable$jscomp$11$$);
  try {
    for (;;) {
      if (!$f$jscomp$45$$.call(void 0, $iterable$jscomp$11$$.next(), void 0, $iterable$jscomp$11$$)) {
        return !1;
      }
    }
  } catch ($ex$jscomp$4$$) {
    if ($ex$jscomp$4$$ !== $goog$iter$StopIteration$$) {
      throw $ex$jscomp$4$$;
    }
  }
  return !0;
};
var $goog$structs$Map$$ = function $$goog$structs$Map$$$($opt_map$$, $var_args$jscomp$96$$) {
  this.$f$ = {};
  this.$c$ = [];
  this.$g$ = this.$b$ = 0;
  var $argLength$jscomp$2_keys$jscomp$inline_414$$ = arguments.length;
  if (1 < $argLength$jscomp$2_keys$jscomp$inline_414$$) {
    if ($argLength$jscomp$2_keys$jscomp$inline_414$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$ = 0; $i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$ < $argLength$jscomp$2_keys$jscomp$inline_414$$; $i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$ += 2) {
      this.set(arguments[$i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$], arguments[$i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      if ($opt_map$$ instanceof $goog$structs$Map$$) {
        for ($argLength$jscomp$2_keys$jscomp$inline_414$$ = $opt_map$$.$getKeys$(), $i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$ = 0; $i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$ < $argLength$jscomp$2_keys$jscomp$inline_414$$.length; $i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$++) {
          this.set($argLength$jscomp$2_keys$jscomp$inline_414$$[$i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$], $opt_map$$.get($argLength$jscomp$2_keys$jscomp$inline_414$$[$i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$]));
        }
      } else {
        for ($i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$ in $opt_map$$) {
          this.set($i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$, $opt_map$$[$i$jscomp$123_i$jscomp$inline_415_key$jscomp$inline_416$$]);
        }
      }
    }
  }
};
$goog$structs$Map$$.prototype.$getValues$ = function $$goog$structs$Map$$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$jscomp$9$$ = [], $i$jscomp$124$$ = 0; $i$jscomp$124$$ < this.$c$.length; $i$jscomp$124$$++) {
    $rv$jscomp$9$$.push(this.$f$[this.$c$[$i$jscomp$124$$]]);
  }
  return $rv$jscomp$9$$;
};
$goog$structs$Map$$.prototype.$getKeys$ = function $$goog$structs$Map$$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$c$.concat();
};
var $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$ = function $$JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$$($JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$self$$, $key$jscomp$82$$) {
  return $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$self$$.$f$, $key$jscomp$82$$);
};
$goog$structs$Map$$.prototype.clear = function $$goog$structs$Map$$$$clear$() {
  this.$f$ = {};
  this.$g$ = this.$b$ = this.$c$.length = 0;
};
$goog$structs$Map$$.prototype.remove = function $$goog$structs$Map$$$$remove$($key$jscomp$85$$) {
  return $goog$structs$Map$hasKey_$$(this.$f$, $key$jscomp$85$$) ? (delete this.$f$[$key$jscomp$85$$], this.$b$--, this.$g$++, this.$c$.length > 2 * this.$b$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), !0) : !1;
};
var $JSCompiler_StaticMethods_cleanupKeysArray_$$ = function $$JSCompiler_StaticMethods_cleanupKeysArray_$$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$.length) {
    for (var $srcIndex$$ = 0, $destIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$.length;) {
      var $key$jscomp$86$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$f$, $key$jscomp$86$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$[$destIndex$$++] = $key$jscomp$86$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$.length) {
    var $seen$jscomp$2$$ = {};
    for ($destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$.length;) {
      $key$jscomp$86$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$jscomp$2$$, $key$jscomp$86$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$[$destIndex$$++] = $key$jscomp$86$$, $seen$jscomp$2$$[$key$jscomp$86$$] = 1), $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$.length = $destIndex$$;
  }
};
$goog$structs$Map$$.prototype.get = function $$goog$structs$Map$$$$get$($key$jscomp$87$$, $opt_val$jscomp$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$f$, $key$jscomp$87$$) ? this.$f$[$key$jscomp$87$$] : $opt_val$jscomp$1$$;
};
$goog$structs$Map$$.prototype.set = function $$goog$structs$Map$$$$set$($key$jscomp$88$$, $value$jscomp$144$$) {
  $goog$structs$Map$hasKey_$$(this.$f$, $key$jscomp$88$$) || (this.$b$++, this.$c$.push($key$jscomp$88$$), this.$g$++);
  this.$f$[$key$jscomp$88$$] = $value$jscomp$144$$;
};
$goog$structs$Map$$.prototype.forEach = function $$goog$structs$Map$$$$forEach$($f$jscomp$49$$, $opt_obj$jscomp$43$$) {
  for (var $keys$jscomp$4$$ = this.$getKeys$(), $i$jscomp$128$$ = 0; $i$jscomp$128$$ < $keys$jscomp$4$$.length; $i$jscomp$128$$++) {
    var $key$jscomp$90$$ = $keys$jscomp$4$$[$i$jscomp$128$$], $value$jscomp$145$$ = this.get($key$jscomp$90$$);
    $f$jscomp$49$$.call($opt_obj$jscomp$43$$, $value$jscomp$145$$, $key$jscomp$90$$, this);
  }
};
$goog$structs$Map$$.prototype.$__iterator__$ = function $$goog$structs$Map$$$$$__iterator__$$($opt_keys$jscomp$1$$) {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  var $i$jscomp$131$$ = 0, $version$jscomp$12$$ = this.$g$, $selfObj$jscomp$5$$ = this, $newIter$jscomp$5$$ = new $goog$iter$Iterator$$;
  $newIter$jscomp$5$$.next = function $$newIter$jscomp$5$$$next$() {
    if ($version$jscomp$12$$ != $selfObj$jscomp$5$$.$g$) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$jscomp$131$$ >= $selfObj$jscomp$5$$.$c$.length) {
      throw $goog$iter$StopIteration$$;
    }
    var $key$jscomp$93$$ = $selfObj$jscomp$5$$.$c$[$i$jscomp$131$$++];
    return $opt_keys$jscomp$1$$ ? $key$jscomp$93$$ : $selfObj$jscomp$5$$.$f$[$key$jscomp$93$$];
  };
  return $newIter$jscomp$5$$;
};
var $goog$structs$Map$hasKey_$$ = function $$goog$structs$Map$hasKey_$$$($obj$jscomp$85$$, $key$jscomp$94$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$85$$, $key$jscomp$94$$);
};
var $goog$structs$getValues$$ = function $$goog$structs$getValues$$$($col$jscomp$1$$) {
  if ($col$jscomp$1$$.$getValues$ && "function" == typeof $col$jscomp$1$$.$getValues$) {
    return $col$jscomp$1$$.$getValues$();
  }
  if ($goog$isString$$($col$jscomp$1$$)) {
    return $col$jscomp$1$$.split("");
  }
  if ($goog$isArrayLike$$($col$jscomp$1$$)) {
    for (var $rv$jscomp$10$$ = [], $l$jscomp$12$$ = $col$jscomp$1$$.length, $i$jscomp$132$$ = 0; $i$jscomp$132$$ < $l$jscomp$12$$; $i$jscomp$132$$++) {
      $rv$jscomp$10$$.push($col$jscomp$1$$[$i$jscomp$132$$]);
    }
    return $rv$jscomp$10$$;
  }
  return $goog$object$getValues$$($col$jscomp$1$$);
}, $goog$structs$forEach$$ = function $$goog$structs$forEach$$$($col$jscomp$6$$, $f$jscomp$50$$) {
  if ($col$jscomp$6$$.forEach && "function" == typeof $col$jscomp$6$$.forEach) {
    $col$jscomp$6$$.forEach($f$jscomp$50$$, void 0);
  } else {
    if ($goog$isArrayLike$$($col$jscomp$6$$) || $goog$isString$$($col$jscomp$6$$)) {
      $goog$array$forEach$$($col$jscomp$6$$, $f$jscomp$50$$, void 0);
    } else {
      if ($col$jscomp$6$$.$getKeys$ && "function" == typeof $col$jscomp$6$$.$getKeys$) {
        var $keys$jscomp$5_rv$jscomp$inline_419$$ = $col$jscomp$6$$.$getKeys$();
      } else {
        if ($col$jscomp$6$$.$getValues$ && "function" == typeof $col$jscomp$6$$.$getValues$) {
          $keys$jscomp$5_rv$jscomp$inline_419$$ = void 0;
        } else {
          if ($goog$isArrayLike$$($col$jscomp$6$$) || $goog$isString$$($col$jscomp$6$$)) {
            $keys$jscomp$5_rv$jscomp$inline_419$$ = [];
            for (var $l$jscomp$inline_420_values$jscomp$11$$ = $col$jscomp$6$$.length, $i$jscomp$inline_421_l$jscomp$14$$ = 0; $i$jscomp$inline_421_l$jscomp$14$$ < $l$jscomp$inline_420_values$jscomp$11$$; $i$jscomp$inline_421_l$jscomp$14$$++) {
              $keys$jscomp$5_rv$jscomp$inline_419$$.push($i$jscomp$inline_421_l$jscomp$14$$);
            }
          } else {
            $keys$jscomp$5_rv$jscomp$inline_419$$ = $goog$object$getKeys$$($col$jscomp$6$$);
          }
        }
      }
      $l$jscomp$inline_420_values$jscomp$11$$ = $goog$structs$getValues$$($col$jscomp$6$$);
      $i$jscomp$inline_421_l$jscomp$14$$ = $l$jscomp$inline_420_values$jscomp$11$$.length;
      for (var $i$jscomp$134$$ = 0; $i$jscomp$134$$ < $i$jscomp$inline_421_l$jscomp$14$$; $i$jscomp$134$$++) {
        $f$jscomp$50$$.call(void 0, $l$jscomp$inline_420_values$jscomp$11$$[$i$jscomp$134$$], $keys$jscomp$5_rv$jscomp$inline_419$$ && $keys$jscomp$5_rv$jscomp$inline_419$$[$i$jscomp$134$$], $col$jscomp$6$$);
      }
    }
  }
};
var $goog$uri$utils$splitRe_$$ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, $goog$uri$utils$parseQueryData$$ = function $$goog$uri$utils$parseQueryData$$$($encodedQuery_pairs$jscomp$2$$, $callback$jscomp$349$$) {
  if ($encodedQuery_pairs$jscomp$2$$) {
    $encodedQuery_pairs$jscomp$2$$ = $encodedQuery_pairs$jscomp$2$$.split("&");
    for (var $i$jscomp$139$$ = 0; $i$jscomp$139$$ < $encodedQuery_pairs$jscomp$2$$.length; $i$jscomp$139$$++) {
      var $indexOfEquals$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$139$$].indexOf("="), $value$jscomp$147$$ = null;
      if (0 <= $indexOfEquals$$) {
        var $name$jscomp$95$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$139$$].substring(0, $indexOfEquals$$);
        $value$jscomp$147$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$139$$].substring($indexOfEquals$$ + 1);
      } else {
        $name$jscomp$95$$ = $encodedQuery_pairs$jscomp$2$$[$i$jscomp$139$$];
      }
      $callback$jscomp$349$$($name$jscomp$95$$, $value$jscomp$147$$ ? decodeURIComponent($value$jscomp$147$$.replace(/\+/g, " ")) : "");
    }
  }
};
var $goog$Uri$$ = function $$goog$Uri$$$($opt_uri$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$) {
  this.$g$ = this.$l$ = this.$f$ = "";
  this.$i$ = null;
  this.$h$ = this.$c$ = "";
  this.$b$ = !1;
  if ($opt_uri$$ instanceof $goog$Uri$$) {
    this.$b$ = $goog$isDef$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$) ? $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$ : $opt_uri$$.$b$;
    $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$f$);
    this.$l$ = $opt_uri$$.$l$;
    this.$g$ = $opt_uri$$.$g$;
    $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$i$);
    this.$c$ = $opt_uri$$.$c$;
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$ = $opt_uri$$.$j$;
    var $m_rv$jscomp$inline_428$$ = new $goog$Uri$QueryData$$;
    $m_rv$jscomp$inline_428$$.$f$ = $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$.$f$;
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$.$b$ && ($m_rv$jscomp$inline_428$$.$b$ = new $goog$structs$Map$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$.$b$), $m_rv$jscomp$inline_428$$.$c$ = $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$.$c$);
    $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_428$$);
    this.$h$ = $opt_uri$$.$h$;
  } else {
    $opt_uri$$ && ($m_rv$jscomp$inline_428$$ = String($opt_uri$$).match($goog$uri$utils$splitRe_$$)) ? (this.$b$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$, $JSCompiler_StaticMethods_setScheme$$(this, $m_rv$jscomp$inline_428$$[1] || "", !0), this.$l$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_428$$[2] || ""), this.$g$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_428$$[3] || "", !0), $JSCompiler_StaticMethods_setPort$$(this, $m_rv$jscomp$inline_428$$[4]), 
    this.$c$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_428$$[5] || "", !0), $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_428$$[6] || "", !0), this.$h$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_428$$[7] || "")) : (this.$b$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_427_opt_ignoreCase$$, this.$j$ = new $goog$Uri$QueryData$$(null, this.$b$));
  }
};
$goog$Uri$$.prototype.toString = function $$goog$Uri$$$$toString$() {
  var $out$jscomp$1$$ = [], $scheme$jscomp$4_userInfo$$ = this.$f$;
  $scheme$jscomp$4_userInfo$$ && $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$4_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), ":");
  var $domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$ = this.$g$;
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$ || "file" == $scheme$jscomp$4_userInfo$$) {
    $out$jscomp$1$$.push("//"), ($scheme$jscomp$4_userInfo$$ = this.$l$) && $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$4_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), "@"), $out$jscomp$1$$.push(encodeURIComponent(String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$ = this.$i$, null != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$ && 
    $out$jscomp$1$$.push(":", String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$));
  }
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$ = this.$c$) {
    this.$g$ && "/" != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$.charAt(0) && $out$jscomp$1$$.push("/"), $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$, "/" == $domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$, !0));
  }
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$ = this.$j$.toString()) && $out$jscomp$1$$.push("?", $domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$);
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$ = this.$h$) && $out$jscomp$1$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$28_port$jscomp$7_query$jscomp$16$$, $goog$Uri$reDisallowedInFragment_$$));
  return $out$jscomp$1$$.join("");
};
var $JSCompiler_StaticMethods_setScheme$$ = function $$JSCompiler_StaticMethods_setScheme$$$($JSCompiler_StaticMethods_setScheme$self$$, $newScheme$$, $opt_decode$$) {
  $JSCompiler_StaticMethods_setScheme$self$$.$f$ = $opt_decode$$ ? $goog$Uri$decodeOrEmpty_$$($newScheme$$, !0) : $newScheme$$;
  $JSCompiler_StaticMethods_setScheme$self$$.$f$ && ($JSCompiler_StaticMethods_setScheme$self$$.$f$ = $JSCompiler_StaticMethods_setScheme$self$$.$f$.replace(/:$/, ""));
}, $JSCompiler_StaticMethods_setPort$$ = function $$JSCompiler_StaticMethods_setPort$$$($JSCompiler_StaticMethods_setPort$self$$, $newPort$$) {
  if ($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if (isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    $JSCompiler_StaticMethods_setPort$self$$.$i$ = $newPort$$;
  } else {
    $JSCompiler_StaticMethods_setPort$self$$.$i$ = null;
  }
}, $JSCompiler_StaticMethods_setQueryData$$ = function $$JSCompiler_StaticMethods_setQueryData$$$($JSCompiler_StaticMethods_setQueryData$self$$, $queryData$jscomp$6$$, $opt_decode$jscomp$4$$) {
  $queryData$jscomp$6$$ instanceof $goog$Uri$QueryData$$ ? ($JSCompiler_StaticMethods_setQueryData$self$$.$j$ = $queryData$jscomp$6$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$($JSCompiler_StaticMethods_setQueryData$self$$.$j$, $JSCompiler_StaticMethods_setQueryData$self$$.$b$)) : ($opt_decode$jscomp$4$$ || ($queryData$jscomp$6$$ = $goog$Uri$encodeSpecialChars_$$($queryData$jscomp$6$$, $goog$Uri$reDisallowedInQuery_$$)), $JSCompiler_StaticMethods_setQueryData$self$$.$j$ = 
  new $goog$Uri$QueryData$$($queryData$jscomp$6$$, $JSCompiler_StaticMethods_setQueryData$self$$.$b$));
}, $goog$Uri$parse$$ = function $$goog$Uri$parse$$$($uri$jscomp$46$$) {
  return $uri$jscomp$46$$ instanceof $goog$Uri$$ ? new $goog$Uri$$($uri$jscomp$46$$) : new $goog$Uri$$($uri$jscomp$46$$, void 0);
}, $goog$Uri$decodeOrEmpty_$$ = function $$goog$Uri$decodeOrEmpty_$$$($val$jscomp$41$$, $opt_preserveReserved$jscomp$1$$) {
  return $val$jscomp$41$$ ? $opt_preserveReserved$jscomp$1$$ ? decodeURI($val$jscomp$41$$.replace(/%25/g, "%2525")) : decodeURIComponent($val$jscomp$41$$) : "";
}, $goog$Uri$encodeSpecialChars_$$ = function $$goog$Uri$encodeSpecialChars_$$$($encoded_unescapedPart$$, $extra$$, $opt_removeDoubleEncoding$$) {
  return $goog$isString$$($encoded_unescapedPart$$) ? ($encoded_unescapedPart$$ = encodeURI($encoded_unescapedPart$$).replace($extra$$, $goog$Uri$encodeChar_$$), $opt_removeDoubleEncoding$$ && ($encoded_unescapedPart$$ = $encoded_unescapedPart$$.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $encoded_unescapedPart$$) : null;
}, $goog$Uri$encodeChar_$$ = function $$goog$Uri$encodeChar_$$$($ch$jscomp$4_n$jscomp$9$$) {
  $ch$jscomp$4_n$jscomp$9$$ = $ch$jscomp$4_n$jscomp$9$$.charCodeAt(0);
  return "%" + ($ch$jscomp$4_n$jscomp$9$$ >> 4 & 15).toString(16) + ($ch$jscomp$4_n$jscomp$9$$ & 15).toString(16);
}, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g, $goog$Uri$QueryData$$ = function $$goog$Uri$QueryData$$$($opt_query$jscomp$1$$, $opt_ignoreCase$jscomp$3$$) {
  this.$c$ = this.$b$ = null;
  this.$f$ = $opt_query$jscomp$1$$ || null;
  this.$g$ = !!$opt_ignoreCase$jscomp$3$$;
}, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$ = function $$JSCompiler_StaticMethods_ensureKeyMapInitialized_$$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$b$ || ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$b$ = new $goog$structs$Map$$, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$ = 0, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$f$ && $goog$uri$utils$parseQueryData$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$f$, function($name$jscomp$98$$, $value$jscomp$152$$) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.add(decodeURIComponent($name$jscomp$98$$.replace(/\+/g, " ")), $value$jscomp$152$$);
  }));
};
$goog$Uri$QueryData$$.prototype.add = function $$goog$Uri$QueryData$$$$add$($key$jscomp$103$$, $value$jscomp$154$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$f$ = null;
  $key$jscomp$103$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$103$$);
  var $values$jscomp$19$$ = this.$b$.get($key$jscomp$103$$);
  $values$jscomp$19$$ || this.$b$.set($key$jscomp$103$$, $values$jscomp$19$$ = []);
  $values$jscomp$19$$.push($value$jscomp$154$$);
  this.$c$ += 1;
  return this;
};
$goog$Uri$QueryData$$.prototype.remove = function $$goog$Uri$QueryData$$$$remove$($key$jscomp$104$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  $key$jscomp$104$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$104$$);
  return $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.$b$, $key$jscomp$104$$) ? (this.$f$ = null, this.$c$ -= this.$b$.get($key$jscomp$104$$).length, this.$b$.remove($key$jscomp$104$$)) : !1;
};
$goog$Uri$QueryData$$.prototype.clear = function $$goog$Uri$QueryData$$$$clear$() {
  this.$b$ = this.$f$ = null;
  this.$c$ = 0;
};
var $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$ = function $$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$105$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$);
  $key$jscomp$105$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$105$$);
  return $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$.$b$, $key$jscomp$105$$);
};
$JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype;
$JSCompiler_prototypeAlias$$.forEach = function $$JSCompiler_prototypeAlias$$$forEach$($f$jscomp$55$$, $opt_scope$jscomp$3$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$b$.forEach(function($values$jscomp$20$$, $key$jscomp$106$$) {
    $goog$array$forEach$$($values$jscomp$20$$, function($value$jscomp$156$$) {
      $f$jscomp$55$$.call($opt_scope$jscomp$3$$, $value$jscomp$156$$, $key$jscomp$106$$, this);
    }, this);
  }, this);
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  for (var $vals$jscomp$1$$ = this.$b$.$getValues$(), $keys$jscomp$12$$ = this.$b$.$getKeys$(), $rv$jscomp$14$$ = [], $i$jscomp$143$$ = 0; $i$jscomp$143$$ < $keys$jscomp$12$$.length; $i$jscomp$143$$++) {
    for (var $val$jscomp$42$$ = $vals$jscomp$1$$[$i$jscomp$143$$], $j$jscomp$11$$ = 0; $j$jscomp$11$$ < $val$jscomp$42$$.length; $j$jscomp$11$$++) {
      $rv$jscomp$14$$.push($keys$jscomp$12$$[$i$jscomp$143$$]);
    }
  }
  return $rv$jscomp$14$$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$($opt_key$jscomp$2_values$jscomp$21$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  var $rv$jscomp$15$$ = [];
  if ($goog$isString$$($opt_key$jscomp$2_values$jscomp$21$$)) {
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $opt_key$jscomp$2_values$jscomp$21$$) && ($rv$jscomp$15$$ = $goog$array$concat$$($rv$jscomp$15$$, this.$b$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$jscomp$2_values$jscomp$21$$))));
  } else {
    $opt_key$jscomp$2_values$jscomp$21$$ = this.$b$.$getValues$();
    for (var $i$jscomp$144$$ = 0; $i$jscomp$144$$ < $opt_key$jscomp$2_values$jscomp$21$$.length; $i$jscomp$144$$++) {
      $rv$jscomp$15$$ = $goog$array$concat$$($rv$jscomp$15$$, $opt_key$jscomp$2_values$jscomp$21$$[$i$jscomp$144$$]);
    }
  }
  return $rv$jscomp$15$$;
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$jscomp$107$$, $value$jscomp$157$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$f$ = null;
  $key$jscomp$107$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$107$$);
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $key$jscomp$107$$) && (this.$c$ -= this.$b$.get($key$jscomp$107$$).length);
  this.$b$.set($key$jscomp$107$$, [$value$jscomp$157$$]);
  this.$c$ += 1;
  return this;
};
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$jscomp$108_values$jscomp$22$$, $opt_default$$) {
  if (!$key$jscomp$108_values$jscomp$22$$) {
    return $opt_default$$;
  }
  $key$jscomp$108_values$jscomp$22$$ = this.$getValues$($key$jscomp$108_values$jscomp$22$$);
  return 0 < $key$jscomp$108_values$jscomp$22$$.length ? String($key$jscomp$108_values$jscomp$22$$[0]) : $opt_default$$;
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  if (this.$f$) {
    return this.$f$;
  }
  if (!this.$b$) {
    return "";
  }
  for (var $sb$jscomp$6$$ = [], $keys$jscomp$13$$ = this.$b$.$getKeys$(), $i$jscomp$145$$ = 0; $i$jscomp$145$$ < $keys$jscomp$13$$.length; $i$jscomp$145$$++) {
    var $key$jscomp$110_val$jscomp$43$$ = $keys$jscomp$13$$[$i$jscomp$145$$], $encodedKey$$ = encodeURIComponent(String($key$jscomp$110_val$jscomp$43$$));
    $key$jscomp$110_val$jscomp$43$$ = this.$getValues$($key$jscomp$110_val$jscomp$43$$);
    for (var $j$jscomp$12$$ = 0; $j$jscomp$12$$ < $key$jscomp$110_val$jscomp$43$$.length; $j$jscomp$12$$++) {
      var $param$jscomp$5$$ = $encodedKey$$;
      "" !== $key$jscomp$110_val$jscomp$43$$[$j$jscomp$12$$] && ($param$jscomp$5$$ += "=" + encodeURIComponent(String($key$jscomp$110_val$jscomp$43$$[$j$jscomp$12$$])));
      $sb$jscomp$6$$.push($param$jscomp$5$$);
    }
  }
  return this.$f$ = $sb$jscomp$6$$.join("&");
};
var $JSCompiler_StaticMethods_getKeyName_$$ = function $$JSCompiler_StaticMethods_getKeyName_$$$($JSCompiler_StaticMethods_getKeyName_$self$$, $arg$jscomp$11_keyName$$) {
  $arg$jscomp$11_keyName$$ = String($arg$jscomp$11_keyName$$);
  $JSCompiler_StaticMethods_getKeyName_$self$$.$g$ && ($arg$jscomp$11_keyName$$ = $arg$jscomp$11_keyName$$.toLowerCase());
  return $arg$jscomp$11_keyName$$;
}, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$ = function $$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$, $ignoreCase$jscomp$1$$) {
  $ignoreCase$jscomp$1$$ && !$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$g$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$), $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$f$ = null, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$b$.forEach(function($value$jscomp$159$$, $key$jscomp$112$$) {
    var $lowerCase$$ = $key$jscomp$112$$.toLowerCase();
    $key$jscomp$112$$ != $lowerCase$$ && (this.remove($key$jscomp$112$$), this.remove($lowerCase$$), 0 < $value$jscomp$159$$.length && (this.$f$ = null, this.$b$.set($JSCompiler_StaticMethods_getKeyName_$$(this, $lowerCase$$), $goog$array$toArray$$($value$jscomp$159$$)), this.$c$ += $value$jscomp$159$$.length));
  }, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$));
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$g$ = $ignoreCase$jscomp$1$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ConfiguredNetworkMsg", function($ssid$jscomp$4$$, $wpa_auth$$, $wpa_cipher$$, $wpa_id$$) {
  this.ssid = $ssid$jscomp$4$$;
  this.wpa_auth = $wpa_auth$$;
  this.wpa_cipher = $wpa_cipher$$;
  this.wpa_id = $wpa_id$$;
});
var $castApp$core$setupApi$ConnectWiFiMsg$$ = function $$castApp$core$setupApi$ConnectWiFiMsg$$$($ssid$jscomp$5$$, $wpa_auth$jscomp$1$$) {
  this.ssid = $ssid$jscomp$5$$;
  this.wpa_auth = $wpa_auth$jscomp$1$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ConnectWiFiMsg", $castApp$core$setupApi$ConnectWiFiMsg$$);
var $castApp$core$setupApi$EurekaInfoMsg34Base$$ = function $$castApp$core$setupApi$EurekaInfoMsg34Base$$$($version$jscomp$13$$, $name$jscomp$99$$, $build_version$$, $has_update$$, $ssdp_udn$$, $mac_address$$, $connected$$, $ssid$jscomp$6$$, $wpa_state$$, $setup_state$$, $wpa_configured$$) {
  this.version = $version$jscomp$13$$;
  this.name = $name$jscomp$99$$;
  this.build_version = $build_version$$;
  this.has_update = $has_update$$;
  this.ssdp_udn = $ssdp_udn$$;
  this.mac_address = $mac_address$$;
  this.connected = $connected$$;
  this.ssid = $ssid$jscomp$6$$;
  this.wpa_state = $wpa_state$$;
  this.setup_state = $setup_state$$;
  this.wpa_configured = $wpa_configured$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsg34Base", $castApp$core$setupApi$EurekaInfoMsg34Base$$);
var $castApp$core$setupApi$EurekaInfoMsgV3$$ = function $$castApp$core$setupApi$EurekaInfoMsgV3$$$($name$jscomp$100$$, $build_version$jscomp$1$$, $has_update$jscomp$1$$, $ssdp_udn$jscomp$1$$, $mac_address$jscomp$1$$, $connected$jscomp$1$$, $ssid$jscomp$7$$, $wpa_state$jscomp$1$$, $setup_state$jscomp$1$$, $wpa_configured$jscomp$1$$) {
  $castApp$core$setupApi$EurekaInfoMsg34Base$$.call(this, 3, $name$jscomp$100$$, $build_version$jscomp$1$$, $has_update$jscomp$1$$, $ssdp_udn$jscomp$1$$, $mac_address$jscomp$1$$, $connected$jscomp$1$$, $ssid$jscomp$7$$, $wpa_state$jscomp$1$$, $setup_state$jscomp$1$$, $wpa_configured$jscomp$1$$);
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV3$$, $castApp$core$setupApi$EurekaInfoMsg34Base$$);
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsgV3", $castApp$core$setupApi$EurekaInfoMsgV3$$);
$castApp$core$setupApi$EurekaInfoMsgV3$$.Location = function $$castApp$core$setupApi$EurekaInfoMsgV3$$$Location$($latitude$$, $longitude$$) {
  this.latitude = $latitude$$;
  this.longitude = $longitude$$;
};
var $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$ = function $$castApp$core$setupApi$EurekaInfoMsgV3$Sign$$$($certificate$jscomp$3$$, $nonce$jscomp$5$$, $signed_data$$) {
  this.certificate = $certificate$jscomp$3$$;
  this.nonce = $nonce$jscomp$5$$;
  this.signed_data = $signed_data$$;
};
$castApp$core$setupApi$EurekaInfoMsgV3$$.Sign = $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$;
var $castApp$core$setupApi$EurekaInfoMsgV3$Detail$$ = function $$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV3$$.Detail = $castApp$core$setupApi$EurekaInfoMsgV3$Detail$$;
$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$.Timezone = function $$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$$Timezone$($display_string$$, $offset$jscomp$23$$) {
  this.display_string = $display_string$$;
  this.offset = $offset$jscomp$23$$;
};
$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$.Locale = function $$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$$Locale$($display_string$jscomp$1$$) {
  this.display_string = $display_string$jscomp$1$$;
};
var $castApp$core$setupApi$EurekaInfoMsgV4$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$$$($version$jscomp$14$$, $name$jscomp$101$$, $build_version$jscomp$2$$, $has_update$jscomp$2$$, $ssdp_udn$jscomp$2$$, $mac_address$jscomp$2$$, $connected$jscomp$2$$, $ssid$jscomp$8$$, $wpa_state$jscomp$2$$, $setup_state$jscomp$2$$, $wpa_configured$jscomp$2$$, $uptime$$) {
  $castApp$core$setupApi$EurekaInfoMsg34Base$$.call(this, $version$jscomp$14$$, $name$jscomp$101$$, $build_version$jscomp$2$$, $has_update$jscomp$2$$, $ssdp_udn$jscomp$2$$, $mac_address$jscomp$2$$, $connected$jscomp$2$$, $ssid$jscomp$8$$, $wpa_state$jscomp$2$$, $setup_state$jscomp$2$$, $wpa_configured$jscomp$2$$);
  this.uptime = $uptime$$;
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV4$$, $castApp$core$setupApi$EurekaInfoMsg34Base$$);
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsgV4", $castApp$core$setupApi$EurekaInfoMsgV4$$);
var $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$ = function $$castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$$($obj$jscomp$88$$) {
  $goog$object$setIfUndefined$$($obj$jscomp$88$$, "locale", "en-US");
  $goog$object$setIfUndefined$$($obj$jscomp$88$$, "debug_build", !1);
  $goog$object$setIfUndefined$$($obj$jscomp$88$$, "update_only_build", !1);
  $goog$object$setIfUndefined$$($obj$jscomp$88$$, "ethernet_connected", !1);
  $goog$object$setIfUndefined$$($obj$jscomp$88$$, "tos_accepted", !0);
  $goog$object$setIfUndefined$$($obj$jscomp$88$$, "time_format", 0);
  $goog$object$setIfUndefined$$($obj$jscomp$88$$, "hdmi_control", !0);
  "string" !== typeof $obj$jscomp$88$$.hotspot_bssid && ($obj$jscomp$88$$.mac_address && 5 <= $obj$jscomp$88$$.mac_address.length ? $obj$jscomp$88$$.hotspot_bssid = "00:1A:11:FF:" + $obj$jscomp$88$$.mac_address.substr($obj$jscomp$88$$.mac_address.length - 5) : $goog$asserts$fail$$("Eureka Info mac_address too short"));
  if ($obj$jscomp$88$$.opt_in) {
    var $obj$jscomp$inline_466$$ = $obj$jscomp$88$$.opt_in;
    $goog$object$setIfUndefined$$($obj$jscomp$inline_466$$, "crash", !0);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_466$$, "stats", !0);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_466$$, "device_id", !1);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_466$$, "location", !1);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_466$$, "opencast", !1);
  }
  return $obj$jscomp$88$$;
};
$castApp$core$setupApi$EurekaInfoMsgV4$$.SetupStats = function $$castApp$core$setupApi$EurekaInfoMsgV4$$$SetupStats$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV4$Location$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$Location$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV4$$.Location = $castApp$core$setupApi$EurekaInfoMsgV4$Location$$;
var $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV4$$.OptIn = $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$;
var $castApp$core$setupApi$EurekaInfoMsgV4$Sign$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$Sign$$$($certificate$jscomp$4$$, $nonce$jscomp$6$$, $signed_data$jscomp$1$$) {
  $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$.call(this, $certificate$jscomp$4$$, $nonce$jscomp$6$$, $signed_data$jscomp$1$$);
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV4$Sign$$, $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$);
$castApp$core$setupApi$EurekaInfoMsgV4$$.Sign = $castApp$core$setupApi$EurekaInfoMsgV4$Sign$$;
var $castApp$core$setupApi$EurekaInfoMsgV4$Detail$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$Detail$$$($icon_list$$) {
  this.manufacturer = "Google Inc.";
  this.model_name = "Eureka Dongle";
  this.icon_list = $icon_list$$;
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV4$Detail$$, $castApp$core$setupApi$EurekaInfoMsgV3$Detail$$);
$castApp$core$setupApi$EurekaInfoMsgV4$$.Detail = $castApp$core$setupApi$EurekaInfoMsgV4$Detail$$;
$castApp$core$setupApi$EurekaInfoMsgV4$Detail$$.Icon = function $$castApp$core$setupApi$EurekaInfoMsgV4$Detail$$$Icon$($width$jscomp$27$$, $height$jscomp$26$$, $depth$jscomp$9$$, $url$jscomp$64$$) {
  this.mimetype = "image/png";
  this.width = $width$jscomp$27$$;
  this.height = $height$jscomp$26$$;
  this.depth = $depth$jscomp$9$$;
  this.url = $url$jscomp$64$$;
};
var $castApp$core$setupApi$EurekaInfoMsgV7$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$() {
};
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsgV7", $castApp$core$setupApi$EurekaInfoMsgV7$$);
var $castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$ = function $$castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$$($obj$jscomp$90$$) {
  if ($obj$jscomp$90$$.device_info) {
    var $obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$ = $obj$jscomp$90$$.device_info;
    !$obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$.hotspot_bssid && $obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$.mac_address && ($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$.hotspot_bssid = "00:1A:11:FF:" + $obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$.mac_address.substr($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$.mac_address.length - 5));
    $obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$.capabilities && ($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$ = $obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$.capabilities, $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, "display_supported", !0), $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, "wifi_supported", !0), $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, 
    "wifi_regulatory_domain_locked", !1), $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, "hotspot_supported", !0), $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, "ble_supported", !1), $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, "multizone_supported", !1));
  }
  $obj$jscomp$90$$.net && $goog$object$setIfUndefined$$($obj$jscomp$90$$.net, "ethernet_connected", !1);
  $obj$jscomp$90$$.setup && $goog$object$setIfUndefined$$($obj$jscomp$90$$.setup, "tos_accepted", !0);
  $obj$jscomp$90$$.settings && ($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$ = $obj$jscomp$90$$.settings, $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, "time_format", 1), $goog$object$setIfUndefined$$($obj$jscomp$inline_1032_obj$jscomp$inline_492_obj$jscomp$inline_498$$, "locale", "en-US"));
  return $obj$jscomp$90$$;
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.BuildInfo = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$BuildInfo$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.DeviceInfo = $castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$;
$castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$.Capabilities = function $$castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$$Capabilities$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.OtaStatus = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$OtaStatus$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Net = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$Net$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.WiFi = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$WiFi$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV7$Setup$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$Setup$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Setup = $castApp$core$setupApi$EurekaInfoMsgV7$Setup$$;
$castApp$core$setupApi$EurekaInfoMsgV7$Setup$$.Stats = function $$castApp$core$setupApi$EurekaInfoMsgV7$Setup$$$Stats$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$Settings$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Settings = $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$;
var $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.OptIn = $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$;
$castApp$core$setupApi$EurekaInfoMsgV7$$.OpenCast = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$OpenCast$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Multizone = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$Multizone$() {
};
var $castApp$core$setupApi$ForgetWiFiMsg$$ = function $$castApp$core$setupApi$ForgetWiFiMsg$$$($wpa_id$jscomp$1$$) {
  this.wpa_id = $wpa_id$jscomp$1$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ForgetWiFiMsg", $castApp$core$setupApi$ForgetWiFiMsg$$);
$goog$exportSymbol$$("castApp.core.setupApi.GetAppDeviceIdRequestMsg", function($app_id$$) {
  this.app_id = $app_id$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.GetAppDeviceIdResponseMsg", function($app_device_id$$, $certificate$jscomp$5$$, $signed_data$jscomp$2$$) {
  this.app_device_id = $app_device_id$$;
  this.certificate = $certificate$jscomp$5$$;
  this.signed_data = $signed_data$jscomp$2$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.OfferMsg", function($token$jscomp$7$$) {
  this.token = $token$jscomp$7$$;
});
var $castApp$core$setupApi$PlaySoundRequestMsg$$ = function $$castApp$core$setupApi$PlaySoundRequestMsg$$$($soundId$$) {
  this.sound_id = $soundId$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.PlaySoundRequestMsg", $castApp$core$setupApi$PlaySoundRequestMsg$$);
$goog$exportSymbol$$("castApp.core.setupApi.PlaySoundResponseMsg", function($volume$jscomp$1$$, $duration$jscomp$1$$) {
  this.volume = $volume$jscomp$1$$;
  this.duration = $duration$jscomp$1$$;
});
var $castApp$core$setupApi$RebootMsg$$ = function $$castApp$core$setupApi$RebootMsg$$$($params$jscomp$8$$) {
  this.params = $params$jscomp$8$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.RebootMsg", $castApp$core$setupApi$RebootMsg$$);
var $castApp$core$setupApi$ScanResultMsgBase$$ = function $$castApp$core$setupApi$ScanResultMsgBase$$$($ssid$jscomp$9$$, $wpa_auth$jscomp$2$$, $wpa_cipher$jscomp$1$$, $bssid$$, $signal_level$$) {
  this.ssid = $ssid$jscomp$9$$;
  this.wpa_auth = $wpa_auth$jscomp$2$$;
  this.wpa_cipher = $wpa_cipher$jscomp$1$$;
  this.bssid = $bssid$$;
  this.signal_level = $signal_level$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ScanResultMsgBase", $castApp$core$setupApi$ScanResultMsgBase$$);
var $castApp$core$setupApi$ScanResultMsgV7$$ = function $$castApp$core$setupApi$ScanResultMsgV7$$$($ssid$jscomp$10$$, $wpa_auth$jscomp$3$$, $wpa_cipher$jscomp$2$$, $bssid$jscomp$1$$, $signal_level$jscomp$1$$, $ap_list$$) {
  $castApp$core$setupApi$ScanResultMsgBase$$.call(this, $ssid$jscomp$10$$, $wpa_auth$jscomp$3$$, $wpa_cipher$jscomp$2$$, $bssid$jscomp$1$$, $signal_level$jscomp$1$$);
  this.ap_list = $ap_list$$;
};
$goog$inherits$$($castApp$core$setupApi$ScanResultMsgV7$$, $castApp$core$setupApi$ScanResultMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.ScanResultMsgV7", $castApp$core$setupApi$ScanResultMsgV7$$);
$castApp$core$setupApi$ScanResultMsgV7$$.Ap = function $$castApp$core$setupApi$ScanResultMsgV7$$$Ap$($bssid$jscomp$2$$, $signal_level$jscomp$2$$, $frequency$$) {
  this.bssid = $bssid$jscomp$2$$;
  this.signal_level = $signal_level$jscomp$2$$;
  this.frequency = $frequency$$;
};
var $castApp$core$setupApi$SaveWiFiRequestMsg$$ = function $$castApp$core$setupApi$SaveWiFiRequestMsg$$$() {
};
$goog$exportSymbol$$("castApp.core.setupApi.SaveWiFiRequestMsg", $castApp$core$setupApi$SaveWiFiRequestMsg$$);
$goog$exportSymbol$$("castApp.core.setupApi.SaveWiFiResponseMsg", function($setup_state$jscomp$3$$) {
  this.setup_state = $setup_state$jscomp$3$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.SendLogReportRequestMsg", function($uuid$jscomp$3$$) {
  this.uuid = $uuid$jscomp$3$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.SendLogReportResponseMsg", function($crash_report_id$$) {
  this.crash_report_id = $crash_report_id$$;
});
var $castApp$core$setupApi$SetEurekaInfoMsgBase$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgBase$$$() {
};
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgBase", $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
var $castApp$core$setupApi$SetEurekaInfoMsgV3$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgV3$$$() {
};
$goog$inherits$$($castApp$core$setupApi$SetEurekaInfoMsgV3$$, $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgV3", $castApp$core$setupApi$SetEurekaInfoMsgV3$$);
var $castApp$core$setupApi$SetEurekaInfoMsgV4$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgV4$$$() {
};
$goog$inherits$$($castApp$core$setupApi$SetEurekaInfoMsgV4$$, $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgV4", $castApp$core$setupApi$SetEurekaInfoMsgV4$$);
var $castApp$core$setupApi$SetEurekaInfoMsgV7$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgV7$$$() {
};
$goog$inherits$$($castApp$core$setupApi$SetEurekaInfoMsgV7$$, $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgV7", $castApp$core$setupApi$SetEurekaInfoMsgV7$$);
$goog$exportSymbol$$("castApp.core.setupApi.SupportedLocale", function($locale$$, $display_string$jscomp$2$$) {
  this.locale = $locale$$;
  this.display_string = $display_string$jscomp$2$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.SupportedTimeZone", function($timezone$$, $display_string$jscomp$3$$, $offset$jscomp$24$$) {
  this.timezone = $timezone$$;
  this.display_string = $display_string$jscomp$3$$;
  this.offset = $offset$jscomp$24$$;
});
var $castApp$core$storage$SetupSession$$ = function $$castApp$core$storage$SetupSession$$$($id$jscomp$49$$) {
  this.id = $id$jscomp$49$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupSession", $castApp$core$storage$SetupSession$$);
var $castApp$core$storage$CommonSetupState$$ = function $$castApp$core$storage$CommonSetupState$$$() {
};
$goog$exportSymbol$$("castApp.core.storage.CommonSetupState", $castApp$core$storage$CommonSetupState$$);
var $castApp$core$storage$DeviceToSetUp$$ = function $$castApp$core$storage$DeviceToSetUp$$$($initParams$$) {
  this.type = $initParams$$.type;
  this.name = $initParams$$.name;
  this.bssid = $initParams$$.bssid;
  this.ssid = $initParams$$.ssid;
  this.ipAddress = $initParams$$.ipAddress;
};
$goog$exportSymbol$$("castApp.core.storage.DeviceToSetUp", $castApp$core$storage$DeviceToSetUp$$);
var $castApp$core$storage$SetupApiClientState$$ = function $$castApp$core$storage$SetupApiClientState$$$($deviceIpAddress$$) {
  this.deviceIpAddress = $deviceIpAddress$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupApiClientState", $castApp$core$storage$SetupApiClientState$$);
var $castApp$core$storage$ConnectWiFiState$$ = function $$castApp$core$storage$ConnectWiFiState$$$($msg$jscomp$22$$) {
  this.msg = $msg$jscomp$22$$;
};
$goog$exportSymbol$$("castApp.core.storage.ConnectWiFiState", $castApp$core$storage$ConnectWiFiState$$);
$goog$exportSymbol$$("castApp.core.storage.EurekaInfoState", function($setupApiVersion$$, $name$jscomp$102$$, $setupState$$, $ssdpUdn$jscomp$1$$, $deviceType$jscomp$5$$, $features$jscomp$3$$, $ethernetConnected$$, $tosAccepted$$) {
  this.setupApiVersion = $setupApiVersion$$;
  this.name = $name$jscomp$102$$;
  this.setupState = $setupState$$;
  this.ssdpUdn = $ssdpUdn$jscomp$1$$;
  this.deviceType = $deviceType$jscomp$5$$;
  this.features = $features$jscomp$3$$;
  this.ethernetConnected = $ethernetConnected$$;
  this.tosAccepted = $tosAccepted$$;
});
var $castApp$core$storage$VerificationState$$ = function $$castApp$core$storage$VerificationState$$$($timeStamp$jscomp$1$$, $verificationProperties$$) {
  this.timeStamp = $timeStamp$jscomp$1$$;
  this.verificationProperties = $verificationProperties$$;
};
$goog$exportSymbol$$("castApp.core.storage.VerificationState", $castApp$core$storage$VerificationState$$);
var $castApp$core$storage$SetupState$$ = function $$castApp$core$storage$SetupState$$$($type$jscomp$156$$) {
  this.type = $type$jscomp$156$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupState", $castApp$core$storage$SetupState$$);
var $castApp$core$storage$SetupStateCollection$$ = function $$castApp$core$storage$SetupStateCollection$$$($current$jscomp$2$$, $all$jscomp$2$$) {
  this.all = $all$jscomp$2$$;
  this.current = $current$jscomp$2$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupStateCollection", $castApp$core$storage$SetupStateCollection$$);
var $castApp$core$storage$ShortTermDeviceState$$ = function $$castApp$core$storage$ShortTermDeviceState$$$($type$jscomp$157$$, $time$jscomp$2$$, $deviceId$jscomp$4$$) {
  this.type = $type$jscomp$157$$;
  this.time = $time$jscomp$2$$;
  this.deviceId = $deviceId$jscomp$4$$;
}, $castApp$core$storage$readAllSetupSessions$$ = function $$castApp$core$storage$readAllSetupSessions$$$($storage$jscomp$3$$) {
  for (var $result$jscomp$26$$ = [], $i$jscomp$147$$ = 0, $l$jscomp$19$$ = $storage$jscomp$3$$.length; $i$jscomp$147$$ < $l$jscomp$19$$; ++$i$jscomp$147$$) {
    var $key$jscomp$114_storageKey$jscomp$inline_553$$ = $storage$jscomp$3$$.key($i$jscomp$147$$);
    if ($key$jscomp$114_storageKey$jscomp$inline_553$$ && 0 == $key$jscomp$114_storageKey$jscomp$inline_553$$.lastIndexOf("setupSession_", 0)) {
      a: {
        var $storage$jscomp$inline_552$$ = $storage$jscomp$3$$, $sessionData$jscomp$inline_554$$ = $storage$jscomp$inline_552$$.getItem($key$jscomp$114_storageKey$jscomp$inline_553$$);
        if ($sessionData$jscomp$inline_554$$) {
          try {
            var $session$$ = JSON.parse($sessionData$jscomp$inline_554$$);
            break a;
          } catch ($e$jscomp$inline_555$$) {
            $storage$jscomp$inline_552$$.removeItem($key$jscomp$114_storageKey$jscomp$inline_553$$);
          }
        }
        $session$$ = null;
      }
      $session$$ && $result$jscomp$26$$.push($session$$);
    }
  }
  return $result$jscomp$26$$;
}, $castApp$core$storage$removeStaleSetupSessions$$ = function $$castApp$core$storage$removeStaleSetupSessions$$$() {
  var $cutoffTime$$ = $goog$now$$() - 432E5;
  $castApp$core$storage$readAllSetupSessions$$(window.localStorage).forEach(function($session$jscomp$1$$) {
    (!$session$jscomp$1$$.timestamp || $session$jscomp$1$$.timestamp < $cutoffTime$$) && window.localStorage.removeItem("setupSession_" + $session$jscomp$1$$.id);
  });
}, $castApp$core$storage$writeSetupSession$$ = function $$castApp$core$storage$writeSetupSession$$$($storage$jscomp$6$$, $session$jscomp$3$$) {
  $session$jscomp$3$$.timestamp = $goog$now$$();
  $storage$jscomp$6$$.setItem("setupSession_" + $session$jscomp$3$$.id, JSON.stringify($session$jscomp$3$$));
}, $castApp$core$storage$removeSetupSession$$ = function $$castApp$core$storage$removeSetupSession$$$($storage$jscomp$7$$, $session$jscomp$4$$) {
  $storage$jscomp$7$$.removeItem("setupSession_" + $session$jscomp$4$$.id);
}, $castApp$core$storage$readShortTermDeviceState$$ = function $$castApp$core$storage$readShortTermDeviceState$$$($storage$jscomp$10$$) {
  var $data$jscomp$69$$ = $storage$jscomp$10$$.getItem("setupDeviceState");
  if ($data$jscomp$69$$) {
    try {
      return JSON.parse($data$jscomp$69$$);
    } catch ($e$jscomp$33$$) {
      $storage$jscomp$10$$.removeItem("setupDeviceState");
    }
  }
  return [];
}, $castApp$core$storage$writeShortTermDeviceState$$ = function $$castApp$core$storage$writeShortTermDeviceState$$$($storage$jscomp$11$$, $data$jscomp$70$$) {
  0 === $data$jscomp$70$$.length ? $storage$jscomp$11$$.removeItem("setupDeviceState") : $storage$jscomp$11$$.setItem("setupDeviceState", JSON.stringify($data$jscomp$70$$));
}, $castApp$core$storage$readAutoNetworkSwitchingFlag$$ = function $$castApp$core$storage$readAutoNetworkSwitchingFlag$$$($storage$jscomp$12$$) {
  return "false" === $storage$jscomp$12$$.getItem("setupAutoNetworkSwitching") ? !1 : !0;
}, $castApp$core$storage$writeAnalyticsOptIn$$ = function $$castApp$core$storage$writeAnalyticsOptIn$$$($storage$jscomp$15$$, $value$jscomp$164$$) {
  1 === $value$jscomp$164$$ ? $storage$jscomp$15$$.removeItem("castApp.analyticsOptIn") : $storage$jscomp$15$$.setItem("castApp.analyticsOptIn", $value$jscomp$164$$.toString());
}, $castApp$core$storage$readLogSalt$$ = function $$castApp$core$storage$readLogSalt$$$($storage$jscomp$16$$, $getRandomValues$$) {
  var $hexString_newSalt$$ = $storage$jscomp$16$$.getItem("castApp.logSalt");
  if ($hexString_newSalt$$) {
    try {
      var $byteValues$$ = $hexString_newSalt$$.match(/.{1,2}/g).map(function($byte$jscomp$1_hexByteString$$) {
        $byte$jscomp$1_hexByteString$$ = Number.parseInt($byte$jscomp$1_hexByteString$$, 16);
        if (isNaN($byte$jscomp$1_hexByteString$$)) {
          throw Error();
        }
        return $byte$jscomp$1_hexByteString$$;
      });
      return (new Uint8Array($byteValues$$)).buffer;
    } catch ($e$jscomp$34$$) {
      $storage$jscomp$16$$.removeItem("castApp.logSalt");
    }
  }
  $hexString_newSalt$$ = new Uint8Array(new ArrayBuffer(32));
  $getRandomValues$$($hexString_newSalt$$);
  try {
    var $newSaltHexString$$ = "";
    $hexString_newSalt$$.forEach(function($byte$jscomp$2$$) {
      $newSaltHexString$$ += $byte$jscomp$2$$.toString(16);
    });
    $storage$jscomp$16$$.setItem("castApp.logSalt", $newSaltHexString$$);
  } catch ($e$4$$) {
  }
  return $hexString_newSalt$$.buffer;
};
var $castApp$core$Analytics$$ = function $$castApp$core$Analytics$$$() {
}, $castApp$core$NullAnalytics$$ = function $$castApp$core$NullAnalytics$$$() {
};
$goog$inherits$$($castApp$core$NullAnalytics$$, $castApp$core$Analytics$$);
$castApp$core$NullAnalytics$$.prototype.$c$ = function $$castApp$core$NullAnalytics$$$$$c$$() {
};
$castApp$core$NullAnalytics$$.prototype.$g$ = function $$castApp$core$NullAnalytics$$$$$g$$() {
};
$castApp$core$NullAnalytics$$.prototype.$b$ = function $$castApp$core$NullAnalytics$$$$$b$$() {
  return $goog$Promise$resolve$$(3);
};
$castApp$core$NullAnalytics$$.prototype.$i$ = function $$castApp$core$NullAnalytics$$$$$i$$() {
};
var $castApp$core$UmaAnalytics$$ = function $$castApp$core$UmaAnalytics$$$($localStorage$jscomp$1$$) {
  this.$h$ = chrome.metricsPrivate;
  this.$f$ = $localStorage$jscomp$1$$;
};
$goog$inherits$$($castApp$core$UmaAnalytics$$, $castApp$core$Analytics$$);
var $castApp$core$UmaAnalytics$logger_$$ = $castApp$log$getLogger$$("core.UmaAnalytics");
$castApp$core$UmaAnalytics$$.prototype.$c$ = function $$castApp$core$UmaAnalytics$$$$$c$$($eventType$jscomp$5_userActionName$$) {
  $eventType$jscomp$5_userActionName$$ = "Cast.Chrome.App." + $eventType$jscomp$5_userActionName$$.toString();
  $castApp$log$info$$($castApp$core$UmaAnalytics$logger_$$, "recordUserAction(" + $eventType$jscomp$5_userActionName$$ + ")");
  this.$h$.recordUserAction($eventType$jscomp$5_userActionName$$);
};
$castApp$core$UmaAnalytics$$.prototype.$g$ = function $$castApp$core$UmaAnalytics$$$$$g$$($event$jscomp$6$$) {
  switch($event$jscomp$6$$.eventType) {
    case 1:
      var $eventTypeStr_userActionName$jscomp$1$$ = "List";
      break;
    case 2:
      $eventTypeStr_userActionName$jscomp$1$$ = "View";
      break;
    case 3:
      $eventTypeStr_userActionName$jscomp$1$$ = "Redeem";
      break;
    default:
      $castApp$log$warning$$($castApp$core$UmaAnalytics$logger_$$, "Ignoring unknown event type: " + $event$jscomp$6$$.eventType);
      return;
  }
  $eventTypeStr_userActionName$jscomp$1$$ = "Cast.Chrome.App.Offers." + $eventTypeStr_userActionName$jscomp$1$$;
  if (void 0 !== $event$jscomp$6$$.offerId) {
    if ("number" !== typeof $event$jscomp$6$$.offerId || 0 > $event$jscomp$6$$.offerId) {
      $castApp$log$warning$$($castApp$core$UmaAnalytics$logger_$$, "Ignoring invalid offer ID: " + $event$jscomp$6$$.offerId);
      return;
    }
    $eventTypeStr_userActionName$jscomp$1$$ += "." + $event$jscomp$6$$.offerId;
  }
  this.$h$.recordUserAction($eventTypeStr_userActionName$jscomp$1$$);
};
$castApp$core$UmaAnalytics$$.prototype.$b$ = function $$castApp$core$UmaAnalytics$$$$$b$$() {
  var $value$jscomp$inline_558$$ = parseInt(this.$f$.getItem("castApp.analyticsOptIn"), 10);
  if (isNaN($value$jscomp$inline_558$$) || 1 > $value$jscomp$inline_558$$ || 3 < $value$jscomp$inline_558$$) {
    $value$jscomp$inline_558$$ = 1;
  }
  return $goog$Promise$resolve$$($value$jscomp$inline_558$$);
};
$castApp$core$UmaAnalytics$$.prototype.$i$ = function $$castApp$core$UmaAnalytics$$$$$i$$($optedIn$jscomp$1$$) {
  $optedIn$jscomp$1$$ ? ($castApp$core$storage$writeAnalyticsOptIn$$(this.$f$, 2), this.$c$(1)) : ($castApp$core$storage$writeAnalyticsOptIn$$(this.$f$, 3), this.$c$(2));
};
var $goog$Disposable$$ = function $$goog$Disposable$$$() {
  this.$i$ = this.$i$;
  this.$w$ = this.$w$;
};
$goog$Disposable$$.prototype.$i$ = !1;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  this.$i$ || (this.$i$ = !0, this.$disposeInternal$());
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if (this.$w$) {
    for (; this.$w$.length;) {
      this.$w$.shift()();
    }
  }
};
var $JSCompiler_temp$jscomp$18$$;
($JSCompiler_temp$jscomp$18$$ = !$goog$userAgent$IE$$) || ($JSCompiler_temp$jscomp$18$$ = 9 <= Number($JSCompiler_inline_result$jscomp$19$$));
var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = $JSCompiler_temp$jscomp$18$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9"), $goog$events$BrowserFeature$PASSIVE_EVENTS$$ = function() {
  if (!$goog$global$$.addEventListener || !Object.defineProperty) {
    return !1;
  }
  var $passive$$ = !1, $options$jscomp$51$$ = Object.defineProperty({}, "passive", {get:function() {
    $passive$$ = !0;
  }});
  try {
    $goog$global$$.addEventListener("test", $goog$nullFunction$$, $options$jscomp$51$$), $goog$global$$.removeEventListener("test", $goog$nullFunction$$, $options$jscomp$51$$);
  } catch ($e$jscomp$35$$) {
  }
  return $passive$$;
}();
var $goog$events$Event$$ = function $$goog$events$Event$$$($type$jscomp$158$$, $opt_target$jscomp$2$$) {
  this.type = $type$jscomp$158$$;
  this.$b$ = this.target = $opt_target$jscomp$2$$;
  this.$returnValue_$ = !0;
};
$goog$events$Event$$.prototype.$c$ = function $$goog$events$Event$$$$$c$$() {
  this.$returnValue_$ = !1;
};
var $goog$events$BrowserEvent$$ = function $$goog$events$BrowserEvent$$$($opt_e$jscomp$2$$, $opt_currentTarget_relatedTarget$jscomp$inline_567$$) {
  $goog$events$Event$$.call(this, $opt_e$jscomp$2$$ ? $opt_e$jscomp$2$$.type : "");
  this.relatedTarget = this.$b$ = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.$f$ = null;
  if ($opt_e$jscomp$2$$) {
    var $type$jscomp$inline_565$$ = this.type = $opt_e$jscomp$2$$.type, $relevantTouch$jscomp$inline_566$$ = $opt_e$jscomp$2$$.changedTouches && $opt_e$jscomp$2$$.changedTouches.length ? $opt_e$jscomp$2$$.changedTouches[0] : null;
    this.target = $opt_e$jscomp$2$$.target || $opt_e$jscomp$2$$.srcElement;
    this.$b$ = $opt_currentTarget_relatedTarget$jscomp$inline_567$$;
    if ($opt_currentTarget_relatedTarget$jscomp$inline_567$$ = $opt_e$jscomp$2$$.relatedTarget) {
      if ($goog$userAgent$GECKO$$) {
        a: {
          try {
            $goog$reflect$sinkValue$$($opt_currentTarget_relatedTarget$jscomp$inline_567$$.nodeName);
            var $JSCompiler_inline_result$jscomp$957$$ = !0;
            break a;
          } catch ($e$jscomp$inline_1035$$) {
          }
          $JSCompiler_inline_result$jscomp$957$$ = !1;
        }
        $JSCompiler_inline_result$jscomp$957$$ || ($opt_currentTarget_relatedTarget$jscomp$inline_567$$ = null);
      }
    } else {
      "mouseover" == $type$jscomp$inline_565$$ ? $opt_currentTarget_relatedTarget$jscomp$inline_567$$ = $opt_e$jscomp$2$$.fromElement : "mouseout" == $type$jscomp$inline_565$$ && ($opt_currentTarget_relatedTarget$jscomp$inline_567$$ = $opt_e$jscomp$2$$.toElement);
    }
    this.relatedTarget = $opt_currentTarget_relatedTarget$jscomp$inline_567$$;
    $relevantTouch$jscomp$inline_566$$ ? (this.clientX = void 0 !== $relevantTouch$jscomp$inline_566$$.clientX ? $relevantTouch$jscomp$inline_566$$.clientX : $relevantTouch$jscomp$inline_566$$.pageX, this.clientY = void 0 !== $relevantTouch$jscomp$inline_566$$.clientY ? $relevantTouch$jscomp$inline_566$$.clientY : $relevantTouch$jscomp$inline_566$$.pageY, this.screenX = $relevantTouch$jscomp$inline_566$$.screenX || 0, this.screenY = $relevantTouch$jscomp$inline_566$$.screenY || 0) : (this.clientX = 
    void 0 !== $opt_e$jscomp$2$$.clientX ? $opt_e$jscomp$2$$.clientX : $opt_e$jscomp$2$$.pageX, this.clientY = void 0 !== $opt_e$jscomp$2$$.clientY ? $opt_e$jscomp$2$$.clientY : $opt_e$jscomp$2$$.pageY, this.screenX = $opt_e$jscomp$2$$.screenX || 0, this.screenY = $opt_e$jscomp$2$$.screenY || 0);
    this.button = $opt_e$jscomp$2$$.button;
    this.key = $opt_e$jscomp$2$$.key || "";
    this.ctrlKey = $opt_e$jscomp$2$$.ctrlKey;
    this.altKey = $opt_e$jscomp$2$$.altKey;
    this.shiftKey = $opt_e$jscomp$2$$.shiftKey;
    this.metaKey = $opt_e$jscomp$2$$.metaKey;
    this.pointerId = $opt_e$jscomp$2$$.pointerId || 0;
    this.pointerType = $goog$isString$$($opt_e$jscomp$2$$.pointerType) ? $opt_e$jscomp$2$$.pointerType : $goog$events$BrowserEvent$IE_POINTER_TYPE_MAP$$[$opt_e$jscomp$2$$.pointerType] || "";
    this.state = $opt_e$jscomp$2$$.state;
    this.$f$ = $opt_e$jscomp$2$$;
    $opt_e$jscomp$2$$.defaultPrevented && this.$c$();
  }
};
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
var $goog$events$BrowserEvent$IE_POINTER_TYPE_MAP$$ = $goog$debug$freezeInternal_$$({2:"touch", 3:"pen", 4:"mouse"});
$goog$events$BrowserEvent$$.prototype.$c$ = function $$goog$events$BrowserEvent$$$$$c$$() {
  $goog$events$BrowserEvent$$.$superClass_$.$c$.call(this);
  var $be$$ = this.$f$;
  if ($be$$.preventDefault) {
    $be$$.preventDefault();
  } else {
    if ($be$$.returnValue = !1, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if ($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1;
        }
      } catch ($ex$jscomp$8$$) {
      }
    }
  }
};
var $goog$events$Listenable$IMPLEMENTED_BY_PROP$$ = "closure_listenable_" + (1e6 * Math.random() | 0), $goog$events$Listenable$isImplementedBy$$ = function $$goog$events$Listenable$isImplementedBy$$$($obj$jscomp$101$$) {
  return !(!$obj$jscomp$101$$ || !$obj$jscomp$101$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]);
}, $goog$events$ListenableKey$counter_$$ = 0;
var $goog$events$Listener$$ = function $$goog$events$Listener$$$($listener$jscomp$104$$, $src$jscomp$10$$, $type$jscomp$160$$, $capture$$, $opt_handler$$) {
  this.listener = $listener$jscomp$104$$;
  this.proxy = null;
  this.src = $src$jscomp$10$$;
  this.type = $type$jscomp$160$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.key = ++$goog$events$ListenableKey$counter_$$;
  this.removed = this.$callOnce$ = !1;
}, $JSCompiler_StaticMethods_markAsRemoved$$ = function $$JSCompiler_StaticMethods_markAsRemoved$$$($JSCompiler_StaticMethods_markAsRemoved$self$$) {
  $JSCompiler_StaticMethods_markAsRemoved$self$$.removed = !0;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.listener = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.proxy = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.src = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$handler$ = null;
};
var $goog$events$ListenerMap$$ = function $$goog$events$ListenerMap$$$($src$jscomp$11$$) {
  this.src = $src$jscomp$11$$;
  this.$b$ = {};
  this.$c$ = 0;
};
$goog$events$ListenerMap$$.prototype.add = function $$goog$events$ListenerMap$$$$add$($listenerArray_type$jscomp$162$$, $listener$jscomp$105_listenerObj$$, $callOnce$$, $opt_useCapture$jscomp$9$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$jscomp$162$$.toString();
  $listenerArray_type$jscomp$162$$ = this.$b$[$typeStr$$];
  $listenerArray_type$jscomp$162$$ || ($listenerArray_type$jscomp$162$$ = this.$b$[$typeStr$$] = [], this.$c$++);
  var $index$jscomp$87$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray_type$jscomp$162$$, $listener$jscomp$105_listenerObj$$, $opt_useCapture$jscomp$9$$, $opt_listenerScope$$);
  -1 < $index$jscomp$87$$ ? ($listener$jscomp$105_listenerObj$$ = $listenerArray_type$jscomp$162$$[$index$jscomp$87$$], $callOnce$$ || ($listener$jscomp$105_listenerObj$$.$callOnce$ = !1)) : ($listener$jscomp$105_listenerObj$$ = new $goog$events$Listener$$($listener$jscomp$105_listenerObj$$, this.src, $typeStr$$, !!$opt_useCapture$jscomp$9$$, $opt_listenerScope$$), $listener$jscomp$105_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$jscomp$162$$.push($listener$jscomp$105_listenerObj$$));
  return $listener$jscomp$105_listenerObj$$;
};
$goog$events$ListenerMap$$.prototype.remove = function $$goog$events$ListenerMap$$$$remove$($type$jscomp$163_typeStr$jscomp$1$$, $index$jscomp$88_listener$jscomp$106$$, $opt_useCapture$jscomp$10$$, $opt_listenerScope$jscomp$1$$) {
  $type$jscomp$163_typeStr$jscomp$1$$ = $type$jscomp$163_typeStr$jscomp$1$$.toString();
  if (!($type$jscomp$163_typeStr$jscomp$1$$ in this.$b$)) {
    return !1;
  }
  var $listenerArray$jscomp$1$$ = this.$b$[$type$jscomp$163_typeStr$jscomp$1$$];
  $index$jscomp$88_listener$jscomp$106$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$jscomp$1$$, $index$jscomp$88_listener$jscomp$106$$, $opt_useCapture$jscomp$10$$, $opt_listenerScope$jscomp$1$$);
  return -1 < $index$jscomp$88_listener$jscomp$106$$ ? ($JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$jscomp$1$$[$index$jscomp$88_listener$jscomp$106$$]), $goog$array$removeAt$$($listenerArray$jscomp$1$$, $index$jscomp$88_listener$jscomp$106$$), 0 == $listenerArray$jscomp$1$$.length && (delete this.$b$[$type$jscomp$163_typeStr$jscomp$1$$], this.$c$--), !0) : !1;
};
var $JSCompiler_StaticMethods_removeByKey$$ = function $$JSCompiler_StaticMethods_removeByKey$$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$jscomp$107$$) {
  var $type$jscomp$164$$ = $listener$jscomp$107$$.type;
  $type$jscomp$164$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$b$ && $goog$array$remove$$($JSCompiler_StaticMethods_removeByKey$self$$.$b$[$type$jscomp$164$$], $listener$jscomp$107$$) && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$jscomp$107$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$b$[$type$jscomp$164$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$b$[$type$jscomp$164$$], $JSCompiler_StaticMethods_removeByKey$self$$.$c$--));
};
$goog$events$ListenerMap$$.prototype.removeAll = function $$goog$events$ListenerMap$$$$removeAll$($opt_type$jscomp$11_typeStr$jscomp$2$$) {
  $opt_type$jscomp$11_typeStr$jscomp$2$$ = $opt_type$jscomp$11_typeStr$jscomp$2$$ && $opt_type$jscomp$11_typeStr$jscomp$2$$.toString();
  var $count$jscomp$21$$ = 0, $type$jscomp$165$$;
  for ($type$jscomp$165$$ in this.$b$) {
    if (!$opt_type$jscomp$11_typeStr$jscomp$2$$ || $type$jscomp$165$$ == $opt_type$jscomp$11_typeStr$jscomp$2$$) {
      for (var $listenerArray$jscomp$2$$ = this.$b$[$type$jscomp$165$$], $i$jscomp$149$$ = 0; $i$jscomp$149$$ < $listenerArray$jscomp$2$$.length; $i$jscomp$149$$++) {
        ++$count$jscomp$21$$, $JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$jscomp$2$$[$i$jscomp$149$$]);
      }
      delete this.$b$[$type$jscomp$165$$];
      this.$c$--;
    }
  }
  return $count$jscomp$21$$;
};
var $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$ = function $$JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$$($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$, $i$jscomp$151_type$jscomp$167$$, $listener$jscomp$108$$, $capture$jscomp$2$$, $opt_listenerScope$jscomp$2$$) {
  $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$.$b$[$i$jscomp$151_type$jscomp$167$$.toString()];
  $i$jscomp$151_type$jscomp$167$$ = -1;
  $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$ && ($i$jscomp$151_type$jscomp$167$$ = $goog$events$ListenerMap$findListenerIndex_$$($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$, $listener$jscomp$108$$, $capture$jscomp$2$$, $opt_listenerScope$jscomp$2$$));
  return -1 < $i$jscomp$151_type$jscomp$167$$ ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$[$i$jscomp$151_type$jscomp$167$$] : null;
}, $goog$events$ListenerMap$findListenerIndex_$$ = function $$goog$events$ListenerMap$findListenerIndex_$$$($listenerArray$jscomp$6$$, $listener$jscomp$109$$, $opt_useCapture$jscomp$11$$, $opt_listenerScope$jscomp$3$$) {
  for (var $i$jscomp$153$$ = 0; $i$jscomp$153$$ < $listenerArray$jscomp$6$$.length; ++$i$jscomp$153$$) {
    var $listenerObj$jscomp$3$$ = $listenerArray$jscomp$6$$[$i$jscomp$153$$];
    if (!$listenerObj$jscomp$3$$.removed && $listenerObj$jscomp$3$$.listener == $listener$jscomp$109$$ && $listenerObj$jscomp$3$$.capture == !!$opt_useCapture$jscomp$11$$ && $listenerObj$jscomp$3$$.$handler$ == $opt_listenerScope$jscomp$3$$) {
      return $i$jscomp$153$$;
    }
  }
  return -1;
};
var $goog$events$LISTENER_MAP_PROP_$$ = "closure_lm_" + (1e6 * Math.random() | 0), $goog$events$onStringMap_$$ = {}, $goog$events$listenerCountEstimate_$$ = 0, $goog$events$listen$$ = function $$goog$events$listen$$$($src$jscomp$12$$, $type$jscomp$169$$, $listener$jscomp$110$$, $opt_options$jscomp$93$$, $opt_handler$jscomp$1$$) {
  if ($opt_options$jscomp$93$$ && $opt_options$jscomp$93$$.once) {
    return $goog$events$listenOnce$$($src$jscomp$12$$, $type$jscomp$169$$, $listener$jscomp$110$$, $opt_options$jscomp$93$$, $opt_handler$jscomp$1$$);
  }
  if ($goog$isArray$$($type$jscomp$169$$)) {
    for (var $i$jscomp$154$$ = 0; $i$jscomp$154$$ < $type$jscomp$169$$.length; $i$jscomp$154$$++) {
      $goog$events$listen$$($src$jscomp$12$$, $type$jscomp$169$$[$i$jscomp$154$$], $listener$jscomp$110$$, $opt_options$jscomp$93$$, $opt_handler$jscomp$1$$);
    }
    return null;
  }
  $listener$jscomp$110$$ = $goog$events$wrapListener$$($listener$jscomp$110$$);
  return $goog$events$Listenable$isImplementedBy$$($src$jscomp$12$$) ? $src$jscomp$12$$.listen($type$jscomp$169$$, $listener$jscomp$110$$, $goog$isObject$$($opt_options$jscomp$93$$) ? !!$opt_options$jscomp$93$$.capture : !!$opt_options$jscomp$93$$, $opt_handler$jscomp$1$$) : $goog$events$listen_$$($src$jscomp$12$$, $type$jscomp$169$$, $listener$jscomp$110$$, !1, $opt_options$jscomp$93$$, $opt_handler$jscomp$1$$);
}, $goog$events$listen_$$ = function $$goog$events$listen_$$$($src$jscomp$13$$, $type$jscomp$170$$, $listener$jscomp$111_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$1$$, $opt_options$jscomp$94$$, $opt_handler$jscomp$2$$) {
  if (!$type$jscomp$170$$) {
    throw Error("Invalid event type");
  }
  var $capture$jscomp$4$$ = $goog$isObject$$($opt_options$jscomp$94$$) ? !!$opt_options$jscomp$94$$.capture : !!$opt_options$jscomp$94$$, $listenerMap$$ = $goog$events$getListenerMap_$$($src$jscomp$13$$);
  $listenerMap$$ || ($src$jscomp$13$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerMap$$ = new $goog$events$ListenerMap$$($src$jscomp$13$$));
  $listener$jscomp$111_listenerObj$jscomp$4$$ = $listenerMap$$.add($type$jscomp$170$$, $listener$jscomp$111_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$1$$, $capture$jscomp$4$$, $opt_handler$jscomp$2$$);
  if ($listener$jscomp$111_listenerObj$jscomp$4$$.proxy) {
    return $listener$jscomp$111_listenerObj$jscomp$4$$;
  }
  $callOnce$jscomp$1_proxy$jscomp$1$$ = $goog$events$getProxy$$();
  $listener$jscomp$111_listenerObj$jscomp$4$$.proxy = $callOnce$jscomp$1_proxy$jscomp$1$$;
  $callOnce$jscomp$1_proxy$jscomp$1$$.src = $src$jscomp$13$$;
  $callOnce$jscomp$1_proxy$jscomp$1$$.listener = $listener$jscomp$111_listenerObj$jscomp$4$$;
  if ($src$jscomp$13$$.addEventListener) {
    $goog$events$BrowserFeature$PASSIVE_EVENTS$$ || ($opt_options$jscomp$94$$ = $capture$jscomp$4$$), void 0 === $opt_options$jscomp$94$$ && ($opt_options$jscomp$94$$ = !1), $src$jscomp$13$$.addEventListener($type$jscomp$170$$.toString(), $callOnce$jscomp$1_proxy$jscomp$1$$, $opt_options$jscomp$94$$);
  } else {
    if ($src$jscomp$13$$.attachEvent) {
      $src$jscomp$13$$.attachEvent($goog$events$getOnString_$$($type$jscomp$170$$.toString()), $callOnce$jscomp$1_proxy$jscomp$1$$);
    } else {
      if ($src$jscomp$13$$.addListener && $src$jscomp$13$$.removeListener) {
        $src$jscomp$13$$.addListener($callOnce$jscomp$1_proxy$jscomp$1$$);
      } else {
        throw Error("addEventListener and attachEvent are unavailable.");
      }
    }
  }
  $goog$events$listenerCountEstimate_$$++;
  return $listener$jscomp$111_listenerObj$jscomp$4$$;
}, $goog$events$getProxy$$ = function $$goog$events$getProxy$$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$jscomp$56$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$jscomp$56$$.src, $f$jscomp$56$$.listener, $eventObject$$);
  } : function($eventObject$jscomp$1_v$jscomp$1$$) {
    $eventObject$jscomp$1_v$jscomp$1$$ = $proxyCallbackFunction$$.call($f$jscomp$56$$.src, $f$jscomp$56$$.listener, $eventObject$jscomp$1_v$jscomp$1$$);
    if (!$eventObject$jscomp$1_v$jscomp$1$$) {
      return $eventObject$jscomp$1_v$jscomp$1$$;
    }
  };
  return $f$jscomp$56$$;
}, $goog$events$listenOnce$$ = function $$goog$events$listenOnce$$$($src$jscomp$14$$, $type$jscomp$171$$, $listener$jscomp$112$$, $opt_options$jscomp$95$$, $opt_handler$jscomp$3$$) {
  if ($goog$isArray$$($type$jscomp$171$$)) {
    for (var $i$jscomp$155$$ = 0; $i$jscomp$155$$ < $type$jscomp$171$$.length; $i$jscomp$155$$++) {
      $goog$events$listenOnce$$($src$jscomp$14$$, $type$jscomp$171$$[$i$jscomp$155$$], $listener$jscomp$112$$, $opt_options$jscomp$95$$, $opt_handler$jscomp$3$$);
    }
    return null;
  }
  $listener$jscomp$112$$ = $goog$events$wrapListener$$($listener$jscomp$112$$);
  return $goog$events$Listenable$isImplementedBy$$($src$jscomp$14$$) ? $src$jscomp$14$$.$f$.add(String($type$jscomp$171$$), $listener$jscomp$112$$, !0, $goog$isObject$$($opt_options$jscomp$95$$) ? !!$opt_options$jscomp$95$$.capture : !!$opt_options$jscomp$95$$, $opt_handler$jscomp$3$$) : $goog$events$listen_$$($src$jscomp$14$$, $type$jscomp$171$$, $listener$jscomp$112$$, !0, $opt_options$jscomp$95$$, $opt_handler$jscomp$3$$);
}, $goog$events$unlisten$$ = function $$goog$events$unlisten$$$($listenerMap$jscomp$1_src$jscomp$16$$, $listenerObj$jscomp$5_type$jscomp$172$$, $listener$jscomp$114$$, $capture$jscomp$6_opt_options$jscomp$96$$, $opt_handler$jscomp$5$$) {
  if ($goog$isArray$$($listenerObj$jscomp$5_type$jscomp$172$$)) {
    for (var $i$jscomp$156$$ = 0; $i$jscomp$156$$ < $listenerObj$jscomp$5_type$jscomp$172$$.length; $i$jscomp$156$$++) {
      $goog$events$unlisten$$($listenerMap$jscomp$1_src$jscomp$16$$, $listenerObj$jscomp$5_type$jscomp$172$$[$i$jscomp$156$$], $listener$jscomp$114$$, $capture$jscomp$6_opt_options$jscomp$96$$, $opt_handler$jscomp$5$$);
    }
  } else {
    $capture$jscomp$6_opt_options$jscomp$96$$ = $goog$isObject$$($capture$jscomp$6_opt_options$jscomp$96$$) ? !!$capture$jscomp$6_opt_options$jscomp$96$$.capture : !!$capture$jscomp$6_opt_options$jscomp$96$$, $listener$jscomp$114$$ = $goog$events$wrapListener$$($listener$jscomp$114$$), $goog$events$Listenable$isImplementedBy$$($listenerMap$jscomp$1_src$jscomp$16$$) ? $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($listenerMap$jscomp$1_src$jscomp$16$$, $listenerObj$jscomp$5_type$jscomp$172$$, 
    $listener$jscomp$114$$, $capture$jscomp$6_opt_options$jscomp$96$$, $opt_handler$jscomp$5$$) : $listenerMap$jscomp$1_src$jscomp$16$$ && ($listenerMap$jscomp$1_src$jscomp$16$$ = $goog$events$getListenerMap_$$($listenerMap$jscomp$1_src$jscomp$16$$)) && ($listenerObj$jscomp$5_type$jscomp$172$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$jscomp$1_src$jscomp$16$$, $listenerObj$jscomp$5_type$jscomp$172$$, $listener$jscomp$114$$, $capture$jscomp$6_opt_options$jscomp$96$$, 
    $opt_handler$jscomp$5$$)) && $goog$events$unlistenByKey$$($listenerObj$jscomp$5_type$jscomp$172$$);
  }
}, $goog$events$unlistenByKey$$ = function $$goog$events$unlistenByKey$$$($key$jscomp$115$$) {
  if ("number" != typeof $key$jscomp$115$$ && $key$jscomp$115$$ && !$key$jscomp$115$$.removed) {
    var $src$jscomp$17$$ = $key$jscomp$115$$.src;
    if ($goog$events$Listenable$isImplementedBy$$($src$jscomp$17$$)) {
      $JSCompiler_StaticMethods_removeByKey$$($src$jscomp$17$$.$f$, $key$jscomp$115$$);
    } else {
      var $listenerMap$jscomp$2_type$jscomp$173$$ = $key$jscomp$115$$.type, $proxy$jscomp$2$$ = $key$jscomp$115$$.proxy;
      $src$jscomp$17$$.removeEventListener ? $src$jscomp$17$$.removeEventListener($listenerMap$jscomp$2_type$jscomp$173$$, $proxy$jscomp$2$$, $key$jscomp$115$$.capture) : $src$jscomp$17$$.detachEvent ? $src$jscomp$17$$.detachEvent($goog$events$getOnString_$$($listenerMap$jscomp$2_type$jscomp$173$$), $proxy$jscomp$2$$) : $src$jscomp$17$$.addListener && $src$jscomp$17$$.removeListener && $src$jscomp$17$$.removeListener($proxy$jscomp$2$$);
      $goog$events$listenerCountEstimate_$$--;
      ($listenerMap$jscomp$2_type$jscomp$173$$ = $goog$events$getListenerMap_$$($src$jscomp$17$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$jscomp$2_type$jscomp$173$$, $key$jscomp$115$$), 0 == $listenerMap$jscomp$2_type$jscomp$173$$.$c$ && ($listenerMap$jscomp$2_type$jscomp$173$$.src = null, $src$jscomp$17$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$jscomp$115$$);
    }
  }
}, $goog$events$getOnString_$$ = function $$goog$events$getOnString_$$$($type$jscomp$177$$) {
  return $type$jscomp$177$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$jscomp$177$$] : $goog$events$onStringMap_$$[$type$jscomp$177$$] = "on" + $type$jscomp$177$$;
}, $goog$events$fireListeners_$$ = function $$goog$events$fireListeners_$$$($i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$, $listenerArray$jscomp$7_type$jscomp$179$$, $capture$jscomp$10$$, $eventObject$jscomp$3$$) {
  var $retval$$ = !0;
  if ($i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$ = $goog$events$getListenerMap_$$($i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$)) {
    if ($listenerArray$jscomp$7_type$jscomp$179$$ = $i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$.$b$[$listenerArray$jscomp$7_type$jscomp$179$$.toString()]) {
      for ($listenerArray$jscomp$7_type$jscomp$179$$ = $listenerArray$jscomp$7_type$jscomp$179$$.concat(), $i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$ = 0; $i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$ < $listenerArray$jscomp$7_type$jscomp$179$$.length; $i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$++) {
        var $listener$jscomp$118_result$jscomp$27$$ = $listenerArray$jscomp$7_type$jscomp$179$$[$i$jscomp$158_listenerMap$jscomp$7_obj$jscomp$106$$];
        $listener$jscomp$118_result$jscomp$27$$ && $listener$jscomp$118_result$jscomp$27$$.capture == $capture$jscomp$10$$ && !$listener$jscomp$118_result$jscomp$27$$.removed && ($listener$jscomp$118_result$jscomp$27$$ = $goog$events$fireListener$$($listener$jscomp$118_result$jscomp$27$$, $eventObject$jscomp$3$$), $retval$$ = $retval$$ && !1 !== $listener$jscomp$118_result$jscomp$27$$);
      }
    }
  }
  return $retval$$;
}, $goog$events$fireListener$$ = function $$goog$events$fireListener$$$($listener$jscomp$119$$, $eventObject$jscomp$4$$) {
  var $listenerFn$$ = $listener$jscomp$119$$.listener, $listenerHandler$$ = $listener$jscomp$119$$.$handler$ || $listener$jscomp$119$$.src;
  $listener$jscomp$119$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$jscomp$119$$);
  return $listenerFn$$.call($listenerHandler$$, $eventObject$jscomp$4$$);
}, $goog$events$handleBrowserEvent_$$ = function $$goog$events$handleBrowserEvent_$$$($listener$jscomp$120_type$jscomp$180$$, $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$) {
  if ($listener$jscomp$120_type$jscomp$180$$.removed) {
    return !0;
  }
  if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    if (!$JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$) {
      a: {
        $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$ = ["window", "event"];
        for (var $cur$jscomp$inline_572_retval$jscomp$1$$ = $goog$global$$, $ancestors_i$jscomp$inline_573_ieEvent$$ = 0; $ancestors_i$jscomp$inline_573_ieEvent$$ < $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$.length; $ancestors_i$jscomp$inline_573_ieEvent$$++) {
          if ($cur$jscomp$inline_572_retval$jscomp$1$$ = $cur$jscomp$inline_572_retval$jscomp$1$$[$JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$[$ancestors_i$jscomp$inline_573_ieEvent$$]], null == $cur$jscomp$inline_572_retval$jscomp$1$$) {
            $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$ = null;
            break a;
          }
        }
        $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$ = $cur$jscomp$inline_572_retval$jscomp$1$$;
      }
    }
    $ancestors_i$jscomp$inline_573_ieEvent$$ = $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$;
    $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$ = new $goog$events$BrowserEvent$$($ancestors_i$jscomp$inline_573_ieEvent$$, this);
    $cur$jscomp$inline_572_retval$jscomp$1$$ = !0;
    if (!(0 > $ancestors_i$jscomp$inline_573_ieEvent$$.keyCode || void 0 != $ancestors_i$jscomp$inline_573_ieEvent$$.returnValue)) {
      a: {
        var $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ = !1;
        if (0 == $ancestors_i$jscomp$inline_573_ieEvent$$.keyCode) {
          try {
            $ancestors_i$jscomp$inline_573_ieEvent$$.keyCode = -1;
            break a;
          } catch ($ex$jscomp$inline_577$$) {
            $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ = !0;
          }
        }
        if ($i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ || void 0 == $ancestors_i$jscomp$inline_573_ieEvent$$.returnValue) {
          $ancestors_i$jscomp$inline_573_ieEvent$$.returnValue = !0;
        }
      }
      $ancestors_i$jscomp$inline_573_ieEvent$$ = [];
      for ($i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ = $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$.$b$; $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$; $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ = $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$.parentNode) {
        $ancestors_i$jscomp$inline_573_ieEvent$$.push($i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$);
      }
      $listener$jscomp$120_type$jscomp$180$$ = $listener$jscomp$120_type$jscomp$180$$.type;
      for ($i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ = $ancestors_i$jscomp$inline_573_ieEvent$$.length - 1; 0 <= $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$; $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$--) {
        $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$.$b$ = $ancestors_i$jscomp$inline_573_ieEvent$$[$i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$];
        var $result$jscomp$28$$ = $goog$events$fireListeners_$$($ancestors_i$jscomp$inline_573_ieEvent$$[$i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$], $listener$jscomp$120_type$jscomp$180$$, !0, $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$);
        $cur$jscomp$inline_572_retval$jscomp$1$$ = $cur$jscomp$inline_572_retval$jscomp$1$$ && $result$jscomp$28$$;
      }
      for ($i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ = 0; $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$ < $ancestors_i$jscomp$inline_573_ieEvent$$.length; $i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$++) {
        $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$.$b$ = $ancestors_i$jscomp$inline_573_ieEvent$$[$i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$], $result$jscomp$28$$ = $goog$events$fireListeners_$$($ancestors_i$jscomp$inline_573_ieEvent$$[$i$jscomp$159_parent$jscomp$5_useReturnValue$jscomp$inline_576$$], $listener$jscomp$120_type$jscomp$180$$, !1, $JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$), $cur$jscomp$inline_572_retval$jscomp$1$$ = 
        $cur$jscomp$inline_572_retval$jscomp$1$$ && $result$jscomp$28$$;
      }
    }
    return $cur$jscomp$inline_572_retval$jscomp$1$$;
  }
  return $goog$events$fireListener$$($listener$jscomp$120_type$jscomp$180$$, new $goog$events$BrowserEvent$$($JSCompiler_temp$jscomp$9_evt$jscomp$32_opt_evt_parts$jscomp$inline_571$$, this));
}, $goog$events$getListenerMap_$$ = function $$goog$events$getListenerMap_$$$($listenerMap$jscomp$8_src$jscomp$21$$) {
  $listenerMap$jscomp$8_src$jscomp$21$$ = $listenerMap$jscomp$8_src$jscomp$21$$[$goog$events$LISTENER_MAP_PROP_$$];
  return $listenerMap$jscomp$8_src$jscomp$21$$ instanceof $goog$events$ListenerMap$$ ? $listenerMap$jscomp$8_src$jscomp$21$$ : null;
}, $goog$events$LISTENER_WRAPPER_PROP_$$ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0), $goog$events$wrapListener$$ = function $$goog$events$wrapListener$$$($listener$jscomp$121$$) {
  if ($goog$isFunction$$($listener$jscomp$121$$)) {
    return $listener$jscomp$121$$;
  }
  $listener$jscomp$121$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$jscomp$121$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function $$listener$jscomp$121$$$$goog$events$LISTENER_WRAPPER_PROP_$$$($e$jscomp$44$$) {
    return $listener$jscomp$121$$.handleEvent($e$jscomp$44$$);
  });
  return $listener$jscomp$121$$[$goog$events$LISTENER_WRAPPER_PROP_$$];
};
var $goog$events$EventTarget$$ = function $$goog$events$EventTarget$$$() {
  $goog$Disposable$$.call(this);
  this.$f$ = new $goog$events$ListenerMap$$(this);
  this.$L$ = this;
  this.$H$ = null;
};
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$goog$events$EventTarget$$.prototype[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] = !0;
$goog$events$EventTarget$$.prototype.removeEventListener = function $$goog$events$EventTarget$$$$removeEventListener$($type$jscomp$182$$, $handler$jscomp$9$$, $opt_capture$jscomp$3$$, $opt_handlerScope$jscomp$1$$) {
  $goog$events$unlisten$$(this, $type$jscomp$182$$, $handler$jscomp$9$$, $opt_capture$jscomp$3$$, $opt_handlerScope$jscomp$1$$);
};
var $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$ = function $$JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$$($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$, $e$jscomp$45_e$jscomp$inline_582$$) {
  var $ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$, $ancestor_type$jscomp$inline_584$$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$.$H$;
  if ($ancestor_type$jscomp$inline_584$$) {
    for ($ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$ = []; $ancestor_type$jscomp$inline_584$$; $ancestor_type$jscomp$inline_584$$ = $ancestor_type$jscomp$inline_584$$.$H$) {
      $ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$.push($ancestor_type$jscomp$inline_584$$);
    }
  }
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$.$L$;
  $ancestor_type$jscomp$inline_584$$ = $e$jscomp$45_e$jscomp$inline_582$$.type || $e$jscomp$45_e$jscomp$inline_582$$;
  if ($goog$isString$$($e$jscomp$45_e$jscomp$inline_582$$)) {
    $e$jscomp$45_e$jscomp$inline_582$$ = new $goog$events$Event$$($e$jscomp$45_e$jscomp$inline_582$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$);
  } else {
    if ($e$jscomp$45_e$jscomp$inline_582$$ instanceof $goog$events$Event$$) {
      $e$jscomp$45_e$jscomp$inline_582$$.target = $e$jscomp$45_e$jscomp$inline_582$$.target || $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$;
    } else {
      var $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$ = $e$jscomp$45_e$jscomp$inline_582$$;
      $e$jscomp$45_e$jscomp$inline_582$$ = new $goog$events$Event$$($ancestor_type$jscomp$inline_584$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$);
      $goog$object$extend$$($e$jscomp$45_e$jscomp$inline_582$$, $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$);
    }
  }
  $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$ = !0;
  if ($ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$) {
    for (var $i$jscomp$inline_588$$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$.length - 1; 0 <= $i$jscomp$inline_588$$; $i$jscomp$inline_588$$--) {
      var $currentTarget$jscomp$inline_587$$ = $e$jscomp$45_e$jscomp$inline_582$$.$b$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$[$i$jscomp$inline_588$$];
      $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_587$$, $ancestor_type$jscomp$inline_584$$, !0, $e$jscomp$45_e$jscomp$inline_582$$) && $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$;
    }
  }
  $currentTarget$jscomp$inline_587$$ = $e$jscomp$45_e$jscomp$inline_582$$.$b$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_581$$;
  $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_587$$, $ancestor_type$jscomp$inline_584$$, !0, $e$jscomp$45_e$jscomp$inline_582$$) && $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$;
  $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_587$$, $ancestor_type$jscomp$inline_584$$, !1, $e$jscomp$45_e$jscomp$inline_582$$) && $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$;
  if ($ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$) {
    for ($i$jscomp$inline_588$$ = 0; $i$jscomp$inline_588$$ < $ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$.length; $i$jscomp$inline_588$$++) {
      $currentTarget$jscomp$inline_587$$ = $e$jscomp$45_e$jscomp$inline_582$$.$b$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_583$$[$i$jscomp$inline_588$$], $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_587$$, $ancestor_type$jscomp$inline_584$$, !1, $e$jscomp$45_e$jscomp$inline_582$$) && $oldEvent$jscomp$inline_585_rv$jscomp$inline_586$$;
    }
  }
};
$goog$events$EventTarget$$.prototype.$disposeInternal$ = function $$goog$events$EventTarget$$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  this.$f$ && this.$f$.removeAll(void 0);
  this.$H$ = null;
};
$goog$events$EventTarget$$.prototype.listen = function $$goog$events$EventTarget$$$$listen$($type$jscomp$183$$, $listener$jscomp$122$$, $opt_useCapture$jscomp$12$$, $opt_listenerScope$jscomp$4$$) {
  return this.$f$.add(String($type$jscomp$183$$), $listener$jscomp$122$$, !1, $opt_useCapture$jscomp$12$$, $opt_listenerScope$jscomp$4$$);
};
var $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$ = function $$JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$$($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$self$$, $type$jscomp$185$$, $listener$jscomp$124$$, $opt_useCapture$jscomp$14$$, $opt_listenerScope$jscomp$6$$) {
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$self$$.$f$.remove(String($type$jscomp$185$$), $listener$jscomp$124$$, $opt_useCapture$jscomp$14$$, $opt_listenerScope$jscomp$6$$);
}, $JSCompiler_StaticMethods_fireListeners$$ = function $$JSCompiler_StaticMethods_fireListeners$$$($JSCompiler_StaticMethods_fireListeners$self$$, $listenerArray$jscomp$8_type$jscomp$186$$, $capture$jscomp$11$$, $eventObject$jscomp$5$$) {
  $listenerArray$jscomp$8_type$jscomp$186$$ = $JSCompiler_StaticMethods_fireListeners$self$$.$f$.$b$[String($listenerArray$jscomp$8_type$jscomp$186$$)];
  if (!$listenerArray$jscomp$8_type$jscomp$186$$) {
    return !0;
  }
  $listenerArray$jscomp$8_type$jscomp$186$$ = $listenerArray$jscomp$8_type$jscomp$186$$.concat();
  for (var $rv$jscomp$18$$ = !0, $i$jscomp$160$$ = 0; $i$jscomp$160$$ < $listenerArray$jscomp$8_type$jscomp$186$$.length; ++$i$jscomp$160$$) {
    var $listener$jscomp$125$$ = $listenerArray$jscomp$8_type$jscomp$186$$[$i$jscomp$160$$];
    if ($listener$jscomp$125$$ && !$listener$jscomp$125$$.removed && $listener$jscomp$125$$.capture == $capture$jscomp$11$$) {
      var $listenerFn$jscomp$1$$ = $listener$jscomp$125$$.listener, $listenerHandler$jscomp$1$$ = $listener$jscomp$125$$.$handler$ || $listener$jscomp$125$$.src;
      $listener$jscomp$125$$.$callOnce$ && $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_fireListeners$self$$.$f$, $listener$jscomp$125$$);
      $rv$jscomp$18$$ = !1 !== $listenerFn$jscomp$1$$.call($listenerHandler$jscomp$1$$, $eventObject$jscomp$5$$) && $rv$jscomp$18$$;
    }
  }
  return $rv$jscomp$18$$ && 0 != $eventObject$jscomp$5$$.$returnValue_$;
};
var $castApp$TimeoutError$$ = function $$castApp$TimeoutError$$$() {
  $goog$debug$Error$$.call(this);
};
$$jscomp$inherits$$($castApp$TimeoutError$$, $goog$debug$Error$$);
$castApp$TimeoutError$$.prototype.name = "httpTimeout";
var $castApp$utils$logger_$$ = $castApp$log$getLogger$$("utils"), $castApp$utils$waitForEvent$$ = function $$castApp$utils$waitForEvent$$$($eventTarget$$, $eventType$jscomp$6$$) {
  var $resolver$jscomp$2$$ = $goog$Promise$withResolver$$(), $listener$jscomp$127$$ = function $$listener$jscomp$127$$$($event$jscomp$7$$) {
    $resolver$jscomp$2$$.$c$($event$jscomp$7$$);
  };
  $eventTarget$$.listen($eventType$jscomp$6$$, $listener$jscomp$127$$);
  return $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$2$$.$b$, function() {
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($eventTarget$$, $eventType$jscomp$6$$, $listener$jscomp$127$$);
  });
}, $castApp$utils$rethrowIfCancellationError$$ = function $$castApp$utils$rethrowIfCancellationError$$$($err$jscomp$20$$) {
  if ($err$jscomp$20$$ instanceof $goog$Promise$CancellationError$$) {
    throw $err$jscomp$20$$;
  }
}, $castApp$utils$logError$$ = function $$castApp$utils$logError$$$($logger$jscomp$20$$, $msg$jscomp$23$$, $err$jscomp$21$$) {
  $castApp$log$error$$($logger$jscomp$20$$, $msg$jscomp$23$$);
  $err$jscomp$21$$ instanceof Error ? $castApp$log$error$$($logger$jscomp$20$$, $err$jscomp$21$$.stack) : $castApp$log$error$$($logger$jscomp$20$$, String($err$jscomp$21$$));
}, $castApp$utils$setPromiseExpiration$$ = function $$castApp$utils$setPromiseExpiration$$$($promise$jscomp$11$$, $timeout$jscomp$6$$, $opt_timeoutMessage$$) {
  var $timeoutId$jscomp$1$$ = setTimeout(function() {
    $castApp$log$info$$($castApp$utils$logger_$$, $opt_timeoutMessage$$ || "Waited more than " + $timeout$jscomp$6$$ + "ms, timing out.");
    $promise$jscomp$11$$.cancel();
  }, $timeout$jscomp$6$$);
  $JSCompiler_StaticMethods_thenAlways$$($promise$jscomp$11$$, function() {
    clearTimeout($timeoutId$jscomp$1$$);
    $timeoutId$jscomp$1$$ = null;
  });
  return $promise$jscomp$11$$;
}, $castApp$utils$createExpiringResolver$$ = function $$castApp$utils$createExpiringResolver$$$() {
  var $resolver$jscomp$3$$ = $goog$Promise$withResolver$$();
  $castApp$utils$setPromiseExpiration$$($resolver$jscomp$3$$.$b$, 2000, "Waited more than 2000 ms for session, timing out.");
  return $resolver$jscomp$3$$;
};
if ($goog$userAgent$IE$$ && $goog$userAgent$IE$$) {
  try {
    new ActiveXObject("MSXML2.DOMDocument");
  } catch ($e$jscomp$inline_1037$$) {
  }
}
;var $goog$structs$Set$$ = function $$goog$structs$Set$$$($opt_values$jscomp$1_values$jscomp$inline_598$$) {
  this.$b$ = new $goog$structs$Map$$;
  if ($opt_values$jscomp$1_values$jscomp$inline_598$$) {
    $opt_values$jscomp$1_values$jscomp$inline_598$$ = $goog$structs$getValues$$($opt_values$jscomp$1_values$jscomp$inline_598$$);
    for (var $l$jscomp$inline_599$$ = $opt_values$jscomp$1_values$jscomp$inline_598$$.length, $i$jscomp$inline_600$$ = 0; $i$jscomp$inline_600$$ < $l$jscomp$inline_599$$; $i$jscomp$inline_600$$++) {
      this.add($opt_values$jscomp$1_values$jscomp$inline_598$$[$i$jscomp$inline_600$$]);
    }
  }
}, $goog$structs$Set$getKey_$$ = function $$goog$structs$Set$getKey_$$$($val$jscomp$46$$) {
  var $type$jscomp$190$$ = typeof $val$jscomp$46$$;
  return "object" == $type$jscomp$190$$ && $val$jscomp$46$$ || "function" == $type$jscomp$190$$ ? "o" + ($val$jscomp$46$$[$goog$UID_PROPERTY_$$] || ($val$jscomp$46$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)) : $type$jscomp$190$$.substr(0, 1) + $val$jscomp$46$$;
};
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$jscomp$34$$) {
  this.$b$.set($goog$structs$Set$getKey_$$($element$jscomp$34$$), $element$jscomp$34$$);
};
$JSCompiler_prototypeAlias$$.removeAll = function $$JSCompiler_prototypeAlias$$$removeAll$($col$jscomp$12_values$jscomp$25$$) {
  $col$jscomp$12_values$jscomp$25$$ = $goog$structs$getValues$$($col$jscomp$12_values$jscomp$25$$);
  for (var $l$jscomp$21$$ = $col$jscomp$12_values$jscomp$25$$.length, $i$jscomp$170$$ = 0; $i$jscomp$170$$ < $l$jscomp$21$$; $i$jscomp$170$$++) {
    this.remove($col$jscomp$12_values$jscomp$25$$[$i$jscomp$170$$]);
  }
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$jscomp$35$$) {
  return this.$b$.remove($goog$structs$Set$getKey_$$($element$jscomp$35$$));
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$b$.clear();
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$jscomp$36$$) {
  return $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.$b$, $goog$structs$Set$getKey_$$($element$jscomp$36$$));
};
var $JSCompiler_StaticMethods_difference$$ = function $$JSCompiler_StaticMethods_difference$$$($JSCompiler_StaticMethods_difference$self_result$jscomp$32$$, $col$jscomp$15$$) {
  $JSCompiler_StaticMethods_difference$self_result$jscomp$32$$ = new $goog$structs$Set$$($JSCompiler_StaticMethods_difference$self_result$jscomp$32$$);
  $JSCompiler_StaticMethods_difference$self_result$jscomp$32$$.removeAll($col$jscomp$15$$);
  return $JSCompiler_StaticMethods_difference$self_result$jscomp$32$$;
};
$goog$structs$Set$$.prototype.$getValues$ = function $$goog$structs$Set$$$$$getValues$$() {
  return this.$b$.$getValues$();
};
$goog$structs$Set$$.prototype.$__iterator__$ = function $$goog$structs$Set$$$$$__iterator__$$() {
  return this.$b$.$__iterator__$(!1);
};
var $castApp$core$ChromeRuntimeLastError$$ = function $$castApp$core$ChromeRuntimeLastError$$$($opt_msg$jscomp$1$$) {
  $goog$debug$Error$$.call(this, $opt_msg$jscomp$1$$);
};
$$jscomp$inherits$$($castApp$core$ChromeRuntimeLastError$$, $goog$debug$Error$$);
$castApp$core$ChromeRuntimeLastError$$.prototype.name = "chrome.runtime.lastError";
var $castApp$core$NetworkingPrivateApi$$ = function $$castApp$core$NetworkingPrivateApi$$$($onNetworksChanged$$, $onNetworkListChanged$$) {
  this.onNetworksChanged = $onNetworksChanged$$;
  this.onNetworkListChanged = $onNetworkListChanged$$;
};
$goog$exportSymbol$$("castApp.core.NetworkingPrivateApi.WiFiProperties", function() {
});
$goog$exportSymbol$$("castApp.core.NetworkingPrivateApi.NetworkProperties", function() {
});
var $castApp$core$utils$EUREKA_BSSID_RANGES$$ = [[0xfa8fca000000, 0xfa8fcaffffff], [111971074048, 111971139583]], $castApp$core$utils$DEVICE_TYPE_MAPPER_$$ = new function($mappingData$$) {
  this.$c$ = new $goog$structs$Map$$;
  this.$b$ = new $goog$structs$Map$$;
  for (var $dataLength$$ = $mappingData$$.length, $i$jscomp$162$$ = 0; $i$jscomp$162$$ < $dataLength$$; ++$i$jscomp$162$$) {
    this.$c$.set($mappingData$$[$i$jscomp$162$$], $mappingData$$[$i$jscomp$162$$ + 1]), this.$b$.set($mappingData$$[$i$jscomp$162$$ + 1], $mappingData$$[$i$jscomp$162$$]);
  }
}(["a", 4, "b", 2, "c", 3, "d", 5, "e", 6, "f", 1, "g", 7, "h", 8, "i", 9, "j", 10, "k", 11, "l", 12, "m", 13]), $castApp$core$utils$SETUP_DEVICE_WHITELIST_$$ = new $goog$structs$Set$$("bcamde".split("")), $castApp$core$utils$DISPLAY_NOT_SUPPORTED_BY_DEFAULT_$$ = new $goog$structs$Set$$("adghjkl".split("")), $castApp$core$utils$DEVICE_SETTINGS_WHITELIST_$$ = new $goog$structs$Set$$("bcamde".split("")), $castApp$core$utils$REBOOT_SUPPORTED_BY_DEFAULT_$$ = new $goog$structs$Set$$(["b", "c", "a", "m"]), 
$castApp$core$utils$FDR_SUPPORTED_BY_DEFAULT_$$ = new $goog$structs$Set$$(["b", "c", "a", "m"]), $castApp$core$utils$OTHER_LICENSES_NOT_SUPPORTED_$$ = new $goog$structs$Set$$(["d"]);
$castApp$log$getLogger$$("core.utils");
var $castApp$core$utils$getBssidNumberFromString$$ = function $$castApp$core$utils$getBssidNumberFromString$$$($JSCompiler_inline_result$jscomp$16_bssidString$$) {
  if (!/^([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}$/.test($JSCompiler_inline_result$jscomp$16_bssidString$$)) {
    return $goog$asserts$fail$$("Bad BSSID string."), NaN;
  }
  var $JSCompiler_temp_const$jscomp$15$$ = parseInt, $JSCompiler_temp_const$jscomp$954_re$jscomp$inline_604$$ = RegExp;
  var $JSCompiler_inline_result$jscomp$955$$ = ":".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  $JSCompiler_temp_const$jscomp$954_re$jscomp$inline_604$$ = new $JSCompiler_temp_const$jscomp$954_re$jscomp$inline_604$$($JSCompiler_inline_result$jscomp$955$$, "g");
  $JSCompiler_inline_result$jscomp$16_bssidString$$ = $JSCompiler_inline_result$jscomp$16_bssidString$$.replace($JSCompiler_temp_const$jscomp$954_re$jscomp$inline_604$$, "");
  return $JSCompiler_temp_const$jscomp$15$$($JSCompiler_inline_result$jscomp$16_bssidString$$, 16);
}, $castApp$core$utils$bssidsMatch$$ = function $$castApp$core$utils$bssidsMatch$$$($bssid1$$, $bssid2$$) {
  return !(!$bssid1$$ || !$bssid2$$ || 0 !== $goog$string$internal$caseInsensitiveCompare$$($bssid1$$, $bssid2$$));
}, $castApp$core$utils$isEurekaHotSpotBssid$$ = function $$castApp$core$utils$isEurekaHotSpotBssid$$$($bssid$jscomp$3$$) {
  var $value$jscomp$168$$ = $castApp$core$utils$getBssidNumberFromString$$($bssid$jscomp$3$$);
  return !!$goog$array$find$$($castApp$core$utils$EUREKA_BSSID_RANGES$$, function($range$jscomp$6$$) {
    return $value$jscomp$168$$ >= $range$jscomp$6$$[0] && $value$jscomp$168$$ <= $range$jscomp$6$$[1];
  });
}, $castApp$core$utils$isEurekaHotSpot$$ = function $$castApp$core$utils$isEurekaHotSpot$$$($network$jscomp$2$$) {
  return !$network$jscomp$2$$.WiFi || !$network$jscomp$2$$.WiFi.BSSID || $network$jscomp$2$$.WiFi.Security && "None" !== $network$jscomp$2$$.WiFi.Security || !$castApp$core$utils$isEurekaHotSpotBssid$$($network$jscomp$2$$.WiFi.BSSID) ? !1 : $castApp$core$utils$SETUP_DEVICE_WHITELIST_$$.contains($castApp$core$utils$parseCastDeviceSsid$$($network$jscomp$2$$.WiFi.SSID || "").type);
}, $castApp$core$utils$parseCastDeviceSsid$$ = function $$castApp$core$utils$parseCastDeviceSsid$$$($ssid$jscomp$11$$) {
  var $regexResult$$ = /^(.*)\.([^\.]*)$/.exec($ssid$jscomp$11$$), $parsedSuffix$$ = null;
  return $regexResult$$ && 3 === $regexResult$$.length && ($parsedSuffix$$ = $castApp$core$utils$parseSsidSuffix$$($regexResult$$[2])) ? {name:$regexResult$$[1], type:$parsedSuffix$$.type, subtype:$parsedSuffix$$.subtype} : {name:$ssid$jscomp$11$$, type:"c", subtype:null};
}, $castApp$core$utils$parseSsidSuffix$$ = function $$castApp$core$utils$parseSsidSuffix$$$($regexResult$jscomp$1_ssidSuffix$$) {
  $regexResult$jscomp$1_ssidSuffix$$ = /^([a-m])(\d{0,3})$/.exec($regexResult$jscomp$1_ssidSuffix$$);
  if (!$regexResult$jscomp$1_ssidSuffix$$ || 3 !== $regexResult$jscomp$1_ssidSuffix$$.length) {
    return null;
  }
  var $subtype$$ = parseInt($regexResult$jscomp$1_ssidSuffix$$[2], 10);
  return {type:$regexResult$jscomp$1_ssidSuffix$$[1], subtype:isNaN($subtype$$) ? null : $subtype$$};
}, $castApp$core$utils$createFeatures$$ = function $$castApp$core$utils$createFeatures$$$($deviceType$jscomp$6$$, $opt_capabilities$jscomp$2$$) {
  var $features$jscomp$4$$ = new $castApp$protocol$Features$Device$$;
  $features$jscomp$4$$.supportsSetup = $castApp$core$utils$SETUP_DEVICE_WHITELIST_$$.contains($deviceType$jscomp$6$$);
  $opt_capabilities$jscomp$2$$ && !1 === $opt_capabilities$jscomp$2$$.setup_supported && ($features$jscomp$4$$.supportsSetup = !1);
  $features$jscomp$4$$.supportsDisplay = !$castApp$core$utils$DISPLAY_NOT_SUPPORTED_BY_DEFAULT_$$.contains($deviceType$jscomp$6$$);
  $opt_capabilities$jscomp$2$$ && void 0 !== $opt_capabilities$jscomp$2$$.display_supported && ($features$jscomp$4$$.supportsDisplay = !!$opt_capabilities$jscomp$2$$.display_supported);
  if ($castApp$core$utils$DEVICE_SETTINGS_WHITELIST_$$.contains($deviceType$jscomp$6$$)) {
    var $settings$jscomp$2$$ = $features$jscomp$4$$.deviceSettings = new $castApp$protocol$Features$DeviceSettings$$;
    $settings$jscomp$2$$.supportsForgetWiFi = !0;
    $opt_capabilities$jscomp$2$$ && !1 === $opt_capabilities$jscomp$2$$.wifi_supported && ($settings$jscomp$2$$.supportsForgetWiFi = !1);
    $features$jscomp$4$$.supportsSetup || ($settings$jscomp$2$$.supportsForgetWiFi = !1);
    $settings$jscomp$2$$.supportsReboot = $castApp$core$utils$REBOOT_SUPPORTED_BY_DEFAULT_$$.contains($deviceType$jscomp$6$$);
    $opt_capabilities$jscomp$2$$ && void 0 !== $opt_capabilities$jscomp$2$$.reboot_supported && ($settings$jscomp$2$$.supportsReboot = !!$opt_capabilities$jscomp$2$$.reboot_supported);
    $settings$jscomp$2$$.supportsFdr = $castApp$core$utils$FDR_SUPPORTED_BY_DEFAULT_$$.contains($deviceType$jscomp$6$$);
    $opt_capabilities$jscomp$2$$ && void 0 !== $opt_capabilities$jscomp$2$$.fdr_supported && ($settings$jscomp$2$$.supportsFdr = !!$opt_capabilities$jscomp$2$$.fdr_supported);
    $features$jscomp$4$$.supportsSetup || ($settings$jscomp$2$$.supportsFdr = !1);
    $settings$jscomp$2$$.supportsDataCollectionToggle = !0;
    $opt_capabilities$jscomp$2$$ && void 0 !== $opt_capabilities$jscomp$2$$.stats_supported && ($settings$jscomp$2$$.supportsDataCollectionToggle = !!$opt_capabilities$jscomp$2$$.stats_supported);
    $settings$jscomp$2$$.supportsTimeFormatChange = !0;
    $features$jscomp$4$$.supportsDisplay || ($settings$jscomp$2$$.supportsTimeFormatChange = !1);
    $settings$jscomp$2$$.supportsOtherLicenses = !$castApp$core$utils$OTHER_LICENSES_NOT_SUPPORTED_$$.contains($deviceType$jscomp$6$$);
  }
  return $features$jscomp$4$$;
}, $castApp$core$utils$getProtocolDeviceType$$ = function $$castApp$core$utils$getProtocolDeviceType$$$($setupApiDeviceType$$) {
  return $castApp$core$utils$DEVICE_TYPE_MAPPER_$$.$c$.get($setupApiDeviceType$$) || 3;
}, $castApp$core$utils$getProtocolSecurity$$ = function $$castApp$core$utils$getProtocolSecurity$$$($setupApiSecurity$$) {
  switch($setupApiSecurity$$) {
    case 0:
    case 1:
      return 2;
    case 2:
    case 3:
    case 4:
      return 3;
    case 5:
    case 6:
      return 4;
    case 7:
    case 8:
      return 5;
  }
  $goog$asserts$fail$$("Unrecognized setupApi.WpaAuth: " + $setupApiSecurity$$);
  return 2;
}, $castApp$core$utils$getSetupApiSecurity$$ = function $$castApp$core$utils$getSetupApiSecurity$$$($protocolSecurity$$) {
  switch($protocolSecurity$$) {
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 5;
    case 5:
      return 7;
  }
  $goog$asserts$fail$$("Unrecognized protocol.WiFiConfig.Security: " + $protocolSecurity$$);
  return 0;
}, $castApp$core$utils$getProtocolPlayerState$$ = function $$castApp$core$utils$getProtocolPlayerState$$$($castSdkPlayerState$$) {
  switch($castSdkPlayerState$$) {
    case chrome.cast.media.PlayerState.IDLE:
      return 1;
    case chrome.cast.media.PlayerState.PLAYING:
      return 2;
    case chrome.cast.media.PlayerState.PAUSED:
      return 3;
    case chrome.cast.media.PlayerState.BUFFERING:
      return 4;
  }
  $goog$asserts$fail$$("Unrecognized player state" + $castSdkPlayerState$$);
  return 1;
}, $castApp$core$utils$getProtocolSessionStatus$$ = function $$castApp$core$utils$getProtocolSessionStatus$$$($castSdkSessionStatus$$) {
  switch($castSdkSessionStatus$$) {
    case chrome.cast.SessionStatus.CONNECTED:
      return 1;
    case chrome.cast.SessionStatus.DISCONNECTED:
      return 2;
    case chrome.cast.SessionStatus.STOPPED:
      return 3;
  }
  $goog$asserts$fail$$("Unrecognized chrome.cast.SessionStatus: " + $castSdkSessionStatus$$);
  return 2;
}, $castApp$core$utils$createWiFiConfigUiMessage$$ = function $$castApp$core$utils$createWiFiConfigUiMessage$$$($connectWiFi$$, $deviceType$jscomp$7_result$jscomp$33$$) {
  var $state$jscomp$11$$ = 2;
  1 === $connectWiFi$$.$b$ ? $state$jscomp$11$$ = 3 : 2 === $connectWiFi$$.$b$ && ($state$jscomp$11$$ = 4);
  $deviceType$jscomp$7_result$jscomp$33$$ = new $castApp$protocol$WiFiConfig$Show$$($state$jscomp$11$$, $deviceType$jscomp$7_result$jscomp$33$$, [], null);
  $deviceType$jscomp$7_result$jscomp$33$$.selectedNetwork = new $castApp$protocol$WiFiConfig$Network$$($connectWiFi$$.$c$ || null, $connectWiFi$$.msg.ssid, $castApp$core$utils$getProtocolSecurity$$($connectWiFi$$.msg.wpa_auth));
  $connectWiFi$$.$c$ && $deviceType$jscomp$7_result$jscomp$33$$.networks.push($deviceType$jscomp$7_result$jscomp$33$$.selectedNetwork);
  return $deviceType$jscomp$7_result$jscomp$33$$;
}, $castApp$core$utils$createSetEurekaInfoMessage$$ = function $$castApp$core$utils$createSetEurekaInfoMessage$$$($setupApiVersion$jscomp$1_v4_v7$$, $deviceName$jscomp$2$$, $analyticsOptIn$jscomp$1_v3$jscomp$1$$) {
  switch($setupApiVersion$jscomp$1_v4_v7$$) {
    case 3:
      return $analyticsOptIn$jscomp$1_v3$jscomp$1$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV3$$, $analyticsOptIn$jscomp$1_v3$jscomp$1$$.name = $deviceName$jscomp$2$$, $analyticsOptIn$jscomp$1_v3$jscomp$1$$;
    case 4:
    case 5:
    case 6:
      return $setupApiVersion$jscomp$1_v4_v7$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV4$$, $setupApiVersion$jscomp$1_v4_v7$$.name = $deviceName$jscomp$2$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in.crash = $setupApiVersion$jscomp$1_v4_v7$$.opt_in.stats = $analyticsOptIn$jscomp$1_v3$jscomp$1$$, $setupApiVersion$jscomp$1_v4_v7$$;
    default:
      return $setupApiVersion$jscomp$1_v4_v7$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV7$$, $setupApiVersion$jscomp$1_v4_v7$$.name = $deviceName$jscomp$2$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in.stats = $analyticsOptIn$jscomp$1_v3$jscomp$1$$, $setupApiVersion$jscomp$1_v4_v7$$;
  }
}, $castApp$core$utils$isBackdropAppId$$ = function $$castApp$core$utils$isBackdropAppId$$$($appId$jscomp$4$$) {
  return "E8C28D3C" == $appId$jscomp$4$$ || "00000000-0000-0000-0000-000000000000" == $appId$jscomp$4$$;
};
var $castApp$core$CastSdk$$ = function $$castApp$core$CastSdk$$$() {
}, $castApp$core$CastSdkImpl$$ = function $$castApp$core$CastSdkImpl$$$() {
  this.$c$ = {};
  this.$b$ = {};
  $castApp$core$CastSdkImpl$castSdkPromise_$$ || ($castApp$core$CastSdkImpl$castSdkPromise_$$ = new $goog$Promise$$(function($resolve$jscomp$10$$, $reject$jscomp$9$$) {
    window.__onGCastApiAvailable = function($loaded$jscomp$2$$, $err$jscomp$22$$) {
      $loaded$jscomp$2$$ ? $resolve$jscomp$10$$() : ($castApp$log$errorWithCause$$($castApp$core$CastSdkImpl$logger_$$, $err$jscomp$22$$, "Cast SDK failed to load."), $reject$jscomp$9$$());
    }.bind(this);
    var $s$jscomp$24$$ = document.createElement("script");
    $s$jscomp$24$$.setAttribute("src", chrome.extension.getURL("cast_sender.js"));
    document.head.appendChild($s$jscomp$24$$);
  }.bind(this)));
};
$goog$inherits$$($castApp$core$CastSdkImpl$$, $castApp$core$CastSdk$$);
var $castApp$core$CastSdkImpl$logger_$$ = $castApp$log$getLogger$$("core.CastSdkImpl"), $castApp$core$CastSdkImpl$castSdkPromise_$$ = null, $JSCompiler_StaticMethods_requestSessionAndContext$$ = function $$JSCompiler_StaticMethods_requestSessionAndContext$$$($JSCompiler_StaticMethods_requestSessionAndContext$self$$, $appId$jscomp$6$$, $sessionId$jscomp$10$$) {
  return $castApp$core$CastSdkImpl$castSdkPromise_$$.then(function() {
    var $key$jscomp$120$$ = $appId$jscomp$6$$ + $sessionId$jscomp$10$$, $existingResolver_resolver$jscomp$6$$ = this.$c$[$key$jscomp$120$$];
    if ($existingResolver_resolver$jscomp$6$$) {
      return $castApp$log$info$$($castApp$core$CastSdkImpl$logger_$$, "Already requested session for appId: " + $appId$jscomp$6$$ + " and sessionId: " + $sessionId$jscomp$10$$ + "."), $existingResolver_resolver$jscomp$6$$.$b$;
    }
    $existingResolver_resolver$jscomp$6$$ = $castApp$utils$createExpiringResolver$$();
    this.$c$[$key$jscomp$120$$] = $existingResolver_resolver$jscomp$6$$;
    var $apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$ = this.$b$[$key$jscomp$120$$];
    $apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$ ? $goog$asserts$fail$$() : ($apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$ = new chrome.cast.SessionRequest($appId$jscomp$6$$), $apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$ = new chrome.cast.ApiConfig($apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$, this.$f$.bind(this), $goog$nullFunction$$, chrome.cast.AutoJoinPolicy.CUSTOM_CONTROLLER_SCOPED), $apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$.invisibleSender = 
    !$castApp$core$utils$isBackdropAppId$$($appId$jscomp$6$$), $apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$ = chrome.cast.initializeWithContext($apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$, $goog$nullFunction$$, function($err$jscomp$23$$) {
      $castApp$log$warningWithCause$$($castApp$core$CastSdkImpl$logger_$$, $err$jscomp$23$$, "Call to request session by id failed ");
    }.bind(this)), this.$b$[$key$jscomp$120$$] = $apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$);
    $castApp$log$fine$$($castApp$core$CastSdkImpl$logger_$$, "Requesting session for appId: " + $appId$jscomp$6$$ + " and sessionID: " + $sessionId$jscomp$10$$);
    chrome.cast.requestSessionByIdWithContext($apiConfig$jscomp$2_apiContext_sessionRequest$jscomp$1$$, $sessionId$jscomp$10$$);
    return $existingResolver_resolver$jscomp$6$$.$b$;
  }.bind($JSCompiler_StaticMethods_requestSessionAndContext$self$$));
};
$castApp$core$CastSdkImpl$$.prototype.$f$ = function $$castApp$core$CastSdkImpl$$$$$f$$($session$jscomp$5$$) {
  var $key$jscomp$121$$ = $session$jscomp$5$$.appId + $session$jscomp$5$$.sessionId, $resolver$jscomp$7$$ = this.$c$[$key$jscomp$121$$];
  $resolver$jscomp$7$$ ? $resolver$jscomp$7$$.$c$({session:$session$jscomp$5$$, context:this.$b$[$key$jscomp$121$$]}) : $castApp$log$warning$$($castApp$core$CastSdkImpl$logger_$$, "Received session afterpromise timed out appId: " + $session$jscomp$5$$.appId + "sessionId: " + $session$jscomp$5$$.sessionId);
};
var $castApp$core$ChromeNetworkingPrivate_$$ = function $$castApp$core$ChromeNetworkingPrivate_$$$() {
  $castApp$core$NetworkingPrivateApi$$.call(this, chrome.networkingPrivate.onNetworksChanged, chrome.networkingPrivate.onNetworkListChanged);
};
$goog$inherits$$($castApp$core$ChromeNetworkingPrivate_$$, $castApp$core$NetworkingPrivateApi$$);
$goog$addSingletonGetter$$($castApp$core$ChromeNetworkingPrivate_$$);
var $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$ = function $$castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$$($resolver$jscomp$8$$) {
  return chrome.runtime.lastError ? ($resolver$jscomp$8$$.$f$(new $castApp$core$ChromeRuntimeLastError$$(chrome.runtime.lastError.message)), !0) : !1;
};
$JSCompiler_prototypeAlias$$ = $castApp$core$ChromeNetworkingPrivate_$$.prototype;
$JSCompiler_prototypeAlias$$.getNetworks = function $$JSCompiler_prototypeAlias$$$getNetworks$($filter$jscomp$6$$) {
  var $resolver$jscomp$9$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.getNetworks($filter$jscomp$6$$, function($networks$jscomp$2$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$9$$) || $resolver$jscomp$9$$.$c$($networks$jscomp$2$$);
  });
  return $resolver$jscomp$9$$.$b$;
};
$JSCompiler_prototypeAlias$$.getProperties = function $$JSCompiler_prototypeAlias$$$getProperties$($guid$jscomp$10$$) {
  var $resolver$jscomp$10$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.getProperties($guid$jscomp$10$$, function($properties$jscomp$9$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$10$$) || $resolver$jscomp$10$$.$c$($properties$jscomp$9$$);
  });
  return $resolver$jscomp$10$$.$b$;
};
$JSCompiler_prototypeAlias$$.requestNetworkScan = function $$JSCompiler_prototypeAlias$$$requestNetworkScan$() {
  chrome.networkingPrivate.requestNetworkScan();
};
$JSCompiler_prototypeAlias$$.startConnect = function $$JSCompiler_prototypeAlias$$$startConnect$($guid$jscomp$11$$) {
  var $resolver$jscomp$11$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.startConnect($guid$jscomp$11$$, function() {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$11$$) || $resolver$jscomp$11$$.$c$();
  });
  return $resolver$jscomp$11$$.$b$;
};
$JSCompiler_prototypeAlias$$.startDisconnect = function $$JSCompiler_prototypeAlias$$$startDisconnect$($guid$jscomp$12$$) {
  var $resolver$jscomp$12$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.startDisconnect($guid$jscomp$12$$, function() {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$12$$) || $resolver$jscomp$12$$.$c$();
  });
  return $resolver$jscomp$12$$.$b$;
};
$JSCompiler_prototypeAlias$$.verifyDestination = function $$JSCompiler_prototypeAlias$$$verifyDestination$($verificationInfo$jscomp$3$$) {
  var $resolver$jscomp$13$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.verifyDestination($verificationInfo$jscomp$3$$, function($result$jscomp$34$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$13$$) || $resolver$jscomp$13$$.$c$($result$jscomp$34$$);
  });
  return $resolver$jscomp$13$$.$b$;
};
$JSCompiler_prototypeAlias$$.verifyAndEncryptData = function $$JSCompiler_prototypeAlias$$$verifyAndEncryptData$($verificationInfo$jscomp$4$$, $data$jscomp$71$$) {
  var $resolver$jscomp$14$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.verifyAndEncryptData($verificationInfo$jscomp$4$$, $data$jscomp$71$$, function($result$jscomp$35$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$14$$) || $resolver$jscomp$14$$.$c$($result$jscomp$35$$);
  });
  return $resolver$jscomp$14$$.$b$;
};
var $castApp$AsyncTaskManager$$ = function $$castApp$AsyncTaskManager$$$() {
  this.$b$ = new $goog$structs$Set$$;
}, $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$ = function $$JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$$($JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$self$$, $task$$) {
  $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$self$$.$b$.add($task$$);
  return $JSCompiler_StaticMethods_thenAlways$$($task$$, function() {
    this.$b$.remove($task$$);
  }.bind($JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$self$$));
}, $JSCompiler_StaticMethods_cancelPendingTasks$$ = function $$JSCompiler_StaticMethods_cancelPendingTasks$$$($JSCompiler_StaticMethods_cancelPendingTasks$self$$) {
  if (0 == $JSCompiler_StaticMethods_cancelPendingTasks$self$$.$b$.$b$.$b$) {
    return $goog$Promise$resolve$$();
  }
  var $tasksToCancel$$ = $JSCompiler_StaticMethods_cancelPendingTasks$self$$.$b$;
  $JSCompiler_StaticMethods_cancelPendingTasks$self$$.$b$ = new $goog$structs$Set$$;
  var $promise$jscomp$12$$ = new $goog$Promise$$(function($resolve$jscomp$11$$) {
    $goog$iter$forEach$$($tasksToCancel$$, function($task$jscomp$1$$) {
      $JSCompiler_StaticMethods_thenAlways$$($task$jscomp$1$$, function() {
        $tasksToCancel$$.remove($task$jscomp$1$$) && 0 == $tasksToCancel$$.$b$.$b$ && $resolve$jscomp$11$$();
      });
      $task$jscomp$1$$.cancel();
    });
  });
  $JSCompiler_StaticMethods_thenAlways$$($promise$jscomp$12$$, function() {
    this.$b$.$b$.$b$ && $castApp$log$warning$$(this.$c$, this.$b$.$b$.$b$ + " new tasks pending after cleanup.");
  }.bind($JSCompiler_StaticMethods_cancelPendingTasks$self$$));
  return $promise$jscomp$12$$;
};
$castApp$AsyncTaskManager$$.prototype.$c$ = $castApp$log$getLogger$$("AsyncTaskManager");
var $castApp$StartStoppable$$ = function $$castApp$StartStoppable$$$($startCallback$$, $opt_resetCallback$$) {
  this.$h$ = $startCallback$$;
  this.$g$ = $opt_resetCallback$$;
  this.$f$ = new $castApp$AsyncTaskManager$$;
  this.$c$ = new $goog$events$EventTarget$$;
  this.$b$ = "stopped";
};
$JSCompiler_prototypeAlias$$ = $castApp$StartStoppable$$.prototype;
$JSCompiler_prototypeAlias$$.$castApp_StartStoppable_prototype$logger_$ = $castApp$log$getLogger$$("StartStoppable");
$JSCompiler_prototypeAlias$$.getState = function $$JSCompiler_prototypeAlias$$$getState$() {
  return this.$b$;
};
$JSCompiler_prototypeAlias$$.$castApp_StartStoppable_prototype$updateState_$ = function $$JSCompiler_prototypeAlias$$$$castApp_StartStoppable_prototype$updateState_$$($newState$$) {
  $newState$$ !== this.$b$ && (this.$b$ = $newState$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$c$, $newState$$), $castApp$log$fine$$(this.$castApp_StartStoppable_prototype$logger_$, "New state: " + $newState$$));
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  switch(this.$b$) {
    case "stopped":
    case "stopping":
      return this.restart();
    case "starting":
    case "stoppingStartPending":
      return $JSCompiler_StaticMethods_createCancelableStartPromise_$$(this);
    case "started":
      return $goog$Promise$resolve$$();
    default:
      return $goog$asserts$fail$$("Unknown state: " + this.$b$), $goog$Promise$resolve$$();
  }
};
$JSCompiler_prototypeAlias$$.restart = function $$JSCompiler_prototypeAlias$$$restart$() {
  switch(this.$b$) {
    case "starting":
    case "started":
      this.$castApp_StartStoppable_prototype$updateState_$("stoppingStartPending");
      $JSCompiler_StaticMethods_runStopCommand_$$(this);
      break;
    case "stopping":
      this.$castApp_StartStoppable_prototype$updateState_$("stoppingStartPending");
      break;
    case "stoppingStartPending":
      break;
    case "stopped":
      this.$castApp_StartStoppable_prototype$updateState_$("starting");
      $JSCompiler_StaticMethods_runStartCommand_$$(this);
      break;
    default:
      $goog$asserts$fail$$("Unknown state: " + this.$b$);
  }
  return $JSCompiler_StaticMethods_createCancelableStartPromise_$$(this);
};
var $JSCompiler_StaticMethods_createCancelableStartPromise_$$ = function $$JSCompiler_StaticMethods_createCancelableStartPromise_$$$($JSCompiler_StaticMethods_createCancelableStartPromise_$self$$) {
  var $waitingTasks$$ = new $castApp$AsyncTaskManager$$;
  return $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$(new $goog$Promise$$(function($resolve$jscomp$12$$, $reject$jscomp$10$$) {
    $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($waitingTasks$$, $castApp$utils$waitForEvent$$(this.$c$, "started")).then(function() {
      $resolve$jscomp$12$$();
    });
    $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($waitingTasks$$, $castApp$utils$waitForEvent$$(this.$c$, "stopped")).then(function() {
      $reject$jscomp$10$$();
    });
  }.bind($JSCompiler_StaticMethods_createCancelableStartPromise_$self$$)), function($err$jscomp$24$$) {
    $err$jscomp$24$$ instanceof $goog$Promise$CancellationError$$ && this.stop();
    throw $err$jscomp$24$$;
  }, $JSCompiler_StaticMethods_createCancelableStartPromise_$self$$), function() {
    $JSCompiler_StaticMethods_cancelPendingTasks$$($waitingTasks$$);
  });
};
$castApp$StartStoppable$$.prototype.stop = function $$castApp$StartStoppable$$$$stop$() {
  if ("stopped" === this.$b$) {
    return $goog$Promise$resolve$$();
  }
  var $prevState$$ = this.$b$;
  this.$castApp_StartStoppable_prototype$updateState_$("stopping");
  "starting" !== $prevState$$ && "started" !== $prevState$$ || $JSCompiler_StaticMethods_runStopCommand_$$(this);
  return $castApp$utils$waitForEvent$$(this.$c$, "stopped");
};
var $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$ = function $$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$, $task$jscomp$2$$) {
  if ("starting" === $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$.$b$ || "started" === $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$.$b$) {
    return $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$.$f$, $task$jscomp$2$$), $task$jscomp$2$$;
  }
  $task$jscomp$2$$.cancel();
  return $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
}, $JSCompiler_StaticMethods_waitUntilStarted$$ = function $$JSCompiler_StaticMethods_waitUntilStarted$$$($JSCompiler_StaticMethods_waitUntilStarted$self$$) {
  return "started" === $JSCompiler_StaticMethods_waitUntilStarted$self$$.$b$ ? $goog$Promise$resolve$$() : $castApp$utils$waitForEvent$$($JSCompiler_StaticMethods_waitUntilStarted$self$$.$c$, "started");
}, $JSCompiler_StaticMethods_runStopCommand_$$ = function $$JSCompiler_StaticMethods_runStopCommand_$$$($JSCompiler_StaticMethods_runStopCommand_$self$$) {
  $JSCompiler_StaticMethods_cancelPendingTasks$$($JSCompiler_StaticMethods_runStopCommand_$self$$.$f$).then(function() {
    try {
      if (this.$g$) {
        return this.$g$();
      }
    } catch ($err$jscomp$25$$) {
      $castApp$utils$logError$$(this.$castApp_StartStoppable_prototype$logger_$, "Exception in reset callback.", $err$jscomp$25$$);
    }
  }.bind($JSCompiler_StaticMethods_runStopCommand_$self$$)).then(function() {
    "stoppingStartPending" === this.$b$ ? (this.$castApp_StartStoppable_prototype$updateState_$("starting"), $JSCompiler_StaticMethods_runStartCommand_$$(this)) : this.$castApp_StartStoppable_prototype$updateState_$("stopped");
  }.bind($JSCompiler_StaticMethods_runStopCommand_$self$$));
}, $JSCompiler_StaticMethods_runStartCommand_$$ = function $$JSCompiler_StaticMethods_runStartCommand_$$$($JSCompiler_StaticMethods_runStartCommand_$self$$) {
  var $startCallbackPromise$$ = null;
  try {
    $startCallbackPromise$$ = $JSCompiler_StaticMethods_runStartCommand_$self$$.$h$();
  } catch ($err$jscomp$26$$) {
    $castApp$utils$logError$$($JSCompiler_StaticMethods_runStartCommand_$self$$.$castApp_StartStoppable_prototype$logger_$, "Exception in reset callback.", $err$jscomp$26$$), $startCallbackPromise$$ = $goog$Promise$reject$$($err$jscomp$26$$);
  }
  "starting" !== $JSCompiler_StaticMethods_runStartCommand_$self$$.$b$ ? $startCallbackPromise$$.cancel() : $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($JSCompiler_StaticMethods_runStartCommand_$self$$.$f$, $startCallbackPromise$$).then($JSCompiler_StaticMethods_runStartCommand_$self$$.$castApp_StartStoppable_prototype$updateState_$.bind($JSCompiler_StaticMethods_runStartCommand_$self$$, "started")), function($err$jscomp$27$$) {
    $castApp$utils$logError$$(this.$castApp_StartStoppable_prototype$logger_$, "Exception in start callback.", $err$jscomp$27$$);
    this.stop();
  }.bind($JSCompiler_StaticMethods_runStartCommand_$self$$));
};
var $goog$Timer$callOnce$$ = function $$goog$Timer$callOnce$$$($listener$jscomp$131$$, $opt_delay$jscomp$2$$, $opt_handler$jscomp$8$$) {
  if ($goog$isFunction$$($listener$jscomp$131$$)) {
    $opt_handler$jscomp$8$$ && ($listener$jscomp$131$$ = $goog$bind$$($listener$jscomp$131$$, $opt_handler$jscomp$8$$));
  } else {
    if ($listener$jscomp$131$$ && "function" == typeof $listener$jscomp$131$$.handleEvent) {
      $listener$jscomp$131$$ = $goog$bind$$($listener$jscomp$131$$.handleEvent, $listener$jscomp$131$$);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < Number($opt_delay$jscomp$2$$) ? -1 : $goog$global$$.setTimeout($listener$jscomp$131$$, $opt_delay$jscomp$2$$ || 0);
}, $goog$Timer$promise$$ = function $$goog$Timer$promise$$$($delay$$) {
  var $timerKey$$ = null;
  return $JSCompiler_StaticMethods_thenCatch$$(new $goog$Promise$$(function($resolve$jscomp$13$$, $reject$jscomp$11$$) {
    $timerKey$$ = $goog$Timer$callOnce$$(function() {
      $resolve$jscomp$13$$(void 0);
    }, $delay$$);
    -1 == $timerKey$$ && $reject$jscomp$11$$(Error("Failed to schedule timer."));
  }), function($error$jscomp$6$$) {
    $goog$global$$.clearTimeout($timerKey$$);
    throw $error$jscomp$6$$;
  });
};
var $castApp$anonymizeProtocolMessage$$ = function $$castApp$anonymizeProtocolMessage$$$($rawMsg$$) {
  $$jscomp$scope$messageAnonymizers_$$ || ($$jscomp$scope$messageAnonymizers_$$ = new $goog$structs$Map$$("SetupStart.ShowDevice", $$jscomp$scope$anonymizeSetupStartShowDeviceMessage_$$, "WiFiSwitching.ConnectHotSpot", $$jscomp$scope$anonymizeWiFiSwitchingConnectHotSpotMessage_$$, "WiFiSwitching.ReconnectWiFi", $$jscomp$scope$anonymizeWiFiSwitchingReconnectWiFiMessage_$$, "CodeConfirmation.Request", $$jscomp$scope$anonymizeCodeConfirmationRequestMessage_$$, "DeviceConfig.Request", $$jscomp$scope$anonymizeDeviceConfigRequestMessage_$$, 
  "DeviceConfig.Response", $$jscomp$scope$anonymizeDeviceConfigResponseMessage_$$, "WiFiConfig.Show", $$jscomp$scope$anonymizeWiFiConfigShowMessage_$$, "WiFiConfig.UpdateNetworks", $$jscomp$scope$anonymizeWiFiConfigUpdateNetworksMessage_$$, "WiFiConfig.Connect", $$jscomp$scope$anonymizeWiFiConfigConnectMessage_$$, "WiFiConfig.Retry", $$jscomp$scope$anonymizeWiFiConfigRetryMessage_$$, "Devices.Show", $$jscomp$scope$anonymizeDevicesShowMessage_$$, "Devices.UserAction", $$jscomp$scope$anonymizeDevicesUserActionMessage_$$, 
  "DeviceSettings.Show", $$jscomp$scope$anonymizeDeviceSettingsShowMessage_$$, "DeviceSettings.Apply", $$jscomp$scope$anonymizeDeviceSettingsApplyMessage_$$), "Error Handshake.Request Handshake.Response Handshake.UiVersionNotSupported OfflineUiReady SetupSessionTakeoverConfirmed SetSimpleState ModalDialog.Request ModalDialog.Response ShowGenericSetupError DeviceDiscovery.ShowScanner DeviceDiscovery.NotFound SetupStart.Proceed SetupStart.TosAccepted WiFiSwitching.Proceed WiFiSwitching.RetryConnection BadDeviceAck CodeConfirmation.Response AudioConfirmation.PromptUser AudioConfirmation.UserAction WiFiConfig.ErrorAck OtaUpdate.Pending OtaUpdate.Done OtaUpdate.Proceed DeviceSettings.Reboot DeviceSettings.FactoryReset DeviceSettings.ForgetWiFi DeviceSettings.Exit RestartSetup GoToDeviceList DetectCountry.Request DetectCountry.Response Offers.Show Offers.Scan Offers.ScanResults Offers.Redeem Offers.AnalyticsEvent".split(" ").forEach(function($msgType$$) {
    $$jscomp$scope$messageAnonymizers_$$.set($msgType$$, function($msg$jscomp$24$$) {
      return $goog$Promise$resolve$$($msg$jscomp$24$$);
    });
  }));
  return $$jscomp$scope$messageAnonymizers_$$.get($rawMsg$$.type)($rawMsg$$).then(function($scrubbedMsg$$) {
    return JSON.stringify($scrubbedMsg$$);
  });
}, $$jscomp$scope$messageAnonymizers_$$ = null, $$jscomp$scope$anonymizeSetupStartShowDeviceMessage_$$ = function $$$jscomp$scope$anonymizeSetupStartShowDeviceMessage_$$$($rawMsg$jscomp$1$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$1$$.deviceName).then(function($anonymizedDeviceName_ret$jscomp$4$$) {
    $anonymizedDeviceName_ret$jscomp$4$$ = new $castApp$protocol$SetupStart$ShowDevice$$($rawMsg$jscomp$1$$.state, $rawMsg$jscomp$1$$.deviceType, $anonymizedDeviceName_ret$jscomp$4$$);
    $anonymizedDeviceName_ret$jscomp$4$$.otherDevicesExist = $rawMsg$jscomp$1$$.otherDevicesExist;
    $anonymizedDeviceName_ret$jscomp$4$$.analyticsOptIn = $rawMsg$jscomp$1$$.analyticsOptIn;
    return $anonymizedDeviceName_ret$jscomp$4$$;
  });
}, $$jscomp$scope$anonymizeWiFiSwitchingConnectHotSpotMessage_$$ = function $$$jscomp$scope$anonymizeWiFiSwitchingConnectHotSpotMessage_$$$($rawMsg$jscomp$2$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($rawMsg$jscomp$2$$.deviceName), $castApp$log$anonymizeString$$($rawMsg$jscomp$2$$.ssid)]).then(function($scrubbedStrings$$) {
    return new $castApp$protocol$WiFiSwitching$ConnectHotSpot$$($rawMsg$jscomp$2$$.state, $scrubbedStrings$$[0], $scrubbedStrings$$[1]);
  });
}, $$jscomp$scope$anonymizeWiFiSwitchingReconnectWiFiMessage_$$ = function $$$jscomp$scope$anonymizeWiFiSwitchingReconnectWiFiMessage_$$$($rawMsg$jscomp$3$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$3$$.ssid).then(function($anonymizedSsid$$) {
    return new $castApp$protocol$WiFiSwitching$ReconnectWiFi$$($rawMsg$jscomp$3$$.state, $anonymizedSsid$$);
  });
}, $$jscomp$scope$anonymizeCodeConfirmationRequestMessage_$$ = function $$$jscomp$scope$anonymizeCodeConfirmationRequestMessage_$$$($rawMsg$jscomp$4$$) {
  return $goog$Promise$all$$($rawMsg$jscomp$4$$.code.map($castApp$log$anonymizeString$$)).then(function($anonymizedCode$$) {
    return new $castApp$protocol$CodeConfirmation$Request$$($anonymizedCode$$);
  });
}, $$jscomp$scope$anonymizeDeviceConfigRequestMessage_$$ = function $$$jscomp$scope$anonymizeDeviceConfigRequestMessage_$$$($rawMsg$jscomp$5$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$5$$.name).then(function($anonymizedName$$) {
    return new $castApp$protocol$DeviceConfig$Request$$($rawMsg$jscomp$5$$.deviceType, $anonymizedName$$, $rawMsg$jscomp$5$$.country);
  });
}, $$jscomp$scope$anonymizeDeviceConfigResponseMessage_$$ = function $$$jscomp$scope$anonymizeDeviceConfigResponseMessage_$$$($rawMsg$jscomp$6$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$6$$.name).then(function($anonymizedName$jscomp$1$$) {
    return {requestId:$rawMsg$jscomp$6$$.responseTo, name:$anonymizedName$jscomp$1$$, $b$:$rawMsg$jscomp$6$$.country};
  });
}, $$jscomp$scope$anonymizeWiFiConfigNetwork_$$ = function $$$jscomp$scope$anonymizeWiFiConfigNetwork_$$$($network$jscomp$3$$) {
  return $goog$Promise$all$$([$network$jscomp$3$$.id ? $castApp$log$anonymizeString$$($network$jscomp$3$$.id) : null, $castApp$log$anonymizeString$$($network$jscomp$3$$.ssid)]).then(function($anonymized_anonymizedId$$) {
    var $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$ = $$jscomp$makeIterator$$($anonymized_anonymizedId$$);
    $anonymized_anonymizedId$$ = $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$.next().value;
    $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$ = $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$.next().value;
    return new $castApp$protocol$WiFiConfig$Network$$($anonymized_anonymizedId$$, $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$, $network$jscomp$3$$.security);
  });
}, $$jscomp$scope$anonymizeWiFiConfigShowMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigShowMessage_$$$($rawMsg$jscomp$7$$) {
  return $goog$Promise$all$$([$goog$Promise$all$$($rawMsg$jscomp$7$$.networks.map($$jscomp$scope$anonymizeWiFiConfigNetwork_$$)), $rawMsg$jscomp$7$$.selectedNetwork ? $$jscomp$scope$anonymizeWiFiConfigNetwork_$$($rawMsg$jscomp$7$$.selectedNetwork) : null]).then(function($anonymizedNetworks_anonymizedResults$$) {
    var $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$ = $$jscomp$makeIterator$$($anonymizedNetworks_anonymizedResults$$);
    $anonymizedNetworks_anonymizedResults$$ = $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$.next().value;
    $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$ = $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$.next().value;
    return new $castApp$protocol$WiFiConfig$Show$$($rawMsg$jscomp$7$$.state, $rawMsg$jscomp$7$$.deviceType, $anonymizedNetworks_anonymizedResults$$, $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$);
  });
}, $$jscomp$scope$anonymizeWiFiConfigUpdateNetworksMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigUpdateNetworksMessage_$$$($rawMsg$jscomp$8$$) {
  return $goog$Promise$all$$($rawMsg$jscomp$8$$.networks.map($$jscomp$scope$anonymizeWiFiConfigNetwork_$$)).then(function($anonymizedNetworks$jscomp$1$$) {
    return new $castApp$protocol$WiFiConfig$UpdateNetworks$$($anonymizedNetworks$jscomp$1$$);
  });
}, $$jscomp$scope$anonymizeWiFiConfigConnectMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigConnectMessage_$$$($rawMsg$jscomp$9$$) {
  return $$jscomp$scope$anonymizeWiFiConfigNetwork_$$($rawMsg$jscomp$9$$.network).then(function($anonymizedNetwork$$) {
    return new $castApp$protocol$WiFiConfig$Connect$$($anonymizedNetwork$$, "********");
  });
}, $$jscomp$scope$anonymizeWiFiConfigRetryMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigRetryMessage_$$$($rawMsg$jscomp$10$$) {
  return $$jscomp$scope$anonymizeWiFiConfigNetwork_$$($rawMsg$jscomp$10$$.network).then(function($anonymizedNetwork$jscomp$1$$) {
    return new $castApp$protocol$WiFiConfig$Retry$$($anonymizedNetwork$jscomp$1$$);
  });
}, $$jscomp$scope$anonymizeDeviceProperties_$$ = function $$$jscomp$scope$anonymizeDeviceProperties_$$$($props$jscomp$1$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($props$jscomp$1$$.id), $castApp$log$anonymizeString$$($props$jscomp$1$$.displayName)]).then(function($anonymized$jscomp$1_anonymizedId$jscomp$1$$) {
    var $$jscomp$destructuring$var2_anonymizedDisplayName$$ = $$jscomp$makeIterator$$($anonymized$jscomp$1_anonymizedId$jscomp$1$$);
    $anonymized$jscomp$1_anonymizedId$jscomp$1$$ = $$jscomp$destructuring$var2_anonymizedDisplayName$$.next().value;
    $$jscomp$destructuring$var2_anonymizedDisplayName$$ = $$jscomp$destructuring$var2_anonymizedDisplayName$$.next().value;
    var $ret$jscomp$5$$ = $goog$object$clone$$($props$jscomp$1$$);
    $ret$jscomp$5$$.id = $anonymized$jscomp$1_anonymizedId$jscomp$1$$;
    $ret$jscomp$5$$.displayName = $$jscomp$destructuring$var2_anonymizedDisplayName$$;
    return $ret$jscomp$5$$;
  });
}, $$jscomp$scope$anonymizeDevicesShowMessage_$$ = function $$$jscomp$scope$anonymizeDevicesShowMessage_$$$($rawMsg$jscomp$11$$) {
  return $goog$Promise$all$$([$goog$Promise$all$$($rawMsg$jscomp$11$$.devices.map($$jscomp$scope$anonymizeDeviceProperties_$$)), $rawMsg$jscomp$11$$.deviceName ? $castApp$log$anonymizeString$$($rawMsg$jscomp$11$$.deviceName) : void 0]).then(function($anonymizedDevices_anonymizedResults$jscomp$1$$) {
    var $$jscomp$destructuring$var3_anonymizedDeviceName$jscomp$1$$ = $$jscomp$makeIterator$$($anonymizedDevices_anonymizedResults$jscomp$1$$);
    $anonymizedDevices_anonymizedResults$jscomp$1$$ = $$jscomp$destructuring$var3_anonymizedDeviceName$jscomp$1$$.next().value;
    $$jscomp$destructuring$var3_anonymizedDeviceName$jscomp$1$$ = $$jscomp$destructuring$var3_anonymizedDeviceName$jscomp$1$$.next().value;
    return new $castApp$protocol$Devices$Show$$($anonymizedDevices_anonymizedResults$jscomp$1$$, $$jscomp$destructuring$var3_anonymizedDeviceName$jscomp$1$$);
  });
}, $$jscomp$scope$anonymizeDevicesUserActionMessage_$$ = function $$$jscomp$scope$anonymizeDevicesUserActionMessage_$$$($rawMsg$jscomp$12$$) {
  return $$jscomp$scope$anonymizeDeviceProperties_$$($rawMsg$jscomp$12$$.device).then(function($anonymizedDevice$$) {
    return new $castApp$protocol$Devices$UserAction$$($anonymizedDevice$$, $rawMsg$jscomp$12$$.action);
  });
}, $$jscomp$scope$anonymizeDeviceSettingsShowMessage_$$ = function $$$jscomp$scope$anonymizeDeviceSettingsShowMessage_$$$($rawMsg$jscomp$13$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.name), $castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.ssid || ""), $castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.macAddress), $castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.ipAddress)]).then(function($anonymized$jscomp$2_anonymizedName$jscomp$2$$) {
    var $$jscomp$destructuring$var4_anonymizedIpAddress$$ = $$jscomp$makeIterator$$($anonymized$jscomp$2_anonymizedName$jscomp$2$$);
    $anonymized$jscomp$2_anonymizedName$jscomp$2$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value;
    var $anonymizedSsid$jscomp$2$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value, $anonymizedMacAddress$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value;
    $$jscomp$destructuring$var4_anonymizedIpAddress$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value;
    return new $castApp$protocol$DeviceSettings$Show$$($rawMsg$jscomp$13$$.state, $rawMsg$jscomp$13$$.features, {deviceType:$rawMsg$jscomp$13$$.deviceType, name:$anonymized$jscomp$2_anonymizedName$jscomp$2$$, ssid:$rawMsg$jscomp$13$$.ssid ? $anonymizedSsid$jscomp$2$$ : null, timeZoneId:$rawMsg$jscomp$13$$.timeZoneId, supportedTimeZones:$rawMsg$jscomp$13$$.supportedTimeZones, timeFormat:$rawMsg$jscomp$13$$.timeFormat, localeId:$rawMsg$jscomp$13$$.localeId, supportedLocales:$rawMsg$jscomp$13$$.supportedLocales, 
    statsOptIn:$rawMsg$jscomp$13$$.statsOptIn, firmwareVersion:$rawMsg$jscomp$13$$.firmwareVersion, countryCode:$rawMsg$jscomp$13$$.countryCode, macAddress:$anonymizedMacAddress$$, ipAddress:$$jscomp$destructuring$var4_anonymizedIpAddress$$});
  });
}, $$jscomp$scope$anonymizeDeviceSettingsApplyMessage_$$ = function $$$jscomp$scope$anonymizeDeviceSettingsApplyMessage_$$$($rawMsg$jscomp$14$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$14$$.name).then(function($anonymizedName$jscomp$3$$) {
    var $ret$jscomp$6$$ = new $castApp$protocol$DeviceSettings$Apply$$($rawMsg$jscomp$14$$);
    $ret$jscomp$6$$.name = $anonymizedName$jscomp$3$$;
    return $ret$jscomp$6$$;
  });
};
var $castApp$Messenger$$ = function $$castApp$Messenger$$$() {
  this.$b$ = {};
  this.$c$ = {};
  this.$f$ = new $goog$structs$Set$$;
}, $castApp$Messenger$logger_$$ = $castApp$log$getLogger$$("Messenger");
$castApp$Messenger$$.prototype.sendMessage = function $$castApp$Messenger$$$$sendMessage$($message$jscomp$41$$) {
  $message$jscomp$41$$.responseTo ? this.$f$.contains($message$jscomp$41$$.responseTo) ? (this.$f$.remove($message$jscomp$41$$.responseTo), $JSCompiler_StaticMethods_sendRawMessage$$(this, $message$jscomp$41$$)) : $goog$asserts$fail$$("Response to a request that is not pending.") : $JSCompiler_StaticMethods_sendRawMessage$$(this, $message$jscomp$41$$);
};
$castApp$Messenger$$.prototype.sendRequest = function $$castApp$Messenger$$$$sendRequest$($requestMsg$$, $opt_timeout$jscomp$2$$) {
  var $responseResolver$$ = $goog$Promise$withResolver$$();
  this.$b$[$requestMsg$$.requestId] = {$resolver$:$responseResolver$$, $timeoutId$:$opt_timeout$jscomp$2$$ ? setTimeout($goog$bind$$(this.$j$, this, $requestMsg$$.requestId), $opt_timeout$jscomp$2$$) : null};
  $JSCompiler_StaticMethods_sendRawMessage$$(this, $requestMsg$$);
  return $responseResolver$$.$b$;
};
$castApp$Messenger$$.prototype.$j$ = function $$castApp$Messenger$$$$$j$$($requestId$jscomp$1$$) {
  $requestId$jscomp$1$$ in this.$b$ && (this.$b$[$requestId$jscomp$1$$].$resolver$.$b$.cancel(), delete this.$b$[$requestId$jscomp$1$$]);
};
$castApp$Messenger$$.prototype.addListener = function $$castApp$Messenger$$$$addListener$($messageType$jscomp$1$$, $listener$jscomp$132$$) {
  var $listeners$jscomp$1$$ = this.$c$[$messageType$jscomp$1$$];
  $listeners$jscomp$1$$ || ($listeners$jscomp$1$$ = this.$c$[$messageType$jscomp$1$$] = new $goog$structs$Set$$);
  $listeners$jscomp$1$$.add($listener$jscomp$132$$);
};
var $JSCompiler_StaticMethods_waitForMessage$$ = function $$JSCompiler_StaticMethods_waitForMessage$$$($JSCompiler_StaticMethods_waitForMessage$self$$, $type$jscomp$191$$) {
  var $resolver$jscomp$15$$ = $goog$Promise$withResolver$$(), $oneTimeListener$$ = $goog$bind$$(function($message$jscomp$42$$) {
    $resolver$jscomp$15$$.$c$($message$jscomp$42$$);
  }, $JSCompiler_StaticMethods_waitForMessage$self$$);
  $JSCompiler_StaticMethods_waitForMessage$self$$.addListener($type$jscomp$191$$, $oneTimeListener$$);
  return $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$15$$.$b$, function() {
    this.removeListener($type$jscomp$191$$, $oneTimeListener$$);
  }.bind($JSCompiler_StaticMethods_waitForMessage$self$$));
};
$castApp$Messenger$$.prototype.removeListener = function $$castApp$Messenger$$$$removeListener$($listeners$jscomp$2_messageType$jscomp$2$$, $callback$jscomp$352$$) {
  ($listeners$jscomp$2_messageType$jscomp$2$$ = this.$c$[$listeners$jscomp$2_messageType$jscomp$2$$]) && $listeners$jscomp$2_messageType$jscomp$2$$.remove($callback$jscomp$352$$);
};
var $JSCompiler_StaticMethods_handleRawMessage$$ = function $$JSCompiler_StaticMethods_handleRawMessage$$$($JSCompiler_StaticMethods_handleRawMessage$self$$, $rawMessage$$) {
  if ($rawMessage$$.requestId) {
    $JSCompiler_StaticMethods_handleRawMessage$self$$.$f$.add($rawMessage$$.requestId);
  } else {
    if ($rawMessage$$.responseTo) {
      var $requestStruct$$ = $JSCompiler_StaticMethods_handleRawMessage$self$$.$b$[$rawMessage$$.responseTo];
      $requestStruct$$ ? (delete $JSCompiler_StaticMethods_handleRawMessage$self$$.$b$[$rawMessage$$.responseTo], null !== $requestStruct$$.$timeoutId$ && clearTimeout($requestStruct$$.$timeoutId$), $rawMessage$$ instanceof $castApp$protocol$Error$$ ? $requestStruct$$.$resolver$.$f$($rawMessage$$) : $requestStruct$$.$resolver$.$c$($rawMessage$$)) : $castApp$log$warning$$($castApp$Messenger$logger_$$, "Orphaned response message: type=" + $rawMessage$$.type + " id=" + $rawMessage$$.responseTo);
    }
  }
  var $listeners$jscomp$3$$ = $JSCompiler_StaticMethods_handleRawMessage$self$$.$c$[$rawMessage$$.type];
  $listeners$jscomp$3$$ && $listeners$jscomp$3$$.$getValues$().forEach(function($callback$jscomp$353$$) {
    $listeners$jscomp$3$$.contains($callback$jscomp$353$$) && $callback$jscomp$353$$($rawMessage$$);
  });
};
var $castApp$WindowMessenger$$ = function $$castApp$WindowMessenger$$$($thisWindow$$, $remoteWindowOrCb$$, $remoteWindowOrigin$$, $opt_originViolationCallback$$, $opt_logScrubbingCallback$$) {
  $castApp$Messenger$$.call(this);
  this.$h$ = "object" === typeof $remoteWindowOrCb$$ ? $remoteWindowOrCb$$ : null;
  this.$l$ = "function" === typeof $remoteWindowOrCb$$ ? $remoteWindowOrCb$$ : null;
  this.$g$ = $remoteWindowOrigin$$;
  this.$o$ = $opt_originViolationCallback$$ || $goog$nullFunction$$;
  this.$i$ = $opt_logScrubbingCallback$$ || function($obj$jscomp$110$$) {
    return $goog$Promise$resolve$$(JSON.stringify($obj$jscomp$110$$));
  };
  $thisWindow$$.addEventListener("message", this.$m$.bind(this));
};
$goog$inherits$$($castApp$WindowMessenger$$, $castApp$Messenger$$);
var $castApp$WindowMessenger$logger_$$ = $castApp$log$getLogger$$("core.Messenger");
$castApp$WindowMessenger$$.prototype.$m$ = function $$castApp$WindowMessenger$$$$$m$$($message$jscomp$44$$) {
  $message$jscomp$44$$.origin === this.$g$ ? ($castApp$log$info$$($castApp$WindowMessenger$logger_$$, "In: ", this.$i$($message$jscomp$44$$.data)), $JSCompiler_StaticMethods_handleRawMessage$$(this, $message$jscomp$44$$.data)) : ($castApp$log$error$$($castApp$WindowMessenger$logger_$$, "Origin check failed - ignoring message. Expected: " + this.$g$ + " Received: " + $message$jscomp$44$$.origin), this.$o$());
};
var $JSCompiler_StaticMethods_sendRawMessage$$ = function $$JSCompiler_StaticMethods_sendRawMessage$$$($JSCompiler_StaticMethods_sendRawMessage$self$$, $message$jscomp$45$$) {
  $castApp$log$info$$($castApp$WindowMessenger$logger_$$, "Out: ", $JSCompiler_StaticMethods_sendRawMessage$self$$.$i$($message$jscomp$45$$));
  $JSCompiler_StaticMethods_sendRawMessage$self$$.$h$ = $JSCompiler_StaticMethods_sendRawMessage$self$$.$h$ || $JSCompiler_StaticMethods_sendRawMessage$self$$.$l$();
  $JSCompiler_StaticMethods_sendRawMessage$self$$.$h$.postMessage($message$jscomp$45$$, $JSCompiler_StaticMethods_sendRawMessage$self$$.$g$);
};
var $castApp$core$WebView$$ = function $$castApp$core$WebView$$$($coreWindow$$, $uiOrigin$$, $start$jscomp$18$$, $reset$jscomp$1$$) {
  this.$g$ = new $goog$events$EventTarget$$;
  this.$i$ = new $castApp$StartStoppable$$($start$jscomp$18$$, $reset$jscomp$1$$);
  this.$f$ = $coreWindow$$;
  this.$A$ = $uiOrigin$$ + "/v6";
  this.$w$ = $uiOrigin$$;
  this.$h$ = [];
}, $castApp$core$WebView$RedirectEvent$$ = function $$castApp$core$WebView$RedirectEvent$$$() {
  $goog$events$Event$$.call(this, "redirect");
};
$goog$inherits$$($castApp$core$WebView$RedirectEvent$$, $goog$events$Event$$);
$castApp$core$WebView$$.prototype.start = function $$castApp$core$WebView$$$$start$() {
  return this.$i$.start().then(this.$s$.bind(this));
};
$castApp$core$WebView$$.prototype.stop = function $$castApp$core$WebView$$$$stop$() {
  return this.$i$.stop();
};
$castApp$core$WebView$$.prototype.$l$ = function $$castApp$core$WebView$$$$$l$$($url$jscomp$67$$) {
  0 <= $goog$array$indexOf$$(this.$h$, $url$jscomp$67$$) || this.$h$.push($url$jscomp$67$$);
};
var $castApp$core$WebViewImpl$$ = function $$castApp$core$WebViewImpl$$$($coreWindow$jscomp$1$$) {
  var $uiOrigin$jscomp$1$$ = $coreWindow$jscomp$1$$.localStorage.getItem("castApp.uiOrigin") || "https://chromecast-setup-staging.sandbox.google.com";
  $castApp$core$WebView$$.call(this, $coreWindow$jscomp$1$$, $uiOrigin$jscomp$1$$, this.$o$.bind(this), this.$m$.bind(this));
  this.$b$ = this.$c$ = null;
  this.$j$ = [["newwindow", this.$v$.bind(this)], ["loadredirect", this.$u$.bind(this)]];
};
$goog$inherits$$($castApp$core$WebViewImpl$$, $castApp$core$WebView$$);
var $castApp$core$WebViewImpl$START_ABORTING_EVENTS_$$ = ["exit", "loadabort", "unresponsive"], $castApp$core$WebViewImpl$logger_$$ = $castApp$log$getLogger$$("core.WebViewImpl");
$castApp$core$WebViewImpl$$.prototype.$s$ = function $$castApp$core$WebViewImpl$$$$$s$$() {
  return this.$b$;
};
var $JSCompiler_StaticMethods_applyFocusBugWorkaround_$$ = function $$JSCompiler_StaticMethods_applyFocusBugWorkaround_$$$($JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$) {
  var $interval$jscomp$4$$ = setInterval(function() {
    document.activeElement === this.$c$ ? clearInterval($interval$jscomp$4$$) : this.$c$.focus();
  }.bind($JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$), 20);
  window.addEventListener("focus", $JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$.$c$.focus.bind($JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$.$c$), !0);
};
$castApp$core$WebViewImpl$$.prototype.$o$ = function $$castApp$core$WebViewImpl$$$$$o$$() {
  var $self$jscomp$10$$ = this, $resolver$jscomp$16$$ = $goog$Promise$withResolver$$(), $reject$jscomp$12$$ = $resolver$jscomp$16$$.$f$.bind($resolver$jscomp$16$$), $webview$$ = $self$jscomp$10$$.$f$.document.querySelector("#cast-app-ui");
  $webview$$ || ($webview$$ = $self$jscomp$10$$.$f$.document.createElement("webview"), $webview$$.setAttribute("id", "cast-app-ui"), $webview$$.setAttribute("src", $self$jscomp$10$$.$A$));
  $castApp$core$WebViewImpl$START_ABORTING_EVENTS_$$.forEach(function($event$jscomp$8$$) {
    $webview$$.addEventListener($event$jscomp$8$$, $reject$jscomp$12$$);
  });
  var $resolve$jscomp$14$$ = function $$resolve$jscomp$14$$$() {
    var $contentWindow$$ = $webview$$.contentWindow;
    $self$jscomp$10$$.$c$ = $webview$$;
    $self$jscomp$10$$.$b$ = new $castApp$WindowMessenger$$($self$jscomp$10$$.$f$, $contentWindow$$, $self$jscomp$10$$.$w$, function() {
      $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($self$jscomp$10$$.$g$, new $goog$events$Event$$("originViolation"));
    }, $castApp$anonymizeProtocolMessage$$);
    $resolver$jscomp$16$$.$c$();
    $JSCompiler_StaticMethods_applyFocusBugWorkaround_$$($self$jscomp$10$$);
  };
  $webview$$.addEventListener("contentload", $resolve$jscomp$14$$);
  $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$16$$.$b$, function() {
    $castApp$core$WebViewImpl$START_ABORTING_EVENTS_$$.forEach(function($event$jscomp$9$$) {
      $webview$$.removeEventListener($event$jscomp$9$$, $reject$jscomp$12$$);
    });
    $webview$$.removeEventListener("contentload", $resolve$jscomp$14$$);
  });
  $self$jscomp$10$$.$j$.forEach(function($params$jscomp$9$$) {
    $webview$$.addEventListener.apply($webview$$, $params$jscomp$9$$);
  });
  $webview$$.parentElement || $self$jscomp$10$$.$f$.document.body.appendChild($webview$$);
  $self$jscomp$10$$.$c$ = $webview$$;
  return $resolver$jscomp$16$$.$b$;
};
$castApp$core$WebViewImpl$$.prototype.$m$ = function $$castApp$core$WebViewImpl$$$$$m$$() {
  this.$b$ = null;
  if (this.$c$ && this.$c$.parentElement) {
    var $webview$jscomp$1$$ = this.$c$;
    this.$c$ = null;
    $webview$jscomp$1$$.parentElement.removeChild($webview$jscomp$1$$);
    this.$j$.forEach(function($params$jscomp$10$$) {
      $webview$jscomp$1$$.removeEventListener.apply($webview$jscomp$1$$, $params$jscomp$10$$);
    });
  }
  return $goog$Promise$resolve$$();
};
$castApp$core$WebViewImpl$$.prototype.$u$ = function $$castApp$core$WebViewImpl$$$$$u$$($event$jscomp$10$$) {
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$g$, new $castApp$core$WebView$RedirectEvent$$($event$jscomp$10$$.newUrl, $event$jscomp$10$$.oldUrl));
};
$castApp$core$WebViewImpl$$.prototype.$v$ = function $$castApp$core$WebViewImpl$$$$$v$$($event$jscomp$11$$) {
  var $targetUrl$$ = $event$jscomp$11$$.targetUrl, $disposition$$ = $event$jscomp$11$$.windowOpenDisposition, $allowedUrl_parsedUrl$$ = $goog$Uri$parse$$($targetUrl$$), $isForegroundTab_scheme$jscomp$5$$ = $allowedUrl_parsedUrl$$.$f$, $domain$jscomp$3$$ = $allowedUrl_parsedUrl$$.$g$;
  $allowedUrl_parsedUrl$$ = "https" === $isForegroundTab_scheme$jscomp$5$$ && ("www.google.com" === $domain$jscomp$3$$ || "support.google.com" === $domain$jscomp$3$$ || "chromecast.com" === $domain$jscomp$3$$) || "http" === $isForegroundTab_scheme$jscomp$5$$ && $goog$net$IpAddress$fromString$$($domain$jscomp$3$$) && 8008 === $allowedUrl_parsedUrl$$.$i$ && "/setup/NOTICE.html.gz" === $allowedUrl_parsedUrl$$.$c$;
  !$allowedUrl_parsedUrl$$ && 0 <= $goog$array$indexOf$$(this.$h$, $targetUrl$$) && ($allowedUrl_parsedUrl$$ = !0);
  $isForegroundTab_scheme$jscomp$5$$ = "new_foreground_tab" === $disposition$$;
  $allowedUrl_parsedUrl$$ && ($isForegroundTab_scheme$jscomp$5$$ || "new_background_tab" === $disposition$$) ? chrome.tabs.create({url:$targetUrl$$, active:$isForegroundTab_scheme$jscomp$5$$}) : $castApp$log$warning$$($castApp$core$WebViewImpl$logger_$$, "New window request denied. Target URL: " + $event$jscomp$11$$.targetUrl);
  $event$jscomp$11$$.window.discard();
};
var $castApp$core$DeviceManagerEnvironment$$ = function $$castApp$core$DeviceManagerEnvironment$$$($win$jscomp$13$$, $ui$$, $http$$, $goToSetupPage$$, $goToDevicesPage$$, $goToDeviceSettingsPage$$, $reload$$, $castSdk$$, $webview$jscomp$2$$, $getBrowserUiLanguage$$, $deviceMonitor$$) {
  this.$c$ = $ui$$;
  this.$h$ = $http$$;
  this.$g$ = $win$jscomp$13$$.localStorage;
  this.$m$ = $goToSetupPage$$;
  this.$f$ = $goToDevicesPage$$;
  this.$o$ = $webview$jscomp$2$$;
  this.$l$ = $goToDeviceSettingsPage$$;
  this.reload = $reload$$;
  this.$j$ = $castSdk$$;
  this.$i$ = $getBrowserUiLanguage$$;
  this.$b$ = $deviceMonitor$$;
};
var $goog$math$ExponentialBackoff$$ = function $$goog$math$ExponentialBackoff$$$($initialValue$$) {
  this.$b$ = this.$c$ = this.$f$ = $initialValue$$;
};
$goog$math$ExponentialBackoff$$.prototype.reset = function $$goog$math$ExponentialBackoff$$$$reset$() {
  this.$b$ = this.$c$ = this.$f$;
};
var $JSCompiler_StaticMethods_backoff$$ = function $$JSCompiler_StaticMethods_backoff$$$($JSCompiler_StaticMethods_backoff$self$$) {
  $JSCompiler_StaticMethods_backoff$self$$.$b$ = Math.min(6E4, 2 * $JSCompiler_StaticMethods_backoff$self$$.$b$);
  $JSCompiler_StaticMethods_backoff$self$$.$c$ = Math.min(6E4, $JSCompiler_StaticMethods_backoff$self$$.$b$ + 0);
};
var $castApp$eventPage$Message$$ = function $$castApp$eventPage$Message$$$($subtype$jscomp$1$$, $opt_devices$$) {
  this.type = "cast_app";
  this.originId = window["castApp.eventPage.Message.OriginID"] || void 0;
  this.subtype = $subtype$jscomp$1$$;
  this.devices = $opt_devices$$;
  this.logRecord = this.deviceJustSetUp = void 0;
};
$goog$exportSymbol$$("castApp.eventPage.Message", $castApp$eventPage$Message$$);
$castApp$eventPage$Message$$.DeviceData = function $$castApp$eventPage$Message$$$DeviceData$($ipAddress$jscomp$2$$, $appId$jscomp$7$$, $sessionId$jscomp$11$$) {
  this.ipAddress = $ipAddress$jscomp$2$$;
  this.appId = $appId$jscomp$7$$;
  this.sessionId = $sessionId$jscomp$11$$;
};
var $castApp$eventPage$Message$DeviceJustSetUp$$ = function $$castApp$eventPage$Message$DeviceJustSetUp$$$($ipAddress$jscomp$3$$, $name$jscomp$106$$, $udn$jscomp$1$$, $opt_modelName$$) {
  this.ipAddress = $ipAddress$jscomp$3$$;
  this.name = $name$jscomp$106$$;
  this.udn = $udn$jscomp$1$$;
  this.modelName = $opt_modelName$$;
};
$castApp$eventPage$Message$$.DeviceJustSetUp = $castApp$eventPage$Message$DeviceJustSetUp$$;
var $castApp$eventPage$Message$DeviceCapabilities$$ = function $$castApp$eventPage$Message$DeviceCapabilities$$$() {
};
$castApp$eventPage$Message$$.DeviceCapabilities = $castApp$eventPage$Message$DeviceCapabilities$$;
var $castApp$eventPage$Message$LogRecord$$ = function $$castApp$eventPage$Message$LogRecord$$$($levelValue$$, $msg$jscomp$39$$, $loggerName$jscomp$6$$, $time$jscomp$3$$) {
  this.levelValue = $levelValue$$;
  this.msg = $msg$jscomp$39$$;
  this.loggerName = $loggerName$jscomp$6$$;
  this.time = $time$jscomp$3$$;
};
$castApp$eventPage$Message$$.LogRecord = $castApp$eventPage$Message$LogRecord$$;
var $castApp$core$anonymizeEventPageMessage$$ = function $$castApp$core$anonymizeEventPageMessage$$$($rawMsg$jscomp$15$$) {
  return $rawMsg$jscomp$15$$.devices || $rawMsg$jscomp$15$$.deviceJustSetUp ? $goog$Promise$all$$([$rawMsg$jscomp$15$$.devices ? $$jscomp$scope$anonymizeDevices_$$($rawMsg$jscomp$15$$.devices) : void 0, $rawMsg$jscomp$15$$.deviceJustSetUp ? $$jscomp$scope$anonymizeDeviceJustSetUp_$$($rawMsg$jscomp$15$$.deviceJustSetUp) : void 0]).then(function($anonymized$jscomp$3_anonymizedDevices$jscomp$1$$) {
    var $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$ = $$jscomp$makeIterator$$($anonymized$jscomp$3_anonymizedDevices$jscomp$1$$);
    $anonymized$jscomp$3_anonymizedDevices$jscomp$1$$ = $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$.next().value;
    $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$ = $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$.next().value;
    var $anonymizedMsg$$ = $goog$object$clone$$($rawMsg$jscomp$15$$);
    $anonymizedMsg$$.devices = $anonymized$jscomp$3_anonymizedDevices$jscomp$1$$;
    $anonymizedMsg$$.deviceJustSetUp = $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$;
    return JSON.stringify($anonymizedMsg$$);
  }) : $goog$Promise$resolve$$(JSON.stringify($rawMsg$jscomp$15$$));
}, $$jscomp$scope$anonymizeDevices_$$ = function $$$jscomp$scope$anonymizeDevices_$$$($devices$jscomp$3$$) {
  return $goog$Promise$all$$($devices$jscomp$3$$.map(function($deviceData$$) {
    return $castApp$log$anonymizeString$$($deviceData$$.ipAddress).then(function($anonymizedIpAddress$jscomp$1$$) {
      var $anonymizedDeviceData$$ = $goog$object$clone$$($deviceData$$);
      $anonymizedDeviceData$$.ipAddress = $anonymizedIpAddress$jscomp$1$$;
      return $anonymizedDeviceData$$;
    });
  }));
}, $$jscomp$scope$anonymizeDeviceJustSetUp_$$ = function $$$jscomp$scope$anonymizeDeviceJustSetUp_$$$($deviceJustSetUp$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($deviceJustSetUp$$.ipAddress), $castApp$log$anonymizeString$$($deviceJustSetUp$$.name), $castApp$log$anonymizeString$$($deviceJustSetUp$$.udn)]).then(function($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$) {
    var $$jscomp$destructuring$var6_anonymizedUdn$$ = $$jscomp$makeIterator$$($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$);
    $anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$ = $$jscomp$destructuring$var6_anonymizedUdn$$.next().value;
    var $anonymizedName$jscomp$4$$ = $$jscomp$destructuring$var6_anonymizedUdn$$.next().value;
    $$jscomp$destructuring$var6_anonymizedUdn$$ = $$jscomp$destructuring$var6_anonymizedUdn$$.next().value;
    $anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$ = new $castApp$eventPage$Message$DeviceJustSetUp$$($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$, $anonymizedName$jscomp$4$$, $$jscomp$destructuring$var6_anonymizedUdn$$, $deviceJustSetUp$$.modelName);
    $deviceJustSetUp$$.capabilities && ($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$.capabilities = $deviceJustSetUp$$.capabilities);
    return $anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$;
  });
};
var $castApp$eventPage$Client$$ = function $$castApp$eventPage$Client$$$() {
  $goog$events$EventTarget$$.call(this);
};
$goog$inherits$$($castApp$eventPage$Client$$, $goog$events$EventTarget$$);
var $castApp$eventPage$Client$Event$$ = function $$castApp$eventPage$Client$Event$$$($msg$jscomp$41$$) {
  $goog$events$Event$$.call(this, $msg$jscomp$41$$.subtype);
  this.msg = $msg$jscomp$41$$;
};
$goog$inherits$$($castApp$eventPage$Client$Event$$, $goog$events$Event$$);
var $castApp$eventPage$ChromeClient$$ = function $$castApp$eventPage$ChromeClient$$$() {
  this.$c$ = new $goog$math$ExponentialBackoff$$(100);
  this.$g$ = null;
  $goog$events$EventTarget$$.call(this);
};
$goog$inherits$$($castApp$eventPage$ChromeClient$$, $castApp$eventPage$Client$$);
var $castApp$eventPage$ChromeClient$logger_$$ = $castApp$log$getLogger$$("eventPage.ChromeClient"), $castApp$eventPage$ChromeClient$startPromise_$$ = null;
$castApp$eventPage$ChromeClient$$.prototype.start = function $$castApp$eventPage$ChromeClient$$$$start$() {
  var $$jscomp$this$jscomp$2$$ = this;
  $castApp$eventPage$ChromeClient$startPromise_$$ || (chrome.runtime.onMessage.addListener(this.$h$.bind(this)), $castApp$eventPage$ChromeClient$startPromise_$$ = $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_thenAlways$$(new $goog$Promise$$(function($resolve$jscomp$15$$, $reject$jscomp$13$$) {
    chrome.runtime.getBackgroundPage(function() {
      chrome.runtime.lastError ? $reject$jscomp$13$$(new $castApp$core$ChromeRuntimeLastError$$(chrome.runtime.lastError.message)) : (window["castApp.eventPage.Message.OriginID"] = $goog$string$getRandomString$$(), $$jscomp$this$jscomp$2$$.$b$(), $castApp$utils$waitForEvent$$($$jscomp$this$jscomp$2$$, "serviceReady").then(function() {
        $JSCompiler_StaticMethods_startSendingLogsToEventPage_$$($$jscomp$this$jscomp$2$$);
        $resolve$jscomp$15$$();
      }, $reject$jscomp$13$$));
    });
  }), function() {
    clearTimeout($$jscomp$this$jscomp$2$$.$g$);
  }), function($err$jscomp$28$$) {
    $err$jscomp$28$$ instanceof $goog$Promise$CancellationError$$ ? $castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "Start canceled.") : $castApp$log$errorWithCause$$($castApp$eventPage$ChromeClient$logger_$$, $err$jscomp$28$$, "Failed to start.");
    throw $err$jscomp$28$$;
  }));
  return $castApp$eventPage$ChromeClient$startPromise_$$;
};
$castApp$eventPage$ChromeClient$$.prototype.$b$ = function $$castApp$eventPage$ChromeClient$$$$$b$$() {
  $castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "requestServiceCheck_");
  $JSCompiler_StaticMethods_sendMessageNow_$$("serviceCheck");
  this.$g$ = setTimeout(this.$b$.bind(this), this.$c$.$c$);
  $JSCompiler_StaticMethods_backoff$$(this.$c$);
};
$castApp$eventPage$ChromeClient$$.prototype.sendMessage = function $$castApp$eventPage$ChromeClient$$$$sendMessage$($subTypeOrMessage$$) {
  return this.start().then(function() {
    $JSCompiler_StaticMethods_sendMessageNow_$$($subTypeOrMessage$$);
  });
};
var $JSCompiler_StaticMethods_sendMessageNow_$$ = function $$JSCompiler_StaticMethods_sendMessageNow_$$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$) {
  $msg$jscomp$42_subTypeOrMessage$jscomp$1$$ = $goog$isObject$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$) ? $msg$jscomp$42_subTypeOrMessage$jscomp$1$$ : new $castApp$eventPage$Message$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$);
  "logRecord" !== $msg$jscomp$42_subTypeOrMessage$jscomp$1$$.subtype && $castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "Out: ", $castApp$core$anonymizeEventPageMessage$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$));
  chrome.runtime.sendMessage($msg$jscomp$42_subTypeOrMessage$jscomp$1$$);
}, $JSCompiler_StaticMethods_startDeviceMonitor$$ = function $$JSCompiler_StaticMethods_startDeviceMonitor$$$($JSCompiler_StaticMethods_startDeviceMonitor$self$$) {
  $JSCompiler_StaticMethods_startDeviceMonitor$self$$.sendMessage("startDeviceMonitor");
};
$castApp$eventPage$ChromeClient$$.prototype.$h$ = function $$castApp$eventPage$ChromeClient$$$$$h$$($rawMsg$jscomp$16$$) {
  "object" === typeof $rawMsg$jscomp$16$$ && "cast_app" === $rawMsg$jscomp$16$$.type && "logRecord" !== $rawMsg$jscomp$16$$.subtype && ($castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "In: ", $castApp$core$anonymizeEventPageMessage$$($rawMsg$jscomp$16$$)), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $castApp$eventPage$Client$Event$$($rawMsg$jscomp$16$$)));
  return !1;
};
var $JSCompiler_StaticMethods_startSendingLogsToEventPage_$$ = function $$JSCompiler_StaticMethods_startSendingLogsToEventPage_$$$($JSCompiler_StaticMethods_startSendingLogsToEventPage_$self$$) {
  $JSCompiler_StaticMethods_addHandler$$(function($logRecord$jscomp$11$$) {
    var $msg$jscomp$43$$ = new $castApp$eventPage$Message$$("logRecord");
    $msg$jscomp$43$$.logRecord = new $castApp$eventPage$Message$LogRecord$$($logRecord$jscomp$11$$.$getLevel$().value, $logRecord$jscomp$11$$.getMessage(), $logRecord$jscomp$11$$.$loggerName_$, $logRecord$jscomp$11$$.$time_$);
    $JSCompiler_StaticMethods_startSendingLogsToEventPage_$self$$.sendMessage($msg$jscomp$43$$);
  });
};
var $goog$locale$getLanguageSubTag$$ = function $$goog$locale$getLanguageSubTag$$$($languageCode_result$jscomp$36$$) {
  return ($languageCode_result$jscomp$36$$ = $languageCode_result$jscomp$36$$.match(/^\w{2,3}([-_]|$)/)) ? $languageCode_result$jscomp$36$$[0].replace(/[_-]/g, "") : "";
}, $goog$locale$getRegionSubTag$$ = function $$goog$locale$getRegionSubTag$$$($languageCode$jscomp$1_result$jscomp$37$$) {
  return ($languageCode$jscomp$1_result$jscomp$37$$ = $languageCode$jscomp$1_result$jscomp$37$$.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/)) ? $languageCode$jscomp$1_result$jscomp$37$$[0].replace(/[_-]/g, "") : "";
};
var $goog$userAgent$product$FIREFOX$$ = $goog$labs$userAgent$browser$matchFirefox_$$(), $goog$userAgent$product$IPHONE$$ = $goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPod"), $goog$userAgent$product$IPAD$$ = $goog$labs$userAgent$util$matchUserAgent$$("iPad"), $goog$userAgent$product$ANDROID$$ = $goog$labs$userAgent$util$matchUserAgent$$("Android") && !($goog$labs$userAgent$browser$matchChrome_$$() || $goog$labs$userAgent$browser$matchFirefox_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Opera") || 
$goog$labs$userAgent$util$matchUserAgent$$("Silk")), $goog$userAgent$product$CHROME$$ = $goog$labs$userAgent$browser$matchChrome_$$(), $goog$userAgent$product$SAFARI$$ = $goog$labs$userAgent$util$matchUserAgent$$("Safari") && !($goog$labs$userAgent$browser$matchChrome_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Coast") || $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("Edge") || $goog$labs$userAgent$util$matchUserAgent$$("Edg/") || $goog$labs$userAgent$util$matchUserAgent$$("OPR") || 
$goog$labs$userAgent$browser$matchFirefox_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Silk") || $goog$labs$userAgent$util$matchUserAgent$$("Android")) && !($goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod"));
var $goog$userAgent$product$getFirstRegExpGroup_$$ = function $$goog$userAgent$product$getFirstRegExpGroup_$$$($arr$jscomp$81_re$jscomp$4$$) {
  return ($arr$jscomp$81_re$jscomp$4$$ = $arr$jscomp$81_re$jscomp$4$$.exec($goog$labs$userAgent$util$userAgent_$$)) ? $arr$jscomp$81_re$jscomp$4$$[1] : "";
}, $goog$userAgent$product$VERSION$$ = function() {
  if ($goog$userAgent$product$FIREFOX$$) {
    return $goog$userAgent$product$getFirstRegExpGroup_$$(/Firefox\/([0-9.]+)/);
  }
  if ($goog$userAgent$IE$$ || $goog$userAgent$EDGE$$ || $goog$userAgent$OPERA$$) {
    return $goog$userAgent$VERSION$$;
  }
  if ($goog$userAgent$product$CHROME$$) {
    return $goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod") ? $goog$userAgent$product$getFirstRegExpGroup_$$(/CriOS\/([0-9.]+)/) : $goog$userAgent$product$getFirstRegExpGroup_$$(/Chrome\/([0-9.]+)/);
  }
  if ($goog$userAgent$product$SAFARI$$ && !($goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod"))) {
    return $goog$userAgent$product$getFirstRegExpGroup_$$(/Version\/([0-9.]+)/);
  }
  if ($goog$userAgent$product$IPHONE$$ || $goog$userAgent$product$IPAD$$) {
    var $arr$jscomp$80_version$jscomp$15$$ = /Version\/(\S+).*Mobile\/(\S+)/.exec($goog$labs$userAgent$util$userAgent_$$);
    if ($arr$jscomp$80_version$jscomp$15$$) {
      return $arr$jscomp$80_version$jscomp$15$$[1] + "." + $arr$jscomp$80_version$jscomp$15$$[2];
    }
  } else {
    if ($goog$userAgent$product$ANDROID$$) {
      return ($arr$jscomp$80_version$jscomp$15$$ = $goog$userAgent$product$getFirstRegExpGroup_$$(/Android\s+([0-9.]+)/)) ? $arr$jscomp$80_version$jscomp$15$$ : $goog$userAgent$product$getFirstRegExpGroup_$$(/Version\/([0-9.]+)/);
    }
  }
  return "";
}();
var $goog$crypt$base64$byteToCharMaps_$$ = {}, $goog$crypt$base64$charToByteMap_$$ = null, $goog$crypt$base64$decodeStringToByteArray$$ = function $$goog$crypt$base64$decodeStringToByteArray$$$($input$jscomp$13$$) {
  var $output$jscomp$6$$ = [];
  $goog$crypt$base64$decodeStringInternal_$$($input$jscomp$13$$, function pushByte$jscomp$1($b$jscomp$21$$) {
    $output$jscomp$6$$.push($b$jscomp$21$$);
  });
  return $output$jscomp$6$$;
}, $goog$crypt$base64$decodeStringInternal_$$ = function $$goog$crypt$base64$decodeStringInternal_$$$($input$jscomp$15$$, $pushByte$jscomp$3$$) {
  function $getByte$$($default_val$$) {
    for (; $nextCharIndex$$ < $input$jscomp$15$$.length;) {
      var $ch$jscomp$5$$ = $input$jscomp$15$$.charAt($nextCharIndex$$++), $b$jscomp$23$$ = $goog$crypt$base64$charToByteMap_$$[$ch$jscomp$5$$];
      if (null != $b$jscomp$23$$) {
        return $b$jscomp$23$$;
      }
      if (!/^[\s\xa0]*$/.test($ch$jscomp$5$$)) {
        throw Error("Unknown base64 encoding at char: " + $ch$jscomp$5$$);
      }
    }
    return $default_val$$;
  }
  $goog$crypt$base64$init_$$();
  for (var $nextCharIndex$$ = 0;;) {
    var $byte1$jscomp$1$$ = $getByte$$(-1), $byte2$jscomp$1$$ = $getByte$$(0), $byte3$jscomp$1$$ = $getByte$$(64), $byte4$$ = $getByte$$(64);
    if (64 === $byte4$$ && -1 === $byte1$jscomp$1$$) {
      break;
    }
    $pushByte$jscomp$3$$($byte1$jscomp$1$$ << 2 | $byte2$jscomp$1$$ >> 4);
    64 != $byte3$jscomp$1$$ && ($pushByte$jscomp$3$$($byte2$jscomp$1$$ << 4 & 240 | $byte3$jscomp$1$$ >> 2), 64 != $byte4$$ && $pushByte$jscomp$3$$($byte3$jscomp$1$$ << 6 & 192 | $byte4$$));
  }
}, $goog$crypt$base64$init_$$ = function $$goog$crypt$base64$init_$$$() {
  if (!$goog$crypt$base64$charToByteMap_$$) {
    $goog$crypt$base64$charToByteMap_$$ = {};
    for (var $commonChars$$ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), $specialChars$$ = ["+/=", "+/", "-_=", "-_.", "-_"], $i$jscomp$178$$ = 0; 5 > $i$jscomp$178$$; $i$jscomp$178$$++) {
      var $chars$jscomp$2$$ = $commonChars$$.concat($specialChars$$[$i$jscomp$178$$].split(""));
      $goog$crypt$base64$byteToCharMaps_$$[$i$jscomp$178$$] = $chars$jscomp$2$$;
      for (var $j$jscomp$15$$ = 0; $j$jscomp$15$$ < $chars$jscomp$2$$.length; $j$jscomp$15$$++) {
        var $char$jscomp$1$$ = $chars$jscomp$2$$[$j$jscomp$15$$];
        void 0 === $goog$crypt$base64$charToByteMap_$$[$char$jscomp$1$$] && ($goog$crypt$base64$charToByteMap_$$[$char$jscomp$1$$] = $j$jscomp$15$$);
      }
    }
  }
};
var $goog$crypt$Hash$$ = function $$goog$crypt$Hash$$$() {
  this.$c$ = -1;
};
var $goog$crypt$Sha1$$ = function $$goog$crypt$Sha1$$$() {
  this.$c$ = 64;
  this.$b$ = [];
  this.$i$ = [];
  this.$j$ = [];
  this.$g$ = [];
  this.$g$[0] = 128;
  for (var $i$jscomp$179$$ = 1; $i$jscomp$179$$ < this.$c$; ++$i$jscomp$179$$) {
    this.$g$[$i$jscomp$179$$] = 0;
  }
  this.$h$ = this.$f$ = 0;
  this.reset();
};
$goog$inherits$$($goog$crypt$Sha1$$, $goog$crypt$Hash$$);
$goog$crypt$Sha1$$.prototype.reset = function $$goog$crypt$Sha1$$$$reset$() {
  this.$b$[0] = 1732584193;
  this.$b$[1] = 4023233417;
  this.$b$[2] = 2562383102;
  this.$b$[3] = 271733878;
  this.$b$[4] = 3285377520;
  this.$h$ = this.$f$ = 0;
};
var $JSCompiler_StaticMethods_compress_$$ = function $$JSCompiler_StaticMethods_compress_$$$($JSCompiler_StaticMethods_compress_$self$$, $a$jscomp$24_buf$jscomp$4$$, $b$jscomp$24_opt_offset$jscomp$3$$) {
  $b$jscomp$24_opt_offset$jscomp$3$$ || ($b$jscomp$24_opt_offset$jscomp$3$$ = 0);
  var $W$$ = $JSCompiler_StaticMethods_compress_$self$$.$j$;
  if ($goog$isString$$($a$jscomp$24_buf$jscomp$4$$)) {
    for (var $i$jscomp$180$$ = 0; 16 > $i$jscomp$180$$; $i$jscomp$180$$++) {
      $W$$[$i$jscomp$180$$] = $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$3$$) << 24 | $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$3$$ + 1) << 16 | $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$3$$ + 2) << 8 | $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$3$$ + 3), $b$jscomp$24_opt_offset$jscomp$3$$ += 4;
    }
  } else {
    for ($i$jscomp$180$$ = 0; 16 > $i$jscomp$180$$; $i$jscomp$180$$++) {
      $W$$[$i$jscomp$180$$] = $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$3$$] << 24 | $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$3$$ + 1] << 16 | $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$3$$ + 2] << 8 | $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$3$$ + 3], $b$jscomp$24_opt_offset$jscomp$3$$ += 4;
    }
  }
  for ($i$jscomp$180$$ = 16; 80 > $i$jscomp$180$$; $i$jscomp$180$$++) {
    var $f$jscomp$57_t$$ = $W$$[$i$jscomp$180$$ - 3] ^ $W$$[$i$jscomp$180$$ - 8] ^ $W$$[$i$jscomp$180$$ - 14] ^ $W$$[$i$jscomp$180$$ - 16];
    $W$$[$i$jscomp$180$$] = ($f$jscomp$57_t$$ << 1 | $f$jscomp$57_t$$ >>> 31) & 4294967295;
  }
  $a$jscomp$24_buf$jscomp$4$$ = $JSCompiler_StaticMethods_compress_$self$$.$b$[0];
  $b$jscomp$24_opt_offset$jscomp$3$$ = $JSCompiler_StaticMethods_compress_$self$$.$b$[1];
  var $c$jscomp$10$$ = $JSCompiler_StaticMethods_compress_$self$$.$b$[2], $d$jscomp$1$$ = $JSCompiler_StaticMethods_compress_$self$$.$b$[3], $e$jscomp$51$$ = $JSCompiler_StaticMethods_compress_$self$$.$b$[4];
  for ($i$jscomp$180$$ = 0; 80 > $i$jscomp$180$$; $i$jscomp$180$$++) {
    if (40 > $i$jscomp$180$$) {
      if (20 > $i$jscomp$180$$) {
        $f$jscomp$57_t$$ = $d$jscomp$1$$ ^ $b$jscomp$24_opt_offset$jscomp$3$$ & ($c$jscomp$10$$ ^ $d$jscomp$1$$);
        var $k$jscomp$1$$ = 1518500249;
      } else {
        $f$jscomp$57_t$$ = $b$jscomp$24_opt_offset$jscomp$3$$ ^ $c$jscomp$10$$ ^ $d$jscomp$1$$, $k$jscomp$1$$ = 1859775393;
      }
    } else {
      60 > $i$jscomp$180$$ ? ($f$jscomp$57_t$$ = $b$jscomp$24_opt_offset$jscomp$3$$ & $c$jscomp$10$$ | $d$jscomp$1$$ & ($b$jscomp$24_opt_offset$jscomp$3$$ | $c$jscomp$10$$), $k$jscomp$1$$ = 2400959708) : ($f$jscomp$57_t$$ = $b$jscomp$24_opt_offset$jscomp$3$$ ^ $c$jscomp$10$$ ^ $d$jscomp$1$$, $k$jscomp$1$$ = 3395469782);
    }
    $f$jscomp$57_t$$ = ($a$jscomp$24_buf$jscomp$4$$ << 5 | $a$jscomp$24_buf$jscomp$4$$ >>> 27) + $f$jscomp$57_t$$ + $e$jscomp$51$$ + $k$jscomp$1$$ + $W$$[$i$jscomp$180$$] & 4294967295;
    $e$jscomp$51$$ = $d$jscomp$1$$;
    $d$jscomp$1$$ = $c$jscomp$10$$;
    $c$jscomp$10$$ = ($b$jscomp$24_opt_offset$jscomp$3$$ << 30 | $b$jscomp$24_opt_offset$jscomp$3$$ >>> 2) & 4294967295;
    $b$jscomp$24_opt_offset$jscomp$3$$ = $a$jscomp$24_buf$jscomp$4$$;
    $a$jscomp$24_buf$jscomp$4$$ = $f$jscomp$57_t$$;
  }
  $JSCompiler_StaticMethods_compress_$self$$.$b$[0] = $JSCompiler_StaticMethods_compress_$self$$.$b$[0] + $a$jscomp$24_buf$jscomp$4$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$b$[1] = $JSCompiler_StaticMethods_compress_$self$$.$b$[1] + $b$jscomp$24_opt_offset$jscomp$3$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$b$[2] = $JSCompiler_StaticMethods_compress_$self$$.$b$[2] + $c$jscomp$10$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$b$[3] = $JSCompiler_StaticMethods_compress_$self$$.$b$[3] + $d$jscomp$1$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$b$[4] = $JSCompiler_StaticMethods_compress_$self$$.$b$[4] + $e$jscomp$51$$ & 4294967295;
};
$goog$crypt$Sha1$$.prototype.update = function $$goog$crypt$Sha1$$$$update$($bytes$jscomp$2$$, $opt_length$jscomp$14$$) {
  if (null != $bytes$jscomp$2$$) {
    $goog$isDef$$($opt_length$jscomp$14$$) || ($opt_length$jscomp$14$$ = $bytes$jscomp$2$$.length);
    for (var $lengthMinusBlock$$ = $opt_length$jscomp$14$$ - this.$c$, $n$jscomp$10$$ = 0, $buf$jscomp$5$$ = this.$i$, $inbuf$$ = this.$f$; $n$jscomp$10$$ < $opt_length$jscomp$14$$;) {
      if (0 == $inbuf$$) {
        for (; $n$jscomp$10$$ <= $lengthMinusBlock$$;) {
          $JSCompiler_StaticMethods_compress_$$(this, $bytes$jscomp$2$$, $n$jscomp$10$$), $n$jscomp$10$$ += this.$c$;
        }
      }
      if ($goog$isString$$($bytes$jscomp$2$$)) {
        for (; $n$jscomp$10$$ < $opt_length$jscomp$14$$;) {
          if ($buf$jscomp$5$$[$inbuf$$] = $bytes$jscomp$2$$.charCodeAt($n$jscomp$10$$), ++$inbuf$$, ++$n$jscomp$10$$, $inbuf$$ == this.$c$) {
            $JSCompiler_StaticMethods_compress_$$(this, $buf$jscomp$5$$);
            $inbuf$$ = 0;
            break;
          }
        }
      } else {
        for (; $n$jscomp$10$$ < $opt_length$jscomp$14$$;) {
          if ($buf$jscomp$5$$[$inbuf$$] = $bytes$jscomp$2$$[$n$jscomp$10$$], ++$inbuf$$, ++$n$jscomp$10$$, $inbuf$$ == this.$c$) {
            $JSCompiler_StaticMethods_compress_$$(this, $buf$jscomp$5$$);
            $inbuf$$ = 0;
            break;
          }
        }
      }
    }
    this.$f$ = $inbuf$$;
    this.$h$ += $opt_length$jscomp$14$$;
  }
};
var $castApp$core$PinGenerator$logger_$$ = $castApp$log$getLogger$$("cv.PinGenerator"), $castApp$core$PinGenerator$getLengthInfoForBlock_$$ = function $$castApp$core$PinGenerator$getLengthInfoForBlock_$$$($cert$$, $start$jscomp$19$$) {
  if ($start$jscomp$19$$ + 1 >= $cert$$.length) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Length byte out of certificate bounds: at " + $start$jscomp$19$$ + "; cert length: " + $cert$$.length), null;
  }
  if (!($cert$$[$start$jscomp$19$$ + 1] & 128)) {
    return {length:$cert$$[$start$jscomp$19$$ + 1], $lengthBytesCount$:1};
  }
  var $lengthBytesCount$$ = $cert$$[$start$jscomp$19$$ + 1] & 127;
  if ($start$jscomp$19$$ + $lengthBytesCount$$ + 1 >= $cert$$.length) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Length info out of certificate bounds at: " + $start$jscomp$19$$ + " length bytes count: " + $lengthBytesCount$$ + "; certificate length: " + $cert$$.length), null;
  }
  if (2 < $lengthBytesCount$$) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Block length over 16 bits not allowed; at " + $start$jscomp$19$$), null;
  }
  for (var $length$jscomp$28$$ = 0, $i$jscomp$182$$ = 2; $i$jscomp$182$$ <= $lengthBytesCount$$ + 1; $i$jscomp$182$$++) {
    $length$jscomp$28$$ = $length$jscomp$28$$ << 8 | $cert$$[$start$jscomp$19$$ + $i$jscomp$182$$];
  }
  return {length:$length$jscomp$28$$, $lengthBytesCount$:$lengthBytesCount$$ + 1};
}, $castApp$core$PinGenerator$extractInfoFromDerCertificate_$$ = function $$castApp$core$PinGenerator$extractInfoFromDerCertificate_$$$($cert$jscomp$1$$) {
  var $instructions$$ = [{action:"step", code:48, optional:!1}, {action:"step", code:48, optional:!1}, {action:"skip", code:160, optional:!0}, {action:"skip", code:2, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"return", code:48, optional:!1}], $start$jscomp$20$$ = 0, $step$jscomp$3$$ = -1;
  if (65535 < $cert$jscomp$1$$.length) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Certificate too long: " + $cert$jscomp$1$$.length), null;
  }
  for (; $instructions$$.length;) {
    var $current$jscomp$3$$ = $instructions$$.shift();
    $step$jscomp$3$$++;
    $castApp$log$info$$($castApp$core$PinGenerator$logger_$$, "step: " + $step$jscomp$3$$ + ", start: " + $start$jscomp$20$$);
    if ($cert$jscomp$1$$[$start$jscomp$20$$] != $current$jscomp$3$$.code) {
      if ($current$jscomp$3$$.optional) {
        $castApp$log$warning$$($castApp$core$PinGenerator$logger_$$, "Skipping instruction " + $current$jscomp$3$$.code + " at step " + $step$jscomp$3$$);
        continue;
      }
      $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Expected certificate byte cert[" + $start$jscomp$20$$ + "] to be " + $current$jscomp$3$$.code + ", but found " + $cert$jscomp$1$$[$start$jscomp$20$$] + " at step " + $step$jscomp$3$$ + " instead.");
      return null;
    }
    var $lengthInfo$$ = $castApp$core$PinGenerator$getLengthInfoForBlock_$$($cert$jscomp$1$$, $start$jscomp$20$$);
    if (!$lengthInfo$$) {
      return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Invalid certificate block length at step " + $step$jscomp$3$$), null;
    }
    var $end$jscomp$9$$ = $start$jscomp$20$$ + $lengthInfo$$.length + $lengthInfo$$.$lengthBytesCount$;
    if ($end$jscomp$9$$ >= $cert$jscomp$1$$.length) {
      return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "The certificate data block at " + $start$jscomp$20$$ + " does not fit the certificate size."), null;
    }
    switch($current$jscomp$3$$.action) {
      case "step":
        $start$jscomp$20$$ += $lengthInfo$$.$lengthBytesCount$ + 1;
        continue;
      case "skip":
        $start$jscomp$20$$ = $end$jscomp$9$$ + 1;
        continue;
      case "return":
        return $goog$array$slice$$($cert$jscomp$1$$, $start$jscomp$20$$, $end$jscomp$9$$ + 1);
      default:
        return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Invalid certificate parsing intstruction: " + $current$jscomp$3$$.action), null;
    }
  }
  $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Incomplete certificate parsing instructions");
  return null;
}, $castApp$core$PinGenerator$spanToAlpha_$$ = function $$castApp$core$PinGenerator$spanToAlpha_$$$($c$jscomp$11_span$$) {
  for (var $length$jscomp$29$$ = $c$jscomp$11_span$$.length, $residue$$ = 0, $i$jscomp$183$$ = 0; $i$jscomp$183$$ < $length$jscomp$29$$ - 1; $i$jscomp$183$$++) {
    $residue$$ += $c$jscomp$11_span$$[$i$jscomp$183$$];
  }
  $residue$$ = ($c$jscomp$11_span$$[$length$jscomp$29$$ - 1] + 16 * $residue$$) % 24;
  $c$jscomp$11_span$$ = 65 + $residue$$;
  73 <= $c$jscomp$11_span$$ && $c$jscomp$11_span$$++;
  79 <= $c$jscomp$11_span$$ && $c$jscomp$11_span$$++;
  return String.fromCharCode($c$jscomp$11_span$$);
}, $castApp$core$PinGenerator$spanToDigit_$$ = function $$castApp$core$PinGenerator$spanToDigit_$$$($span$jscomp$1$$) {
  return String.fromCharCode(50 + $span$jscomp$1$$[$span$jscomp$1$$.length - 1] % 8);
}, $castApp$core$PinGenerator$xorSpans_$$ = function $$castApp$core$PinGenerator$xorSpans_$$$($bytes$jscomp$3$$, $start1$$) {
  for (var $result$jscomp$41$$ = [], $i$jscomp$184$$ = 0; 4 > $i$jscomp$184$$; $i$jscomp$184$$++) {
    $result$jscomp$41$$[$i$jscomp$184$$] = $bytes$jscomp$3$$[$start1$$ + $i$jscomp$184$$] ^ $bytes$jscomp$3$$[16 + $i$jscomp$184$$];
  }
  return $result$jscomp$41$$;
};
var $castApp$core$DeviceVerifier$$ = function $$castApp$core$DeviceVerifier$$$($eurekaInfo$$) {
  this.$b$ = $eurekaInfo$$;
}, $castApp$core$DeviceVerifier$logger$$ = $castApp$log$getLogger$$("core.DeviceVerifier"), $JSCompiler_StaticMethods_verifyImpl_$$ = function $$JSCompiler_StaticMethods_verifyImpl_$$$($JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$, $networkingApi$jscomp$2$$, $nonce$jscomp$8$$, $hotSpotProps$jscomp$1$$) {
  if (!$JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.$g$($hotSpotProps$jscomp$1$$)) {
    return $castApp$log$info$$($castApp$core$DeviceVerifier$logger$$, "SSID or BSSID mismatch."), $goog$Promise$reject$$();
  }
  var $verificationProperties$jscomp$1$$ = $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.$c$($hotSpotProps$jscomp$1$$.bssid);
  if (!$verificationProperties$jscomp$1$$) {
    return $castApp$log$info$$($castApp$core$DeviceVerifier$logger$$, "Some of the required verification properties are missing."), $goog$Promise$reject$$();
  }
  if (!$JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.$f$($nonce$jscomp$8$$)) {
    return $castApp$log$info$$($castApp$core$DeviceVerifier$logger$$, "Nonce mismatch."), $goog$Promise$reject$$();
  }
  $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$ = $networkingApi$jscomp$2$$.verifyDestination($verificationProperties$jscomp$1$$);
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$, function($err$jscomp$29$$) {
    $castApp$log$infoWithCause$$($castApp$core$DeviceVerifier$logger$$, $err$jscomp$29$$, "chrome.networkingPrivate.verifyDestination failed.");
  });
  return $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.then(function($result$jscomp$42_success$$) {
    if (!$result$jscomp$42_success$$) {
      return $goog$Promise$reject$$();
    }
    $result$jscomp$42_success$$ = new $castApp$core$storage$VerificationState$$((new Date).getTime(), $verificationProperties$jscomp$1$$);
    var $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$ = $verificationProperties$jscomp$1$$.certificate.replace(/[\r\n]/g, "");
    $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$ = $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$.replace("-----BEGIN CERTIFICATE-----", "");
    $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$ = $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$.replace("-----END CERTIFICATE-----", "");
    try {
      var $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$ = $goog$crypt$base64$decodeStringToByteArray$$($digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$);
    } catch ($exception$jscomp$inline_1043$$) {
      $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Failed to convert the certificate from PEM to DER format"), $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$ = null;
    }
    if ($JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$) {
      if ($digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$ = $castApp$core$PinGenerator$extractInfoFromDerCertificate_$$($JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$)) {
        $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$ = new $goog$crypt$Sha1$$;
        $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.update($digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$);
        $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$ = [];
        var $n$jscomp$inline_1050_totalBits$jscomp$inline_1048$$ = 8 * $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$h$;
        56 > $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$f$ ? $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.update($JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$g$, 56 - $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$f$) : 
        $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.update($JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$g$, $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$c$ - ($JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$f$ - 
        56));
        for (var $i$jscomp$inline_1049$$ = $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$c$ - 1; 56 <= $i$jscomp$inline_1049$$; $i$jscomp$inline_1049$$--) {
          $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$i$[$i$jscomp$inline_1049$$] = $n$jscomp$inline_1050_totalBits$jscomp$inline_1048$$ & 255, $n$jscomp$inline_1050_totalBits$jscomp$inline_1048$$ /= 256;
        }
        $JSCompiler_StaticMethods_compress_$$($JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$, $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$i$);
        for ($i$jscomp$inline_1049$$ = $n$jscomp$inline_1050_totalBits$jscomp$inline_1048$$ = 0; 5 > $i$jscomp$inline_1049$$; $i$jscomp$inline_1049$$++) {
          for (var $j$jscomp$inline_1051$$ = 24; 0 <= $j$jscomp$inline_1051$$; $j$jscomp$inline_1051$$ -= 8) {
            $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$[$n$jscomp$inline_1050_totalBits$jscomp$inline_1048$$] = $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$.$b$[$i$jscomp$inline_1049$$] >> $j$jscomp$inline_1051$$ & 255, ++$n$jscomp$inline_1050_totalBits$jscomp$inline_1048$$;
          }
        }
        $digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$ ? ($JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$ = [], $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$[0] = $castApp$core$PinGenerator$spanToAlpha_$$($castApp$core$PinGenerator$xorSpans_$$($digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$, 
        0)), $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$[1] = $castApp$core$PinGenerator$spanToDigit_$$($castApp$core$PinGenerator$xorSpans_$$($digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$, 4)), $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$[2] = $castApp$core$PinGenerator$spanToAlpha_$$($castApp$core$PinGenerator$xorSpans_$$($digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$, 
        8)), $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$[3] = $castApp$core$PinGenerator$spanToDigit_$$($castApp$core$PinGenerator$xorSpans_$$($digest$jscomp$inline_1047_keyBytes$jscomp$inline_635_pemStripped$jscomp$inline_1042$$, 12))) : $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$ = null;
      } else {
        $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$ = null;
      }
    } else {
      $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$ = null;
    }
    if (!$JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$) {
      return $castApp$log$warning$$($castApp$core$DeviceVerifier$logger$$, "Failed to generate device pin."), $goog$Promise$reject$$();
    }
    $result$jscomp$42_success$$.pin = $JSCompiler_temp$jscomp$966_certificateBytes$jscomp$inline_634_hasher$jscomp$inline_1046_pin$jscomp$1_pin$jscomp$inline_1054$$;
    return $result$jscomp$42_success$$;
  });
}, $$jscomp$scope$DeviceVerifierV3_$$ = function $$$jscomp$scope$DeviceVerifierV3_$$$($eurekaInfo$jscomp$2$$) {
  this.$b$ = $eurekaInfo$jscomp$2$$;
};
$goog$inherits$$($$jscomp$scope$DeviceVerifierV3_$$, $castApp$core$DeviceVerifier$$);
$$jscomp$scope$DeviceVerifierV3_$$.prototype.$g$ = function $$$jscomp$scope$DeviceVerifierV3_$$$$$g$$($clientHotSpot$$) {
  return $clientHotSpot$$.ssid === this.$b$.name;
};
$$jscomp$scope$DeviceVerifierV3_$$.prototype.$f$ = function $$$jscomp$scope$DeviceVerifierV3_$$$$$f$$() {
  return !0;
};
$$jscomp$scope$DeviceVerifierV3_$$.prototype.$c$ = function $$$jscomp$scope$DeviceVerifierV3_$$$$$c$$($bssid$jscomp$4$$) {
  var $eurekaInfo$jscomp$3$$ = this.$b$, $result$jscomp$43$$ = {};
  if (!($eurekaInfo$jscomp$3$$.public_key && $eurekaInfo$jscomp$3$$.ssdp_udn && $eurekaInfo$jscomp$3$$.name && $eurekaInfo$jscomp$3$$.sign && $eurekaInfo$jscomp$3$$.sign.certificate && $eurekaInfo$jscomp$3$$.sign.nonce && $eurekaInfo$jscomp$3$$.sign.signed_data)) {
    return null;
  }
  $result$jscomp$43$$.certificate = $eurekaInfo$jscomp$3$$.sign.certificate;
  $result$jscomp$43$$.publicKey = $eurekaInfo$jscomp$3$$.public_key;
  $result$jscomp$43$$.nonce = $eurekaInfo$jscomp$3$$.sign.nonce;
  $result$jscomp$43$$.signedData = $eurekaInfo$jscomp$3$$.sign.signed_data;
  $result$jscomp$43$$.deviceSerial = $eurekaInfo$jscomp$3$$.ssdp_udn;
  $result$jscomp$43$$.deviceSsid = $eurekaInfo$jscomp$3$$.name;
  $result$jscomp$43$$.deviceBssid = $bssid$jscomp$4$$;
  return $result$jscomp$43$$;
};
var $$jscomp$scope$DeviceVerifierV456_$$ = function $$$jscomp$scope$DeviceVerifierV456_$$$($eurekaInfo$jscomp$4$$) {
  this.$b$ = $eurekaInfo$jscomp$4$$;
};
$goog$inherits$$($$jscomp$scope$DeviceVerifierV456_$$, $castApp$core$DeviceVerifier$$);
$$jscomp$scope$DeviceVerifierV456_$$.prototype.$g$ = function $$$jscomp$scope$DeviceVerifierV456_$$$$$g$$($clientHotSpot$jscomp$1$$) {
  var $eurekaInfoBssid$$ = this.$b$.hotspot_bssid.toLowerCase();
  return $clientHotSpot$jscomp$1$$.ssid === this.$b$.name && $clientHotSpot$jscomp$1$$.bssid.toLowerCase() === $eurekaInfoBssid$$;
};
$$jscomp$scope$DeviceVerifierV456_$$.prototype.$f$ = function $$$jscomp$scope$DeviceVerifierV456_$$$$$f$$($clientNonce$jscomp$1$$) {
  return !(!this.$b$.sign || this.$b$.sign.nonce !== $clientNonce$jscomp$1$$);
};
$$jscomp$scope$DeviceVerifierV456_$$.prototype.$c$ = function $$$jscomp$scope$DeviceVerifierV456_$$$$$c$$() {
  var $eurekaInfo$jscomp$5$$ = this.$b$, $result$jscomp$44$$ = {};
  if (!($eurekaInfo$jscomp$5$$.public_key && $eurekaInfo$jscomp$5$$.ssdp_udn && $eurekaInfo$jscomp$5$$.name && $eurekaInfo$jscomp$5$$.sign && $eurekaInfo$jscomp$5$$.sign.certificate && $eurekaInfo$jscomp$5$$.sign.nonce && $eurekaInfo$jscomp$5$$.sign.signed_data && $eurekaInfo$jscomp$5$$.hotspot_bssid)) {
    return null;
  }
  $result$jscomp$44$$.certificate = $eurekaInfo$jscomp$5$$.sign.certificate;
  $result$jscomp$44$$.publicKey = $eurekaInfo$jscomp$5$$.public_key;
  $result$jscomp$44$$.nonce = $eurekaInfo$jscomp$5$$.sign.nonce;
  $result$jscomp$44$$.signedData = $eurekaInfo$jscomp$5$$.sign.signed_data;
  $result$jscomp$44$$.deviceSerial = $eurekaInfo$jscomp$5$$.ssdp_udn;
  $result$jscomp$44$$.deviceSsid = $eurekaInfo$jscomp$5$$.name;
  $result$jscomp$44$$.deviceBssid = $eurekaInfo$jscomp$5$$.hotspot_bssid;
  $eurekaInfo$jscomp$5$$.sign.intermediate_certs && 0 <= $goog$string$internal$compareVersions$$($goog$userAgent$product$VERSION$$, 42) && ($result$jscomp$44$$.intermediateCertificates = $eurekaInfo$jscomp$5$$.sign.intermediate_certs);
  return $result$jscomp$44$$;
};
var $$jscomp$scope$DeviceVerifierV7_$$ = function $$$jscomp$scope$DeviceVerifierV7_$$$($eurekaInfo$jscomp$6$$) {
  this.$b$ = $eurekaInfo$jscomp$6$$;
};
$goog$inherits$$($$jscomp$scope$DeviceVerifierV7_$$, $castApp$core$DeviceVerifier$$);
$$jscomp$scope$DeviceVerifierV7_$$.prototype.$g$ = function $$$jscomp$scope$DeviceVerifierV7_$$$$$g$$($clientHotSpot$jscomp$2$$) {
  var $eurekaInfo$jscomp$7$$ = this.$b$;
  if (!$eurekaInfo$jscomp$7$$.name || !$eurekaInfo$jscomp$7$$.device_info || !$eurekaInfo$jscomp$7$$.device_info.hotspot_bssid) {
    return !1;
  }
  var $eurekaInfoSsid$$ = $eurekaInfo$jscomp$7$$.name;
  $eurekaInfo$jscomp$7$$.setup && $eurekaInfo$jscomp$7$$.setup.ssid_suffix && "c" !== $eurekaInfo$jscomp$7$$.setup.ssid_suffix && ($eurekaInfoSsid$$ += "." + $eurekaInfo$jscomp$7$$.setup.ssid_suffix);
  return $clientHotSpot$jscomp$2$$.ssid === $eurekaInfoSsid$$ && $castApp$core$utils$bssidsMatch$$($eurekaInfo$jscomp$7$$.device_info.hotspot_bssid, $clientHotSpot$jscomp$2$$.bssid);
};
$$jscomp$scope$DeviceVerifierV7_$$.prototype.$f$ = function $$$jscomp$scope$DeviceVerifierV7_$$$$$f$$($clientNonce$jscomp$2$$) {
  return !(!this.$b$.sign || this.$b$.sign.nonce !== $clientNonce$jscomp$2$$);
};
$$jscomp$scope$DeviceVerifierV7_$$.prototype.$c$ = function $$$jscomp$scope$DeviceVerifierV7_$$$$$c$$() {
  var $eurekaInfo$jscomp$8$$ = this.$b$, $result$jscomp$45$$ = {};
  if (!($eurekaInfo$jscomp$8$$.name && $eurekaInfo$jscomp$8$$.device_info && $eurekaInfo$jscomp$8$$.device_info.public_key && $eurekaInfo$jscomp$8$$.device_info.ssdp_udn && $eurekaInfo$jscomp$8$$.device_info.hotspot_bssid && $eurekaInfo$jscomp$8$$.sign && $eurekaInfo$jscomp$8$$.sign.certificate && $eurekaInfo$jscomp$8$$.sign.nonce && $eurekaInfo$jscomp$8$$.sign.signed_data)) {
    return null;
  }
  $result$jscomp$45$$.certificate = $eurekaInfo$jscomp$8$$.sign.certificate;
  $result$jscomp$45$$.publicKey = $eurekaInfo$jscomp$8$$.device_info.public_key;
  $result$jscomp$45$$.nonce = $eurekaInfo$jscomp$8$$.sign.nonce;
  $result$jscomp$45$$.signedData = $eurekaInfo$jscomp$8$$.sign.signed_data;
  $result$jscomp$45$$.deviceSerial = $eurekaInfo$jscomp$8$$.device_info.ssdp_udn;
  $result$jscomp$45$$.deviceSsid = $eurekaInfo$jscomp$8$$.name;
  $result$jscomp$45$$.deviceBssid = $eurekaInfo$jscomp$8$$.device_info.hotspot_bssid;
  $eurekaInfo$jscomp$8$$.sign.intermediate_certs && 0 <= $goog$string$internal$compareVersions$$($goog$userAgent$product$VERSION$$, 42) && ($result$jscomp$45$$.intermediateCertificates = $eurekaInfo$jscomp$8$$.sign.intermediate_certs);
  return $result$jscomp$45$$;
};
var $goog$net$XmlHttpFactory$$ = function $$goog$net$XmlHttpFactory$$$() {
};
$goog$net$XmlHttpFactory$$.prototype.$b$ = null;
var $JSCompiler_StaticMethods_getOptions$$ = function $$JSCompiler_StaticMethods_getOptions$$$($JSCompiler_StaticMethods_getOptions$self$$) {
  var $JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$;
  ($JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$ = $JSCompiler_StaticMethods_getOptions$self$$.$b$) || ($JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$ = {}, $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_getOptions$self$$) && ($JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$[0] = !0, $JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$[1] = !0), $JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$ = $JSCompiler_StaticMethods_getOptions$self$$.$b$ = $JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$);
  return $JSCompiler_temp$jscomp$45_options$jscomp$inline_645$$;
};
var $goog$net$XmlHttp$factory_$$, $goog$net$DefaultXmlHttpFactory$$ = function $$goog$net$DefaultXmlHttpFactory$$$() {
};
$goog$inherits$$($goog$net$DefaultXmlHttpFactory$$, $goog$net$XmlHttpFactory$$);
var $JSCompiler_StaticMethods_createInstance$$ = function $$JSCompiler_StaticMethods_createInstance$$$($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$) {
  return ($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$ = $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$)) ? new ActiveXObject($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$) : new XMLHttpRequest;
}, $JSCompiler_StaticMethods_getProgId_$$ = function $$JSCompiler_StaticMethods_getProgId_$$$($JSCompiler_StaticMethods_getProgId_$self$$) {
  if (!$JSCompiler_StaticMethods_getProgId_$self$$.$c$ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$jscomp$186$$ = 0; $i$jscomp$186$$ < $ACTIVE_X_IDENTS$$.length; $i$jscomp$186$$++) {
      var $candidate$jscomp$1$$ = $ACTIVE_X_IDENTS$$[$i$jscomp$186$$];
      try {
        return new ActiveXObject($candidate$jscomp$1$$), $JSCompiler_StaticMethods_getProgId_$self$$.$c$ = $candidate$jscomp$1$$;
      } catch ($e$jscomp$54$$) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return $JSCompiler_StaticMethods_getProgId_$self$$.$c$;
};
$goog$net$XmlHttp$factory_$$ = new $goog$net$DefaultXmlHttpFactory$$;
var $goog$net$XhrIo$$ = function $$goog$net$XhrIo$$$($opt_xmlHttpFactory$$) {
  $goog$events$EventTarget$$.call(this);
  this.headers = new $goog$structs$Map$$;
  this.$D$ = $opt_xmlHttpFactory$$ || null;
  this.$g$ = !1;
  this.$C$ = this.$b$ = null;
  this.$J$ = this.$v$ = "";
  this.$l$ = 0;
  this.$o$ = "";
  this.$h$ = this.$G$ = this.$u$ = this.$F$ = !1;
  this.$j$ = 0;
  this.$A$ = null;
  this.$s$ = "";
  this.$B$ = this.$m$ = !1;
};
$goog$inherits$$($goog$net$XhrIo$$, $goog$events$EventTarget$$);
$goog$net$XhrIo$$.prototype.$c$ = $goog$debug$LogManager$getLogger$$("goog.net.XhrIo");
var $goog$net$XhrIo$HTTP_SCHEME_PATTERN$$ = /^https?$/i, $goog$net$XhrIo$METHODS_WITH_FORM_DATA$$ = ["POST", "PUT"];
$goog$net$XhrIo$$.prototype.$getResponseType$ = function $$goog$net$XhrIo$$$$$getResponseType$$() {
  return this.$s$;
};
$goog$net$XhrIo$$.prototype.$getWithCredentials$ = function $$goog$net$XhrIo$$$$$getWithCredentials$$() {
  return this.$m$;
};
$goog$net$XhrIo$$.prototype.send = function $$goog$net$XhrIo$$$$send$($content$jscomp$9_url$jscomp$71$$, $method$jscomp$3_opt_method$jscomp$1$$, $contentIsFormData_opt_content$jscomp$9$$, $contentTypeKey_opt_headers$jscomp$1$$) {
  if (this.$b$) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$v$ + "; newUri=" + $content$jscomp$9_url$jscomp$71$$);
  }
  $method$jscomp$3_opt_method$jscomp$1$$ = $method$jscomp$3_opt_method$jscomp$1$$ ? $method$jscomp$3_opt_method$jscomp$1$$.toUpperCase() : "GET";
  this.$v$ = $content$jscomp$9_url$jscomp$71$$;
  this.$o$ = "";
  this.$l$ = 0;
  this.$J$ = $method$jscomp$3_opt_method$jscomp$1$$;
  this.$F$ = !1;
  this.$g$ = !0;
  this.$b$ = this.$D$ ? $JSCompiler_StaticMethods_createInstance$$(this.$D$) : $JSCompiler_StaticMethods_createInstance$$($goog$net$XmlHttp$factory_$$);
  this.$C$ = this.$D$ ? $JSCompiler_StaticMethods_getOptions$$(this.$D$) : $JSCompiler_StaticMethods_getOptions$$($goog$net$XmlHttp$factory_$$);
  this.$b$.onreadystatechange = $goog$bind$$(this.$K$, this);
  try {
    $goog$log$fine$$(this.$c$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Opening Xhr")), this.$G$ = !0, this.$b$.open($method$jscomp$3_opt_method$jscomp$1$$, String($content$jscomp$9_url$jscomp$71$$), !0), this.$G$ = !1;
  } catch ($err$jscomp$30$$) {
    $goog$log$fine$$(this.$c$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Error opening Xhr: " + $err$jscomp$30$$.message));
    $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$$(this, $err$jscomp$30$$);
    return;
  }
  $content$jscomp$9_url$jscomp$71$$ = $contentIsFormData_opt_content$jscomp$9$$ || "";
  var $headers$$ = new $goog$structs$Map$$(this.headers);
  $contentTypeKey_opt_headers$jscomp$1$$ && $goog$structs$forEach$$($contentTypeKey_opt_headers$jscomp$1$$, function($value$jscomp$172$$, $key$jscomp$125$$) {
    $headers$$.set($key$jscomp$125$$, $value$jscomp$172$$);
  });
  $contentTypeKey_opt_headers$jscomp$1$$ = $goog$array$find$$($headers$$.$getKeys$(), $goog$net$XhrIo$isContentTypeHeader_$$);
  $contentIsFormData_opt_content$jscomp$9$$ = $goog$global$$.FormData && $content$jscomp$9_url$jscomp$71$$ instanceof $goog$global$$.FormData;
  !(0 <= $goog$array$indexOf$$($goog$net$XhrIo$METHODS_WITH_FORM_DATA$$, $method$jscomp$3_opt_method$jscomp$1$$)) || $contentTypeKey_opt_headers$jscomp$1$$ || $contentIsFormData_opt_content$jscomp$9$$ || $headers$$.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  $headers$$.forEach(function($value$jscomp$173$$, $key$jscomp$126$$) {
    this.$b$.setRequestHeader($key$jscomp$126$$, $value$jscomp$173$$);
  }, this);
  this.$s$ && (this.$b$.responseType = this.$s$);
  "withCredentials" in this.$b$ && this.$b$.withCredentials !== this.$m$ && (this.$b$.withCredentials = this.$m$);
  try {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$(this), 0 < this.$j$ && (this.$B$ = $goog$net$XhrIo$shouldUseXhr2Timeout_$$(this.$b$), $goog$log$fine$$(this.$c$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Will abort after " + this.$j$ + "ms if incomplete, xhr2 " + this.$B$)), this.$B$ ? (this.$b$.timeout = this.$j$, this.$b$.ontimeout = $goog$bind$$(this.$I$, this)) : this.$A$ = $goog$Timer$callOnce$$(this.$I$, this.$j$, this)), $goog$log$fine$$(this.$c$, $JSCompiler_StaticMethods_formatMsg_$$(this, 
    "Sending request")), this.$u$ = !0, this.$b$.send($content$jscomp$9_url$jscomp$71$$), this.$u$ = !1;
  } catch ($err$6$$) {
    $goog$log$fine$$(this.$c$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Send error: " + $err$6$$.message)), $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$$(this, $err$6$$);
  }
};
var $goog$net$XhrIo$shouldUseXhr2Timeout_$$ = function $$goog$net$XhrIo$shouldUseXhr2Timeout_$$$($xhr$jscomp$1$$) {
  return $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$(9) && "number" == typeof $xhr$jscomp$1$$.timeout && $goog$isDef$$($xhr$jscomp$1$$.ontimeout);
}, $goog$net$XhrIo$isContentTypeHeader_$$ = function $$goog$net$XhrIo$isContentTypeHeader_$$$($header$jscomp$4$$) {
  return "content-type" == $header$jscomp$4$$.toLowerCase();
};
$goog$net$XhrIo$$.prototype.$I$ = function $$goog$net$XhrIo$$$$$I$$() {
  "undefined" != typeof $goog$$ && this.$b$ && (this.$o$ = "Timed out after " + this.$j$ + "ms, aborting", this.$l$ = 8, $goog$log$fine$$(this.$c$, $JSCompiler_StaticMethods_formatMsg_$$(this, this.$o$)), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "timeout"), this.abort(8));
};
var $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$$ = function $$JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$$$($JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$, $err$jscomp$31$$) {
  $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$.$g$ = !1;
  $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$.$b$ && ($JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$.$h$ = !0, $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$.$b$.abort(), $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$.$h$ = !1);
  $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$.$o$ = $err$jscomp$31$$;
  $JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$.$l$ = 5;
  $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$);
  $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_goog_net_XhrIo_prototype$error_$self$$);
}, $JSCompiler_StaticMethods_dispatchErrors_$$ = function $$JSCompiler_StaticMethods_dispatchErrors_$$$($JSCompiler_StaticMethods_dispatchErrors_$self$$) {
  $JSCompiler_StaticMethods_dispatchErrors_$self$$.$F$ || ($JSCompiler_StaticMethods_dispatchErrors_$self$$.$F$ = !0, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "error"));
};
$goog$net$XhrIo$$.prototype.abort = function $$goog$net$XhrIo$$$$abort$($opt_failureCode$$) {
  this.$b$ && this.$g$ && ($goog$log$fine$$(this.$c$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Aborting")), this.$g$ = !1, this.$h$ = !0, this.$b$.abort(), this.$h$ = !1, this.$l$ = $opt_failureCode$$ || 7, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "abort"), $JSCompiler_StaticMethods_cleanUpXhr_$$(this));
};
$goog$net$XhrIo$$.prototype.$disposeInternal$ = function $$goog$net$XhrIo$$$$$disposeInternal$$() {
  this.$b$ && (this.$g$ && (this.$g$ = !1, this.$h$ = !0, this.$b$.abort(), this.$h$ = !1), $JSCompiler_StaticMethods_cleanUpXhr_$$(this, !0));
  $goog$net$XhrIo$$.$superClass_$.$disposeInternal$.call(this);
};
$goog$net$XhrIo$$.prototype.$K$ = function $$goog$net$XhrIo$$$$$K$$() {
  this.$i$ || (this.$G$ || this.$u$ || this.$h$ ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this) : this.$M$());
};
$goog$net$XhrIo$$.prototype.$M$ = function $$goog$net$XhrIo$$$$$M$$() {
  $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this);
};
var $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$ = function $$JSCompiler_StaticMethods_onReadyStateChangeHelper_$$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) {
  if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$g$ && "undefined" != typeof $goog$$) {
    if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$C$[1] && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) && 2 == $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.getStatus()) {
      $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$c$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Local request error detected and ignored"));
    } else {
      if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$u$ && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
        $goog$Timer$callOnce$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$K$, 0, $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
      } else {
        if ($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "readystatechange"), 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
          $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$c$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Request complete"));
          $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$g$ = !1;
          try {
            if ($JSCompiler_StaticMethods_isSuccess$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
              $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "success");
            } else {
              $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$l$ = 6;
              try {
                var $JSCompiler_inline_result$jscomp$53$$ = 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$b$.statusText : "";
              } catch ($e$jscomp$inline_653$$) {
                $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$c$, "Can not get status: " + $e$jscomp$inline_653$$.message), $JSCompiler_inline_result$jscomp$53$$ = "";
              }
              $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$o$ = $JSCompiler_inline_result$jscomp$53$$ + " [" + $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.getStatus() + "]";
              $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
            }
          } finally {
            $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
          }
        }
      }
    }
  }
}, $JSCompiler_StaticMethods_cleanUpXhr_$$ = function $$JSCompiler_StaticMethods_cleanUpXhr_$$$($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$, $opt_fromDispose$$) {
  if ($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$.$b$) {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$);
    var $xhr$jscomp$2$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$.$b$, $clearedOnReadyStateChange$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$.$C$[0] ? $goog$nullFunction$$ : null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$.$b$ = null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$.$C$ = null;
    $opt_fromDispose$$ || $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$, "ready");
    try {
      $xhr$jscomp$2$$.onreadystatechange = $clearedOnReadyStateChange$$;
    } catch ($e$jscomp$58$$) {
      ($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$.$c$) && $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_655$$.log($goog$debug$Logger$Level$SEVERE$$, "Problem encountered resetting onreadystatechange: " + $e$jscomp$58$$.message, void 0);
    }
  }
}, $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$ = function $$JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$) {
  $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$b$ && $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$B$ && ($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$b$.ontimeout = null);
  $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$A$ && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$A$), $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$A$ = null);
}, $JSCompiler_StaticMethods_isSuccess$$ = function $$JSCompiler_StaticMethods_isSuccess$$$($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$) {
  var $JSCompiler_temp$jscomp$50_status$jscomp$1$$ = $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$.getStatus();
  a: {
    switch($JSCompiler_temp$jscomp$50_status$jscomp$1$$) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var $JSCompiler_inline_result$jscomp$44_JSCompiler_temp$jscomp$49$$ = !0;
        break a;
      default:
        $JSCompiler_inline_result$jscomp$44_JSCompiler_temp$jscomp$49$$ = !1;
    }
  }
  if (!$JSCompiler_inline_result$jscomp$44_JSCompiler_temp$jscomp$49$$) {
    if ($JSCompiler_temp$jscomp$50_status$jscomp$1$$ = 0 === $JSCompiler_temp$jscomp$50_status$jscomp$1$$) {
      $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$ = String($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$.$v$).match($goog$uri$utils$splitRe_$$)[1] || null, !$JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$ && $goog$global$$.self && $goog$global$$.self.location && ($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$ = 
      $goog$global$$.self.location.protocol, $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$ = $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$.substr(0, $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$.length - 1)), $JSCompiler_temp$jscomp$50_status$jscomp$1$$ = !$goog$net$XhrIo$HTTP_SCHEME_PATTERN$$.test($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$ ? 
      $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1062_scheme$jscomp$inline_1061$$.toLowerCase() : "");
    }
    $JSCompiler_inline_result$jscomp$44_JSCompiler_temp$jscomp$49$$ = $JSCompiler_temp$jscomp$50_status$jscomp$1$$;
  }
  return $JSCompiler_inline_result$jscomp$44_JSCompiler_temp$jscomp$49$$;
}, $JSCompiler_StaticMethods_getReadyState$$ = function $$JSCompiler_StaticMethods_getReadyState$$$($JSCompiler_StaticMethods_getReadyState$self$$) {
  return $JSCompiler_StaticMethods_getReadyState$self$$.$b$ ? $JSCompiler_StaticMethods_getReadyState$self$$.$b$.readyState : 0;
};
$goog$net$XhrIo$$.prototype.getStatus = function $$goog$net$XhrIo$$$$getStatus$() {
  try {
    return 2 < $JSCompiler_StaticMethods_getReadyState$$(this) ? this.$b$.status : -1;
  } catch ($e$jscomp$59$$) {
    return -1;
  }
};
$goog$net$XhrIo$$.prototype.$getResponseText$ = function $$goog$net$XhrIo$$$$$getResponseText$$() {
  try {
    return this.$b$ ? this.$b$.responseText : "";
  } catch ($e$jscomp$61$$) {
    return $goog$log$fine$$(this.$c$, "Can not get responseText: " + $e$jscomp$61$$.message), "";
  }
};
$goog$net$XhrIo$$.prototype.getResponseHeader = function $$goog$net$XhrIo$$$$getResponseHeader$($key$jscomp$127_value$jscomp$174$$) {
  if (this.$b$ && 4 == $JSCompiler_StaticMethods_getReadyState$$(this)) {
    return $key$jscomp$127_value$jscomp$174$$ = this.$b$.getResponseHeader($key$jscomp$127_value$jscomp$174$$), null === $key$jscomp$127_value$jscomp$174$$ ? void 0 : $key$jscomp$127_value$jscomp$174$$;
  }
};
var $JSCompiler_StaticMethods_getResponseHeaders$$ = function $$JSCompiler_StaticMethods_getResponseHeaders$$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$) {
  var $headersObject$$ = {};
  $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$ = ($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.$b$ && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$) ? $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.$b$.getAllResponseHeaders() || "" : "").split("\r\n");
  for (var $i$jscomp$187$$ = 0; $i$jscomp$187$$ < $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.length; $i$jscomp$187$$++) {
    if (!/^[\s\xa0]*$/.test($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$[$i$jscomp$187$$])) {
      var $keyValue_value$jscomp$175$$ = $goog$string$splitLimit$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$[$i$jscomp$187$$]), $key$jscomp$128$$ = $keyValue_value$jscomp$175$$[0];
      $keyValue_value$jscomp$175$$ = $keyValue_value$jscomp$175$$[1];
      if ($goog$isString$$($keyValue_value$jscomp$175$$)) {
        $keyValue_value$jscomp$175$$ = $keyValue_value$jscomp$175$$.trim();
        var $values$jscomp$27$$ = $headersObject$$[$key$jscomp$128$$] || [];
        $headersObject$$[$key$jscomp$128$$] = $values$jscomp$27$$;
        $values$jscomp$27$$.push($keyValue_value$jscomp$175$$);
      }
    }
  }
  return $goog$object$map$$($headersObject$$, function($values$jscomp$28$$) {
    return $values$jscomp$28$$.join(", ");
  });
}, $JSCompiler_StaticMethods_formatMsg_$$ = function $$JSCompiler_StaticMethods_formatMsg_$$$($JSCompiler_StaticMethods_formatMsg_$self$$, $msg$jscomp$44$$) {
  return $msg$jscomp$44$$ + " [" + $JSCompiler_StaticMethods_formatMsg_$self$$.$J$ + " " + $JSCompiler_StaticMethods_formatMsg_$self$$.$v$ + " " + $JSCompiler_StaticMethods_formatMsg_$self$$.getStatus() + "]";
};
var $goog$events$EventHandler$$ = function $$goog$events$EventHandler$$$($opt_scope$jscomp$5$$) {
  $goog$Disposable$$.call(this);
  this.$c$ = $opt_scope$jscomp$5$$;
  this.$b$ = {};
};
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
$goog$events$EventHandler$$.prototype.listen = function $$goog$events$EventHandler$$$$listen$($src$jscomp$22$$, $type$jscomp$193_type$jscomp$inline_668$$, $opt_fn$$, $opt_options$jscomp$97$$) {
  $goog$isArray$$($type$jscomp$193_type$jscomp$inline_668$$) || ($type$jscomp$193_type$jscomp$inline_668$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$jscomp$193_type$jscomp$inline_668$$.toString()), $type$jscomp$193_type$jscomp$inline_668$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$jscomp$inline_672$$ = 0; $i$jscomp$inline_672$$ < $type$jscomp$193_type$jscomp$inline_668$$.length; $i$jscomp$inline_672$$++) {
    var $listenerObj$jscomp$inline_673$$ = $goog$events$listen$$($src$jscomp$22$$, $type$jscomp$193_type$jscomp$inline_668$$[$i$jscomp$inline_672$$], $opt_fn$$ || this.handleEvent, $opt_options$jscomp$97$$ || !1, this.$c$ || this);
    if (!$listenerObj$jscomp$inline_673$$) {
      break;
    }
    this.$b$[$listenerObj$jscomp$inline_673$$.key] = $listenerObj$jscomp$inline_673$$;
  }
  return this;
};
var $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$$ = function $$JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$$$($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$self$$, $listenerMap$jscomp$inline_681_src$jscomp$31$$, $listener$jscomp$136_type$jscomp$199$$, $listener$jscomp$inline_677_opt_fn$jscomp$4$$, $capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$, $opt_handler$jscomp$inline_679_opt_scope$jscomp$9$$) {
  if ($goog$isArray$$($listener$jscomp$136_type$jscomp$199$$)) {
    for (var $i$jscomp$190$$ = 0; $i$jscomp$190$$ < $listener$jscomp$136_type$jscomp$199$$.length; $i$jscomp$190$$++) {
      $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$$($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$self$$, $listenerMap$jscomp$inline_681_src$jscomp$31$$, $listener$jscomp$136_type$jscomp$199$$[$i$jscomp$190$$], $listener$jscomp$inline_677_opt_fn$jscomp$4$$, $capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$, $opt_handler$jscomp$inline_679_opt_scope$jscomp$9$$);
    }
  } else {
    $listener$jscomp$inline_677_opt_fn$jscomp$4$$ = $listener$jscomp$inline_677_opt_fn$jscomp$4$$ || $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$self$$.handleEvent, $capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$ = $goog$isObject$$($capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$) ? !!$capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$.capture : !!$capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$, 
    $opt_handler$jscomp$inline_679_opt_scope$jscomp$9$$ = $opt_handler$jscomp$inline_679_opt_scope$jscomp$9$$ || $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$self$$.$c$ || $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$self$$, $listener$jscomp$inline_677_opt_fn$jscomp$4$$ = $goog$events$wrapListener$$($listener$jscomp$inline_677_opt_fn$jscomp$4$$), $capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$ = !!$capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$, 
    $listener$jscomp$136_type$jscomp$199$$ = $goog$events$Listenable$isImplementedBy$$($listenerMap$jscomp$inline_681_src$jscomp$31$$) ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$jscomp$inline_681_src$jscomp$31$$.$f$, String($listener$jscomp$136_type$jscomp$199$$), $listener$jscomp$inline_677_opt_fn$jscomp$4$$, $capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$, $opt_handler$jscomp$inline_679_opt_scope$jscomp$9$$) : $listenerMap$jscomp$inline_681_src$jscomp$31$$ ? 
    ($listenerMap$jscomp$inline_681_src$jscomp$31$$ = $goog$events$getListenerMap_$$($listenerMap$jscomp$inline_681_src$jscomp$31$$)) ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$jscomp$inline_681_src$jscomp$31$$, $listener$jscomp$136_type$jscomp$199$$, $listener$jscomp$inline_677_opt_fn$jscomp$4$$, $capture$jscomp$inline_680_opt_capt$jscomp$inline_678_opt_options$jscomp$101$$, $opt_handler$jscomp$inline_679_opt_scope$jscomp$9$$) : null : null, $listener$jscomp$136_type$jscomp$199$$ && 
    ($goog$events$unlistenByKey$$($listener$jscomp$136_type$jscomp$199$$), delete $JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$self$$.$b$[$listener$jscomp$136_type$jscomp$199$$.key]);
  }
};
$goog$events$EventHandler$$.prototype.removeAll = function $$goog$events$EventHandler$$$$removeAll$() {
  $goog$object$forEach$$(this.$b$, function($listenerObj$jscomp$8$$, $key$jscomp$133$$) {
    this.$b$.hasOwnProperty($key$jscomp$133$$) && $goog$events$unlistenByKey$$($listenerObj$jscomp$8$$);
  }, this);
  this.$b$ = {};
};
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.removeAll();
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  throw Error("EventHandler.handleEvent not implemented");
};
var $goog$structs$Queue$$ = function $$goog$structs$Queue$$$() {
  this.$b$ = [];
  this.$c$ = [];
};
$goog$structs$Queue$$.prototype.enqueue = function $$goog$structs$Queue$$$$enqueue$($element$jscomp$37$$) {
  this.$c$.push($element$jscomp$37$$);
};
var $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$ = function $$JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$$($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$) {
  0 == $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$.length && ($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$ = $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$c$, $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$.reverse(), $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$c$ = []);
  return $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$.pop();
}, $JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$$ = function $$JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$$$($JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$self$$) {
  return $JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$self$$.$b$.length + $JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$self$$.$c$.length;
};
$goog$structs$Queue$$.prototype.clear = function $$goog$structs$Queue$$$$clear$() {
  this.$b$ = [];
  this.$c$ = [];
};
$goog$structs$Queue$$.prototype.contains = function $$goog$structs$Queue$$$$contains$($obj$jscomp$114$$) {
  return 0 <= $goog$array$indexOf$$(this.$b$, $obj$jscomp$114$$) || 0 <= $goog$array$indexOf$$(this.$c$, $obj$jscomp$114$$);
};
$goog$structs$Queue$$.prototype.remove = function $$goog$structs$Queue$$$$remove$($obj$jscomp$115$$) {
  var $JSCompiler_inline_result$jscomp$11_arr$jscomp$inline_685$$ = this.$b$;
  var $i$jscomp$inline_687$$ = $goog$array$lastIndexOf$$($JSCompiler_inline_result$jscomp$11_arr$jscomp$inline_685$$, $obj$jscomp$115$$);
  0 <= $i$jscomp$inline_687$$ ? ($goog$array$removeAt$$($JSCompiler_inline_result$jscomp$11_arr$jscomp$inline_685$$, $i$jscomp$inline_687$$), $JSCompiler_inline_result$jscomp$11_arr$jscomp$inline_685$$ = !0) : $JSCompiler_inline_result$jscomp$11_arr$jscomp$inline_685$$ = !1;
  return $JSCompiler_inline_result$jscomp$11_arr$jscomp$inline_685$$ || $goog$array$remove$$(this.$c$, $obj$jscomp$115$$);
};
$goog$structs$Queue$$.prototype.$getValues$ = function $$goog$structs$Queue$$$$$getValues$$() {
  for (var $res$jscomp$9$$ = [], $i$jscomp$191$$ = this.$b$.length - 1; 0 <= $i$jscomp$191$$; --$i$jscomp$191$$) {
    $res$jscomp$9$$.push(this.$b$[$i$jscomp$191$$]);
  }
  var $len$jscomp$13$$ = this.$c$.length;
  for ($i$jscomp$191$$ = 0; $i$jscomp$191$$ < $len$jscomp$13$$; ++$i$jscomp$191$$) {
    $res$jscomp$9$$.push(this.$c$[$i$jscomp$191$$]);
  }
  return $res$jscomp$9$$;
};
var $goog$structs$Pool$$ = function $$goog$structs$Pool$$$($opt_minCount$$, $opt_maxCount$$) {
  $goog$Disposable$$.call(this);
  this.$o$ = $opt_minCount$$ || 0;
  this.$f$ = $opt_maxCount$$ || 10;
  if (this.$o$ > this.$f$) {
    throw Error("[goog.structs.Pool] Min can not be greater than max");
  }
  this.$b$ = new $goog$structs$Queue$$;
  this.$c$ = new $goog$structs$Set$$;
  this.delay = 0;
  this.$j$ = null;
  this.$adjustForMinMax$();
};
$goog$inherits$$($goog$structs$Pool$$, $goog$Disposable$$);
$goog$structs$Pool$$.prototype.$getObject$ = function $$goog$structs$Pool$$$$$getObject$$() {
  var $time$jscomp$4$$ = $goog$now$$();
  if (!(null != this.$j$ && $time$jscomp$4$$ - this.$j$ < this.delay)) {
    for (var $obj$jscomp$116_obj$jscomp$inline_690$$; 0 < $JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$$(this.$b$) && ($obj$jscomp$116_obj$jscomp$inline_690$$ = $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$(this.$b$), !this.$l$($obj$jscomp$116_obj$jscomp$inline_690$$));) {
      this.$adjustForMinMax$();
    }
    !$obj$jscomp$116_obj$jscomp$inline_690$$ && $JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$$(this) < this.$f$ && ($obj$jscomp$116_obj$jscomp$inline_690$$ = this.$h$());
    $obj$jscomp$116_obj$jscomp$inline_690$$ && (this.$j$ = $time$jscomp$4$$, this.$c$.add($obj$jscomp$116_obj$jscomp$inline_690$$));
    return $obj$jscomp$116_obj$jscomp$inline_690$$;
  }
};
$goog$structs$Pool$$.prototype.$addFreeObject$ = function $$goog$structs$Pool$$$$$addFreeObject$$($obj$jscomp$119$$) {
  this.$c$.remove($obj$jscomp$119$$);
  this.$l$($obj$jscomp$119$$) && $JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$$(this) < this.$f$ ? this.$b$.enqueue($obj$jscomp$119$$) : $JSCompiler_StaticMethods_disposeObject$$($obj$jscomp$119$$);
};
$goog$structs$Pool$$.prototype.$adjustForMinMax$ = function $$goog$structs$Pool$$$$$adjustForMinMax$$() {
  for (var $freeQueue$$ = this.$b$; $JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$$(this) < this.$o$;) {
    $freeQueue$$.enqueue(this.$h$());
  }
  for (; $JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$$(this) > this.$f$ && 0 < $JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$$(this.$b$);) {
    $JSCompiler_StaticMethods_disposeObject$$($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$($freeQueue$$));
  }
};
$goog$structs$Pool$$.prototype.$h$ = function $$goog$structs$Pool$$$$$h$$() {
  return {};
};
var $JSCompiler_StaticMethods_disposeObject$$ = function $$JSCompiler_StaticMethods_disposeObject$$$($obj$jscomp$120$$) {
  if ("function" == typeof $obj$jscomp$120$$.$dispose$) {
    $obj$jscomp$120$$.$dispose$();
  } else {
    for (var $i$jscomp$192$$ in $obj$jscomp$120$$) {
      $obj$jscomp$120$$[$i$jscomp$192$$] = null;
    }
  }
};
$goog$structs$Pool$$.prototype.$l$ = function $$goog$structs$Pool$$$$$l$$($obj$jscomp$121$$) {
  return "function" == typeof $obj$jscomp$121$$.$canBeReused$ ? $obj$jscomp$121$$.$canBeReused$() : !0;
};
$goog$structs$Pool$$.prototype.contains = function $$goog$structs$Pool$$$$contains$($obj$jscomp$122$$) {
  return this.$b$.contains($obj$jscomp$122$$) || this.$c$.contains($obj$jscomp$122$$);
};
var $JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$$ = function $$JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$$$($JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$self$$) {
  return $JSCompiler_StaticMethods_goog_structs_Queue_prototype$getCount$$($JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$self$$.$b$) + $JSCompiler_StaticMethods_goog_structs_Pool_prototype$getCount$self$$.$c$.$b$.$b$;
};
$goog$structs$Pool$$.prototype.$disposeInternal$ = function $$goog$structs$Pool$$$$$disposeInternal$$() {
  $goog$structs$Pool$$.$superClass_$.$disposeInternal$.call(this);
  if (0 < this.$c$.$b$.$b$) {
    throw Error("[goog.structs.Pool] Objects not released");
  }
  delete this.$c$;
  for (var $freeQueue$jscomp$1$$ = this.$b$; 0 != $freeQueue$jscomp$1$$.$b$.length || 0 != $freeQueue$jscomp$1$$.$c$.length;) {
    $JSCompiler_StaticMethods_disposeObject$$($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$($freeQueue$jscomp$1$$));
  }
  delete this.$b$;
};
var $goog$structs$Node$$ = function $$goog$structs$Node$$$($key$jscomp$134$$, $value$jscomp$176$$) {
  this.$b$ = $key$jscomp$134$$;
  this.$c$ = $value$jscomp$176$$;
};
var $goog$structs$Heap$$ = function $$goog$structs$Heap$$$($opt_heap_values$jscomp$inline_695$$) {
  this.$b$ = [];
  if ($opt_heap_values$jscomp$inline_695$$) {
    a: {
      if ($opt_heap_values$jscomp$inline_695$$ instanceof $goog$structs$Heap$$) {
        var $keys$jscomp$inline_694$$ = $opt_heap_values$jscomp$inline_695$$.$getKeys$();
        $opt_heap_values$jscomp$inline_695$$ = $opt_heap_values$jscomp$inline_695$$.$getValues$();
        if (0 >= this.$b$.length) {
          for (var $nodes$jscomp$inline_696$$ = this.$b$, $i$jscomp$inline_697$$ = 0; $i$jscomp$inline_697$$ < $keys$jscomp$inline_694$$.length; $i$jscomp$inline_697$$++) {
            $nodes$jscomp$inline_696$$.push(new $goog$structs$Node$$($keys$jscomp$inline_694$$[$i$jscomp$inline_697$$], $opt_heap_values$jscomp$inline_695$$[$i$jscomp$inline_697$$]));
          }
          break a;
        }
      } else {
        $keys$jscomp$inline_694$$ = $goog$object$getKeys$$($opt_heap_values$jscomp$inline_695$$), $opt_heap_values$jscomp$inline_695$$ = $goog$object$getValues$$($opt_heap_values$jscomp$inline_695$$);
      }
      for ($i$jscomp$inline_697$$ = 0; $i$jscomp$inline_697$$ < $keys$jscomp$inline_694$$.length; $i$jscomp$inline_697$$++) {
        $JSCompiler_StaticMethods_insert$$(this, $keys$jscomp$inline_694$$[$i$jscomp$inline_697$$], $opt_heap_values$jscomp$inline_695$$[$i$jscomp$inline_697$$]);
      }
    }
  }
}, $JSCompiler_StaticMethods_insert$$ = function $$JSCompiler_StaticMethods_insert$$$($JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$, $index$jscomp$inline_700_key$jscomp$135$$, $node$jscomp$inline_702_value$jscomp$177$$) {
  var $nodes$jscomp$16_parentIndex$jscomp$inline_703$$ = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$.$b$;
  $nodes$jscomp$16_parentIndex$jscomp$inline_703$$.push(new $goog$structs$Node$$($index$jscomp$inline_700_key$jscomp$135$$, $node$jscomp$inline_702_value$jscomp$177$$));
  $index$jscomp$inline_700_key$jscomp$135$$ = $nodes$jscomp$16_parentIndex$jscomp$inline_703$$.length - 1;
  $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$ = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$.$b$;
  for ($node$jscomp$inline_702_value$jscomp$177$$ = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$[$index$jscomp$inline_700_key$jscomp$135$$]; 0 < $index$jscomp$inline_700_key$jscomp$135$$;) {
    if ($nodes$jscomp$16_parentIndex$jscomp$inline_703$$ = $index$jscomp$inline_700_key$jscomp$135$$ - 1 >> 1, $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$[$nodes$jscomp$16_parentIndex$jscomp$inline_703$$].$b$ > $node$jscomp$inline_702_value$jscomp$177$$.$b$) {
      $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$[$index$jscomp$inline_700_key$jscomp$135$$] = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$[$nodes$jscomp$16_parentIndex$jscomp$inline_703$$], $index$jscomp$inline_700_key$jscomp$135$$ = $nodes$jscomp$16_parentIndex$jscomp$inline_703$$;
    } else {
      break;
    }
  }
  $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_701$$[$index$jscomp$inline_700_key$jscomp$135$$] = $node$jscomp$inline_702_value$jscomp$177$$;
};
$goog$structs$Heap$$.prototype.remove = function $$goog$structs$Heap$$$$remove$() {
  var $index$jscomp$inline_706_nodes$jscomp$18$$ = this.$b$, $count$jscomp$26_nodes$jscomp$inline_707$$ = $index$jscomp$inline_706_nodes$jscomp$18$$.length, $rootNode$$ = $index$jscomp$inline_706_nodes$jscomp$18$$[0];
  if (!(0 >= $count$jscomp$26_nodes$jscomp$inline_707$$)) {
    if (1 == $count$jscomp$26_nodes$jscomp$inline_707$$) {
      $goog$array$clear$$($index$jscomp$inline_706_nodes$jscomp$18$$);
    } else {
      $index$jscomp$inline_706_nodes$jscomp$18$$[0] = $index$jscomp$inline_706_nodes$jscomp$18$$.pop();
      $index$jscomp$inline_706_nodes$jscomp$18$$ = 0;
      $count$jscomp$26_nodes$jscomp$inline_707$$ = this.$b$;
      for (var $count$jscomp$inline_708$$ = $count$jscomp$26_nodes$jscomp$inline_707$$.length, $node$jscomp$inline_709$$ = $count$jscomp$26_nodes$jscomp$inline_707$$[$index$jscomp$inline_706_nodes$jscomp$18$$]; $index$jscomp$inline_706_nodes$jscomp$18$$ < $count$jscomp$inline_708$$ >> 1;) {
        var $leftChildIndex$jscomp$inline_710_smallerChildIndex$jscomp$inline_712$$ = 2 * $index$jscomp$inline_706_nodes$jscomp$18$$ + 1, $rightChildIndex$jscomp$inline_711$$ = 2 * $index$jscomp$inline_706_nodes$jscomp$18$$ + 2;
        $leftChildIndex$jscomp$inline_710_smallerChildIndex$jscomp$inline_712$$ = $rightChildIndex$jscomp$inline_711$$ < $count$jscomp$inline_708$$ && $count$jscomp$26_nodes$jscomp$inline_707$$[$rightChildIndex$jscomp$inline_711$$].$b$ < $count$jscomp$26_nodes$jscomp$inline_707$$[$leftChildIndex$jscomp$inline_710_smallerChildIndex$jscomp$inline_712$$].$b$ ? $rightChildIndex$jscomp$inline_711$$ : $leftChildIndex$jscomp$inline_710_smallerChildIndex$jscomp$inline_712$$;
        if ($count$jscomp$26_nodes$jscomp$inline_707$$[$leftChildIndex$jscomp$inline_710_smallerChildIndex$jscomp$inline_712$$].$b$ > $node$jscomp$inline_709$$.$b$) {
          break;
        }
        $count$jscomp$26_nodes$jscomp$inline_707$$[$index$jscomp$inline_706_nodes$jscomp$18$$] = $count$jscomp$26_nodes$jscomp$inline_707$$[$leftChildIndex$jscomp$inline_710_smallerChildIndex$jscomp$inline_712$$];
        $index$jscomp$inline_706_nodes$jscomp$18$$ = $leftChildIndex$jscomp$inline_710_smallerChildIndex$jscomp$inline_712$$;
      }
      $count$jscomp$26_nodes$jscomp$inline_707$$[$index$jscomp$inline_706_nodes$jscomp$18$$] = $node$jscomp$inline_709$$;
    }
    return $rootNode$$.$c$;
  }
};
$goog$structs$Heap$$.prototype.$getValues$ = function $$goog$structs$Heap$$$$$getValues$$() {
  for (var $nodes$jscomp$22$$ = this.$b$, $rv$jscomp$24$$ = [], $l$jscomp$23$$ = $nodes$jscomp$22$$.length, $i$jscomp$194$$ = 0; $i$jscomp$194$$ < $l$jscomp$23$$; $i$jscomp$194$$++) {
    $rv$jscomp$24$$.push($nodes$jscomp$22$$[$i$jscomp$194$$].$c$);
  }
  return $rv$jscomp$24$$;
};
$goog$structs$Heap$$.prototype.$getKeys$ = function $$goog$structs$Heap$$$$$getKeys$$() {
  for (var $nodes$jscomp$23$$ = this.$b$, $rv$jscomp$25$$ = [], $l$jscomp$24$$ = $nodes$jscomp$23$$.length, $i$jscomp$195$$ = 0; $i$jscomp$195$$ < $l$jscomp$24$$; $i$jscomp$195$$++) {
    $rv$jscomp$25$$.push($nodes$jscomp$23$$[$i$jscomp$195$$].$b$);
  }
  return $rv$jscomp$25$$;
};
$goog$structs$Heap$$.prototype.clear = function $$goog$structs$Heap$$$$clear$() {
  $goog$array$clear$$(this.$b$);
};
var $goog$structs$PriorityQueue$$ = function $$goog$structs$PriorityQueue$$$() {
  $goog$structs$Heap$$.call(this);
};
$goog$inherits$$($goog$structs$PriorityQueue$$, $goog$structs$Heap$$);
$goog$structs$PriorityQueue$$.prototype.enqueue = function $$goog$structs$PriorityQueue$$$$enqueue$($priority$$, $value$jscomp$178$$) {
  $JSCompiler_StaticMethods_insert$$(this, $priority$$, $value$jscomp$178$$);
};
var $goog$structs$PriorityPool$$ = function $$goog$structs$PriorityPool$$$($opt_minCount$jscomp$1$$, $opt_maxCount$jscomp$1$$) {
  this.$m$ = void 0;
  this.$g$ = new $goog$structs$PriorityQueue$$;
  $goog$structs$Pool$$.call(this, $opt_minCount$jscomp$1$$, $opt_maxCount$jscomp$1$$);
};
$goog$inherits$$($goog$structs$PriorityPool$$, $goog$structs$Pool$$);
$JSCompiler_prototypeAlias$$ = $goog$structs$PriorityPool$$.prototype;
$JSCompiler_prototypeAlias$$.$getObject$ = function $$JSCompiler_prototypeAlias$$$$getObject$$($opt_callback$jscomp$154_result$jscomp$47$$, $opt_priority$jscomp$1$$) {
  if (!$opt_callback$jscomp$154_result$jscomp$47$$) {
    return ($opt_callback$jscomp$154_result$jscomp$47$$ = $goog$structs$PriorityPool$$.$superClass_$.$getObject$.call(this)) && this.delay && (this.$m$ = $goog$global$$.setTimeout($goog$bind$$(this.$handleQueueRequests_$, this), this.delay)), $opt_callback$jscomp$154_result$jscomp$47$$;
  }
  this.$g$.enqueue($goog$isDef$$($opt_priority$jscomp$1$$) ? $opt_priority$jscomp$1$$ : 100, $opt_callback$jscomp$154_result$jscomp$47$$);
  this.$handleQueueRequests_$();
};
$JSCompiler_prototypeAlias$$.$handleQueueRequests_$ = function $$JSCompiler_prototypeAlias$$$$handleQueueRequests_$$() {
  for (var $requestQueue$$ = this.$g$; 0 < $requestQueue$$.$b$.length;) {
    var $obj$jscomp$123$$ = this.$getObject$();
    if ($obj$jscomp$123$$) {
      $requestQueue$$.remove().apply(this, [$obj$jscomp$123$$]);
    } else {
      break;
    }
  }
};
$JSCompiler_prototypeAlias$$.$addFreeObject$ = function $$JSCompiler_prototypeAlias$$$$addFreeObject$$($obj$jscomp$124$$) {
  $goog$structs$PriorityPool$$.$superClass_$.$addFreeObject$.call(this, $obj$jscomp$124$$);
  this.$handleQueueRequests_$();
};
$JSCompiler_prototypeAlias$$.$adjustForMinMax$ = function $$JSCompiler_prototypeAlias$$$$adjustForMinMax$$() {
  $goog$structs$PriorityPool$$.$superClass_$.$adjustForMinMax$.call(this);
  this.$handleQueueRequests_$();
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$structs$PriorityPool$$.$superClass_$.$disposeInternal$.call(this);
  $goog$global$$.clearTimeout(this.$m$);
  this.$g$.clear();
  this.$g$ = null;
};
var $goog$net$XhrIoPool$$ = function $$goog$net$XhrIoPool$$$($opt_headers$jscomp$2$$, $opt_minCount$jscomp$2$$, $opt_maxCount$jscomp$2$$, $opt_withCredentials$jscomp$1$$) {
  this.$s$ = $opt_headers$jscomp$2$$;
  this.$u$ = !!$opt_withCredentials$jscomp$1$$;
  $goog$structs$PriorityPool$$.call(this, $opt_minCount$jscomp$2$$, $opt_maxCount$jscomp$2$$);
};
$goog$inherits$$($goog$net$XhrIoPool$$, $goog$structs$PriorityPool$$);
$goog$net$XhrIoPool$$.prototype.$h$ = function $$goog$net$XhrIoPool$$$$$h$$() {
  var $xhrIo$$ = new $goog$net$XhrIo$$, $headers$jscomp$1$$ = this.$s$;
  $headers$jscomp$1$$ && $headers$jscomp$1$$.forEach(function($value$jscomp$179$$, $key$jscomp$137$$) {
    $xhrIo$$.headers.set($key$jscomp$137$$, $value$jscomp$179$$);
  });
  this.$u$ && ($xhrIo$$.$m$ = !0);
  return $xhrIo$$;
};
$goog$net$XhrIoPool$$.prototype.$l$ = function $$goog$net$XhrIoPool$$$$$l$$($obj$jscomp$125$$) {
  return !$obj$jscomp$125$$.$i$ && !$obj$jscomp$125$$.$b$;
};
var $goog$net$XhrManager$$ = function $$goog$net$XhrManager$$$($opt_maxRetries$$, $opt_headers$jscomp$3$$, $opt_minCount$jscomp$3$$, $opt_maxCount$jscomp$3$$, $opt_timeoutInterval$jscomp$1$$, $opt_withCredentials$jscomp$2$$) {
  $goog$events$EventTarget$$.call(this);
  this.$j$ = $goog$isDef$$($opt_maxRetries$$) ? $opt_maxRetries$$ : 1;
  this.$h$ = $goog$isDef$$($opt_timeoutInterval$jscomp$1$$) ? Math.max(0, $opt_timeoutInterval$jscomp$1$$) : 0;
  this.$l$ = !!$opt_withCredentials$jscomp$2$$;
  this.$c$ = new $goog$net$XhrIoPool$$($opt_headers$jscomp$3$$, $opt_minCount$jscomp$3$$, $opt_maxCount$jscomp$3$$, $opt_withCredentials$jscomp$2$$);
  this.$b$ = new $goog$structs$Map$$;
  this.$g$ = new $goog$events$EventHandler$$(this);
};
$goog$inherits$$($goog$net$XhrManager$$, $goog$events$EventTarget$$);
var $goog$net$XhrManager$XHR_EVENT_TYPES_$$ = "ready complete success error abort timeout".split(" ");
$goog$net$XhrManager$$.prototype.send = function $$goog$net$XhrManager$$$$send$($callback$jscomp$354_id$jscomp$55$$, $request$jscomp$15_url$jscomp$72$$, $opt_method$jscomp$2$$, $opt_content$jscomp$10$$, $opt_headers$jscomp$4$$, $opt_priority$jscomp$2$$, $opt_callback$jscomp$155$$, $opt_maxRetries$jscomp$1$$, $opt_responseType$$, $opt_withCredentials$jscomp$3$$) {
  if (this.$b$.get($callback$jscomp$354_id$jscomp$55$$)) {
    throw Error("[goog.net.XhrManager] ID in use");
  }
  $request$jscomp$15_url$jscomp$72$$ = new $goog$net$XhrManager$Request$$($request$jscomp$15_url$jscomp$72$$, $goog$bind$$(this.$o$, this, $callback$jscomp$354_id$jscomp$55$$), $opt_method$jscomp$2$$, $opt_content$jscomp$10$$, $opt_headers$jscomp$4$$, $opt_callback$jscomp$155$$, $goog$isDef$$($opt_maxRetries$jscomp$1$$) ? $opt_maxRetries$jscomp$1$$ : this.$j$, $opt_responseType$$, $goog$isDef$$($opt_withCredentials$jscomp$3$$) ? $opt_withCredentials$jscomp$3$$ : this.$l$);
  this.$b$.set($callback$jscomp$354_id$jscomp$55$$, $request$jscomp$15_url$jscomp$72$$);
  $callback$jscomp$354_id$jscomp$55$$ = $goog$bind$$(this.$m$, this, $callback$jscomp$354_id$jscomp$55$$);
  this.$c$.$getObject$($callback$jscomp$354_id$jscomp$55$$, $opt_priority$jscomp$2$$);
  return $request$jscomp$15_url$jscomp$72$$;
};
$goog$net$XhrManager$$.prototype.abort = function $$goog$net$XhrManager$$$$abort$($id$jscomp$56$$, $opt_force$jscomp$2$$) {
  var $request$jscomp$16$$ = this.$b$.get($id$jscomp$56$$);
  if ($request$jscomp$16$$) {
    var $xhrIo$jscomp$1$$ = $request$jscomp$16$$.$xhrIo$;
    $request$jscomp$16$$.$aborted_$ = !0;
    $opt_force$jscomp$2$$ && ($xhrIo$jscomp$1$$ && ($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$$(this.$g$, $xhrIo$jscomp$1$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$jscomp$16$$.$xhrEventCallback_$), $goog$events$listenOnce$$($xhrIo$jscomp$1$$, "ready", function() {
      var $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1070$$ = this.$c$;
      $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1070$$.$c$.remove($xhrIo$jscomp$1$$) && $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1070$$.$addFreeObject$($xhrIo$jscomp$1$$);
    }, !1, this)), this.$b$.remove($id$jscomp$56$$));
    $xhrIo$jscomp$1$$ && $xhrIo$jscomp$1$$.abort();
  }
};
$goog$net$XhrManager$$.prototype.$m$ = function $$goog$net$XhrManager$$$$$m$$($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1073_id$jscomp$57$$, $xhrIo$jscomp$2$$) {
  var $request$jscomp$17$$ = this.$b$.get($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1073_id$jscomp$57$$);
  $request$jscomp$17$$ && !$request$jscomp$17$$.$xhrIo$ ? (this.$g$.listen($xhrIo$jscomp$2$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$jscomp$17$$.$xhrEventCallback_$), $xhrIo$jscomp$2$$.$j$ = Math.max(0, this.$h$), $xhrIo$jscomp$2$$.$s$ = $request$jscomp$17$$.$getResponseType$(), $xhrIo$jscomp$2$$.$m$ = $request$jscomp$17$$.$getWithCredentials$(), $request$jscomp$17$$.$xhrIo$ = $xhrIo$jscomp$2$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("ready", 
  this, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1073_id$jscomp$57$$, $xhrIo$jscomp$2$$)), $JSCompiler_StaticMethods_retry_$$(this, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1073_id$jscomp$57$$, $xhrIo$jscomp$2$$), $request$jscomp$17$$.$aborted_$ && $xhrIo$jscomp$2$$.abort()) : ($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1073_id$jscomp$57$$ = this.$c$, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1073_id$jscomp$57$$.$c$.remove($xhrIo$jscomp$2$$) && 
  $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1073_id$jscomp$57$$.$addFreeObject$($xhrIo$jscomp$2$$));
};
$goog$net$XhrManager$$.prototype.$o$ = function $$goog$net$XhrManager$$$$$o$$($JSCompiler_inline_result$jscomp$56_id$jscomp$58$$, $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1078_e$jscomp$66$$) {
  var $xhrIo$jscomp$3$$ = $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1078_e$jscomp$66$$.target;
  switch($JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1078_e$jscomp$66$$.type) {
    case "ready":
      $JSCompiler_StaticMethods_retry_$$(this, $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$, $xhrIo$jscomp$3$$);
      break;
    case "complete":
      a: {
        var $request$jscomp$inline_735$$ = this.$b$.get($JSCompiler_inline_result$jscomp$56_id$jscomp$58$$);
        if (7 == $xhrIo$jscomp$3$$.$l$ || $JSCompiler_StaticMethods_isSuccess$$($xhrIo$jscomp$3$$) || $request$jscomp$inline_735$$.$attemptCount_$ > $request$jscomp$inline_735$$.$goog_net_XhrManager_Request$maxRetries_$) {
          if ($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("complete", this, $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$, $xhrIo$jscomp$3$$)), $request$jscomp$inline_735$$ && ($request$jscomp$inline_735$$.$completed_$ = !0, $request$jscomp$inline_735$$.$completeCallback_$)) {
            $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$ = $request$jscomp$inline_735$$.$completeCallback_$.call($xhrIo$jscomp$3$$, $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1078_e$jscomp$66$$);
            break a;
          }
        }
        $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$ = null;
      }
      return $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$;
    case "success":
      $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("success", this, $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$, $xhrIo$jscomp$3$$));
      break;
    case "timeout":
    case "error":
      $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1078_e$jscomp$66$$ = this.$b$.get($JSCompiler_inline_result$jscomp$56_id$jscomp$58$$);
      $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1078_e$jscomp$66$$.$attemptCount_$ > $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1078_e$jscomp$66$$.$goog_net_XhrManager_Request$maxRetries_$ && $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("error", this, $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$, $xhrIo$jscomp$3$$));
      break;
    case "abort":
      $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("abort", this, $JSCompiler_inline_result$jscomp$56_id$jscomp$58$$, $xhrIo$jscomp$3$$));
  }
  return null;
};
var $JSCompiler_StaticMethods_retry_$$ = function $$JSCompiler_StaticMethods_retry_$$$($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$, $id$jscomp$59$$, $xhrIo$jscomp$4$$) {
  var $request$jscomp$18$$ = $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$.$b$.get($id$jscomp$59$$);
  !$request$jscomp$18$$ || $request$jscomp$18$$.$completed_$ || $request$jscomp$18$$.$attemptCount_$ > $request$jscomp$18$$.$goog_net_XhrManager_Request$maxRetries_$ ? ($request$jscomp$18$$ && ($JSCompiler_StaticMethods_goog_events_EventHandler_prototype$unlisten$$($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$.$g$, $xhrIo$jscomp$4$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$jscomp$18$$.$xhrEventCallback_$), $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$.$b$.remove($id$jscomp$59$$)), 
  $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$ = $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$.$c$, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$.$c$.remove($xhrIo$jscomp$4$$) && $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1084_JSCompiler_StaticMethods_retry_$self$$.$addFreeObject$($xhrIo$jscomp$4$$)) : ($request$jscomp$18$$.$attemptCount_$++, 
  $xhrIo$jscomp$4$$.send($request$jscomp$18$$.$goog_net_XhrManager_Request$url_$, $request$jscomp$18$$.$method_$, $request$jscomp$18$$.getContent(), $request$jscomp$18$$.$goog_net_XhrManager_Request$headers_$));
};
$goog$net$XhrManager$$.prototype.$disposeInternal$ = function $$goog$net$XhrManager$$$$$disposeInternal$$() {
  $goog$net$XhrManager$$.$superClass_$.$disposeInternal$.call(this);
  this.$c$.$dispose$();
  this.$c$ = null;
  this.$g$.$dispose$();
  this.$g$ = null;
  this.$b$.clear();
  this.$b$ = null;
};
var $goog$net$XhrManager$Event$$ = function $$goog$net$XhrManager$Event$$$($type$jscomp$200$$, $target$jscomp$98$$, $id$jscomp$64$$, $xhrIo$jscomp$11$$) {
  $goog$events$Event$$.call(this, $type$jscomp$200$$, $target$jscomp$98$$);
  this.id = $id$jscomp$64$$;
  this.$xhrIo$ = $xhrIo$jscomp$11$$;
};
$goog$inherits$$($goog$net$XhrManager$Event$$, $goog$events$Event$$);
var $goog$net$XhrManager$Request$$ = function $$goog$net$XhrManager$Request$$$($url$jscomp$73$$, $xhrEventCallback$$, $opt_method$jscomp$3$$, $opt_content$jscomp$11$$, $opt_headers$jscomp$5$$, $opt_callback$jscomp$156$$, $opt_maxRetries$jscomp$2$$, $opt_responseType$jscomp$1$$, $opt_withCredentials$jscomp$4$$) {
  this.$goog_net_XhrManager_Request$url_$ = $url$jscomp$73$$;
  this.$method_$ = $opt_method$jscomp$3$$ || "GET";
  this.$b$ = $opt_content$jscomp$11$$;
  this.$goog_net_XhrManager_Request$headers_$ = $opt_headers$jscomp$5$$ || null;
  this.$goog_net_XhrManager_Request$maxRetries_$ = $goog$isDef$$($opt_maxRetries$jscomp$2$$) ? $opt_maxRetries$jscomp$2$$ : 1;
  this.$attemptCount_$ = 0;
  this.$aborted_$ = this.$completed_$ = !1;
  this.$xhrEventCallback_$ = $xhrEventCallback$$;
  this.$completeCallback_$ = $opt_callback$jscomp$156$$;
  this.$c$ = $opt_responseType$jscomp$1$$ || "";
  this.$f$ = !!$opt_withCredentials$jscomp$4$$;
  this.$xhrIo$ = null;
};
$goog$net$XhrManager$Request$$.prototype.getContent = function $$goog$net$XhrManager$Request$$$$getContent$() {
  return this.$b$;
};
$goog$net$XhrManager$Request$$.prototype.$getWithCredentials$ = function $$goog$net$XhrManager$Request$$$$$getWithCredentials$$() {
  return this.$f$;
};
$goog$net$XhrManager$Request$$.prototype.$getResponseType$ = function $$goog$net$XhrManager$Request$$$$$getResponseType$$() {
  return this.$c$;
};
var $castApp$core$Http$$ = function $$castApp$core$Http$$$() {
}, $castApp$core$Http$HttpStatusError$$ = function $$castApp$core$Http$HttpStatusError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$Http$HttpStatusError$$, $goog$debug$Error$$);
$castApp$core$Http$HttpStatusError$$.prototype.name = "httpStatus";
var $castApp$core$Http$ResponseParsingError$$ = function $$castApp$core$Http$ResponseParsingError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$Http$ResponseParsingError$$, $goog$debug$Error$$);
$castApp$core$Http$ResponseParsingError$$.prototype.name = "httpResponseParsing";
var $JSCompiler_StaticMethods_requestJson$$ = function $$JSCompiler_StaticMethods_requestJson$$$($JSCompiler_StaticMethods_requestJson$self$$, $request$jscomp$21$$) {
  return $JSCompiler_StaticMethods_requestJson$self$$.request($request$jscomp$21$$).then(function($response$jscomp$5_text$jscomp$16$$) {
    if (($response$jscomp$5_text$jscomp$16$$.getResponseHeader("content-type") || "").toLowerCase().startsWith("application/json")) {
      $response$jscomp$5_text$jscomp$16$$ = $response$jscomp$5_text$jscomp$16$$.$getResponseText$();
      $response$jscomp$5_text$jscomp$16$$.startsWith(")]}'") && ($response$jscomp$5_text$jscomp$16$$ = $response$jscomp$5_text$jscomp$16$$.substr(4));
      try {
        return JSON.parse($response$jscomp$5_text$jscomp$16$$);
      } catch ($e$jscomp$68$$) {
      }
    }
    throw new $castApp$core$Http$ResponseParsingError$$;
  });
}, $castApp$core$HttpImpl$$ = function $$castApp$core$HttpImpl$$$() {
  this.$b$ = new $goog$structs$Map$$;
  this.$c$ = 0;
};
$goog$inherits$$($castApp$core$HttpImpl$$, $castApp$core$Http$$);
var $castApp$core$HttpImpl$SuccessfulResponse_$$ = function $$castApp$core$HttpImpl$SuccessfulResponse_$$$($xhrIo$jscomp$12$$) {
  this.$c$ = $xhrIo$jscomp$12$$.$getResponseText$();
  this.$b$ = {};
  $goog$object$forEach$$($JSCompiler_StaticMethods_getResponseHeaders$$($xhrIo$jscomp$12$$), function($val$jscomp$48$$, $header$jscomp$5$$) {
    this.$b$[$header$jscomp$5$$.toLowerCase()] = $val$jscomp$48$$;
  }, this);
};
$castApp$core$HttpImpl$SuccessfulResponse_$$.prototype.$getResponseText$ = function $$castApp$core$HttpImpl$SuccessfulResponse_$$$$$getResponseText$$() {
  return this.$c$;
};
$castApp$core$HttpImpl$SuccessfulResponse_$$.prototype.getResponseHeader = function $$castApp$core$HttpImpl$SuccessfulResponse_$$$$getResponseHeader$($headerName$$) {
  return this.$b$[$headerName$$.toLowerCase()] || void 0;
};
$castApp$core$HttpImpl$$.prototype.request = function $$castApp$core$HttpImpl$$$$request$($requestData$$) {
  var $resolver$jscomp$17$$ = $goog$Promise$withResolver$$(), $method$jscomp$4_timeout$jscomp$9$$ = $requestData$$.timeout || 1E4, $manager$$ = this.$b$.get($method$jscomp$4_timeout$jscomp$9$$);
  $manager$$ || ($manager$$ = new $goog$net$XhrManager$$, $manager$$.$h$ = Math.max(0, $method$jscomp$4_timeout$jscomp$9$$), this.$b$.set($method$jscomp$4_timeout$jscomp$9$$, $manager$$));
  $method$jscomp$4_timeout$jscomp$9$$ = $requestData$$.method || "GET";
  $manager$$.send(this.$c$++, $requestData$$.url, $method$jscomp$4_timeout$jscomp$9$$, $requestData$$.content, $requestData$$.headers, 0, function($event$jscomp$13_xhrIo$jscomp$13$$) {
    $event$jscomp$13_xhrIo$jscomp$13$$ = $event$jscomp$13_xhrIo$jscomp$13$$.target;
    $JSCompiler_StaticMethods_isSuccess$$($event$jscomp$13_xhrIo$jscomp$13$$) ? $resolver$jscomp$17$$.$c$(new $castApp$core$HttpImpl$SuccessfulResponse_$$($event$jscomp$13_xhrIo$jscomp$13$$)) : $resolver$jscomp$17$$.$f$(new $castApp$core$Http$HttpStatusError$$($event$jscomp$13_xhrIo$jscomp$13$$.getStatus()));
  }, $requestData$$.$maxRetries$);
  return $resolver$jscomp$17$$.$b$;
};
var $castApp$core$SetupApiClient$$ = function $$castApp$core$SetupApiClient$$$($http$jscomp$1_language$jscomp$inline_755$$, $stateStorage$$, $JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$) {
  var $state$jscomp$12$$ = $stateStorage$$.read();
  this.$b$ = $state$jscomp$12$$.eurekaInfoState && $state$jscomp$12$$.eurekaInfoState.setupApiVersion || null;
  this.$h$ = new $goog$Uri$$("http://" + $state$jscomp$12$$.deviceIpAddress + ":8008");
  this.$c$ = $http$jscomp$1_language$jscomp$inline_755$$;
  this.$f$ = $stateStorage$$;
  $JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$ ? ($http$jscomp$1_language$jscomp$inline_755$$ = $goog$locale$getLanguageSubTag$$($JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$), $JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$ = ($JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$ = $goog$locale$getRegionSubTag$$($JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$)) ? "en" == 
  $http$jscomp$1_language$jscomp$inline_755$$ ? $http$jscomp$1_language$jscomp$inline_755$$ + "-" + $JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$ + ", en;q=0.8" : $http$jscomp$1_language$jscomp$inline_755$$ + "-" + $JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$ + ", " + $http$jscomp$1_language$jscomp$inline_755$$ + ";q=0.8, en;q=0.5" : $http$jscomp$1_language$jscomp$inline_755$$ + ", en;q=0.5") : $JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$ = 
  null;
  this.$g$ = $JSCompiler_temp$jscomp$59_opt_locale$jscomp$2_region$jscomp$inline_756$$;
};
$castApp$core$SetupApiClient$$.prototype.getState = function $$castApp$core$SetupApiClient$$$$getState$() {
  return this.$f$.read();
};
var $JSCompiler_StaticMethods_getEurekaInfoState$$ = function $$JSCompiler_StaticMethods_getEurekaInfoState$$$($JSCompiler_StaticMethods_getEurekaInfoState$self$$) {
  return $JSCompiler_StaticMethods_getEurekaInfoState$self$$.$f$.read().eurekaInfoState;
}, $JSCompiler_StaticMethods_postConnectWiFi$$ = function $$JSCompiler_StaticMethods_postConnectWiFi$$$($JSCompiler_StaticMethods_postConnectWiFi$self$$, $req$$) {
  return $JSCompiler_StaticMethods_postConnectWiFi$self$$.$c$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postConnectWiFi$self$$, "/setup/connect_wifi"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify($req$$), $maxRetries$:0});
}, $JSCompiler_StaticMethods_getEurekaInfo$$ = function $$JSCompiler_StaticMethods_getEurekaInfo$$$($JSCompiler_StaticMethods_getEurekaInfo$self$$, $headers$jscomp$2_opt_query_params$$) {
  var $url$jscomp$74$$ = new $goog$Uri$$($JSCompiler_StaticMethods_getEurekaInfo$self$$.$h$);
  $url$jscomp$74$$.$c$ = "/setup/eureka_info";
  if ($headers$jscomp$2_opt_query_params$$) {
    var $query$jscomp$19$$ = [];
    if ($headers$jscomp$2_opt_query_params$$.options) {
      var $optionSet$$ = new $goog$structs$Set$$($headers$jscomp$2_opt_query_params$$.options), $hasSignOption$$ = $optionSet$$.contains("sign");
      if (null === $JSCompiler_StaticMethods_getEurekaInfo$self$$.$b$ || 7 > $JSCompiler_StaticMethods_getEurekaInfo$self$$.$b$) {
        var $col$jscomp$inline_760_values$jscomp$inline_762$$ = new $goog$structs$Set$$(["sign", "detail"]), $result$jscomp$inline_761$$ = new $goog$structs$Set$$;
        $col$jscomp$inline_760_values$jscomp$inline_762$$ = $goog$structs$getValues$$($col$jscomp$inline_760_values$jscomp$inline_762$$);
        for (var $i$jscomp$inline_763$$ = 0; $i$jscomp$inline_763$$ < $col$jscomp$inline_760_values$jscomp$inline_762$$.length; $i$jscomp$inline_763$$++) {
          var $value$jscomp$inline_764$$ = $col$jscomp$inline_760_values$jscomp$inline_762$$[$i$jscomp$inline_763$$];
          $optionSet$$.contains($value$jscomp$inline_764$$) && $result$jscomp$inline_761$$.add($value$jscomp$inline_764$$);
        }
        $result$jscomp$inline_761$$.$b$.$b$ && $query$jscomp$19$$.push("options=" + $result$jscomp$inline_761$$.$getValues$().join(","));
      }
      $optionSet$$.$b$.$b$ && (null === $JSCompiler_StaticMethods_getEurekaInfo$self$$.$b$ || 7 <= $JSCompiler_StaticMethods_getEurekaInfo$self$$.$b$) && $query$jscomp$19$$.push("params=" + $optionSet$$.$getValues$().join(","));
    }
    $headers$jscomp$2_opt_query_params$$.nonce && $query$jscomp$19$$.push("nonce=" + $headers$jscomp$2_opt_query_params$$.nonce);
    $query$jscomp$19$$.length && $JSCompiler_StaticMethods_setQueryData$$($url$jscomp$74$$, $query$jscomp$19$$.join("&"), void 0);
  }
  $headers$jscomp$2_opt_query_params$$ = void 0;
  $JSCompiler_StaticMethods_getEurekaInfo$self$$.$g$ && ($headers$jscomp$2_opt_query_params$$ = {"Accept-Language":$JSCompiler_StaticMethods_getEurekaInfo$self$$.$g$});
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getEurekaInfo$self$$.$c$, {url:$url$jscomp$74$$.toString(), method:"GET", headers:$headers$jscomp$2_opt_query_params$$, timeout:$hasSignOption$$ ? 4E4 : 1E4, $maxRetries$:$hasSignOption$$ ? 1 : 2}).then($JSCompiler_StaticMethods_getEurekaInfo$self$$.$l$.bind($JSCompiler_StaticMethods_getEurekaInfo$self$$)).then($JSCompiler_StaticMethods_getEurekaInfo$self$$.$m$.bind($JSCompiler_StaticMethods_getEurekaInfo$self$$));
};
$castApp$core$SetupApiClient$$.prototype.$l$ = function $$castApp$core$SetupApiClient$$$$$l$$($eurekaInfoObject$$) {
  if (!$eurekaInfoObject$$.version) {
    return $eurekaInfoObject$$;
  }
  if (!this.$j$.contains($eurekaInfoObject$$.version)) {
    throw $castApp$log$error$$($castApp$core$SetupApiClient$logger_$$, "Bad eurekaInfo version: " + $eurekaInfoObject$$.version), new $castApp$core$SetupApiClient$VersionError$$($eurekaInfoObject$$.version);
  }
  var $fillEurekaInfoDefaults_parsedVersion$$ = parseInt($eurekaInfoObject$$.version, 10);
  this.$b$ && this.$b$ !== $fillEurekaInfoDefaults_parsedVersion$$ && $castApp$log$warning$$($castApp$core$SetupApiClient$logger_$$, "Device changed setup protocol versions. old version: " + this.$b$ + " new version: " + $fillEurekaInfoDefaults_parsedVersion$$);
  this.$b$ = $fillEurekaInfoDefaults_parsedVersion$$;
  $fillEurekaInfoDefaults_parsedVersion$$ = this.$i$.get(this.$b$, null);
  !$fillEurekaInfoDefaults_parsedVersion$$ && 7 <= this.$b$ && ($fillEurekaInfoDefaults_parsedVersion$$ = $castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$);
  return $fillEurekaInfoDefaults_parsedVersion$$($eurekaInfoObject$$);
};
$castApp$core$SetupApiClient$$.prototype.$m$ = function $$castApp$core$SetupApiClient$$$$$m$$($eurekaInfo$jscomp$10$$) {
  var $state$jscomp$14$$ = this.$f$.read(), $oldProps$$ = $state$jscomp$14$$.eurekaInfoState, $newProps$$ = {};
  this.$b$ && ($newProps$$.setupApiVersion = this.$b$);
  if (3 <= this.$b$ && 6 >= this.$b$) {
    $newProps$$.name = $eurekaInfo$jscomp$10$$.name, $newProps$$.setupState = $eurekaInfo$jscomp$10$$.setup_state, $newProps$$.ssdpUdn = $eurekaInfo$jscomp$10$$.ssdp_udn, 3 === this.$b$ ? ($newProps$$.ethernetConnected = !1, $newProps$$.tosAccepted = !0, $newProps$$.modelName = "Chromecast") : ($newProps$$.ethernetConnected = 6 === this.$b$ ? !!$eurekaInfo$jscomp$10$$.ethernet_connected : !1, $newProps$$.tosAccepted = !!$eurekaInfo$jscomp$10$$.tos_accepted, $eurekaInfo$jscomp$10$$.detail && ($newProps$$.modelName = 
    $eurekaInfo$jscomp$10$$.detail.model_name)), $eurekaInfo$jscomp$10$$.ip_address && ($newProps$$.connectedIpAddress = $eurekaInfo$jscomp$10$$.ip_address), $newProps$$.deviceType = "c";
  } else {
    if (7 <= this.$b$) {
      $eurekaInfo$jscomp$10$$.name && ($newProps$$.name = $eurekaInfo$jscomp$10$$.name);
      if ($eurekaInfo$jscomp$10$$.setup && (void 0 !== $eurekaInfo$jscomp$10$$.setup.setup_state && ($newProps$$.setupState = $eurekaInfo$jscomp$10$$.setup.setup_state), 63 === $newProps$$.setupState ? $newProps$$.tosAccepted = !1 : void 0 !== $eurekaInfo$jscomp$10$$.setup.tos_accepted && ($newProps$$.tosAccepted = $eurekaInfo$jscomp$10$$.setup.tos_accepted), void 0 !== $eurekaInfo$jscomp$10$$.setup.ssid_suffix)) {
        var $parsedSuffix$jscomp$1$$ = $castApp$core$utils$parseSsidSuffix$$($eurekaInfo$jscomp$10$$.setup.ssid_suffix);
        $newProps$$.deviceType = $parsedSuffix$jscomp$1$$ ? $parsedSuffix$jscomp$1$$.type : "c";
      }
      $eurekaInfo$jscomp$10$$.device_info && ($eurekaInfo$jscomp$10$$.device_info.model_name && ($newProps$$.modelName = $eurekaInfo$jscomp$10$$.device_info.model_name), $eurekaInfo$jscomp$10$$.device_info.ssdp_udn && ($newProps$$.ssdpUdn = $eurekaInfo$jscomp$10$$.device_info.ssdp_udn), $eurekaInfo$jscomp$10$$.device_info.capabilities && ($newProps$$.features = $castApp$core$utils$createFeatures$$($newProps$$.deviceType || $oldProps$$ && $oldProps$$.deviceType || "b", $eurekaInfo$jscomp$10$$.device_info.capabilities)));
      $eurekaInfo$jscomp$10$$.net && (void 0 !== $eurekaInfo$jscomp$10$$.net.ethernet_connected && ($newProps$$.ethernetConnected = $eurekaInfo$jscomp$10$$.net.ethernet_connected), $eurekaInfo$jscomp$10$$.net.ip_address && ($newProps$$.connectedIpAddress = $eurekaInfo$jscomp$10$$.net.ip_address));
    }
  }
  $oldProps$$ ? $goog$object$extend$$($oldProps$$, $newProps$$) : $state$jscomp$14$$.eurekaInfoState = $newProps$$;
  $state$jscomp$14$$.eurekaInfoState.features || ($state$jscomp$14$$.eurekaInfoState.features = $castApp$core$utils$createFeatures$$($newProps$$.deviceType || $oldProps$$ && $oldProps$$.deviceType || "b"));
  this.$f$.write($state$jscomp$14$$);
  return $eurekaInfo$jscomp$10$$;
};
var $JSCompiler_StaticMethods_getOffer$$ = function $$JSCompiler_StaticMethods_getOffer$$$($JSCompiler_StaticMethods_getOffer$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getOffer$self$$.$c$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getOffer$self$$, "/setup/offer"), method:"GET", timeout:1E4, $maxRetries$:2}).then(function($responseObj$$) {
    return $responseObj$$;
  });
}, $JSCompiler_StaticMethods_postReboot$$ = function $$JSCompiler_StaticMethods_postReboot$$$($JSCompiler_StaticMethods_postReboot$self$$, $params$jscomp$11$$) {
  $JSCompiler_StaticMethods_postReboot$self$$.$c$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postReboot$self$$, "/setup/reboot"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify(new $castApp$core$setupApi$RebootMsg$$($params$jscomp$11$$)), timeout:1E4, $maxRetries$:2});
}, $JSCompiler_StaticMethods_postSaveWiFi$$ = function $$JSCompiler_StaticMethods_postSaveWiFi$$$($JSCompiler_StaticMethods_postSaveWiFi$self$$) {
  var $msg$jscomp$45$$ = new $castApp$core$setupApi$SaveWiFiRequestMsg$$;
  $msg$jscomp$45$$.immediate = !0;
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_postSaveWiFi$self$$.$c$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postSaveWiFi$self$$, "/setup/save_wifi"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify($msg$jscomp$45$$), timeout:2E4, $maxRetries$:1}).then(function($responseObj$jscomp$1$$) {
    var $state$jscomp$15$$ = this.$f$.read();
    $state$jscomp$15$$.eurekaInfoState && $state$jscomp$15$$.eurekaInfoState.setupState !== $responseObj$jscomp$1$$.setup_state && ($state$jscomp$15$$.eurekaInfoState.setupState = $responseObj$jscomp$1$$.setup_state, this.$f$.write($state$jscomp$15$$));
    return $responseObj$jscomp$1$$;
  }.bind($JSCompiler_StaticMethods_postSaveWiFi$self$$));
}, $JSCompiler_StaticMethods_getScanResults$$ = function $$JSCompiler_StaticMethods_getScanResults$$$($JSCompiler_StaticMethods_getScanResults$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getScanResults$self$$.$c$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getScanResults$self$$, "/setup/scan_results"), method:"GET", timeout:1E4, $maxRetries$:5}).then(function($responseObj$jscomp$2$$) {
    return $responseObj$jscomp$2$$;
  });
}, $JSCompiler_StaticMethods_postScanWiFi$$ = function $$JSCompiler_StaticMethods_postScanWiFi$$$($JSCompiler_StaticMethods_postScanWiFi$self$$) {
  return $JSCompiler_StaticMethods_postScanWiFi$self$$.$c$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postScanWiFi$self$$, "/setup/scan_wifi"), method:"POST", $maxRetries$:0});
}, $JSCompiler_StaticMethods_postSetEurekaInfo$$ = function $$JSCompiler_StaticMethods_postSetEurekaInfo$$$($JSCompiler_StaticMethods_postSetEurekaInfo$self$$, $req$jscomp$1$$) {
  return $JSCompiler_StaticMethods_postSetEurekaInfo$self$$.$c$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postSetEurekaInfo$self$$, "/setup/set_eureka_info"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify($req$jscomp$1$$), $maxRetries$:0});
}, $JSCompiler_StaticMethods_getSupportedLocales$$ = function $$JSCompiler_StaticMethods_getSupportedLocales$$$($JSCompiler_StaticMethods_getSupportedLocales$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getSupportedLocales$self$$.$c$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getSupportedLocales$self$$, "/setup/supported_locales"), method:"GET", timeout:1E4, $maxRetries$:2}).then(function($responseObj$jscomp$3$$) {
    return $responseObj$jscomp$3$$;
  });
}, $JSCompiler_StaticMethods_getSupportedTimeZones$$ = function $$JSCompiler_StaticMethods_getSupportedTimeZones$$$($JSCompiler_StaticMethods_getSupportedTimeZones$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getSupportedTimeZones$self$$.$c$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getSupportedTimeZones$self$$, "/setup/supported_timezones"), method:"GET", timeout:1E4, $maxRetries$:2}).then(function($responseObj$jscomp$4$$) {
    return $responseObj$jscomp$4$$;
  });
}, $JSCompiler_StaticMethods_createRequestUrl_$$ = function $$JSCompiler_StaticMethods_createRequestUrl_$$$($JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$75$$, $path$jscomp$33$$) {
  $JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$75$$ = new $goog$Uri$$($JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$75$$.$h$);
  $JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$75$$.$c$ = $path$jscomp$33$$;
  return $JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$75$$.toString();
};
new $goog$structs$Set$$(["now", "fdr", "ota"]);
$castApp$core$SetupApiClient$$.prototype.$j$ = new $goog$structs$Set$$([3, 4, 5, 6, 7, 8]);
$castApp$core$SetupApiClient$$.prototype.$i$ = new $goog$structs$Map$$(3, function($obj$jscomp$87$$) {
  $goog$object$setIfUndefined$$($obj$jscomp$87$$, "locale", "en-US");
  return $obj$jscomp$87$$;
}, 4, $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$, 5, $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$, 6, $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$, 7, $castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$);
var $castApp$core$SetupApiClient$createInMemoryStateStorage$$ = function $$castApp$core$SetupApiClient$createInMemoryStateStorage$$$($deviceIpAddress$jscomp$1$$) {
  var $state$jscomp$16$$ = new $castApp$core$storage$SetupApiClientState$$($deviceIpAddress$jscomp$1$$);
  return {read:function() {
    return $state$jscomp$16$$;
  }, write:function($newState$jscomp$1$$) {
    $state$jscomp$16$$ = $newState$jscomp$1$$;
  }};
}, $castApp$core$SetupApiClient$create$$ = function $$castApp$core$SetupApiClient$create$$$($http$jscomp$2$$, $stateStorage$jscomp$1$$, $opt_locale$jscomp$3$$) {
  var $client$$ = new $castApp$core$SetupApiClient$$($http$jscomp$2$$, $stateStorage$jscomp$1$$, $opt_locale$jscomp$3$$);
  return $client$$.$b$ ? $goog$Promise$resolve$$($client$$) : $JSCompiler_StaticMethods_getEurekaInfo$$($client$$, {options:$castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$()}).then(function() {
    return $client$$;
  });
}, $castApp$core$SetupApiClient$createAndVerify$$ = function $$castApp$core$SetupApiClient$createAndVerify$$$($http$jscomp$3_query$jscomp$20$$, $stateStorage$jscomp$2$$, $networkingApi$jscomp$3$$, $hotSpotProps$jscomp$2$$, $opt_locale$jscomp$4$$) {
  var $client$jscomp$1$$ = new $castApp$core$SetupApiClient$$($http$jscomp$3_query$jscomp$20$$, $stateStorage$jscomp$2$$, $opt_locale$jscomp$4$$), $state$jscomp$17$$ = $stateStorage$jscomp$2$$.read();
  if ($state$jscomp$17$$.eurekaInfoState && $state$jscomp$17$$.eurekaInfoState.ethernetConnected) {
    return $goog$Promise$resolve$$($client$jscomp$1$$);
  }
  if ($state$jscomp$17$$.verificationState) {
    if ($castApp$core$utils$bssidsMatch$$($state$jscomp$17$$.verificationState.verificationProperties.deviceBssid, $hotSpotProps$jscomp$2$$.bssid)) {
      return $goog$Promise$resolve$$($client$jscomp$1$$);
    }
    $state$jscomp$17$$ = new $castApp$core$storage$SetupApiClientState$$($state$jscomp$17$$.deviceIpAddress);
    $stateStorage$jscomp$2$$.write($state$jscomp$17$$);
  }
  $http$jscomp$3_query$jscomp$20$$ = {};
  var $nonce$jscomp$9$$ = $http$jscomp$3_query$jscomp$20$$.nonce = $goog$string$getRandomString$$();
  $http$jscomp$3_query$jscomp$20$$.options = $castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$().concat(["name", "sign", "device_info.public_key", "device_info.hotspot_bssid"]);
  return $JSCompiler_StaticMethods_getEurekaInfo$$($client$jscomp$1$$, $http$jscomp$3_query$jscomp$20$$).then(function($JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$) {
    a: {
      switch($JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$.version) {
        case 3:
          $JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$ = $JSCompiler_StaticMethods_verifyImpl_$$(new $$jscomp$scope$DeviceVerifierV3_$$($JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$), $networkingApi$jscomp$3$$, $nonce$jscomp$9$$, $hotSpotProps$jscomp$2$$);
          break a;
        case 4:
        case 5:
        case 6:
          $JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$ = $JSCompiler_StaticMethods_verifyImpl_$$(new $$jscomp$scope$DeviceVerifierV456_$$($JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$), $networkingApi$jscomp$3$$, $nonce$jscomp$9$$, $hotSpotProps$jscomp$2$$);
          break a;
        default:
          $JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$ = $JSCompiler_StaticMethods_verifyImpl_$$(new $$jscomp$scope$DeviceVerifierV7_$$($JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$), $networkingApi$jscomp$3$$, $nonce$jscomp$9$$, $hotSpotProps$jscomp$2$$);
      }
    }
    return $JSCompiler_inline_result$jscomp$43_eurekaInfo$jscomp$11$$;
  }).then(function($verifiedProperties$$) {
    $state$jscomp$17$$ = $stateStorage$jscomp$2$$.read();
    $state$jscomp$17$$.verificationState = $verifiedProperties$$;
    $stateStorage$jscomp$2$$.write($state$jscomp$17$$);
    return $client$jscomp$1$$;
  }, function($err$jscomp$32$$) {
    $castApp$utils$rethrowIfCancellationError$$($err$jscomp$32$$);
    if ($err$jscomp$32$$ instanceof $castApp$core$Http$HttpStatusError$$) {
      throw $err$jscomp$32$$;
    }
    !$err$jscomp$32$$ || $err$jscomp$32$$ instanceof $castApp$core$SetupApiClient$VerificationError$$ ? $castApp$log$error$$($castApp$core$SetupApiClient$logger_$$, "Device verification failed") : $castApp$utils$logError$$($castApp$core$SetupApiClient$logger_$$, "Device verification failed with error: ", $err$jscomp$32$$);
    throw new $castApp$core$SetupApiClient$VerificationError$$;
  });
}, $castApp$core$SetupApiClient$VersionError$$ = function $$castApp$core$SetupApiClient$VersionError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$SetupApiClient$VersionError$$, $goog$debug$Error$$);
$castApp$core$SetupApiClient$VersionError$$.prototype.name = "setupApiVersionError";
var $castApp$core$SetupApiClient$VerificationError$$ = function $$castApp$core$SetupApiClient$VerificationError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$SetupApiClient$VerificationError$$, $goog$debug$Error$$);
$castApp$core$SetupApiClient$VerificationError$$.prototype.name = "deviceVerificationError";
var $castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$ = function $$castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$$() {
  return "version name setup.setup_state net.ethernet_connected net.ip_address device_info.ssdp_udn device_info.model_name device_info.capabilities setup.ssid_suffix setup.tos_accepted".split(" ");
}, $castApp$core$SetupApiClient$logger_$$ = $castApp$log$getLogger$$("core.SetupApiClient");
var $castApp$core$WiFiMonitor$$ = function $$castApp$core$WiFiMonitor$$$($networkingApi$jscomp$4$$, $var_args$jscomp$105$$) {
  this.networks = new $goog$structs$Map$$;
  this.$g$ = new $castApp$StartStoppable$$(this.$castApp_core_WiFiMonitor_prototype$start_$.bind(this), this.$castApp_core_WiFiMonitor_prototype$reset_$.bind(this));
  this.$c$ = $networkingApi$jscomp$4$$;
  this.$h$ = [];
  for (var $i$jscomp$196$$ = 1, $l$jscomp$25$$ = arguments.length; $i$jscomp$196$$ < $l$jscomp$25$$; ++$i$jscomp$196$$) {
    this.$h$.push(arguments[$i$jscomp$196$$]);
  }
  this.$f$ = new $goog$structs$Set$$;
  this.$i$ = this.$handleNetworkListChanged_$.bind(this);
  this.$j$ = this.$handleNetworksChanged_$.bind(this);
  this.$b$ = new $goog$events$EventTarget$$;
};
$JSCompiler_prototypeAlias$$ = $castApp$core$WiFiMonitor$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$g$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$g$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiMonitor_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiMonitor_prototype$start_$$() {
  var $networkingApi$jscomp$5$$ = this.$c$;
  $networkingApi$jscomp$5$$.onNetworkListChanged.addListener(this.$i$);
  $networkingApi$jscomp$5$$.onNetworksChanged.addListener(this.$j$);
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, this.$c$.getNetworks({networkType:"WiFi", visible:!0})).then(this.$initializeNetworkProperties_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$initializeNetworkProperties_$ = function $$JSCompiler_prototypeAlias$$$$initializeNetworkProperties_$$($networkResults$$) {
  return $goog$Promise$all$$($networkResults$$.filter(function($props$jscomp$2$$) {
    if ($JSCompiler_StaticMethods_filterByNetworkState_$$(this, $props$jscomp$2$$)) {
      return !0;
    }
    this.$f$.add($props$jscomp$2$$.GUID);
    return !1;
  }.bind(this)).map(function($props$jscomp$3$$) {
    return this.$updateNetwork_$($props$jscomp$3$$.GUID);
  }.bind(this)));
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiMonitor_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiMonitor_prototype$reset_$$() {
  this.$c$.onNetworkListChanged.removeListener(this.$i$);
  this.$c$.onNetworksChanged.removeListener(this.$j$);
  this.networks.clear();
  this.$f$.clear();
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$handleNetworkListChanged_$ = function $$JSCompiler_prototypeAlias$$$$handleNetworkListChanged_$$($networkGuids_newGuids$$) {
  var $oldGuids$$ = new $goog$structs$Set$$(this.networks.$getKeys$());
  $networkGuids_newGuids$$ = $JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$($networkGuids_newGuids$$), this.$f$);
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$($networkGuids_newGuids$$, $oldGuids$$), this.$updateNetwork_$.bind(this));
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$($oldGuids$$, $networkGuids_newGuids$$), this.$removeNetwork_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$removeNetwork_$ = function $$JSCompiler_prototypeAlias$$$$removeNetwork_$$($guid$jscomp$13_wasConnected$$) {
  var $props$jscomp$4$$ = this.networks.get($guid$jscomp$13_wasConnected$$);
  this.networks.remove($guid$jscomp$13_wasConnected$$);
  $guid$jscomp$13_wasConnected$$ = "Connected" === $props$jscomp$4$$.ConnectionState;
  $props$jscomp$4$$.ConnectionState = "NotConnected";
  $guid$jscomp$13_wasConnected$$ && $JSCompiler_StaticMethods_dispatchEvent_$$(this, "disconnected", $props$jscomp$4$$);
  $JSCompiler_StaticMethods_dispatchEvent_$$(this, "removed", $props$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$handleNetworksChanged_$ = function $$JSCompiler_prototypeAlias$$$$handleNetworksChanged_$$($filteredNetworkGuids_networkGuids$jscomp$1$$) {
  $filteredNetworkGuids_networkGuids$jscomp$1$$ = $JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$($filteredNetworkGuids_networkGuids$jscomp$1$$), this.$f$);
  $goog$iter$forEach$$($filteredNetworkGuids_networkGuids$jscomp$1$$, this.$updateNetwork_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$updateNetwork_$ = function $$JSCompiler_prototypeAlias$$$$updateNetwork_$$($guid$jscomp$14$$) {
  var $self$jscomp$22$$ = this, $updateFinished$$ = $goog$Promise$withResolver$$();
  $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_getProperties_$$($self$jscomp$22$$, $guid$jscomp$14$$).then(function($newProps$jscomp$1$$) {
    var $oldProps$jscomp$1$$ = $self$jscomp$22$$.networks.get($guid$jscomp$14$$), $wasConnected$jscomp$1$$ = !(!$oldProps$jscomp$1$$ || "Connected" !== $oldProps$jscomp$1$$.ConnectionState);
    $self$jscomp$22$$.networks.set($newProps$jscomp$1$$.GUID, $newProps$jscomp$1$$);
    var $isConnected$$ = "Connected" === $newProps$jscomp$1$$.ConnectionState;
    $oldProps$jscomp$1$$ || $JSCompiler_StaticMethods_dispatchEvent_$$($self$jscomp$22$$, "added", $newProps$jscomp$1$$);
    !$wasConnected$jscomp$1$$ && $isConnected$$ ? $JSCompiler_StaticMethods_dispatchEvent_$$($self$jscomp$22$$, "connected", $newProps$jscomp$1$$) : $wasConnected$jscomp$1$$ && !$isConnected$$ && $JSCompiler_StaticMethods_dispatchEvent_$$($self$jscomp$22$$, "disconnected", $newProps$jscomp$1$$);
  }), function() {
    $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($self$jscomp$22$$.networks, $guid$jscomp$14$$) && $self$jscomp$22$$.$removeNetwork_$($guid$jscomp$14$$);
  }), function() {
    $updateFinished$$.$c$();
  });
  return $updateFinished$$.$b$;
};
var $JSCompiler_StaticMethods_dispatchEvent_$$ = function $$JSCompiler_StaticMethods_dispatchEvent_$$$($JSCompiler_StaticMethods_dispatchEvent_$self$$, $type$jscomp$201$$, $props$jscomp$5$$) {
  $castApp$log$info$$($castApp$core$WiFiMonitor$logger_$$, "Dispatching event: type=" + $type$jscomp$201$$ + " for network=[", $castApp$core$WiFiMonitor$stringifyNetworkPropertiesForLogging_$$.bind($JSCompiler_StaticMethods_dispatchEvent_$self$$, $props$jscomp$5$$), "]");
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchEvent_$self$$.$b$, new $castApp$core$WiFiMonitor$Event$$($type$jscomp$201$$, $props$jscomp$5$$));
}, $JSCompiler_StaticMethods_getProperties_$$ = function $$JSCompiler_StaticMethods_getProperties_$$$($JSCompiler_StaticMethods_getProperties_$self$$, $guid$jscomp$15$$) {
  return $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_getProperties_$self$$.$g$, $JSCompiler_StaticMethods_getProperties_$self$$.$c$.getProperties($guid$jscomp$15$$)), function($err$jscomp$33$$) {
    $err$jscomp$33$$ instanceof $goog$Promise$CancellationError$$ || $castApp$log$warningWithCause$$($castApp$core$WiFiMonitor$logger_$$, $err$jscomp$33$$, "getProperties(", $castApp$log$anonymizeString$$($guid$jscomp$15$$), ") failed.");
    throw $err$jscomp$33$$;
  }.bind($JSCompiler_StaticMethods_getProperties_$self$$)).then(function($props$jscomp$6$$) {
    if (!$JSCompiler_StaticMethods_filterByNetworkProperties_$$(this, $props$jscomp$6$$)) {
      throw this.$f$.add($guid$jscomp$15$$), new $goog$Promise$CancellationError$$;
    }
    return $props$jscomp$6$$;
  }.bind($JSCompiler_StaticMethods_getProperties_$self$$));
}, $JSCompiler_StaticMethods_filterByNetworkState_$$ = function $$JSCompiler_StaticMethods_filterByNetworkState_$$$($JSCompiler_StaticMethods_filterByNetworkState_$self$$, $props$jscomp$7$$) {
  return !$goog$array$find$$($JSCompiler_StaticMethods_filterByNetworkState_$self$$.$h$, function($filter$jscomp$7$$) {
    return !$filter$jscomp$7$$.$f$($props$jscomp$7$$);
  });
}, $JSCompiler_StaticMethods_filterByNetworkProperties_$$ = function $$JSCompiler_StaticMethods_filterByNetworkProperties_$$$($JSCompiler_StaticMethods_filterByNetworkProperties_$self$$, $props$jscomp$8$$) {
  return !$goog$array$find$$($JSCompiler_StaticMethods_filterByNetworkProperties_$self$$.$h$, function($filter$jscomp$8$$) {
    return !$filter$jscomp$8$$.$b$($props$jscomp$8$$);
  });
}, $castApp$core$WiFiMonitor$Event$$ = function $$castApp$core$WiFiMonitor$Event$$$($type$jscomp$202$$, $props$jscomp$9$$) {
  $goog$events$Event$$.call(this, $type$jscomp$202$$);
  this.properties = $props$jscomp$9$$;
};
$goog$inherits$$($castApp$core$WiFiMonitor$Event$$, $goog$events$Event$$);
var $castApp$core$WiFiMonitor$Filter$$ = function $$castApp$core$WiFiMonitor$Filter$$$() {
};
$castApp$core$WiFiMonitor$Filter$$.prototype.$f$ = function $$castApp$core$WiFiMonitor$Filter$$$$$f$$() {
  return !0;
};
$castApp$core$WiFiMonitor$Filter$$.prototype.$b$ = function $$castApp$core$WiFiMonitor$Filter$$$$$b$$() {
  return !0;
};
var $castApp$core$WiFiMonitor$CastHotSpotsFilter$$ = function $$castApp$core$WiFiMonitor$CastHotSpotsFilter$$$($opt_bssid$$) {
  this.$c$ = $opt_bssid$$ || null;
};
$goog$inherits$$($castApp$core$WiFiMonitor$CastHotSpotsFilter$$, $castApp$core$WiFiMonitor$Filter$$);
$castApp$core$WiFiMonitor$CastHotSpotsFilter$$.prototype.$f$ = function $$castApp$core$WiFiMonitor$CastHotSpotsFilter$$$$$f$$($props$jscomp$12$$) {
  return !(!$props$jscomp$12$$.WiFi || $props$jscomp$12$$.WiFi.Security && "None" !== $props$jscomp$12$$.WiFi.Security);
};
$castApp$core$WiFiMonitor$CastHotSpotsFilter$$.prototype.$b$ = function $$castApp$core$WiFiMonitor$CastHotSpotsFilter$$$$$b$$($props$jscomp$13$$) {
  return this.$c$ ? !(!$props$jscomp$13$$.WiFi || $props$jscomp$13$$.WiFi.BSSID !== this.$c$) : $castApp$core$utils$isEurekaHotSpot$$($props$jscomp$13$$);
};
var $castApp$core$WiFiMonitor$stringifyNetworkPropertiesForLogging_$$ = function $$castApp$core$WiFiMonitor$stringifyNetworkPropertiesForLogging_$$$($props$jscomp$14$$) {
  var $parts$jscomp$11$$ = [];
  ["GUID", "Name"].forEach(function($propName$$) {
    $propName$$ in $props$jscomp$14$$ && ($parts$jscomp$11$$.push(" " + $propName$$ + ": "), $parts$jscomp$11$$.push($castApp$log$anonymizeString$$("" + $props$jscomp$14$$[$propName$$])));
  });
  ["ConnectionState", "Type"].forEach(function($propName$jscomp$1$$) {
    $propName$jscomp$1$$ in $props$jscomp$14$$ && $parts$jscomp$11$$.push(" " + $propName$jscomp$1$$ + ": " + $props$jscomp$14$$[$propName$jscomp$1$$]);
  });
  $props$jscomp$14$$.WiFi && (["SSID", "BSSID"].forEach(function($propName$jscomp$2$$) {
    $propName$jscomp$2$$ in $props$jscomp$14$$.WiFi && ($parts$jscomp$11$$.push(" WiFi." + $propName$jscomp$2$$ + ": "), $parts$jscomp$11$$.push($castApp$log$anonymizeString$$("" + $props$jscomp$14$$.WiFi[$propName$jscomp$2$$])));
  }), ["Security", "SignalStrength"].forEach(function($propName$jscomp$3$$) {
    $parts$jscomp$11$$.push(" WiFi." + $propName$jscomp$3$$ + ": " + $props$jscomp$14$$.WiFi[$propName$jscomp$3$$]);
  }));
  return $castApp$log$joinMessageParts$$($parts$jscomp$11$$);
}, $castApp$core$WiFiMonitor$logger_$$ = $castApp$log$getLogger$$("core.WiFiMonitor");
var $castApp$core$ShortTermDeviceState$$ = function $$castApp$core$ShortTermDeviceState$$$($storage$jscomp$17$$) {
  this.$c$ = $storage$jscomp$17$$;
  this.$b$ = null;
}, $castApp$core$ShortTermDeviceState$TIMEOUTS$$ = new $goog$structs$Map$$(1, 2E4, 3, 6E4, 2, 6E4), $castApp$core$ShortTermDeviceState$addNewStateRecord_$$ = function $$castApp$core$ShortTermDeviceState$addNewStateRecord_$$$($storage$jscomp$21$$, $newStateRecord$$) {
  var $stateRecords$$ = $castApp$core$storage$readShortTermDeviceState$$($storage$jscomp$21$$).filter($castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$);
  $stateRecords$$.push($newStateRecord$$);
  $castApp$core$storage$writeShortTermDeviceState$$($storage$jscomp$21$$, $stateRecords$$);
}, $castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$ = function $$castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$$($stateRecord$$) {
  var $timeout$jscomp$10$$ = $castApp$core$ShortTermDeviceState$TIMEOUTS$$.get($stateRecord$$.type, Infinity);
  return $goog$now$$() - $stateRecord$$.time < $timeout$jscomp$10$$;
}, $castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$ = function $$castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$$($shortTermDeviceState$$) {
  this.$c$ = $shortTermDeviceState$$;
};
$goog$inherits$$($castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$, $castApp$core$WiFiMonitor$Filter$$);
$castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$.prototype.$b$ = function $$castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$$$$b$$($bssid$jscomp$inline_776_props$jscomp$15$$) {
  $bssid$jscomp$inline_776_props$jscomp$15$$ = $bssid$jscomp$inline_776_props$jscomp$15$$.WiFi && $bssid$jscomp$inline_776_props$jscomp$15$$.WiFi.BSSID;
  var $ret$jscomp$inline_777$$ = $JSCompiler_StaticMethods_checkDeviceState_$$(this.$c$, $bssid$jscomp$inline_776_props$jscomp$15$$, 2);
  $ret$jscomp$inline_777$$ && $castApp$log$info$$($castApp$core$ShortTermDeviceState$logger_$$, "Hotspot with BSSID=", $castApp$log$anonymizeString$$($bssid$jscomp$inline_776_props$jscomp$15$$), " is assumed to be turning off.");
  return !$ret$jscomp$inline_777$$;
};
var $castApp$core$ShortTermDeviceState$logger_$$ = $castApp$log$getLogger$$("core.ShortTermDeviceState"), $JSCompiler_StaticMethods_loadFromStorage$$ = function $$JSCompiler_StaticMethods_loadFromStorage$$$($JSCompiler_StaticMethods_loadFromStorage$self$$) {
  $JSCompiler_StaticMethods_loadFromStorage$self$$.$b$ = new $goog$structs$Map$$;
  for (var $stateRecords$jscomp$1$$ = $castApp$core$storage$readShortTermDeviceState$$($JSCompiler_StaticMethods_loadFromStorage$self$$.$c$), $freshStateRecords$$ = [], $i$jscomp$197$$ = 0, $l$jscomp$26$$ = $stateRecords$jscomp$1$$.length; $i$jscomp$197$$ < $l$jscomp$26$$; ++$i$jscomp$197$$) {
    var $record$jscomp$2$$ = $stateRecords$jscomp$1$$[$i$jscomp$197$$];
    if ($castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$($record$jscomp$2$$)) {
      $freshStateRecords$$.push($record$jscomp$2$$);
      $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_loadFromStorage$self$$.$b$, $record$jscomp$2$$.type) || $JSCompiler_StaticMethods_loadFromStorage$self$$.$b$.set($record$jscomp$2$$.type, new $goog$structs$Map$$);
      var $mapToModify$$ = $JSCompiler_StaticMethods_loadFromStorage$self$$.$b$.get($record$jscomp$2$$.type);
      $mapToModify$$ && $mapToModify$$.get($record$jscomp$2$$.deviceId, -Infinity) < $record$jscomp$2$$.time && $mapToModify$$.set($record$jscomp$2$$.deviceId, $record$jscomp$2$$.time);
    }
  }
  $freshStateRecords$$.length !== $stateRecords$jscomp$1$$.length && $castApp$core$storage$writeShortTermDeviceState$$($JSCompiler_StaticMethods_loadFromStorage$self$$.$c$, $freshStateRecords$$);
}, $JSCompiler_StaticMethods_checkDeviceState_$$ = function $$JSCompiler_StaticMethods_checkDeviceState_$$$($JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$, $deviceId$jscomp$5_endTime$jscomp$4$$, $stateType$$) {
  $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$.$b$ || $JSCompiler_StaticMethods_loadFromStorage$$($JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$);
  $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$ = $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$.$b$.get($stateType$$, null);
  if (null === $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$ || !$JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$, $deviceId$jscomp$5_endTime$jscomp$4$$)) {
    return !1;
  }
  $deviceId$jscomp$5_endTime$jscomp$4$$ = $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$.get($deviceId$jscomp$5_endTime$jscomp$4$$) + $castApp$core$ShortTermDeviceState$TIMEOUTS$$.get($stateType$$, 0);
  return $goog$now$$() < $deviceId$jscomp$5_endTime$jscomp$4$$;
}, $JSCompiler_StaticMethods_deviceIsRestarting$$ = function $$JSCompiler_StaticMethods_deviceIsRestarting$$$($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$, $ipAddress$jscomp$6$$) {
  ($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$ = $JSCompiler_StaticMethods_checkDeviceState_$$($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$, $ipAddress$jscomp$6$$, 1) || $JSCompiler_StaticMethods_checkDeviceState_$$($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$, $ipAddress$jscomp$6$$, 3)) && $castApp$log$info$$($castApp$core$ShortTermDeviceState$logger_$$, "Device with IP=", $castApp$log$anonymizeString$$($ipAddress$jscomp$6$$), " is assumed to be restarting.");
  return $JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$;
};
var $castApp$core$DeviceMonitor$$ = function $$castApp$core$DeviceMonitor$$$($networkingApi$jscomp$6$$, $eventPageClient$$, $http$jscomp$4$$, $win$jscomp$14$$) {
  $goog$events$EventTarget$$.call(this);
  this.$o$ = new $castApp$core$ShortTermDeviceState$$($win$jscomp$14$$.localStorage);
  this.$g$ = new $castApp$core$WiFiMonitor$$($networkingApi$jscomp$6$$, new $castApp$core$WiFiMonitor$CastHotSpotsFilter$$, new $castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$(this.$o$));
  this.$h$ = $eventPageClient$$;
  this.$B$ = $networkingApi$jscomp$6$$;
  this.$A$ = $http$jscomp$4$$;
  this.$m$ = $win$jscomp$14$$;
};
$goog$inherits$$($castApp$core$DeviceMonitor$$, $goog$events$EventTarget$$);
var $castApp$core$DeviceMonitor$logger_$$ = $castApp$log$getLogger$$("core.DeviceMonitor"), $castApp$core$DeviceMonitor$Event$$ = function $$castApp$core$DeviceMonitor$Event$$$($devices$jscomp$4$$) {
  $goog$events$Event$$.call(this, "devices");
  this.devices = $devices$jscomp$4$$;
};
$goog$inherits$$($castApp$core$DeviceMonitor$Event$$, $goog$events$Event$$);
var $castApp$core$NewDeviceMonitorImpl$$ = function $$castApp$core$NewDeviceMonitorImpl$$$($networkingApi$jscomp$7$$, $eventPageClient$jscomp$1$$, $http$jscomp$5$$, $win$jscomp$15$$) {
  $castApp$core$DeviceMonitor$$.call(this, $networkingApi$jscomp$7$$, $eventPageClient$jscomp$1$$, $http$jscomp$5$$, $win$jscomp$15$$);
  this.$b$ = null;
  this.$l$ = 0;
  this.$c$ = new $goog$structs$Map$$;
  this.$j$ = new $goog$math$ExponentialBackoff$$(5E3);
  this.$u$ = this.$C$.bind(this);
  this.$v$ = this.$handleVisibilityChange_$.bind(this);
  this.$s$ = new $castApp$StartStoppable$$(this.$castApp_core_NewDeviceMonitorImpl_prototype$start_$.bind(this), this.$castApp_core_NewDeviceMonitorImpl_prototype$reset_$.bind(this));
};
$goog$inherits$$($castApp$core$NewDeviceMonitorImpl$$, $castApp$core$DeviceMonitor$$);
var $JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$$ = function $$JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$$$($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$, $ipAddress$jscomp$7$$) {
  return $JSCompiler_StaticMethods_thenCatch$$($castApp$core$SetupApiClient$create$$($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$.$A$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$($ipAddress$jscomp$7$$)).then(function($setupApiClient$$) {
    var $deviceData$jscomp$1$$ = $setupApiClient$$.getState(), $eurekaInfo$jscomp$12$$ = $deviceData$jscomp$1$$.eurekaInfoState;
    if ($deviceData$jscomp$1$$.deviceIpAddress && $eurekaInfo$jscomp$12$$ && $eurekaInfo$jscomp$12$$.name && $eurekaInfo$jscomp$12$$.ssdpUdn && void 0 !== $eurekaInfo$jscomp$12$$.ethernetConnected && void 0 !== $eurekaInfo$jscomp$12$$.tosAccepted && $eurekaInfo$jscomp$12$$.deviceType && void 0 !== $eurekaInfo$jscomp$12$$.features) {
      return $setupApiClient$$;
    }
    $castApp$log$info$$($castApp$core$DeviceMonitor$logger_$$, "eureka_info is missing required data. IP: ", $castApp$log$anonymizeString$$($ipAddress$jscomp$7$$));
    return $goog$Promise$reject$$();
  }.bind($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$)), function($err$jscomp$34$$) {
    $castApp$log$errorWithCause$$($castApp$core$DeviceMonitor$logger_$$, $err$jscomp$34$$, "eureka_info failed! IP: ", $castApp$log$anonymizeString$$($ipAddress$jscomp$7$$));
  }.bind($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$));
};
$JSCompiler_prototypeAlias$$ = $castApp$core$NewDeviceMonitorImpl$$.prototype;
$JSCompiler_prototypeAlias$$.$castApp_core_NewDeviceMonitorImpl_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_NewDeviceMonitorImpl_prototype$start_$$() {
  this.$m$.document.addEventListener("visibilitychange", this.$v$);
  this.$h$.listen("devices", this.$u$);
  $JSCompiler_StaticMethods_startDeviceMonitor$$(this.$h$);
  this.$l$ = 0;
  return this.$g$.start().then(this.$rescan_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$castApp_core_NewDeviceMonitorImpl_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_NewDeviceMonitorImpl_prototype$reset_$$() {
  this.$m$.document.removeEventListener("visibilitychange", this.$v$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$(this.$h$, "devices", this.$u$);
  this.$l$ = 0;
  this.$j$ = new $goog$math$ExponentialBackoff$$(5E3);
  this.$b$ && (this.$b$.cancel(), this.$b$ = null);
  this.$c$.clear();
  return this.$g$.stop();
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$s$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$s$.stop();
};
$JSCompiler_prototypeAlias$$.$handleVisibilityChange_$ = function $$JSCompiler_prototypeAlias$$$$handleVisibilityChange_$$() {
  this.$m$.document.hidden ? this.$b$ && (this.$b$.cancel(), this.$b$ = null) : (this.$j$ = new $goog$math$ExponentialBackoff$$(5E3), this.$rescan_$());
};
$JSCompiler_prototypeAlias$$.$rescan_$ = function $$JSCompiler_prototypeAlias$$$$rescan_$$() {
  $castApp$log$info$$($castApp$core$DeviceMonitor$logger_$$, "Starting rescan.");
  this.$b$ && this.$b$.cancel();
  $JSCompiler_StaticMethods_loadFromStorage$$(this.$o$);
  this.$B$.requestNetworkScan();
  this.$l$++;
  1 <= this.$l$ && this.$m$.document.hidden ? this.$b$ = null : (this.$b$ = $goog$Timer$promise$$(this.$j$.$c$), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$s$, this.$b$).then(this.$rescan_$.bind(this)), $JSCompiler_StaticMethods_backoff$$(this.$j$));
};
var $JSCompiler_StaticMethods_dispatchDevices_$$ = function $$JSCompiler_StaticMethods_dispatchDevices_$$$($JSCompiler_StaticMethods_dispatchDevices_$self$$) {
  var $loadedDevices$$ = [];
  $JSCompiler_StaticMethods_dispatchDevices_$self$$.$c$.$getValues$().forEach(function($device$jscomp$4$$) {
    $device$jscomp$4$$.$setupApiClient$ && !$JSCompiler_StaticMethods_deviceIsRestarting$$(this.$o$, $device$jscomp$4$$.ipAddress) && $loadedDevices$$.push($device$jscomp$4$$);
  }.bind($JSCompiler_StaticMethods_dispatchDevices_$self$$));
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchDevices_$self$$, new $castApp$core$DeviceMonitor$Event$$($loadedDevices$$));
};
$castApp$core$NewDeviceMonitorImpl$$.prototype.$C$ = function $$castApp$core$NewDeviceMonitorImpl$$$$$C$$($event$jscomp$14$$) {
  var $latestIpAddresses$$ = new $goog$structs$Set$$;
  $event$jscomp$14$$.msg.devices.forEach(function($device$jscomp$5$$) {
    $latestIpAddresses$$.add($device$jscomp$5$$.ipAddress);
    var $existingDevice$$ = this.$c$.get($device$jscomp$5$$.ipAddress);
    $existingDevice$$ || ($existingDevice$$ = {ipAddress:$device$jscomp$5$$.ipAddress}, $JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$$(this, $device$jscomp$5$$.ipAddress).then(function($setupApiClient$jscomp$1$$) {
      var $existingDevice$jscomp$1$$ = this.$c$.get($device$jscomp$5$$.ipAddress);
      $existingDevice$jscomp$1$$ ? ($existingDevice$jscomp$1$$.$setupApiClient$ = $setupApiClient$jscomp$1$$, this.$c$.set($device$jscomp$5$$.ipAddress, $existingDevice$jscomp$1$$), $JSCompiler_StaticMethods_dispatchDevices_$$(this)) : $castApp$log$error$$($castApp$core$DeviceMonitor$logger_$$, "Device with IP", $castApp$log$anonymizeString$$($device$jscomp$5$$.ipAddress), " disappeared between when createSetupApiClient was", " called and when it returned.");
    }.bind(this)));
    $device$jscomp$5$$.sessionId && $device$jscomp$5$$.appId && ($existingDevice$$.sessionId = $device$jscomp$5$$.sessionId, $existingDevice$$.appId = $device$jscomp$5$$.appId);
    this.$c$.set($device$jscomp$5$$.ipAddress, $existingDevice$$);
  }.bind(this));
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$(this.$c$.$getKeys$()), $latestIpAddresses$$), this.$c$.remove.bind(this.$c$));
  $JSCompiler_StaticMethods_dispatchDevices_$$(this);
};
var $jspb$Message$$ = function $$jspb$Message$$$() {
}, $jspb$Message$SUPPORTS_UINT8ARRAY_$$ = "function" == typeof Uint8Array, $jspb$Message$initialize$$ = function $$jspb$Message$initialize$$$($msg$jscomp$48$$, $data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$, $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$, $repeatedFields$$) {
  $msg$jscomp$48$$.$c$ = null;
  $data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$ || ($data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$ = $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ ? [$fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$] : []);
  $msg$jscomp$48$$.$l$ = $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ ? String($fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$) : void 0;
  $msg$jscomp$48$$.$g$ = 0 === $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ ? -1 : 0;
  $msg$jscomp$48$$.$b$ = $data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$;
  a: {
    if ($data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$ = $msg$jscomp$48$$.$b$.length) {
      if (--$data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$, $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ = $msg$jscomp$48$$.$b$[$data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$], !(null === $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ || "object" != typeof $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ || $goog$isArray$$($fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$) || 
      $jspb$Message$SUPPORTS_UINT8ARRAY_$$ && $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ instanceof Uint8Array)) {
        $msg$jscomp$48$$.$h$ = $data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$ - $msg$jscomp$48$$.$g$;
        $msg$jscomp$48$$.$f$ = $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$;
        break a;
      }
    }
    $msg$jscomp$48$$.$h$ = Number.MAX_VALUE;
  }
  $msg$jscomp$48$$.$j$ = {};
  if ($repeatedFields$$) {
    for ($data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$ = 0; $data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$ < $repeatedFields$$.length; $data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$++) {
      $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ = $repeatedFields$$[$data$jscomp$74_i$jscomp$281_lastIndex$jscomp$inline_782_msgLength$jscomp$inline_781$$], $fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ < $msg$jscomp$48$$.$h$ ? ($fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$ += $msg$jscomp$48$$.$g$, $msg$jscomp$48$$.$b$[$fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$] = $msg$jscomp$48$$.$b$[$fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$] || 
      $jspb$Message$EMPTY_LIST_SENTINEL_$$) : ($jspb$Message$maybeInitEmptyExtensionObject_$$($msg$jscomp$48$$), $msg$jscomp$48$$.$f$[$fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$] = $msg$jscomp$48$$.$f$[$fieldNumber$jscomp$3_index$jscomp$97_messageId_obj$jscomp$inline_783$$] || $jspb$Message$EMPTY_LIST_SENTINEL_$$);
    }
  }
}, $jspb$Message$EMPTY_LIST_SENTINEL_$$ = Object.freeze ? Object.freeze([]) : [], $jspb$Message$maybeInitEmptyExtensionObject_$$ = function $$jspb$Message$maybeInitEmptyExtensionObject_$$$($msg$jscomp$50$$) {
  var $pivotIndex$$ = $msg$jscomp$50$$.$h$ + $msg$jscomp$50$$.$g$;
  $msg$jscomp$50$$.$b$[$pivotIndex$$] || ($msg$jscomp$50$$.$f$ = $msg$jscomp$50$$.$b$[$pivotIndex$$] = {});
}, $jspb$Message$getField$$ = function $$jspb$Message$getField$$$($msg$jscomp$53$$, $fieldNumber$jscomp$7_index$jscomp$98$$) {
  if ($fieldNumber$jscomp$7_index$jscomp$98$$ < $msg$jscomp$53$$.$h$) {
    $fieldNumber$jscomp$7_index$jscomp$98$$ += $msg$jscomp$53$$.$g$;
    var $val$jscomp$49$$ = $msg$jscomp$53$$.$b$[$fieldNumber$jscomp$7_index$jscomp$98$$];
    return $val$jscomp$49$$ === $jspb$Message$EMPTY_LIST_SENTINEL_$$ ? $msg$jscomp$53$$.$b$[$fieldNumber$jscomp$7_index$jscomp$98$$] = [] : $val$jscomp$49$$;
  }
  if ($msg$jscomp$53$$.$f$) {
    return $val$jscomp$49$$ = $msg$jscomp$53$$.$f$[$fieldNumber$jscomp$7_index$jscomp$98$$], $val$jscomp$49$$ === $jspb$Message$EMPTY_LIST_SENTINEL_$$ ? $msg$jscomp$53$$.$f$[$fieldNumber$jscomp$7_index$jscomp$98$$] = [] : $val$jscomp$49$$;
  }
}, $jspb$Message$setField$$ = function $$jspb$Message$setField$$$($msg$jscomp$63$$, $fieldNumber$jscomp$17$$, $value$jscomp$323$$) {
  $fieldNumber$jscomp$17$$ < $msg$jscomp$63$$.$h$ ? $msg$jscomp$63$$.$b$[$fieldNumber$jscomp$17$$ + $msg$jscomp$63$$.$g$] = $value$jscomp$323$$ : ($jspb$Message$maybeInitEmptyExtensionObject_$$($msg$jscomp$63$$), $msg$jscomp$63$$.$f$[$fieldNumber$jscomp$17$$] = $value$jscomp$323$$);
  return $msg$jscomp$63$$;
}, $jspb$Message$getRepeatedWrapperField$$ = function $$jspb$Message$getRepeatedWrapperField$$$($msg$jscomp$76$$, $ctor$jscomp$5_val$jscomp$50$$, $fieldNumber$jscomp$30$$) {
  $msg$jscomp$76$$.$c$ || ($msg$jscomp$76$$.$c$ = {});
  if (!$msg$jscomp$76$$.$c$[$fieldNumber$jscomp$30$$]) {
    for (var $data$jscomp$inline_796$$ = $jspb$Message$getField$$($msg$jscomp$76$$, $fieldNumber$jscomp$30$$), $wrappers$jscomp$inline_797$$ = [], $i$jscomp$inline_798$$ = 0; $i$jscomp$inline_798$$ < $data$jscomp$inline_796$$.length; $i$jscomp$inline_798$$++) {
      $wrappers$jscomp$inline_797$$[$i$jscomp$inline_798$$] = new $ctor$jscomp$5_val$jscomp$50$$($data$jscomp$inline_796$$[$i$jscomp$inline_798$$]);
    }
    $msg$jscomp$76$$.$c$[$fieldNumber$jscomp$30$$] = $wrappers$jscomp$inline_797$$;
  }
  $ctor$jscomp$5_val$jscomp$50$$ = $msg$jscomp$76$$.$c$[$fieldNumber$jscomp$30$$];
  $ctor$jscomp$5_val$jscomp$50$$ == $jspb$Message$EMPTY_LIST_SENTINEL_$$ && ($ctor$jscomp$5_val$jscomp$50$$ = $msg$jscomp$76$$.$c$[$fieldNumber$jscomp$30$$] = []);
  return $ctor$jscomp$5_val$jscomp$50$$;
}, $JSCompiler_StaticMethods_syncMapFields_$$ = function $$JSCompiler_StaticMethods_syncMapFields_$$$($JSCompiler_StaticMethods_syncMapFields_$self$$) {
  if ($JSCompiler_StaticMethods_syncMapFields_$self$$.$c$) {
    for (var $fieldNumber$jscomp$36$$ in $JSCompiler_StaticMethods_syncMapFields_$self$$.$c$) {
      var $val$jscomp$51$$ = $JSCompiler_StaticMethods_syncMapFields_$self$$.$c$[$fieldNumber$jscomp$36$$];
      if ($goog$isArray$$($val$jscomp$51$$)) {
        for (var $i$jscomp$289$$ = 0; $i$jscomp$289$$ < $val$jscomp$51$$.length; $i$jscomp$289$$++) {
          $val$jscomp$51$$[$i$jscomp$289$$] && $JSCompiler_StaticMethods_toArray$$($val$jscomp$51$$[$i$jscomp$289$$]);
        }
      } else {
        $val$jscomp$51$$ && $JSCompiler_StaticMethods_toArray$$($val$jscomp$51$$);
      }
    }
  }
}, $JSCompiler_StaticMethods_toArray$$ = function $$JSCompiler_StaticMethods_toArray$$$($JSCompiler_StaticMethods_toArray$self$$) {
  $JSCompiler_StaticMethods_syncMapFields_$$($JSCompiler_StaticMethods_toArray$self$$);
  return $JSCompiler_StaticMethods_toArray$self$$.$b$;
};
$jspb$Message$$.prototype.$i$ = $jspb$Message$SUPPORTS_UINT8ARRAY_$$ ? function() {
  var $old_toJSON$$ = Uint8Array.prototype.toJSON;
  Uint8Array.prototype.toJSON = function $Uint8Array$$toJSON$() {
    var $alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$;
    void 0 === $alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$ && ($alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$ = 0);
    $goog$crypt$base64$init_$$();
    $alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$ = $goog$crypt$base64$byteToCharMaps_$$[$alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$];
    for (var $output$jscomp$inline_803$$ = [], $i$jscomp$inline_804$$ = 0; $i$jscomp$inline_804$$ < this.length; $i$jscomp$inline_804$$ += 3) {
      var $byte1$jscomp$inline_805_outByte2$jscomp$inline_811$$ = this[$i$jscomp$inline_804$$], $haveByte2$jscomp$inline_806$$ = $i$jscomp$inline_804$$ + 1 < this.length, $byte2$jscomp$inline_807_outByte3$jscomp$inline_812$$ = $haveByte2$jscomp$inline_806$$ ? this[$i$jscomp$inline_804$$ + 1] : 0, $haveByte3$jscomp$inline_808$$ = $i$jscomp$inline_804$$ + 2 < this.length, $byte3$jscomp$inline_809_outByte4$jscomp$inline_813$$ = $haveByte3$jscomp$inline_808$$ ? this[$i$jscomp$inline_804$$ + 2] : 0, $outByte1$jscomp$inline_810$$ = 
      $byte1$jscomp$inline_805_outByte2$jscomp$inline_811$$ >> 2;
      $byte1$jscomp$inline_805_outByte2$jscomp$inline_811$$ = ($byte1$jscomp$inline_805_outByte2$jscomp$inline_811$$ & 3) << 4 | $byte2$jscomp$inline_807_outByte3$jscomp$inline_812$$ >> 4;
      $byte2$jscomp$inline_807_outByte3$jscomp$inline_812$$ = ($byte2$jscomp$inline_807_outByte3$jscomp$inline_812$$ & 15) << 2 | $byte3$jscomp$inline_809_outByte4$jscomp$inline_813$$ >> 6;
      $byte3$jscomp$inline_809_outByte4$jscomp$inline_813$$ &= 63;
      $haveByte3$jscomp$inline_808$$ || ($byte3$jscomp$inline_809_outByte4$jscomp$inline_813$$ = 64, $haveByte2$jscomp$inline_806$$ || ($byte2$jscomp$inline_807_outByte3$jscomp$inline_812$$ = 64));
      $output$jscomp$inline_803$$.push($alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$[$outByte1$jscomp$inline_810$$], $alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$[$byte1$jscomp$inline_805_outByte2$jscomp$inline_811$$], $alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$[$byte2$jscomp$inline_807_outByte3$jscomp$inline_812$$] || "", $alphabet$jscomp$inline_801_byteToCharMap$jscomp$inline_802$$[$byte3$jscomp$inline_809_outByte4$jscomp$inline_813$$] || "");
    }
    return $output$jscomp$inline_803$$.join("");
  };
  try {
    return JSON.stringify(this.$b$ && $JSCompiler_StaticMethods_toArray$$(this), $jspb$Message$serializeSpecialNumbers_$$);
  } finally {
    Uint8Array.prototype.toJSON = $old_toJSON$$;
  }
} : function() {
  return JSON.stringify(this.$b$ && $JSCompiler_StaticMethods_toArray$$(this), $jspb$Message$serializeSpecialNumbers_$$);
};
var $jspb$Message$serializeSpecialNumbers_$$ = function $$jspb$Message$serializeSpecialNumbers_$$$($key$jscomp$148$$, $value$jscomp$341$$) {
  return "number" != typeof $value$jscomp$341$$ || !isNaN($value$jscomp$341$$) && Infinity !== $value$jscomp$341$$ && -Infinity !== $value$jscomp$341$$ ? $value$jscomp$341$$ : String($value$jscomp$341$$);
};
$jspb$Message$$.prototype.toString = function $$jspb$Message$$$$toString$() {
  $JSCompiler_StaticMethods_syncMapFields_$$(this);
  return this.$b$.toString();
};
var $imax$Attribution$$ = function $$imax$Attribution$$$($opt_data$jscomp$150$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$150$$, 0, null);
};
$goog$inherits$$($imax$Attribution$$, $jspb$Message$$);
var $imax$GetSecondScreenExperienceRequest$$ = function $$imax$GetSecondScreenExperienceRequest$$$($opt_data$jscomp$162$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$162$$, 0, null);
};
$goog$inherits$$($imax$GetSecondScreenExperienceRequest$$, $jspb$Message$$);
var $imax$SecondaryAction$$ = function $$imax$SecondaryAction$$$($opt_data$jscomp$163$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$163$$, 0, null);
};
$goog$inherits$$($imax$SecondaryAction$$, $jspb$Message$$);
var $imax$GetSecondScreenExperienceResponse$$ = function $$imax$GetSecondScreenExperienceResponse$$$($opt_data$jscomp$164$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$164$$, "is.gsser", $imax$GetSecondScreenExperienceResponse$repeatedFields_$$);
};
$goog$inherits$$($imax$GetSecondScreenExperienceResponse$$, $jspb$Message$$);
var $imax$GetSecondScreenExperienceResponse$repeatedFields_$$ = [3, 5, 13];
$imax$GetSecondScreenExperienceResponse$$.messageId = "is.gsser";
$imax$GetSecondScreenExperienceResponse$$.prototype.getTitle = function $$imax$GetSecondScreenExperienceResponse$$$$getTitle$() {
  return $jspb$Message$getField$$(this, 1);
};
$imax$GetSecondScreenExperienceResponse$$.prototype.setTitle = function $$imax$GetSecondScreenExperienceResponse$$$$setTitle$($value$jscomp$1245$$) {
  return $jspb$Message$setField$$(this, 1, $value$jscomp$1245$$);
};
var $castApp$core$ImaxSseEndpoint$$ = function $$castApp$core$ImaxSseEndpoint$$$($http$jscomp$6$$, $lang$jscomp$2$$, $webview$jscomp$3$$) {
  this.$c$ = $http$jscomp$6$$;
  this.$b$ = $webview$jscomp$3$$;
  this.$f$ = "https://chromecast-staging.sandbox.google.com/cast/chromecast/home/gsse?rt=j&hl=" + $lang$jscomp$2$$;
};
$castApp$log$getLogger$$("core.ImaxSseEndpoint");
$castApp$core$ImaxSseEndpoint$$.prototype.request = function $$castApp$core$ImaxSseEndpoint$$$$request$($backendData$$) {
  var $request$jscomp$23$$ = new $imax$GetSecondScreenExperienceRequest$$;
  $jspb$Message$setField$$($request$jscomp$23$$, 3, $backendData$$);
  $jspb$Message$setField$$($request$jscomp$23$$, 1, "E8C28D3C");
  return this.$c$.request({url:this.$f$, method:"POST", content:$request$jscomp$23$$.$i$(), headers:{"Content-Type":"application/json"}}).then(function($arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$) {
    $arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$ = $arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$.$getResponseText$();
    $arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$.startsWith(")]}'\n") && ($arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$ = $arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$.slice(5));
    $arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$ = JSON.parse($arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$);
    $arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$ = new $imax$GetSecondScreenExperienceResponse$$($arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$[0][0]);
    var $urls$$ = [], $primaryActionUrl_secondaryActions$$ = $jspb$Message$getField$$($arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$, 4);
    $primaryActionUrl_secondaryActions$$ && $urls$$.push($primaryActionUrl_secondaryActions$$);
    ($primaryActionUrl_secondaryActions$$ = $jspb$Message$getRepeatedWrapperField$$($arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$, $imax$SecondaryAction$$, 5)) && $primaryActionUrl_secondaryActions$$.forEach(function($secondaryAction$$) {
      $urls$$.push($jspb$Message$getField$$($secondaryAction$$, 2));
    });
    $urls$$.forEach(this.$b$.$l$.bind(this.$b$));
    return $arrays$jscomp$1_imaxResponse_response$jscomp$6_text$jscomp$17$$;
  }.bind(this));
};
var $castApp$core$DeviceManager$$ = function $$castApp$core$DeviceManager$$$($env$$) {
  this.$c$ = $env$$;
  this.$b$ = new $goog$structs$Map$$;
  this.$g$ = new $castApp$StartStoppable$$(this.$castApp_core_DeviceManager_prototype$start_$.bind(this), this.$castApp_core_DeviceManager_prototype$reset_$.bind(this));
  this.$j$ = this.$handleWiFiAddedEvent_$.bind(this);
  this.$l$ = this.$handleWiFiRemovedEvent_$.bind(this);
  this.$i$ = this.$castApp_core_DeviceManager_prototype$handleUserAction_$.bind(this);
  this.$m$ = this.$handleRescanRequest_$.bind(this);
  this.$h$ = this.$castApp_core_DeviceManager_prototype$handleDeviceData_$.bind(this);
  this.$f$ = null;
}, $castApp$core$DeviceManager$HotSpotDevice_$$ = function $$castApp$core$DeviceManager$HotSpotDevice_$$$($hotSpotProps$jscomp$3$$) {
  this.$b$ = $hotSpotProps$jscomp$3$$;
};
$castApp$log$getLogger$$("core.DeviceManager.HotSpotDevice_");
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.$getUiProps$ = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$$getUiProps$$() {
  var $parsedSsid$jscomp$1$$ = $castApp$core$utils$parseCastDeviceSsid$$(this.$b$.WiFi.SSID), $uiProps$$ = new $castApp$protocol$Devices$DeviceProperties$$("wifi:" + this.$b$.GUID, $castApp$core$utils$getProtocolDeviceType$$($parsedSsid$jscomp$1$$.type), $parsedSsid$jscomp$1$$.name);
  $uiProps$$.needsSetup = !0;
  $uiProps$$.features = $castApp$core$utils$createFeatures$$($parsedSsid$jscomp$1$$.type);
  return $uiProps$$;
};
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.$getDeviceToSetUpProperties$ = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$$getDeviceToSetUpProperties$$() {
  var $props$jscomp$16_uiProps$jscomp$1$$ = this.$getUiProps$();
  $props$jscomp$16_uiProps$jscomp$1$$ = {name:$props$jscomp$16_uiProps$jscomp$1$$.displayName, type:$castApp$core$utils$DEVICE_TYPE_MAPPER_$$.$b$.get($props$jscomp$16_uiProps$jscomp$1$$.type) || "c"};
  $props$jscomp$16_uiProps$jscomp$1$$.ssid = this.$b$.WiFi.SSID;
  $props$jscomp$16_uiProps$jscomp$1$$.bssid = this.$b$.WiFi.BSSID;
  return new $castApp$core$storage$DeviceToSetUp$$($props$jscomp$16_uiProps$jscomp$1$$);
};
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.start = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$start$() {
  return $goog$Promise$resolve$$();
};
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.stop = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$stop$() {
  return $goog$Promise$resolve$$();
};
var $castApp$core$DeviceManager$ConnectedDevice_$$ = function $$castApp$core$DeviceManager$ConnectedDevice_$$$($env$jscomp$1$$, $ipAddress$jscomp$8$$, $setupApiClient$jscomp$2$$, $handleDeviceUpdated$$) {
  this.$l$ = $ipAddress$jscomp$8$$;
  this.$b$ = null;
  this.$f$ = $handleDeviceUpdated$$;
  this.$o$ = $env$jscomp$1$$;
  this.$i$ = new $castApp$StartStoppable$$(this.$castApp_core_DeviceManager_ConnectedDevice__prototype$start_$.bind(this), this.$castApp_core_DeviceManager_ConnectedDevice__prototype$reset_$.bind(this));
  this.$v$ = $setupApiClient$jscomp$2$$;
  this.$h$ = this.$c$ = this.$g$ = null;
  this.$w$ = new $castApp$core$ImaxSseEndpoint$$($env$jscomp$1$$.$h$, $env$jscomp$1$$.$i$(), this.$o$.$o$);
  this.$j$ = this.$m$.bind(this);
  this.$u$ = this.$handleNewMedia_$.bind(this);
  this.$s$ = this.$handleBackdropMessage_$.bind(this);
}, $castApp$core$DeviceManager$ConnectedDevice_$logger_$$ = $castApp$log$getLogger$$("castApp.core.DeviceManager.ConnectedDevice_");
$castApp$core$DeviceManager$ConnectedDevice_$$.prototype.$getDeviceToSetUpProperties$ = function $$castApp$core$DeviceManager$ConnectedDevice_$$$$$getDeviceToSetUpProperties$$() {
  var $uiProps$jscomp$2$$ = this.$getUiProps$();
  return new $castApp$core$storage$DeviceToSetUp$$({name:$uiProps$jscomp$2$$.displayName, type:$castApp$core$utils$DEVICE_TYPE_MAPPER_$$.$b$.get($uiProps$jscomp$2$$.type) || "c", ipAddress:this.$l$});
};
var $JSCompiler_StaticMethods_addBackdropUiProps_$$ = function $$JSCompiler_StaticMethods_addBackdropUiProps_$$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$, $uiProps$jscomp$3$$) {
  if (!$castApp$core$utils$isBackdropAppId$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$b$.appId) || $castApp$core$utils$isBackdropAppId$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$b$.appId) && !$JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$g$) {
    return $uiProps$jscomp$3$$;
  }
  $JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$b$.status && ($uiProps$jscomp$3$$.sessionStatus = $castApp$core$utils$getProtocolSessionStatus$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$b$.status));
  var $imageAttributionList_secondaryActionList_title$jscomp$13$$ = $jspb$Message$getRepeatedWrapperField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$g$, $imax$Attribution$$, 3);
  0 < $imageAttributionList_secondaryActionList_title$jscomp$13$$.length && ($uiProps$jscomp$3$$.backdropImageAttributions = $goog$array$map$$($imageAttributionList_secondaryActionList_title$jscomp$13$$, function($imaxAttribution$$) {
    return $jspb$Message$getField$$($imaxAttribution$$, 1);
  }.bind($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$)));
  $imageAttributionList_secondaryActionList_title$jscomp$13$$ = $jspb$Message$getRepeatedWrapperField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$g$, $imax$SecondaryAction$$, 5);
  0 < $imageAttributionList_secondaryActionList_title$jscomp$13$$.length && ($uiProps$jscomp$3$$.backdropSecondaryActions = $goog$array$map$$($imageAttributionList_secondaryActionList_title$jscomp$13$$, function($secondaryAction$jscomp$1_url$jscomp$76$$) {
    var $retVal$jscomp$4$$ = {}, $text$jscomp$18$$ = $jspb$Message$getField$$($secondaryAction$jscomp$1_url$jscomp$76$$, 1);
    $text$jscomp$18$$ && ($retVal$jscomp$4$$.text = $text$jscomp$18$$);
    ($secondaryAction$jscomp$1_url$jscomp$76$$ = $jspb$Message$getField$$($secondaryAction$jscomp$1_url$jscomp$76$$, 2)) && ($retVal$jscomp$4$$.url = $secondaryAction$jscomp$1_url$jscomp$76$$);
    return $retVal$jscomp$4$$;
  }.bind($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$)));
  if ($imageAttributionList_secondaryActionList_title$jscomp$13$$ = $JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$g$.getTitle()) {
    $uiProps$jscomp$3$$.mediaTitle = $imageAttributionList_secondaryActionList_title$jscomp$13$$;
  }
  var $imageUrl$$ = $jspb$Message$getField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$g$, 2);
  $imageUrl$$ && ($uiProps$jscomp$3$$.imgUrl = $imageUrl$$);
  if ($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$ = $jspb$Message$getField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$g$, 4)) {
    $uiProps$jscomp$3$$.backdropPrimaryActionUrl = $JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$;
  }
  $imageAttributionList_secondaryActionList_title$jscomp$13$$ || 1 !== $uiProps$jscomp$3$$.backdropImageAttributions.length || ($uiProps$jscomp$3$$.mediaTitle = $uiProps$jscomp$3$$.backdropImageAttributions[0], $uiProps$jscomp$3$$.backdropImageAttributions = []);
  return $uiProps$jscomp$3$$;
};
$JSCompiler_prototypeAlias$$ = $castApp$core$DeviceManager$ConnectedDevice_$$.prototype;
$JSCompiler_prototypeAlias$$.$getUiProps$ = function $$JSCompiler_prototypeAlias$$$$getUiProps$$() {
  var $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$ = "ip:" + this.$l$, $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ = this.$v$.getState().eurekaInfoState;
  $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$ = new $castApp$protocol$Devices$DeviceProperties$$($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$, $castApp$core$utils$getProtocolDeviceType$$($appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.deviceType), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.name);
  $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.features = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.features;
  $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.displayName = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.name;
  $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.needsSetup = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.ethernetConnected && !$appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.tosAccepted;
  if ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.needsSetup && !$JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.features.supportsSetup) {
    $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$ = null;
  } else {
    if (this.$b$ && this.$b$.status !== chrome.cast.SessionStatus.STOPPED) {
      if ($castApp$core$utils$isBackdropAppId$$(this.$b$.appId)) {
        $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$ = $JSCompiler_StaticMethods_addBackdropUiProps_$$(this, $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$);
      } else {
        if ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.isCasting = !0, this.$b$.receiver.volume && ($appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ = this.$b$.receiver.volume.level, null !== $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ && 
        ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.volumeLevel = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ = this.$b$.receiver.volume.muted, null !== $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ && 
        ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.isMuted = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$)), this.$b$.status && ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.sessionStatus = $castApp$core$utils$getProtocolSessionStatus$$(this.$b$.status)), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ = 
        this.$b$.appId, "85CDB22F" === $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ || "0F5096E8" === $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$) {
          this.$b$.displayName && ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.mediaTitle = this.$b$.displayName), this.$b$.statusText && ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.mediaSource = this.$b$.statusText);
        } else {
          if (this.$b$.displayName && ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.mediaSource = this.$b$.displayName), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ = $JSCompiler_StaticMethods_getActiveMedia_$$(this)) {
            if (0 <= $goog$array$indexOf$$($appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.supportedMediaCommands, chrome.cast.media.MediaCommand.PAUSE) && ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.canPause = !0), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.playerState && 
            ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.playerState = $castApp$core$utils$getProtocolPlayerState$$($appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.playerState)), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.media && 
            ($appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.media.duration && ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.mediaDuration = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.media.duration), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$ = 
            $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.media.metadata || $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.media.$metaData$)) {
              $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.title && ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.mediaTitle = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.title), $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.images && 
              0 < $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.images.length && $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.images[0].url && !$appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.images[0].url.endsWith(".ico") && 
              ($JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$.imgUrl = $appId$jscomp$inline_1093_eurekaInfo$jscomp$13_isMuted$jscomp$inline_862_level$jscomp$inline_861_media$jscomp$inline_863_metadata$jscomp$inline_864$$.images[0].url);
            }
          }
        }
      }
    }
  }
  return $JSCompiler_temp$jscomp$62_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_id$jscomp$70_uiProps$jscomp$5$$;
};
$JSCompiler_prototypeAlias$$.$requestSession_$ = function $$JSCompiler_prototypeAlias$$$$requestSession_$$() {
  if (this.$h$) {
    if (!this.$h$.appId || !this.$h$.sessionId) {
      $JSCompiler_StaticMethods_releaseSession_$$(this), this.$f$();
    } else {
      if (!this.$b$ || this.$b$.sessionId != this.$h$.sessionId) {
        var $promise$jscomp$13$$ = $JSCompiler_StaticMethods_requestSessionAndContext$$(this.$o$.$j$, this.$h$.appId, this.$h$.sessionId);
        $promise$jscomp$13$$.then(this.$handleNewSessionAndContext_$.bind(this));
        $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$i$, $promise$jscomp$13$$);
        this.$h$ = null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$handleNewSessionAndContext_$ = function $$JSCompiler_prototypeAlias$$$$handleNewSessionAndContext_$$($result$jscomp$68$$) {
  $result$jscomp$68$$.session.status !== chrome.cast.SessionStatus.STOPPED && (this.$b$ && $JSCompiler_StaticMethods_releaseSession_$$(this), this.$b$ = $result$jscomp$68$$.session, this.$c$ = $result$jscomp$68$$.context, this.$b$.addMediaListenerWithContext(this.$c$, this.$u$), this.$b$.addUpdateListenerWithContext(this.$c$, this.$j$), $castApp$core$utils$isBackdropAppId$$(this.$b$.appId) && (this.$b$.addMessageListenerWithContext(this.$c$, "urn:x-cast:com.google.cast.sse", this.$s$), this.$b$.sendMessageWithContext(this.$c$, 
  "urn:x-cast:com.google.cast.sse", {type:"GET_STATUS", requestId:Math.floor(4294967295 * Math.random())}, $goog$nullFunction$$, function($err$jscomp$35$$) {
    $castApp$log$error$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, "Failed to send message " + String($err$jscomp$35$$.code) + String($err$jscomp$35$$.description) + String($err$jscomp$35$$.details));
  })), this.$b$.media && this.$b$.media.forEach(function($media$jscomp$2$$) {
    $media$jscomp$2$$.addUpdateListenerWithContext(this.$c$, this.$j$);
  }.bind(this)), this.$m$());
};
$JSCompiler_prototypeAlias$$.$handleBackdropMessage_$ = function $$JSCompiler_prototypeAlias$$$$handleBackdropMessage_$$($message$jscomp$210_namespace$jscomp$15_promise$jscomp$14$$, $rawMsg$jscomp$17$$) {
  "urn:x-cast:com.google.cast.sse" === $message$jscomp$210_namespace$jscomp$15_promise$jscomp$14$$ && ($message$jscomp$210_namespace$jscomp$15_promise$jscomp$14$$ = JSON.parse($rawMsg$jscomp$17$$), $message$jscomp$210_namespace$jscomp$15_promise$jscomp$14$$ = this.$w$.request($message$jscomp$210_namespace$jscomp$15_promise$jscomp$14$$.backendData), $message$jscomp$210_namespace$jscomp$15_promise$jscomp$14$$.then(function($imaxResponse$jscomp$1$$) {
    this.$g$ = $imaxResponse$jscomp$1$$;
    this.$f$();
  }.bind(this)), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$i$, $message$jscomp$210_namespace$jscomp$15_promise$jscomp$14$$));
};
$JSCompiler_prototypeAlias$$.$handleNewMedia_$ = function $$JSCompiler_prototypeAlias$$$$handleNewMedia_$$($media$jscomp$3$$) {
  this.$m$();
  $media$jscomp$3$$.addUpdateListenerWithContext(this.$c$, this.$j$);
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$i$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$i$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_ConnectedDevice__prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_ConnectedDevice__prototype$start_$$() {
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_ConnectedDevice__prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_ConnectedDevice__prototype$reset_$$() {
  $JSCompiler_StaticMethods_releaseSession_$$(this);
  return $goog$Promise$resolve$$();
};
var $JSCompiler_StaticMethods_releaseSession_$$ = function $$JSCompiler_StaticMethods_releaseSession_$$$($JSCompiler_StaticMethods_releaseSession_$self$$) {
  $JSCompiler_StaticMethods_releaseSession_$self$$.$g$ = null;
  $JSCompiler_StaticMethods_releaseSession_$self$$.$b$ && ($JSCompiler_StaticMethods_releaseSession_$self$$.$b$.media && $JSCompiler_StaticMethods_releaseSession_$self$$.$b$.media.forEach(function($media$jscomp$4$$) {
    $media$jscomp$4$$.removeUpdateListenerWithContext(this.$c$, this.$j$);
  }.bind($JSCompiler_StaticMethods_releaseSession_$self$$)), $JSCompiler_StaticMethods_releaseSession_$self$$.$b$.removeUpdateListenerWithContext($JSCompiler_StaticMethods_releaseSession_$self$$.$c$, $JSCompiler_StaticMethods_releaseSession_$self$$.$j$), $JSCompiler_StaticMethods_releaseSession_$self$$.$b$.removeMediaListenerWithContext($JSCompiler_StaticMethods_releaseSession_$self$$.$c$, $JSCompiler_StaticMethods_releaseSession_$self$$.$u$), $castApp$core$utils$isBackdropAppId$$($JSCompiler_StaticMethods_releaseSession_$self$$.$b$.appId) && 
  $JSCompiler_StaticMethods_releaseSession_$self$$.$b$.removeMessageListenerWithContext($JSCompiler_StaticMethods_releaseSession_$self$$.$c$, "urn:x-cast:com.google.cast.sse", $JSCompiler_StaticMethods_releaseSession_$self$$.$s$), $JSCompiler_StaticMethods_releaseSession_$self$$.$b$ = null, $JSCompiler_StaticMethods_releaseSession_$self$$.$c$ = null);
}, $JSCompiler_StaticMethods_getActiveMedia_$$ = function $$JSCompiler_StaticMethods_getActiveMedia_$$$($JSCompiler_StaticMethods_getActiveMedia_$self$$) {
  if (!$JSCompiler_StaticMethods_getActiveMedia_$self$$.$b$ || !$JSCompiler_StaticMethods_getActiveMedia_$self$$.$b$.media) {
    return null;
  }
  var $retVal$jscomp$5$$ = null;
  $JSCompiler_StaticMethods_getActiveMedia_$self$$.$b$.media.forEach(function($currMedia$$) {
    $currMedia$$ && ($retVal$jscomp$5$$ ? !$retVal$jscomp$5$$.media && $currMedia$$.media ? $retVal$jscomp$5$$ = $currMedia$$ : $retVal$jscomp$5$$.playerState == chrome.cast.media.PlayerState.IDLE && $currMedia$$.playerState != chrome.cast.media.PlayerState.IDLE && ($retVal$jscomp$5$$ = $currMedia$$) : $retVal$jscomp$5$$ = $currMedia$$);
  }.bind($JSCompiler_StaticMethods_getActiveMedia_$self$$));
  return $retVal$jscomp$5$$;
};
$castApp$core$DeviceManager$ConnectedDevice_$$.prototype.$m$ = function $$castApp$core$DeviceManager$ConnectedDevice_$$$$$m$$() {
  this.$b$.status === chrome.cast.SessionStatus.STOPPED && $JSCompiler_StaticMethods_releaseSession_$$(this);
  this.$f$();
};
var $JSCompiler_StaticMethods_handlePlayOrPause_$$ = function $$JSCompiler_StaticMethods_handlePlayOrPause_$$$($JSCompiler_StaticMethods_handlePlayOrPause_$self$$, $action$jscomp$2$$) {
  if ($JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$b$ && $JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$c$) {
    var $media$jscomp$5$$ = $JSCompiler_StaticMethods_getActiveMedia_$$($JSCompiler_StaticMethods_handlePlayOrPause_$self$$);
    $media$jscomp$5$$ && 0 <= $goog$array$indexOf$$($media$jscomp$5$$.supportedMediaCommands, chrome.cast.media.MediaCommand.PAUSE) && (3 == $action$jscomp$2$$ && $media$jscomp$5$$.playerState == chrome.cast.media.PlayerState.PAUSED ? $media$jscomp$5$$.playWithContext($JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$c$, null, $JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$f$, function($err$jscomp$36$$) {
      $castApp$log$errorWithCause$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, $err$jscomp$36$$, "Error when playing media.");
    }) : 4 == $action$jscomp$2$$ && $media$jscomp$5$$.playerState == chrome.cast.media.PlayerState.PLAYING ? $media$jscomp$5$$.pauseWithContext($JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$c$, null, $JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$f$, function($err$jscomp$37$$) {
      $castApp$log$errorWithCause$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, $err$jscomp$37$$, "Error when pausing media: ");
    }) : $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Unknown action type: " + $action$jscomp$2$$));
  }
}, $JSCompiler_StaticMethods_handleAction$$ = function $$JSCompiler_StaticMethods_handleAction$$$($JSCompiler_StaticMethods_handleAction$self$$, $device$jscomp$6$$, $action$jscomp$3$$) {
  if ($JSCompiler_StaticMethods_handleAction$self$$.$b$ && $JSCompiler_StaticMethods_handleAction$self$$.$c$) {
    switch($action$jscomp$3$$) {
      case 4:
      case 3:
        $JSCompiler_StaticMethods_handlePlayOrPause_$$($JSCompiler_StaticMethods_handleAction$self$$, $action$jscomp$3$$);
        break;
      case 5:
        $JSCompiler_StaticMethods_handleAction$self$$.$b$.stopWithContext($JSCompiler_StaticMethods_handleAction$self$$.$c$, $JSCompiler_StaticMethods_handleAction$self$$.$f$, function($err$jscomp$38$$) {
          $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Error when calling stop session: " + $err$jscomp$38$$);
        });
        break;
      case 6:
        $JSCompiler_StaticMethods_handleAction$self$$.$b$.setReceiverMutedWithContext($JSCompiler_StaticMethods_handleAction$self$$.$c$, !0, $JSCompiler_StaticMethods_handleAction$self$$.$f$, function($err$jscomp$39$$) {
          $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Error when calling mute session: " + $err$jscomp$39$$);
        });
        break;
      case 7:
        $JSCompiler_StaticMethods_handleAction$self$$.$b$.setReceiverMutedWithContext($JSCompiler_StaticMethods_handleAction$self$$.$c$, !1, $JSCompiler_StaticMethods_handleAction$self$$.$f$, function($err$jscomp$40$$) {
          $castApp$log$errorWithCause$$($castApp$core$DeviceManager$logger_$$, $err$jscomp$40$$, "Error when calling unmute session: ");
        });
        break;
      case 8:
        if ($device$jscomp$6$$.volumeLevel === $JSCompiler_StaticMethods_handleAction$self$$.$b$.receiver.volume.level) {
          break;
        }
        $JSCompiler_StaticMethods_handleAction$self$$.$b$.setReceiverVolumeLevelWithContext($JSCompiler_StaticMethods_handleAction$self$$.$c$, $device$jscomp$6$$.volumeLevel, $JSCompiler_StaticMethods_handleAction$self$$.$f$, function($err$jscomp$41$$) {
          $castApp$log$errorWithCause$$($castApp$core$DeviceManager$logger_$$, $err$jscomp$41$$, "Error when calling set volume: ");
        });
        break;
      default:
        $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Unknown action type: " + $action$jscomp$3$$);
    }
  }
}, $castApp$core$DeviceManager$compareDeviceProperties$$ = function $$castApp$core$DeviceManager$compareDeviceProperties$$$($lhs$$, $rhs$$) {
  if ($lhs$$.id === $rhs$$.id) {
    return 0;
  }
  if ($lhs$$.needsSetup !== $rhs$$.needsSetup) {
    return $lhs$$.needsSetup ? -1 : 1;
  }
  var $nameCompareResult$$ = $goog$string$internal$caseInsensitiveCompare$$($lhs$$.displayName, $rhs$$.displayName);
  return 0 !== $nameCompareResult$$ ? $nameCompareResult$$ : $lhs$$.id < $rhs$$.id ? -1 : $lhs$$.id > $rhs$$.id ? 1 : 0;
}, $castApp$core$DeviceManager$logger_$$ = $castApp$log$getLogger$$("core.DeviceManager");
$JSCompiler_prototypeAlias$$ = $castApp$core$DeviceManager$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$g$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$g$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$start_$$() {
  this.$sendUpdatedDeviceListToUi_$();
  var $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$ = this.$c$.$b$.$g$.$b$;
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$.listen("added", this.$j$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$.listen("removed", this.$l$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$ = this.$c$.$c$.$b$.$b$;
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$.addListener("Devices.UserAction", this.$i$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$.addListener("DeviceDiscovery.ScanAgain", this.$m$);
  this.$c$.$b$.listen("devices", this.$h$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$ = this.$c$.$b$;
  $JSCompiler_StaticMethods_startDeviceMonitor$$($JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$.$h$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_866_uiMessenger_wiFiMonitorTarget$$.$rescan_$();
  return this.$c$.$b$.start();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$reset_$$() {
  this.$c$.$c$.$b$.$b$.removeListener("Devices.UserAction", this.$i$);
  var $wiFiMonitorTarget$jscomp$1$$ = this.$c$.$b$.$g$.$b$;
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($wiFiMonitorTarget$jscomp$1$$, "added", this.$j$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($wiFiMonitorTarget$jscomp$1$$, "removed", this.$l$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$(this.$c$.$b$, "devices", this.$h$);
  var $promises$jscomp$4$$ = [this.$c$.$b$.stop()];
  this.$b$.forEach(function($device$jscomp$7$$) {
    $promises$jscomp$4$$.push($device$jscomp$7$$.stop());
  }.bind(this));
  this.$b$ = new $goog$structs$Map$$;
  return $goog$Promise$all$$($promises$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$handleWiFiAddedEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleWiFiAddedEvent_$$($device$jscomp$8_event$jscomp$15$$) {
  var $deviceId$jscomp$7$$ = "wifi:" + $device$jscomp$8_event$jscomp$15$$.properties.GUID;
  $device$jscomp$8_event$jscomp$15$$ = this.$b$.get($deviceId$jscomp$7$$) || new $castApp$core$DeviceManager$HotSpotDevice_$$($device$jscomp$8_event$jscomp$15$$.properties);
  this.$b$.set($deviceId$jscomp$7$$, $device$jscomp$8_event$jscomp$15$$);
  $device$jscomp$8_event$jscomp$15$$.start();
  this.$sendUpdatedDeviceListToUi_$();
};
$JSCompiler_prototypeAlias$$.$handleWiFiRemovedEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleWiFiRemovedEvent_$$($deviceId$jscomp$8_event$jscomp$16$$) {
  $deviceId$jscomp$8_event$jscomp$16$$ = "wifi:" + $deviceId$jscomp$8_event$jscomp$16$$.properties.GUID;
  var $device$jscomp$9$$ = this.$b$.get($deviceId$jscomp$8_event$jscomp$16$$);
  $device$jscomp$9$$ && ($device$jscomp$9$$.stop(), this.$b$.remove($deviceId$jscomp$8_event$jscomp$16$$), this.$sendUpdatedDeviceListToUi_$());
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$handleDeviceData_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$handleDeviceData_$$($event$jscomp$17$$) {
  var $newDevicesMap$$ = new $goog$structs$Map$$, $shouldSendDeviceListToUI$$ = !1;
  $event$jscomp$17$$.devices.forEach(function($deviceData$jscomp$4$$) {
    if ($deviceData$jscomp$4$$.ipAddress) {
      var $id$jscomp$71$$ = "ip:" + $deviceData$jscomp$4$$.ipAddress, $device$jscomp$10$$ = this.$b$.get($id$jscomp$71$$);
      $device$jscomp$10$$ || ($device$jscomp$10$$ = new $castApp$core$DeviceManager$ConnectedDevice_$$(this.$c$, $deviceData$jscomp$4$$.ipAddress, $deviceData$jscomp$4$$.$setupApiClient$, this.$sendUpdatedDeviceListToUi_$.bind(this)), $device$jscomp$10$$.start(), $shouldSendDeviceListToUI$$ = !0);
      var $JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_868$$ = $device$jscomp$10$$;
      $deviceData$jscomp$4$$.ipAddress != $JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_868$$.$l$ ? $castApp$log$error$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, "IPs don't match in handleDeviceData deviceData.ipAddress: ", $castApp$log$anonymizeString$$($deviceData$jscomp$4$$.ipAddress), " this.ipAddress_: ", $castApp$log$anonymizeString$$($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_868$$.$l$)) : ($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_868$$.$h$ = 
      $deviceData$jscomp$4$$, $JSCompiler_StaticMethods_waitUntilStarted$$($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_868$$.$i$).then($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_868$$.$requestSession_$.bind($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_868$$)));
      $newDevicesMap$$.set($id$jscomp$71$$, $device$jscomp$10$$);
      this.$b$.remove($id$jscomp$71$$);
    } else {
      $castApp$log$warning$$($castApp$core$DeviceManager$logger_$$, "Device data did not have an ipAddress.");
    }
  }.bind(this));
  this.$b$.$getKeys$().forEach(function($deviceKey$$) {
    var $device$jscomp$11$$ = this.$b$.get($deviceKey$$);
    $device$jscomp$11$$ instanceof $castApp$core$DeviceManager$HotSpotDevice_$$ && ($newDevicesMap$$.set($deviceKey$$, $device$jscomp$11$$), this.$b$.remove($deviceKey$$));
  }.bind(this));
  0 < this.$b$.$b$ && ($shouldSendDeviceListToUI$$ = !0);
  this.$b$.forEach(function($device$jscomp$12$$) {
    $device$jscomp$12$$.stop();
  }.bind(this));
  this.$b$ = $newDevicesMap$$;
  $shouldSendDeviceListToUI$$ && this.$sendUpdatedDeviceListToUi_$();
};
$JSCompiler_prototypeAlias$$.$sendUpdatedDeviceListToUi_$ = function $$JSCompiler_prototypeAlias$$$$sendUpdatedDeviceListToUi_$$($opt_setupBannerDeviceName_tmpTimer$$) {
  var $uiPropsArray$$ = [];
  this.$b$.forEach(function($device$jscomp$13_uiProps$jscomp$6$$) {
    if ($device$jscomp$13_uiProps$jscomp$6$$ = $device$jscomp$13_uiProps$jscomp$6$$.$getUiProps$()) {
      for (var $found$jscomp$inline_1142_index$jscomp$inline_874$$, $compareFn$jscomp$inline_1139$$ = $castApp$core$DeviceManager$compareDeviceProperties$$ || $goog$array$defaultCompare$$, $left$jscomp$inline_1140$$ = 0, $right$jscomp$inline_1141$$ = $uiPropsArray$$.length; $left$jscomp$inline_1140$$ < $right$jscomp$inline_1141$$;) {
        var $middle$jscomp$inline_1143$$ = $left$jscomp$inline_1140$$ + $right$jscomp$inline_1141$$ >> 1;
        var $compareResult$jscomp$inline_1144$$ = $compareFn$jscomp$inline_1139$$($device$jscomp$13_uiProps$jscomp$6$$, $uiPropsArray$$[$middle$jscomp$inline_1143$$]);
        0 < $compareResult$jscomp$inline_1144$$ ? $left$jscomp$inline_1140$$ = $middle$jscomp$inline_1143$$ + 1 : ($right$jscomp$inline_1141$$ = $middle$jscomp$inline_1143$$, $found$jscomp$inline_1142_index$jscomp$inline_874$$ = !$compareResult$jscomp$inline_1144$$);
      }
      $found$jscomp$inline_1142_index$jscomp$inline_874$$ = $found$jscomp$inline_1142_index$jscomp$inline_874$$ ? $left$jscomp$inline_1140$$ : ~$left$jscomp$inline_1140$$;
      0 > $found$jscomp$inline_1142_index$jscomp$inline_874$$ && $goog$array$splice$$($uiPropsArray$$, -($found$jscomp$inline_1142_index$jscomp$inline_874$$ + 1), 0, $device$jscomp$13_uiProps$jscomp$6$$);
    }
  });
  var $uiMessenger$jscomp$1$$ = this.$c$.$c$.$b$.$b$;
  $uiMessenger$jscomp$1$$.sendMessage(new $castApp$protocol$Devices$Show$$($uiPropsArray$$, $opt_setupBannerDeviceName_tmpTimer$$));
  0 === $uiPropsArray$$.length ? null === this.$f$ && (this.$f$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, $goog$Timer$promise$$(3E4)).then(function() {
    this.$f$ = null;
    var $uiDeviceCount$$ = 0;
    this.$b$.forEach(function($device$jscomp$14$$) {
      $uiDeviceCount$$ += $device$jscomp$14$$.$getUiProps$() ? 1 : 0;
    });
    0 === $uiDeviceCount$$ && $uiMessenger$jscomp$1$$.sendMessage(new $castApp$protocol$Message$$("DeviceDiscovery.NotFound"));
  }.bind(this))) : null !== this.$f$ && ($opt_setupBannerDeviceName_tmpTimer$$ = this.$f$, this.$f$ = null, $opt_setupBannerDeviceName_tmpTimer$$.cancel());
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$handleUserAction_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$handleUserAction_$$($rawMessage$jscomp$1_session$jscomp$inline_878$$) {
  var $device$jscomp$15$$ = this.$b$.get($rawMessage$jscomp$1_session$jscomp$inline_878$$.device.id);
  if ($device$jscomp$15$$) {
    switch($rawMessage$jscomp$1_session$jscomp$inline_878$$.action) {
      case 1:
        $rawMessage$jscomp$1_session$jscomp$inline_878$$ = new $castApp$core$storage$SetupSession$$($goog$string$getRandomString$$());
        $rawMessage$jscomp$1_session$jscomp$inline_878$$.states = new $castApp$core$storage$SetupStateCollection$$(0, [new $castApp$core$storage$SetupState$$(1)]);
        $rawMessage$jscomp$1_session$jscomp$inline_878$$.commonState = new $castApp$core$storage$CommonSetupState$$;
        $rawMessage$jscomp$1_session$jscomp$inline_878$$.commonState.device = $device$jscomp$15$$.$getDeviceToSetUpProperties$();
        $rawMessage$jscomp$1_session$jscomp$inline_878$$.commonState.pinned = !0;
        $castApp$core$storage$writeSetupSession$$(this.$c$.$g$, $rawMessage$jscomp$1_session$jscomp$inline_878$$);
        this.$c$.$m$($rawMessage$jscomp$1_session$jscomp$inline_878$$.id);
        break;
      case 2:
        this.$c$.$l$($device$jscomp$15$$.$l$);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        $JSCompiler_StaticMethods_handleAction$$($device$jscomp$15$$, $rawMessage$jscomp$1_session$jscomp$inline_878$$.device, $rawMessage$jscomp$1_session$jscomp$inline_878$$.action);
        break;
      default:
        $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "DeviceManager unknown action " + $rawMessage$jscomp$1_session$jscomp$inline_878$$.action);
    }
  } else {
    $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Error: user action received unknown device ", $castApp$log$anonymizeString$$($rawMessage$jscomp$1_session$jscomp$inline_878$$.device.id));
  }
};
$JSCompiler_prototypeAlias$$.$handleRescanRequest_$ = function $$JSCompiler_prototypeAlias$$$$handleRescanRequest_$$() {
  this.$sendUpdatedDeviceListToUi_$();
  var $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_880$$ = this.$c$.$b$;
  $JSCompiler_StaticMethods_startDeviceMonitor$$($JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_880$$.$h$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_880$$.$rescan_$();
};
var $castApp$core$DeviceSettings$$ = function $$castApp$core$DeviceSettings$$$($env$jscomp$2$$, $deviceIpAddress$jscomp$2$$) {
  this.$f$ = $env$jscomp$2$$;
  this.$j$ = $deviceIpAddress$jscomp$2$$;
  this.$c$ = null;
  this.$l$ = $castApp$core$SetupApiClient$createInMemoryStateStorage$$($deviceIpAddress$jscomp$2$$);
  this.$h$ = this.$b$ = null;
  this.$g$ = new $castApp$StartStoppable$$(this.$castApp_core_DeviceSettings_prototype$start_$.bind(this), this.$castApp_core_DeviceSettings_prototype$reset_$.bind(this));
  this.$i$ = new $goog$structs$Map$$("DeviceSettings.Apply", this.$apply_$.bind(this), "DeviceSettings.Reboot", this.$u$.bind(this), "DeviceSettings.FactoryReset", this.$o$.bind(this), "DeviceSettings.ForgetWiFi", this.$s$.bind(this), "DeviceSettings.Exit", this.$m$.bind(this));
}, $castApp$core$DeviceSettings$logger_$$ = $castApp$log$getLogger$$("core.DeviceSettings");
$JSCompiler_prototypeAlias$$ = $castApp$core$DeviceSettings$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$g$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$g$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceSettings_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceSettings_prototype$start_$$() {
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, $castApp$core$SetupApiClient$create$$(this.$f$.$h$, this.$l$)).then(function($setupApiClient$jscomp$3$$) {
    this.$c$ = $setupApiClient$jscomp$3$$;
    return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, $JSCompiler_StaticMethods_getEurekaInfo$$($setupApiClient$jscomp$3$$, {options:"build_info.cast_build_revision device_info.mac_address detail net.ip_address settings.country_code settings.locale settings.timezone settings.time_format opt_in.stats wifi.ssid wifi.wpa_id".split(" ")})), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, $JSCompiler_StaticMethods_getSupportedLocales$$($setupApiClient$jscomp$3$$)), 
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, $JSCompiler_StaticMethods_getSupportedTimeZones$$($setupApiClient$jscomp$3$$))]);
  }.bind(this)).then(function($results$jscomp$2$$) {
    this.$initSettings_$.apply(this, $results$jscomp$2$$);
    var $uiMessenger$jscomp$2$$ = this.$f$.$c$.$b$.$b$;
    this.$i$.forEach(function($listener$jscomp$138$$, $msgType$jscomp$1$$) {
      $uiMessenger$jscomp$2$$.addListener($msgType$jscomp$1$$, $listener$jscomp$138$$);
    });
    $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$(this, 1);
  }.bind(this));
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceSettings_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceSettings_prototype$reset_$$() {
  var $uiMessenger$jscomp$3$$ = this.$f$.$c$.$b$.$b$;
  this.$i$.forEach(function($listener$jscomp$139$$, $msgType$jscomp$2$$) {
    $uiMessenger$jscomp$3$$.removeListener($msgType$jscomp$2$$, $listener$jscomp$139$$);
  });
  this.$c$ = null;
  this.$l$ = $castApp$core$SetupApiClient$createInMemoryStateStorage$$(this.$j$);
  this.$b$ = null;
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$initSettings_$ = function $$JSCompiler_prototypeAlias$$$$initSettings_$$($eurekaInfo$jscomp$14_v7Net$$, $locales$jscomp$6_supportedLocales$$, $supportedTimeZones_timeZones$$) {
  var $eurekaInfoState$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$(this.$c$), $v7WiFi_version$jscomp$17$$ = $eurekaInfoState$$.setupApiVersion, $deviceType$jscomp$8$$ = $castApp$core$utils$getProtocolDeviceType$$($eurekaInfoState$$.deviceType);
  $supportedTimeZones_timeZones$$ = $supportedTimeZones_timeZones$$.map(function($timeZone$$) {
    return new $castApp$protocol$DeviceSettings$TimeZone$$($timeZone$$.timezone, $timeZone$$.display_string, $timeZone$$.offset);
  });
  $locales$jscomp$6_supportedLocales$$ = $locales$jscomp$6_supportedLocales$$.map(function($locale$jscomp$4$$) {
    return new $castApp$protocol$DeviceSettings$Locale$$($locale$jscomp$4$$.locale, $locale$jscomp$4$$.display_string);
  });
  var $settings$jscomp$3$$ = this.$b$ = {};
  if (7 <= $v7WiFi_version$jscomp$17$$) {
    $v7WiFi_version$jscomp$17$$ = $eurekaInfo$jscomp$14_v7Net$$.wifi;
    var $timeFormat$jscomp$2_v7Settings$$ = $eurekaInfo$jscomp$14_v7Net$$.settings, $v7OptIn$$ = $eurekaInfo$jscomp$14_v7Net$$.opt_in, $v7BuildInfo$$ = $eurekaInfo$jscomp$14_v7Net$$.build_info, $v7DeviceInfo$$ = $eurekaInfo$jscomp$14_v7Net$$.device_info;
    $eurekaInfo$jscomp$14_v7Net$$ = $eurekaInfo$jscomp$14_v7Net$$.net;
    $settings$jscomp$3$$.deviceType = $deviceType$jscomp$8$$;
    $settings$jscomp$3$$.name = $eurekaInfoState$$.name;
    $settings$jscomp$3$$.ssid = !$eurekaInfoState$$.ethernetConnected && $v7WiFi_version$jscomp$17$$.ssid || null;
    $settings$jscomp$3$$.timeZoneId = $timeFormat$jscomp$2_v7Settings$$.timezone || null;
    $settings$jscomp$3$$.supportedTimeZones = $supportedTimeZones_timeZones$$;
    $settings$jscomp$3$$.timeFormat = 1 === $timeFormat$jscomp$2_v7Settings$$.time_format ? 1 : 2;
    $settings$jscomp$3$$.localeId = $timeFormat$jscomp$2_v7Settings$$.locale || "";
    $settings$jscomp$3$$.supportedLocales = $locales$jscomp$6_supportedLocales$$;
    $settings$jscomp$3$$.statsOptIn = !!$v7OptIn$$.stats;
    $settings$jscomp$3$$.firmwareVersion = $v7BuildInfo$$.cast_build_revision || "";
    $settings$jscomp$3$$.countryCode = $timeFormat$jscomp$2_v7Settings$$.country_code || null;
    $settings$jscomp$3$$.macAddress = $v7DeviceInfo$$.mac_address || "";
    $settings$jscomp$3$$.ipAddress = $eurekaInfo$jscomp$14_v7Net$$.ip_address;
    this.$h$ = void 0 !== $v7WiFi_version$jscomp$17$$.wpa_id ? $v7WiFi_version$jscomp$17$$.wpa_id : null;
  } else {
    $timeFormat$jscomp$2_v7Settings$$ = 1 === (3 < $v7WiFi_version$jscomp$17$$ ? $eurekaInfo$jscomp$14_v7Net$$.time_format : 2) ? 1 : 2, $settings$jscomp$3$$.deviceType = $deviceType$jscomp$8$$, $settings$jscomp$3$$.name = $eurekaInfoState$$.name, $settings$jscomp$3$$.ssid = !$eurekaInfoState$$.ethernetConnected && $eurekaInfo$jscomp$14_v7Net$$.ssid || null, $settings$jscomp$3$$.timeZoneId = $eurekaInfo$jscomp$14_v7Net$$.timezone || null, $settings$jscomp$3$$.supportedTimeZones = $supportedTimeZones_timeZones$$, 
    $settings$jscomp$3$$.timeFormat = $timeFormat$jscomp$2_v7Settings$$, $settings$jscomp$3$$.localeId = $eurekaInfo$jscomp$14_v7Net$$.locale, $settings$jscomp$3$$.supportedLocales = $locales$jscomp$6_supportedLocales$$, $settings$jscomp$3$$.statsOptIn = !!(3 < $v7WiFi_version$jscomp$17$$ && $eurekaInfo$jscomp$14_v7Net$$.opt_in && $eurekaInfo$jscomp$14_v7Net$$.opt_in.stats), $settings$jscomp$3$$.firmwareVersion = $eurekaInfo$jscomp$14_v7Net$$.build_version, $settings$jscomp$3$$.countryCode = 3 < 
    $v7WiFi_version$jscomp$17$$ && $eurekaInfo$jscomp$14_v7Net$$.location && $eurekaInfo$jscomp$14_v7Net$$.location.country_code || null, $settings$jscomp$3$$.macAddress = $eurekaInfo$jscomp$14_v7Net$$.mac_address, $settings$jscomp$3$$.ipAddress = $eurekaInfo$jscomp$14_v7Net$$.ip_address, this.$h$ = void 0 !== $eurekaInfo$jscomp$14_v7Net$$.wpa_id ? $eurekaInfo$jscomp$14_v7Net$$.wpa_id : null;
  }
};
$JSCompiler_prototypeAlias$$.$apply_$ = function $$JSCompiler_prototypeAlias$$$$apply_$$($rawMsg$jscomp$18$$) {
  var $self$jscomp$25$$ = this, $features$jscomp$5$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$(this.$c$).features.deviceSettings;
  $rawMsg$jscomp$18$$.timeFormat === $self$jscomp$25$$.$b$.timeFormat || $features$jscomp$5$$.supportsTimeFormatChange || ($rawMsg$jscomp$18$$.timeFormat = $self$jscomp$25$$.$b$.timeFormat);
  $rawMsg$jscomp$18$$.statsOptIn === $self$jscomp$25$$.$b$.statsOptIn || $features$jscomp$5$$.supportsDataCollectionToggle || ($rawMsg$jscomp$18$$.statsOptIn = $self$jscomp$25$$.$b$.statsOptIn);
  if ($rawMsg$jscomp$18$$.name === $self$jscomp$25$$.$b$.name && $rawMsg$jscomp$18$$.timeZoneId === $self$jscomp$25$$.$b$.timeZoneId && $rawMsg$jscomp$18$$.timeFormat === $self$jscomp$25$$.$b$.timeFormat && $rawMsg$jscomp$18$$.localeId === $self$jscomp$25$$.$b$.localeId && $rawMsg$jscomp$18$$.statsOptIn === $self$jscomp$25$$.$b$.statsOptIn) {
    $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$25$$, 1);
  } else {
    var $oldSettings$$ = $goog$object$clone$$($self$jscomp$25$$.$b$);
    $self$jscomp$25$$.$b$.name = $rawMsg$jscomp$18$$.name;
    $self$jscomp$25$$.$b$.timeZoneId = $rawMsg$jscomp$18$$.timeZoneId;
    $self$jscomp$25$$.$b$.timeFormat = $rawMsg$jscomp$18$$.timeFormat;
    $self$jscomp$25$$.$b$.localeId = $rawMsg$jscomp$18$$.localeId;
    $self$jscomp$25$$.$b$.statsOptIn = $rawMsg$jscomp$18$$.statsOptIn;
    $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$25$$, 2);
    $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$25$$.$g$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($self$jscomp$25$$.$c$, $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$$($self$jscomp$25$$, $rawMsg$jscomp$18$$))).then(function() {
      $self$jscomp$25$$.$b$.localeId !== $oldSettings$$.localeId ? $self$jscomp$25$$.$f$.reload() : $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$25$$, 1);
    }), function($err$jscomp$42$$) {
      $castApp$log$errorWithCause$$($castApp$core$DeviceSettings$logger_$$, $err$jscomp$42$$, "Applying device settings failed.");
      $self$jscomp$25$$.$b$ = $oldSettings$$;
      $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$25$$, 3);
    });
  }
};
var $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$$ = function $$JSCompiler_StaticMethods_createSetEurekaInfoMsg_$$$($JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$, $msg$jscomp$739$$) {
  var $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$ = $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$.$c$.$b$;
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$ = 1 === $msg$jscomp$739$$.timeFormat ? 1 : 2;
  if (7 <= $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$) {
    return $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV7$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.name = $msg$jscomp$739$$.name, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.settings = new $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$, $msg$jscomp$739$$.timeZoneId && ($v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.settings.timezone = $msg$jscomp$739$$.timeZoneId), $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.settings.time_format = $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$, 
    $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.settings.locale = $msg$jscomp$739$$.localeId, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.opt_in.stats = $msg$jscomp$739$$.statsOptIn, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$;
  }
  if (4 <= $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$ && 6 >= $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$) {
    return $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV4$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.name = $msg$jscomp$739$$.name, $msg$jscomp$739$$.timeZoneId && ($v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.timezone = $msg$jscomp$739$$.timeZoneId), $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.time_format = $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.locale = $msg$jscomp$739$$.localeId, 
    $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$.opt_in.stats = $msg$jscomp$739$$.statsOptIn, $v4$jscomp$3_v7$jscomp$3_version$jscomp$18$$;
  }
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV3$$;
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$.name = $msg$jscomp$739$$.name;
  $msg$jscomp$739$$.timeZoneId && ($JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$.timezone = $msg$jscomp$739$$.timeZoneId);
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$.locale = $msg$jscomp$739$$.localeId;
  return $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$2$$;
}, $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$ = function $$JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$$($JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$, $uiState$$) {
  $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$.$f$.$c$.$b$.$b$.sendMessage(new $castApp$protocol$DeviceSettings$Show$$($uiState$$, $JSCompiler_StaticMethods_getEurekaInfoState$$($JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$.$c$).features, $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$.$b$));
};
$castApp$core$DeviceSettings$$.prototype.$u$ = function $$castApp$core$DeviceSettings$$$$$u$$() {
  if ($JSCompiler_StaticMethods_getEurekaInfoState$$(this.$c$).features.deviceSettings.supportsReboot) {
    $JSCompiler_StaticMethods_postReboot$$(this.$c$, "now");
    var $ipAddress$jscomp$inline_883$$ = this.$c$.$f$.read().deviceIpAddress;
    $castApp$core$ShortTermDeviceState$addNewStateRecord_$$(this.$f$.$g$, new $castApp$core$storage$ShortTermDeviceState$$(1, $goog$now$$(), $ipAddress$jscomp$inline_883$$));
    this.$f$.$f$();
  }
};
$castApp$core$DeviceSettings$$.prototype.$o$ = function $$castApp$core$DeviceSettings$$$$$o$$() {
  if ($JSCompiler_StaticMethods_getEurekaInfoState$$(this.$c$).features.deviceSettings.supportsFdr) {
    $JSCompiler_StaticMethods_postReboot$$(this.$c$, "fdr");
    var $ipAddress$jscomp$inline_886$$ = this.$c$.$f$.read().deviceIpAddress;
    $castApp$core$ShortTermDeviceState$addNewStateRecord_$$(this.$f$.$g$, new $castApp$core$storage$ShortTermDeviceState$$(3, $goog$now$$(), $ipAddress$jscomp$inline_886$$));
    this.$f$.$f$();
  }
};
$castApp$core$DeviceSettings$$.prototype.$s$ = function $$castApp$core$DeviceSettings$$$$$s$$() {
  if ($JSCompiler_StaticMethods_getEurekaInfoState$$(this.$c$).features.deviceSettings.supportsForgetWiFi) {
    var $JSCompiler_StaticMethods_postForgetWiFi$self$jscomp$inline_888$$ = this.$c$, $wpa_id$jscomp$inline_889$$ = this.$h$;
    $JSCompiler_StaticMethods_postForgetWiFi$self$jscomp$inline_888$$.$c$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postForgetWiFi$self$jscomp$inline_888$$, "/setup/forget_wifi"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify(new $castApp$core$setupApi$ForgetWiFiMsg$$($wpa_id$jscomp$inline_889$$)), timeout:1E4, $maxRetries$:2});
    this.$f$.$f$();
  }
};
$castApp$core$DeviceSettings$$.prototype.$m$ = function $$castApp$core$DeviceSettings$$$$$m$$() {
  this.$f$.$f$();
};
var $castApp$core$UiMessages$MSG_LOAD_FAILED$$ = chrome.i18n.getMessage("3254351313955764967"), $castApp$core$UiMessages$MSG_UPDATE_REQUIRED$$ = chrome.i18n.getMessage("3485206350043289145");
var $castApp$core$Ui$$ = function $$castApp$core$Ui$$$($webview$jscomp$4$$) {
  this.$c$ = window;
  this.$b$ = $webview$jscomp$4$$;
  this.$g$ = new $goog$events$EventTarget$$;
  this.$f$ = new $castApp$StartStoppable$$(this.$i$.bind(this), this.$h$.bind(this));
}, $castApp$core$Ui$logger_$$ = $castApp$log$getLogger$$("core.Ui");
$castApp$core$Ui$$.prototype.start = function $$castApp$core$Ui$$$$start$() {
  return this.$f$.start();
};
$castApp$core$Ui$$.prototype.$i$ = function $$castApp$core$Ui$$$$$i$$() {
  var $startResolver$$ = $goog$Promise$withResolver$$();
  $castApp$core$setBodyClass_$$(this.$c$, "start");
  $JSCompiler_StaticMethods_injectLocalizedMessages_$$(this);
  var $timeLimitTask$$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $goog$Timer$promise$$(18E4)).then(function() {
    $castApp$core$setBodyClass_$$(this.$c$, "load-failed");
    $JSCompiler_StaticMethods_emitEvent_$$(this, "loadTimedOut");
    $startResolver$$.$f$(new $castApp$TimeoutError$$);
  }.bind(this));
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, this.$b$.start()).then(function() {
    var $messenger$$ = this.$b$.$b$;
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $JSCompiler_StaticMethods_waitForMessage$$($messenger$$, "OfflineUiReady")).then(function() {
      $JSCompiler_StaticMethods_emitEvent_$$(this, "offlineUiReady");
    }.bind(this));
    $JSCompiler_StaticMethods_emitEvent_$$(this, "waitingForHandshake");
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $messenger$$.sendRequest(new $castApp$protocol$Handshake$Request$$));
  }.bind(this)).then(function($rawResponse$$) {
    switch($rawResponse$$.type) {
      case "Handshake.Response":
        $castApp$core$setBodyClass_$$(this.$c$, "hosting-embedded-ui");
        $JSCompiler_StaticMethods_emitEvent_$$(this, "embeddedUiReady");
        $timeLimitTask$$.cancel();
        $startResolver$$.$c$();
        break;
      case "Handshake.UiVersionNotSupported":
        $castApp$core$setBodyClass_$$(this.$c$, "update-required");
        $JSCompiler_StaticMethods_emitEvent_$$(this, "updateRequired");
        $startResolver$$.$f$($rawResponse$$);
        break;
      default:
        $goog$asserts$fail$$("Bad handshake response type."), $castApp$core$setBodyClass_$$(this.$c$, "load-failed"), $JSCompiler_StaticMethods_emitEvent_$$(this, "loadFailed");
    }
  }.bind(this));
  return $startResolver$$.$b$;
};
var $JSCompiler_StaticMethods_injectLocalizedMessages_$$ = function $$JSCompiler_StaticMethods_injectLocalizedMessages_$$$($JSCompiler_StaticMethods_injectLocalizedMessages_$self$$) {
  var $doc$jscomp$42$$ = $JSCompiler_StaticMethods_injectLocalizedMessages_$self$$.$c$.document;
  [["#load-failed-message", $castApp$core$UiMessages$MSG_LOAD_FAILED$$], ["#update-required-message", $castApp$core$UiMessages$MSG_UPDATE_REQUIRED$$]].forEach(function($data$jscomp$244$$) {
    var $elem$jscomp$5$$ = $doc$jscomp$42$$.querySelector($data$jscomp$244$$[0]);
    $elem$jscomp$5$$ && ($elem$jscomp$5$$.textContent = $data$jscomp$244$$[1]);
  });
};
$castApp$core$Ui$$.prototype.$h$ = function $$castApp$core$Ui$$$$$h$$() {
  return this.$b$.stop();
};
var $JSCompiler_StaticMethods_emitEvent_$$ = function $$JSCompiler_StaticMethods_emitEvent_$$$($JSCompiler_StaticMethods_emitEvent_$self$$, $eventType$jscomp$8$$) {
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_emitEvent_$self$$.$g$, $eventType$jscomp$8$$);
  $castApp$log$info$$($castApp$core$Ui$logger_$$, $eventType$jscomp$8$$);
}, $castApp$core$setBodyClass_$$ = function $$castApp$core$setBodyClass_$$$($body$jscomp$2_win$jscomp$20$$, $className$jscomp$11$$) {
  ($body$jscomp$2_win$jscomp$20$$ = $body$jscomp$2_win$jscomp$20$$.document && $body$jscomp$2_win$jscomp$20$$.document.body || null) && $body$jscomp$2_win$jscomp$20$$.setAttribute("class", $className$jscomp$11$$);
};
var $castApp$core$offers$Environment$$ = function $$castApp$core$offers$Environment$$$($win$jscomp$21$$, $ui$jscomp$1$$, $eventPageClient$jscomp$2$$, $http$jscomp$7$$, $analytics$$) {
  this.$c$ = $ui$jscomp$1$$;
  this.$b$ = $eventPageClient$jscomp$2$$;
  this.$g$ = $http$jscomp$7$$;
  this.$h$ = $win$jscomp$21$$.localStorage;
  this.$f$ = $analytics$$;
}, $castApp$core$offers$Scan$$ = function $$castApp$core$offers$Scan$$$($env$jscomp$3$$, $id$jscomp$72$$) {
  this.$c$ = $env$jscomp$3$$;
  this.$m$ = $id$jscomp$72$$;
  this.$f$ = new $goog$structs$Map$$;
  this.$i$ = !0;
  this.$h$ = !1;
  this.$b$ = new $goog$structs$Set$$;
  this.$l$ = new $castApp$core$ShortTermDeviceState$$($env$jscomp$3$$.$h$);
  this.$g$ = new $castApp$StartStoppable$$(this.$castApp_core_offers_Scan_prototype$start_$.bind(this), this.$castApp_core_offers_Scan_prototype$reset_$.bind(this));
  this.$j$ = this.$castApp_core_offers_Scan_prototype$handleDeviceData_$.bind(this);
}, $castApp$core$offers$Scan$logger_$$ = $castApp$log$getLogger$$("core.offers.Scanner");
$JSCompiler_prototypeAlias$$ = $castApp$core$offers$Scan$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$g$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  if (!this.$h$) {
    var $msg$jscomp$740$$ = new $castApp$protocol$Offers$ScanResults$$(this.$m$, this.$f$.$getValues$(), !0);
    this.$c$.$c$.$b$.$b$.sendMessage($msg$jscomp$740$$);
    this.$h$ = !0;
  }
  return this.$g$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_offers_Scan_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_offers_Scan_prototype$start_$$() {
  this.$c$.$b$.listen("devices", this.$j$);
  $JSCompiler_StaticMethods_startDeviceMonitor$$(this.$c$.$b$);
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, $goog$Timer$promise$$(3E4)).then(function() {
    this.$i$ = !1;
    this.$stopIfScanComplete_$();
  }.bind(this));
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$castApp_core_offers_Scan_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_offers_Scan_prototype$reset_$$() {
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$(this.$c$.$b$, "devices", this.$j$);
  this.$f$ = new $goog$structs$Map$$;
  this.$i$ = !0;
  this.$h$ = !1;
  this.$b$ = new $goog$structs$Set$$;
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$castApp_core_offers_Scan_prototype$handleDeviceData_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_offers_Scan_prototype$handleDeviceData_$$($event$jscomp$19$$) {
  var $$jscomp$this$jscomp$5$$ = this;
  $JSCompiler_StaticMethods_loadFromStorage$$(this.$l$);
  ($event$jscomp$19$$.msg.devices || []).forEach(function($deviceData$jscomp$5$$) {
    var $ipAddress$jscomp$10$$ = $deviceData$jscomp$5$$.ipAddress;
    $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($$jscomp$this$jscomp$5$$.$f$, $ipAddress$jscomp$10$$) || $$jscomp$this$jscomp$5$$.$b$.contains($ipAddress$jscomp$10$$) || $JSCompiler_StaticMethods_deviceIsRestarting$$($$jscomp$this$jscomp$5$$.$l$, $ipAddress$jscomp$10$$) || ($$jscomp$this$jscomp$5$$.$b$.add($ipAddress$jscomp$10$$), $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$($castApp$core$SetupApiClient$create$$($$jscomp$this$jscomp$5$$.$c$.$g$, 
    $castApp$core$SetupApiClient$createInMemoryStateStorage$$($ipAddress$jscomp$10$$)).then(function($setupApiClient$jscomp$4$$) {
      if (7 > $setupApiClient$jscomp$4$$.$b$) {
        throw new $goog$Promise$CancellationError$$;
      }
      return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($$jscomp$this$jscomp$5$$.$g$, $JSCompiler_StaticMethods_getOffer$$($setupApiClient$jscomp$4$$)).then(function($device$jscomp$17_msg$jscomp$inline_907_offerMsg$$) {
        var $eurekaInfo$jscomp$15$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($setupApiClient$jscomp$4$$);
        $device$jscomp$17_msg$jscomp$inline_907_offerMsg$$ = new $castApp$protocol$Offers$Device$$($device$jscomp$17_msg$jscomp$inline_907_offerMsg$$.token, $eurekaInfo$jscomp$15$$.name, $castApp$core$utils$getProtocolDeviceType$$($eurekaInfo$jscomp$15$$.deviceType), $eurekaInfo$jscomp$15$$.ssdpUdn);
        $$jscomp$this$jscomp$5$$.$f$.set($ipAddress$jscomp$10$$, $device$jscomp$17_msg$jscomp$inline_907_offerMsg$$);
        $$jscomp$this$jscomp$5$$.$b$.remove($ipAddress$jscomp$10$$);
        $$jscomp$this$jscomp$5$$.$h$ || ($device$jscomp$17_msg$jscomp$inline_907_offerMsg$$ = new $castApp$protocol$Offers$ScanResults$$($$jscomp$this$jscomp$5$$.$m$, $$jscomp$this$jscomp$5$$.$f$.$getValues$(), !$$jscomp$this$jscomp$5$$.$i$ && 0 === $$jscomp$this$jscomp$5$$.$b$.$b$.$b$), $$jscomp$this$jscomp$5$$.$h$ = $device$jscomp$17_msg$jscomp$inline_907_offerMsg$$.scanComplete, $$jscomp$this$jscomp$5$$.$c$.$c$.$b$.$b$.sendMessage($device$jscomp$17_msg$jscomp$inline_907_offerMsg$$));
      });
    }), function($err$jscomp$43$$) {
      $$jscomp$this$jscomp$5$$.$b$.remove($ipAddress$jscomp$10$$);
      $err$jscomp$43$$ instanceof $goog$Promise$CancellationError$$ || $castApp$log$infoWithCause$$($castApp$core$offers$Scan$logger_$$, $err$jscomp$43$$, "Failed to retrieve offer token.");
    }), $$jscomp$this$jscomp$5$$.$stopIfScanComplete_$.bind($$jscomp$this$jscomp$5$$)));
  });
};
$JSCompiler_prototypeAlias$$.$stopIfScanComplete_$ = function $$JSCompiler_prototypeAlias$$$$stopIfScanComplete_$$() {
  this.$i$ || 0 !== this.$b$.$b$.$b$ || this.stop();
};
var $castApp$core$SetupState$$ = function $$castApp$core$SetupState$$$($stateManager$$, $start$jscomp$32$$, $reset$jscomp$2$$) {
  this.$c$ = new $castApp$StartStoppable$$($start$jscomp$32$$ || function() {
    return $goog$Promise$resolve$$();
  }, $reset$jscomp$2$$ || void 0);
  this.$b$ = $stateManager$$;
};
$castApp$core$SetupState$$.prototype.start = function $$castApp$core$SetupState$$$$start$() {
  return this.$c$.start();
};
$castApp$core$SetupState$$.prototype.stop = function $$castApp$core$SetupState$$$$stop$() {
  return this.$c$.stop();
};
var $JSCompiler_StaticMethods_getUiMessenger$$ = function $$JSCompiler_StaticMethods_getUiMessenger$$$($JSCompiler_StaticMethods_getUiMessenger$self$$) {
  return $JSCompiler_StaticMethods_getUiMessenger$self$$.$b$.$l$.$b$.$b$;
};
var $castApp$core$SetupEnvironment$$ = function $$castApp$core$SetupEnvironment$$$($win$jscomp$22$$, $networkingApi$jscomp$8$$, $http$jscomp$8$$, $analytics$jscomp$1$$) {
  var $setupStateFactory$$ = $castApp$core$createSetupState$$, $goToDevicesPage$jscomp$1$$ = $castApp$app$goToDevicesPage_$$, $reloadSetupPage$$ = window.location.reload.bind(window.location), $getBrowserUiLanguage$jscomp$1$$ = chrome.i18n.getUILanguage, $eventPageClient$jscomp$3$$ = new $castApp$eventPage$ChromeClient$$;
  this.window = $win$jscomp$22$$;
  this.$c$ = $networkingApi$jscomp$8$$;
  this.$h$ = $http$jscomp$8$$;
  this.$b$ = $win$jscomp$22$$.localStorage;
  this.$m$ = $win$jscomp$22$$.sessionStorage;
  this.$f$ = $analytics$jscomp$1$$;
  this.$l$ = $setupStateFactory$$;
  this.$g$ = $goToDevicesPage$jscomp$1$$;
  this.$o$ = $reloadSetupPage$$;
  this.$i$ = $getBrowserUiLanguage$jscomp$1$$;
  this.$j$ = $eventPageClient$jscomp$3$$;
};
var $castApp$core$AudioConfirmationState$$ = function $$castApp$core$AudioConfirmationState$$$($stateManager$jscomp$1$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$1$$, this.$m$.bind(this), this.$l$.bind(this));
  this.$f$ = this.$g$ = null;
  this.$h$ = this.$j$.bind(this);
  this.$o$ = this.$i$.bind(this);
};
$goog$inherits$$($castApp$core$AudioConfirmationState$$, $castApp$core$SetupState$$);
var $castApp$core$AudioConfirmationState$logger_$$ = $castApp$log$getLogger$$("core.AudioConfirmationState");
$castApp$core$AudioConfirmationState$$.prototype.$m$ = function $$castApp$core$AudioConfirmationState$$$$$m$$() {
  $castApp$log$info$$($castApp$core$AudioConfirmationState$logger_$$, "starting");
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$(this.$b$)).then(function($setupApiClient$jscomp$5$$) {
    this.$g$ = $setupApiClient$jscomp$5$$;
    $JSCompiler_StaticMethods_getUiMessenger$$(this).addListener("AudioConfirmation.UserAction", this.$h$);
    $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$AudioConfirmation$PromptUser$$(1));
    this.$f$ = 3;
    this.$i$();
  }.bind(this));
};
$castApp$core$AudioConfirmationState$$.prototype.$l$ = function $$castApp$core$AudioConfirmationState$$$$$l$$() {
  this.$f$ = this.$g$ = null;
  $JSCompiler_StaticMethods_getUiMessenger$$(this).removeListener("AudioConfirmation.UserAction", this.$h$);
  return $goog$Promise$resolve$$();
};
$castApp$core$AudioConfirmationState$$.prototype.$i$ = function $$castApp$core$AudioConfirmationState$$$$$i$$() {
  if (null !== this.$f$) {
    $castApp$log$info$$($castApp$core$AudioConfirmationState$logger_$$, "Playing sound: " + this.$f$);
    var $JSCompiler_temp_const$jscomp$57$$ = this.$c$;
    var $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_909_JSCompiler_inline_result$jscomp$58$$ = this.$g$;
    var $soundId$jscomp$inline_910$$ = this.$f$;
    $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_909_JSCompiler_inline_result$jscomp$58$$ = $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_909_JSCompiler_inline_result$jscomp$58$$.$c$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_909_JSCompiler_inline_result$jscomp$58$$, "/setup/play_sound"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify(new $castApp$core$setupApi$PlaySoundRequestMsg$$($soundId$jscomp$inline_910$$)), 
    timeout:1E4, $maxRetries$:2});
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_temp_const$jscomp$57$$, $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_909_JSCompiler_inline_result$jscomp$58$$);
    this.$f$ = 3;
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $goog$Timer$promise$$(1 === this.$f$ ? 3E3 : 1900)).then(this.$o$);
  }
};
$castApp$core$AudioConfirmationState$$.prototype.$j$ = function $$castApp$core$AudioConfirmationState$$$$$j$$($JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_912_rawMsg$jscomp$23$$) {
  var $nextUiState$$ = null;
  switch($JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_912_rawMsg$jscomp$23$$.action) {
    case 1:
      this.$f$ = 1;
      $nextUiState$$ = 2;
      break;
    case 2:
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$b$, 12);
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$b$, new $castApp$core$storage$SetupState$$(5));
      break;
    case 3:
      $nextUiState$$ = 3;
      break;
    case 4:
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$b$, 13), $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_912_rawMsg$jscomp$23$$ = this.$b$, $castApp$core$storage$removeSetupSession$$($JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_912_rawMsg$jscomp$23$$.$b$.$b$, $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_912_rawMsg$jscomp$23$$.$c$), $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_912_rawMsg$jscomp$23$$.$b$.$g$();
  }
  $nextUiState$$ && $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$AudioConfirmation$PromptUser$$($nextUiState$$));
};
var $castApp$core$CodeConfirmationState$$ = function $$castApp$core$CodeConfirmationState$$$($stateManager$jscomp$2$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$2$$, this.$f$.bind(this), null);
};
$goog$inherits$$($castApp$core$CodeConfirmationState$$, $castApp$core$SetupState$$);
var $castApp$core$CodeConfirmationState$logger_$$ = $castApp$log$getLogger$$("core.CodeConfirmationState");
$castApp$core$CodeConfirmationState$$.prototype.$f$ = function $$castApp$core$CodeConfirmationState$$$$$f$$() {
  $castApp$log$info$$($castApp$core$CodeConfirmationState$logger_$$, "starting");
  var $self$jscomp$26$$ = this;
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_getUiMessenger$$(this).sendRequest(new $castApp$protocol$CodeConfirmation$Request$$((this.$b$.$c$.setupApiClientState || null).verificationState.pin))).then(function($rawResponse$jscomp$1$$) {
    $rawResponse$jscomp$1$$.confirmed ? ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$26$$.$b$, 10), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$26$$.$b$, new $castApp$core$storage$SetupState$$(5))) : ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$26$$.$b$, 11), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$26$$.$c$, 
    $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$26$$).sendRequest(new $castApp$protocol$ModalDialog$Request$$(1))).then(function() {
      var $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_914$$ = $self$jscomp$26$$.$b$;
      $castApp$core$storage$removeSetupSession$$($JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_914$$.$b$.$b$, $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_914$$.$c$);
      $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_914$$.$b$.$g$();
    }));
  });
  return $goog$Promise$resolve$$();
};
var $castApp$core$HotSpotReconnector$$ = function $$castApp$core$HotSpotReconnector$$$($networkingApi$jscomp$9$$, $bssid$jscomp$9$$) {
  this.$j$ = $networkingApi$jscomp$9$$;
  this.$b$ = new $castApp$core$WiFiMonitor$$($networkingApi$jscomp$9$$, new $castApp$core$WiFiMonitor$CastHotSpotsFilter$$($bssid$jscomp$9$$));
  this.$c$ = "connected";
  this.$f$ = null;
  this.$g$ = new $castApp$StartStoppable$$(this.$castApp_core_HotSpotReconnector_prototype$start_$.bind(this), this.$castApp_core_HotSpotReconnector_prototype$reset_$.bind(this));
  this.$h$ = new $goog$events$EventTarget$$;
}, $castApp$core$HotSpotReconnector$WIFI_MONITOR_EVENT_TYPES_$$ = ["added", "removed", "connected", "disconnected"], $castApp$core$HotSpotReconnector$logger_$$ = $castApp$log$getLogger$$("core.HotSpotReconnector");
$JSCompiler_prototypeAlias$$ = $castApp$core$HotSpotReconnector$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$g$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$g$.stop();
};
$JSCompiler_prototypeAlias$$.getState = function $$JSCompiler_prototypeAlias$$$getState$() {
  return this.$c$;
};
$JSCompiler_prototypeAlias$$.$castApp_core_HotSpotReconnector_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_HotSpotReconnector_prototype$start_$$() {
  var $self$jscomp$27$$ = this;
  return $self$jscomp$27$$.$b$.start().then(function() {
    $self$jscomp$27$$.$i$();
    $castApp$core$HotSpotReconnector$WIFI_MONITOR_EVENT_TYPES_$$.forEach(function($eventType$jscomp$9$$) {
      $self$jscomp$27$$.$b$.$b$.listen($eventType$jscomp$9$$, $self$jscomp$27$$.$i$, !0, $self$jscomp$27$$);
    });
  });
};
$JSCompiler_prototypeAlias$$.$castApp_core_HotSpotReconnector_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_HotSpotReconnector_prototype$reset_$$() {
  this.$c$ = "connected";
  this.$f$ = null;
  if (!this.$b$) {
    return $goog$Promise$resolve$$();
  }
  var $wiFiMonitor$$ = this.$b$;
  this.$b$ = null;
  $castApp$core$HotSpotReconnector$WIFI_MONITOR_EVENT_TYPES_$$.forEach(function($eventType$jscomp$10$$) {
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($wiFiMonitor$$.$b$, $eventType$jscomp$10$$, this.$i$, !0, this);
  }.bind(this));
  return $wiFiMonitor$$.stop();
};
var $JSCompiler_StaticMethods_setState_$$ = function $$JSCompiler_StaticMethods_setState_$$$($JSCompiler_StaticMethods_setState_$self$$, $newState$jscomp$2$$) {
  $JSCompiler_StaticMethods_setState_$self$$.$c$ !== $newState$jscomp$2$$ && ($JSCompiler_StaticMethods_setState_$self$$.$c$ = $newState$jscomp$2$$, $castApp$log$info$$($castApp$core$HotSpotReconnector$logger_$$, "New state: " + $newState$jscomp$2$$), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_setState_$self$$.$h$, new $goog$events$Event$$($newState$jscomp$2$$)));
};
$castApp$core$HotSpotReconnector$$.prototype.$i$ = function $$castApp$core$HotSpotReconnector$$$$$i$$() {
  if ("failed" !== this.$c$) {
    var $network$jscomp$4_scheduledFailure$jscomp$inline_917$$ = null;
    1 === this.$b$.networks.$b$ && ($network$jscomp$4_scheduledFailure$jscomp$inline_917$$ = this.$b$.networks.$getValues$()[0]);
    if (!$network$jscomp$4_scheduledFailure$jscomp$inline_917$$) {
      "connected" === this.$c$ && ($JSCompiler_StaticMethods_scheduleFailure_$$(this), $JSCompiler_StaticMethods_setState_$$(this, "disconnected"));
    } else {
      if ("Connected" === $network$jscomp$4_scheduledFailure$jscomp$inline_917$$.ConnectionState) {
        this.$f$ && ($network$jscomp$4_scheduledFailure$jscomp$inline_917$$ = this.$f$, this.$f$ = null, $network$jscomp$4_scheduledFailure$jscomp$inline_917$$.cancel()), $JSCompiler_StaticMethods_setState_$$(this, "connected");
      } else {
        if ("connected" === this.$c$ || "disconnected" === this.$c$) {
          $JSCompiler_StaticMethods_scheduleFailure_$$(this), $JSCompiler_StaticMethods_setState_$$(this, "reconnecting"), $JSCompiler_StaticMethods_reconnect_$$(this, $network$jscomp$4_scheduledFailure$jscomp$inline_917$$.GUID);
        }
      }
    }
  }
};
var $JSCompiler_StaticMethods_reconnect_$$ = function $$JSCompiler_StaticMethods_reconnect_$$$($JSCompiler_StaticMethods_reconnect_$self$$, $hotspotNetworkGuid$$) {
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_reconnect_$self$$.$g$, $JSCompiler_StaticMethods_reconnect_$self$$.$j$.startConnect($hotspotNetworkGuid$$)), function($err$jscomp$44$$) {
    $castApp$log$errorWithCause$$($castApp$core$HotSpotReconnector$logger_$$, $err$jscomp$44$$, "chrome.networkingPrivate.startConnect failed.");
    $JSCompiler_StaticMethods_setState_$$(this, "failed");
    this.$b$.stop();
  }.bind($JSCompiler_StaticMethods_reconnect_$self$$));
}, $JSCompiler_StaticMethods_scheduleFailure_$$ = function $$JSCompiler_StaticMethods_scheduleFailure_$$$($JSCompiler_StaticMethods_scheduleFailure_$self$$) {
  $JSCompiler_StaticMethods_scheduleFailure_$self$$.$f$ || ($JSCompiler_StaticMethods_scheduleFailure_$self$$.$f$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_scheduleFailure_$self$$.$g$, $goog$Timer$promise$$(9E4)).then(function() {
    $castApp$log$info$$($castApp$core$HotSpotReconnector$logger_$$, "Reconnection timed out.");
    $JSCompiler_StaticMethods_setState_$$(this, "failed");
    this.$b$.stop();
  }.bind($JSCompiler_StaticMethods_scheduleFailure_$self$$)));
};
var $castApp$core$ConnectWiFiPendingState$$ = function $$castApp$core$ConnectWiFiPendingState$$$($stateManager$jscomp$3$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$3$$, this.$s$.bind(this), this.$o$.bind(this));
  this.$g$ = null;
  this.$u$ = 0;
  this.$i$ = this.$h$ = this.$l$ = this.$f$ = null;
};
$goog$inherits$$($castApp$core$ConnectWiFiPendingState$$, $castApp$core$SetupState$$);
var $castApp$core$ConnectWiFiPendingState$ALL_RECONNECTOR_EVENT_TYPES_$$ = ["connected", "disconnected", "reconnecting", "failed"], $castApp$core$ConnectWiFiPendingState$logger_$$ = $castApp$log$getLogger$$("core.ConnectWiFiPendingState");
$castApp$core$ConnectWiFiPendingState$$.prototype.$s$ = function $$castApp$core$ConnectWiFiPendingState$$$$$s$$() {
  var $self$jscomp$28$$ = this;
  $castApp$log$info$$($castApp$core$ConnectWiFiPendingState$logger_$$, "starting");
  var $commonState$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$28$$.$b$);
  $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$28$$).sendMessage($castApp$core$utils$createWiFiConfigUiMessage$$($commonState$$.connectWiFi, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$28$$.$b$)));
  $self$jscomp$28$$.$h$ = new $castApp$core$HotSpotReconnector$$($self$jscomp$28$$.$b$.$b$.$c$, $commonState$$.connectedHotSpotBssid);
  $castApp$core$ConnectWiFiPendingState$ALL_RECONNECTOR_EVENT_TYPES_$$.forEach(function($eventType$jscomp$11$$) {
    $self$jscomp$28$$.$h$.$h$.listen($eventType$jscomp$11$$, $self$jscomp$28$$.$j$, !0, $self$jscomp$28$$);
  });
  return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$28$$.$c$, $self$jscomp$28$$.$h$.start()), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$28$$.$c$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($self$jscomp$28$$.$b$)).then(function($setupApiClient$jscomp$6$$) {
    $self$jscomp$28$$.$g$ = $setupApiClient$jscomp$6$$;
    $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$($self$jscomp$28$$);
  })]).then($self$jscomp$28$$.$v$.bind($self$jscomp$28$$));
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$o$ = function $$castApp$core$ConnectWiFiPendingState$$$$$o$$() {
  var $self$jscomp$29$$ = this;
  $JSCompiler_StaticMethods_clearFailureTimeout_$$($self$jscomp$29$$);
  $JSCompiler_StaticMethods_stopEurekaInfoPolling_$$($self$jscomp$29$$);
  if (!$self$jscomp$29$$.$h$) {
    return $goog$Promise$resolve$$();
  }
  var $hotSpotReconnector$$ = $self$jscomp$29$$.$h$;
  $self$jscomp$29$$.$h$ = null;
  $castApp$core$ConnectWiFiPendingState$ALL_RECONNECTOR_EVENT_TYPES_$$.forEach(function($eventType$jscomp$12$$) {
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($hotSpotReconnector$$.$h$, $eventType$jscomp$12$$, $self$jscomp$29$$.$j$, !0, $self$jscomp$29$$);
  });
  return $hotSpotReconnector$$.stop();
};
var $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$ = function $$JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$$($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$, $opt_delay$jscomp$3$$) {
  if (!$JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$f$) {
    var $eurekaInfoRequestCounter$$ = 0;
    $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$f$ = $JSCompiler_StaticMethods_thenCatch$$($goog$Timer$promise$$($opt_delay$jscomp$3$$ || 0).then(function() {
      $eurekaInfoRequestCounter$$ = ++$JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$u$;
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$f$ = $JSCompiler_StaticMethods_getEurekaInfo$$($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$g$, {options:["version", "setup.setup_state", "net.ip_address"]});
      return $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$f$;
    }).then($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$m$.bind($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$)), function($err$jscomp$45$$) {
      $castApp$utils$rethrowIfCancellationError$$($err$jscomp$45$$);
      $castApp$log$warningWithCause$$($castApp$core$ConnectWiFiPendingState$logger_$$, $err$jscomp$45$$, "Request #" + $eurekaInfoRequestCounter$$ + " failed.");
    }).then(function() {
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$f$ = null;
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$, 3E3);
    });
  }
}, $JSCompiler_StaticMethods_stopEurekaInfoPolling_$$ = function $$JSCompiler_StaticMethods_stopEurekaInfoPolling_$$$($JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$) {
  if ($JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$.$f$) {
    var $task$jscomp$3$$ = $JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$.$f$;
    $JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$.$f$ = null;
    $task$jscomp$3$$.cancel();
  }
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$m$ = function $$castApp$core$ConnectWiFiPendingState$$$$$m$$() {
  var $newSetupState$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$(this.$g$).setupState;
  if ($newSetupState$$ !== this.$l$) {
    switch($castApp$log$info$$($castApp$core$ConnectWiFiPendingState$logger_$$, "New setup state: " + $newSetupState$$), this.$l$ = $newSetupState$$, $newSetupState$$) {
      case 31:
        return $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 2), $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
      case 21:
      case 41:
      case 10:
      case 11:
        return $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 1), $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
      case 60:
      case 61:
      case 51:
        return $JSCompiler_StaticMethods_handleConnectionSuccess_$$(this), $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
    }
  }
};
var $JSCompiler_StaticMethods_handleConnectionSuccess_$$ = function $$JSCompiler_StaticMethods_handleConnectionSuccess_$$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$) {
  $JSCompiler_StaticMethods_clearFailureTimeout_$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$, 19);
  var $eurekaInfoState$jscomp$2$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$g$);
  $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$c$, $JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$.$b$.$f$.$b$()).then(function($analyticsOptIn$jscomp$2_msg$jscomp$742$$) {
    $analyticsOptIn$jscomp$2_msg$jscomp$742$$ = $castApp$core$utils$createSetEurekaInfoMessage$$($eurekaInfoState$jscomp$2$$.setupApiVersion, $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$).deviceName, 3 !== $analyticsOptIn$jscomp$2_msg$jscomp$742$$);
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$c$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$g$, $analyticsOptIn$jscomp$2_msg$jscomp$742$$));
  }), function($err$jscomp$46$$) {
    $castApp$utils$rethrowIfCancellationError$$($err$jscomp$46$$);
    $castApp$log$warningWithCause$$($castApp$core$ConnectWiFiPendingState$logger_$$, $err$jscomp$46$$, "set_eureka_info failed.");
  }).then(function() {
    var $commonState$jscomp$1$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$), $bssid$jscomp$inline_920$$ = $commonState$jscomp$1$$.connectedHotSpotBssid;
    $castApp$core$ShortTermDeviceState$addNewStateRecord_$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$.$b$.$b$, new $castApp$core$storage$ShortTermDeviceState$$(2, $goog$now$$(), $bssid$jscomp$inline_920$$));
    delete $commonState$jscomp$1$$.connectedHotSpotBssid;
    $JSCompiler_StaticMethods_writeCommonState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$, $commonState$jscomp$1$$);
    if (60 !== $eurekaInfoState$jscomp$2$$.setupState && 4 <= $eurekaInfoState$jscomp$2$$.setupApiVersion) {
      return $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$c$, $JSCompiler_StaticMethods_postSaveWiFi$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$g$)), $goog$nullFunction$$);
    }
  }), function() {
    $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$, new $castApp$core$storage$SetupState$$(8));
  });
}, $JSCompiler_StaticMethods_handleConnectionFailure_$$ = function $$JSCompiler_StaticMethods_handleConnectionFailure_$$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$, $failure$$) {
  $JSCompiler_StaticMethods_clearFailureTimeout_$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$b$, 2 === $failure$$ ? 17 : 18);
  var $commonState$jscomp$2$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$b$);
  $commonState$jscomp$2$$.connectWiFi.$b$ = $failure$$;
  $JSCompiler_StaticMethods_writeCommonState$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$b$, $commonState$jscomp$2$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$b$, new $castApp$core$storage$SetupState$$(6));
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$j$ = function $$castApp$core$ConnectWiFiPendingState$$$$$j$$($event$jscomp$20$$) {
  switch($event$jscomp$20$$.type) {
    case "connected":
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$(this);
      break;
    case "disconnected":
    case "reconnecting":
      $JSCompiler_StaticMethods_stopEurekaInfoPolling_$$(this);
      break;
    case "failed":
      $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 1);
  }
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$v$ = function $$castApp$core$ConnectWiFiPendingState$$$$$v$$() {
  clearTimeout(this.$i$);
  this.$i$ = setTimeout(function() {
    $castApp$log$error$$($castApp$core$ConnectWiFiPendingState$logger_$$, "Connection timed out.");
    $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 1);
  }.bind(this), 9E4);
};
var $JSCompiler_StaticMethods_clearFailureTimeout_$$ = function $$JSCompiler_StaticMethods_clearFailureTimeout_$$$($JSCompiler_StaticMethods_clearFailureTimeout_$self$$) {
  clearTimeout($JSCompiler_StaticMethods_clearFailureTimeout_$self$$.$i$);
  $JSCompiler_StaticMethods_clearFailureTimeout_$self$$.$i$ = null;
};
var $goog$locale$countries$$ = "AC AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CP CR CU CV CW CX CY CZ DE DG DJ DK DM DO DZ EA EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU IC ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TA TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS XK YE YT ZA ZM ZW".split(" ");
var $castApp$core$DeviceConfigState$$ = function $$castApp$core$DeviceConfigState$$$($stateManager$jscomp$4$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$4$$, this.$h$.bind(this), null);
  this.$g$ = !1;
  this.$f$ = null;
};
$goog$inherits$$($castApp$core$DeviceConfigState$$, $castApp$core$SetupState$$);
var $castApp$core$DeviceConfigState$logger_$$ = $castApp$log$getLogger$$("core.DeviceConfigState");
$castApp$core$DeviceConfigState$$.prototype.$h$ = function $$castApp$core$DeviceConfigState$$$$$h$$() {
  $castApp$log$info$$($castApp$core$DeviceConfigState$logger_$$, "starting");
  var $JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$b$);
  this.$g$ = !!$JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$.device.ipAddress;
  var $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$ = (this.$b$.$c$.setupApiClientState || null).eurekaInfoState, $deviceName$jscomp$3$$ = $JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$.deviceName || $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$.name;
  $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$ = 3 === $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$.setupApiVersion;
  this.$g$ || $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$ || $JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$.country ? $JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$ = null : ($JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$ = this.$b$.$b$.$i$(), $JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$ = 
  ($eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$ = $goog$locale$getRegionSubTag$$($JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$)) && -1 !== $goog$locale$countries$$.indexOf($eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$) ? $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_924_setupApiVersion3$$ : ($JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$ = 
  $goog$locale$getLanguageSubTag$$($JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$).toUpperCase()) && -1 !== $goog$locale$countries$$.indexOf($JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$) ? $JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$ : "US");
  this.$f$ = $JSCompiler_temp$jscomp$65_commonState$jscomp$3_langSubTag$jscomp$inline_925_languageCode$jscomp$inline_923$$;
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_getUiMessenger$$(this).sendRequest(new $castApp$protocol$DeviceConfig$Request$$($JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$b$), $deviceName$jscomp$3$$, this.$f$))).then(this.$i$.bind(this)), this.$b$.$h$.bind(this.$b$));
  return $goog$Promise$resolve$$();
};
$castApp$core$DeviceConfigState$$.prototype.$i$ = function $$castApp$core$DeviceConfigState$$$$$i$$($rawMsg$jscomp$24$$) {
  var $self$jscomp$32$$ = this;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$32$$.$b$, 14);
  var $commonState$jscomp$4$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$32$$.$b$);
  $commonState$jscomp$4$$.deviceName = $rawMsg$jscomp$24$$.name;
  $self$jscomp$32$$.$f$ && $rawMsg$jscomp$24$$.country && ($commonState$jscomp$4$$.country = $rawMsg$jscomp$24$$.country);
  $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$32$$.$b$, $commonState$jscomp$4$$);
  if ($self$jscomp$32$$.$g$) {
    var $setupApiClient$jscomp$7$$ = null;
    return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$32$$.$c$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($self$jscomp$32$$.$b$)), $self$jscomp$32$$.$b$.$b$.$f$.$b$()]).then(function($analyticsOptIn$jscomp$3_results$jscomp$3$$) {
      $setupApiClient$jscomp$7$$ = $analyticsOptIn$jscomp$3_results$jscomp$3$$[0];
      $analyticsOptIn$jscomp$3_results$jscomp$3$$ = $analyticsOptIn$jscomp$3_results$jscomp$3$$[1];
      var $promises$jscomp$5$$ = [];
      7 <= $setupApiClient$jscomp$7$$.$b$ && $promises$jscomp$5$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$32$$.$c$, $setupApiClient$jscomp$7$$.$c$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($setupApiClient$jscomp$7$$, "/setup/accept_tos"), method:"POST", timeout:1E4, $maxRetries$:2})));
      $promises$jscomp$5$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$32$$.$c$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($setupApiClient$jscomp$7$$, $castApp$core$utils$createSetEurekaInfoMessage$$($setupApiClient$jscomp$7$$.$b$, $commonState$jscomp$4$$.deviceName, 3 !== $analyticsOptIn$jscomp$3_results$jscomp$3$$))));
      return $goog$Promise$all$$($promises$jscomp$5$$);
    }).then(function() {
      return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$32$$.$c$, $JSCompiler_StaticMethods_getEurekaInfo$$($setupApiClient$jscomp$7$$, {options:["setup.setup_state"]}));
    }).then(function() {
      var $setupState$jscomp$1$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($setupApiClient$jscomp$7$$).setupState;
      switch($setupState$jscomp$1$$) {
        case 60:
          $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$($self$jscomp$32$$.$b$);
          break;
        case 62:
          $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$32$$.$b$, new $castApp$core$storage$SetupState$$(10));
          break;
        default:
          return $castApp$log$error$$($castApp$core$DeviceConfigState$logger_$$, "Bad setup state: " + $setupState$jscomp$1$$), $goog$Promise$reject$$();
      }
    });
  }
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$32$$.$b$, new $castApp$core$storage$SetupState$$(6));
};
var $castApp$core$DeviceFoundState$$ = function $$castApp$core$DeviceFoundState$$$($stateManager$jscomp$5$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$5$$, this.$f$.bind(this), null);
};
$goog$inherits$$($castApp$core$DeviceFoundState$$, $castApp$core$SetupState$$);
var $castApp$core$DeviceFoundState$logger_$$ = $castApp$log$getLogger$$("core.DeviceFoundState");
$castApp$core$DeviceFoundState$$.prototype.$f$ = function $$castApp$core$DeviceFoundState$$$$$f$$() {
  $castApp$log$info$$($castApp$core$DeviceFoundState$logger_$$, "starting");
  var $self$jscomp$33$$ = this, $setupApiClient$jscomp$8$$ = null;
  return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$(this.$b$)), this.$b$.$b$.$f$.$b$()]).then(function($promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$) {
    $setupApiClient$jscomp$8$$ = $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$[0];
    $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$ = $castApp$core$utils$createSetEurekaInfoMessage$$($setupApiClient$jscomp$8$$.$b$, $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$33$$.$b$).deviceName, 3 !== $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$[1]);
    $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$ = [$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$33$$.$c$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($setupApiClient$jscomp$8$$, $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$))];
    4 <= $setupApiClient$jscomp$8$$.$b$ && $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$33$$.$c$, $JSCompiler_StaticMethods_postSaveWiFi$$($setupApiClient$jscomp$8$$)));
    return $goog$Promise$all$$($promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$);
  }).then(function() {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$33$$.$c$, $JSCompiler_StaticMethods_getEurekaInfo$$($setupApiClient$jscomp$8$$, {options:["setup.setup_state"]}));
  }).then(function() {
    var $setupState$jscomp$2$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($setupApiClient$jscomp$8$$).setupState;
    switch($setupState$jscomp$2$$) {
      case 60:
      case 52:
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$($self$jscomp$33$$.$b$);
        break;
      case 62:
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$33$$.$b$, new $castApp$core$storage$SetupState$$(10));
        break;
      default:
        return $castApp$log$error$$($castApp$core$DeviceFoundState$logger_$$, "Bad setup state: " + $setupState$jscomp$2$$), $goog$Promise$reject$$();
    }
  });
};
var $castApp$core$WiFiSwitchStateBase$$ = function $$castApp$core$WiFiSwitchStateBase$$$($stateManager$jscomp$6$$, $targetNetworkSsid$$, $targetNetworkBssid$$, $opt_autoSwitchingEnabled$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$6$$, this.$G$.bind(this), this.$o$.bind(this));
  this.$h$ = 1;
  this.$f$ = new $castApp$AsyncTaskManager$$;
  this.$w$ = $targetNetworkBssid$$;
  this.$A$ = $targetNetworkSsid$$;
  this.$j$ = null;
  this.$B$ = void 0 !== $opt_autoSwitchingEnabled$$ ? $opt_autoSwitchingEnabled$$ : $castApp$core$storage$readAutoNetworkSwitchingFlag$$($stateManager$jscomp$6$$.$b$.$b$);
  this.$i$ = null;
  this.$s$ = this.$F$.bind(this);
  this.$m$ = this.$l$.bind(this);
  this.$C$ = this.$D$.bind(this);
};
$goog$inherits$$($castApp$core$WiFiSwitchStateBase$$, $castApp$core$SetupState$$);
var $castApp$core$WiFiSwitchStateBase$logger_$$ = $castApp$log$getLogger$$("core.WiFiSwitchStateBase");
$castApp$core$WiFiSwitchStateBase$$.prototype.$G$ = function $$castApp$core$WiFiSwitchStateBase$$$$$G$$() {
  var $self$jscomp$34$$ = this;
  $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$34$$, 1);
  $self$jscomp$34$$.$i$ = new $castApp$core$WiFiMonitor$$(this.$b$.$b$.$c$);
  var $eventTarget$jscomp$1_messenger$jscomp$1$$ = $self$jscomp$34$$.$i$.$b$;
  $eventTarget$jscomp$1_messenger$jscomp$1$$.listen("connected", $self$jscomp$34$$.$handleWiFiMonitorConnectedEvent$, !0, $self$jscomp$34$$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.listen("added", $self$jscomp$34$$.$u$, !0, $self$jscomp$34$$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$ = $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$34$$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.addListener("WiFiSwitching.Proceed", $self$jscomp$34$$.$s$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.addListener("WiFiSwitching.RetryConnection", $self$jscomp$34$$.$m$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.addListener("WiFiConfig.Retry", $self$jscomp$34$$.$m$);
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$34$$.$c$, $self$jscomp$34$$.$i$.start()).then(function() {
    var $networks$jscomp$3_properties$jscomp$10$$ = $self$jscomp$34$$.$i$.networks;
    ($networks$jscomp$3_properties$jscomp$10$$ = $self$jscomp$34$$.$j$ && $networks$jscomp$3_properties$jscomp$10$$.get($self$jscomp$34$$.$j$) || null) ? "Connected" === $networks$jscomp$3_properties$jscomp$10$$.ConnectionState ? ($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Target Wi-Fi network already connected."), $self$jscomp$34$$.$l$()) : $self$jscomp$34$$.$B$ ? ($self$jscomp$34$$.$logEvent$(1), $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$34$$, 
    2), $self$jscomp$34$$.$showAutoSwitchUi$(1), $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($self$jscomp$34$$.$f$, $goog$Timer$promise$$(25E3)).then($self$jscomp$34$$.$v$.bind($self$jscomp$34$$)), $self$jscomp$34$$.$b$.$b$.$c$.startConnect($self$jscomp$34$$.$j$)) : $self$jscomp$34$$.$v$() : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$34$$, 11), $castApp$log$error$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Target Wi-Fi network not found."), 
    $self$jscomp$34$$.$b$.$h$());
  });
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$o$ = function $$castApp$core$WiFiSwitchStateBase$$$$$o$$() {
  this.$h$ = 1;
  this.$j$ = null;
  var $promises$jscomp$7_subStateTasks$$ = this.$f$;
  this.$f$ = new $castApp$AsyncTaskManager$$;
  $promises$jscomp$7_subStateTasks$$ = [$JSCompiler_StaticMethods_cancelPendingTasks$$($promises$jscomp$7_subStateTasks$$)];
  var $messenger$jscomp$2_wiFiMonitor$jscomp$1$$ = this.$i$;
  this.$i$ = null;
  if ($messenger$jscomp$2_wiFiMonitor$jscomp$1$$) {
    var $eventTarget$jscomp$2$$ = $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.$b$;
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($eventTarget$jscomp$2$$, "connected", this.$handleWiFiMonitorConnectedEvent$, !0, this);
    $eventTarget$jscomp$2$$.listen("added", this.$u$, !0, this);
    $promises$jscomp$7_subStateTasks$$.push($messenger$jscomp$2_wiFiMonitor$jscomp$1$$.stop());
  }
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.removeListener("WiFiSwitching.Proceed", this.$s$);
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.removeListener("WiFiSwitching.RetryConnection", this.$m$);
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.removeListener("WiFiConfig.Retry", this.$m$);
  return $goog$Promise$all$$($promises$jscomp$7_subStateTasks$$);
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$handleWiFiMonitorConnectedEvent$ = function $$castApp$core$WiFiSwitchStateBase$$$$$handleWiFiMonitorConnectedEvent$$($event$jscomp$21$$) {
  if ($JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$(this, $event$jscomp$21$$)) {
    switch($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Connection to the target Wi-Fi network detected."), this.$h$) {
      case 2:
        this.$logEvent$(2);
        this.$l$();
        break;
      case 6:
        this.$logEvent$(4), this.$l$();
    }
  }
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$u$ = function $$castApp$core$WiFiSwitchStateBase$$$$$u$$($event$jscomp$22$$) {
  $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$(this, $event$jscomp$22$$) && ($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Target Wi-Fi network detected."), 1 === this.$h$ && (this.$j$ = $event$jscomp$22$$.properties.GUID));
};
var $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$ = function $$JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$$($JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$, $event$jscomp$23_wiFi$$) {
  $event$jscomp$23_wiFi$$ = $event$jscomp$23_wiFi$$.properties.WiFi;
  return $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$w$ && !$castApp$core$utils$bssidsMatch$$($event$jscomp$23_wiFi$$.BSSID, $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$w$) || $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$A$ && $event$jscomp$23_wiFi$$.SSID !== $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$A$ ? !1 : !0;
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$v$ = function $$castApp$core$WiFiSwitchStateBase$$$$$v$$() {
  this.$logEvent$(3);
  $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 5);
  this.$showManualSwitchUi$(1);
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$F$ = function $$castApp$core$WiFiSwitchStateBase$$$$$F$$() {
  var $self$jscomp$36$$ = this;
  $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$36$$, 6);
  $self$jscomp$36$$.$showManualSwitchUi$(2);
  var $targetNetworkProperties$$ = $self$jscomp$36$$.$i$.networks.get(this.$j$);
  $targetNetworkProperties$$ && "Connected" === $targetNetworkProperties$$.ConnectionState ? $self$jscomp$36$$.$l$() : $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($self$jscomp$36$$.$f$, $goog$Timer$promise$$(1E4)).then(function() {
    $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$36$$, 7);
    $self$jscomp$36$$.$showManualSwitchUi$(3);
  });
};
var $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$$ = function $$JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$$$($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$) {
  var $resolver$jscomp$18$$ = $goog$Promise$withResolver$$();
  $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$f$, $resolver$jscomp$18$$.$b$);
  var $currentConnectionTask$$ = null, $tryToConnect$$ = function $$tryToConnect$$$($delay$jscomp$3$$) {
    $currentConnectionTask$$ = $goog$Timer$promise$$($delay$jscomp$3$$).then($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$.bind($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$)).then(function($setupApiClient$jscomp$9$$) {
      $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$logEvent$(5);
      $resolver$jscomp$18$$.$c$($setupApiClient$jscomp$9$$);
    }, function($err$jscomp$47$$) {
      $err$jscomp$47$$ instanceof $castApp$core$Http$HttpStatusError$$ ? $tryToConnect$$(2E3) : $err$jscomp$47$$ instanceof $castApp$core$SetupApiClient$VerificationError$$ && ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$b$, 9), $resolver$jscomp$18$$.$f$($err$jscomp$47$$));
    });
  };
  $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$18$$.$b$, function() {
    if ($currentConnectionTask$$) {
      var $task$jscomp$4$$ = $currentConnectionTask$$;
      $currentConnectionTask$$ = null;
      $task$jscomp$4$$.cancel();
    }
  });
  $tryToConnect$$(0);
  return $resolver$jscomp$18$$.$b$;
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$l$ = function $$castApp$core$WiFiSwitchStateBase$$$$$l$$() {
  var $self$jscomp$38$$ = this;
  6 === $self$jscomp$38$$.$h$ || 9 === $self$jscomp$38$$.$h$ ? ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$38$$, 8), this.$showManualSwitchUi$(2)) : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$38$$, 3), this.$showAutoSwitchUi$(1));
  var $retryLoopPromise$$ = $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$$($self$jscomp$38$$).then(function($setupApiClient$jscomp$10$$) {
    $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$38$$, 11);
    $castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Device connection successful.");
    $self$jscomp$38$$.$castApp_core_WiFiSwitchStateBase_prototype$finish$($setupApiClient$jscomp$10$$);
  }, this.$C$);
  $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($self$jscomp$38$$.$f$, $goog$Timer$promise$$(12E4)).then(function() {
    $castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Device connection timed out.");
    $retryLoopPromise$$.cancel();
  });
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$D$ = function $$castApp$core$WiFiSwitchStateBase$$$$$D$$($badDevice_err$jscomp$48$$) {
  $castApp$log$infoWithCause$$($castApp$core$WiFiSwitchStateBase$logger_$$, $badDevice_err$jscomp$48$$, "Device connection failed.");
  $badDevice_err$jscomp$48$$ = $badDevice_err$jscomp$48$$ instanceof $castApp$core$SetupApiClient$VersionError$$ || $badDevice_err$jscomp$48$$ instanceof $castApp$core$SetupApiClient$VerificationError$$;
  8 === this.$h$ ? $badDevice_err$jscomp$48$$ ? ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 10), this.$showManualSwitchUi$(5)) : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 9), this.$showManualSwitchUi$(4)) : $badDevice_err$jscomp$48$$ ? ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 10), this.$showAutoSwitchUi$(3)) : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 
  4), this.$showAutoSwitchUi$(2));
};
var $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$ = function $$JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$$($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$, $newSubState_tasks$$) {
  $newSubState_tasks$$ !== $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$h$ && ($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "New SubState: " + $newSubState_tasks$$), $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$h$ = $newSubState_tasks$$, $newSubState_tasks$$ = $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$f$, $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$f$ = 
  new $castApp$AsyncTaskManager$$, $JSCompiler_StaticMethods_cancelPendingTasks$$($newSubState_tasks$$));
};
var $castApp$core$HotSpotConnectionState$$ = function $$castApp$core$HotSpotConnectionState$$$($stateManager$jscomp$7$$) {
  this.$g$ = $JSCompiler_StaticMethods_readCommonState$$($stateManager$jscomp$7$$).device;
  $castApp$core$WiFiSwitchStateBase$$.call(this, $stateManager$jscomp$7$$, null, this.$g$.bssid);
};
$goog$inherits$$($castApp$core$HotSpotConnectionState$$, $castApp$core$WiFiSwitchStateBase$$);
var $castApp$core$HotSpotConnectionState$LOG_EVENT_MAP_$$ = new $goog$structs$Map$$(1, 4, 2, 5, 3, 6, 4, 7, 5, 8), $castApp$core$HotSpotConnectionState$logger_$$ = $castApp$log$getLogger$$("core.HotSpotConnectionState");
$JSCompiler_prototypeAlias$$ = $castApp$core$HotSpotConnectionState$$.prototype;
$JSCompiler_prototypeAlias$$.$handleWiFiMonitorConnectedEvent$ = function $$JSCompiler_prototypeAlias$$$$handleWiFiMonitorConnectedEvent$$($event$jscomp$24$$) {
  var $wiFi$jscomp$1$$ = $event$jscomp$24$$.properties.WiFi, $commonState$jscomp$6$$ = null;
  $castApp$core$utils$bssidsMatch$$($wiFi$jscomp$1$$.BSSID, this.$g$.bssid) ? ($commonState$jscomp$6$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$b$), $commonState$jscomp$6$$.connectedHotSpotBssid = $wiFi$jscomp$1$$.BSSID) : $castApp$core$utils$isEurekaHotSpot$$($event$jscomp$24$$.properties) ? $castApp$log$info$$($castApp$core$HotSpotConnectionState$logger_$$, "Not saving connected Wi-Fi network because it is a Cast device hotspot.") : ($commonState$jscomp$6$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$b$), 
  $commonState$jscomp$6$$.originalWiFiNetwork = {ssid:$wiFi$jscomp$1$$.SSID, bssid:$wiFi$jscomp$1$$.BSSID});
  $commonState$jscomp$6$$ && $JSCompiler_StaticMethods_writeCommonState$$(this.$b$, $commonState$jscomp$6$$);
  $castApp$core$HotSpotConnectionState$$.$superClass_$.$handleWiFiMonitorConnectedEvent$.call(this, $event$jscomp$24$$);
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$$() {
  var $env$jscomp$4$$ = this.$b$.$b$;
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $castApp$core$SetupApiClient$createAndVerify$$($env$jscomp$4$$.$h$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$("192.168.255.249"), $env$jscomp$4$$.$c$, {ssid:this.$g$.ssid, bssid:this.$g$.bssid}, $env$jscomp$4$$.$i$()));
};
$JSCompiler_prototypeAlias$$.$showAutoSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showAutoSwitchUi$$($state$jscomp$19$$) {
  var $env$jscomp$5$$ = this.$b$.$b$, $messenger$jscomp$3$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this), $protocolDeviceType$jscomp$1$$ = $castApp$core$utils$getProtocolDeviceType$$(this.$g$.type);
  $messenger$jscomp$3$$.sendMessage(new $castApp$protocol$SetupStart$ShowDevice$$(1 === $state$jscomp$19$$ && 3 || 2 === $state$jscomp$19$$ && 4 || 3 === $state$jscomp$19$$ && 5 || null, $protocolDeviceType$jscomp$1$$, this.$g$.name));
  3 === $state$jscomp$19$$ && $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$(this.$f$, $JSCompiler_StaticMethods_waitForMessage$$($messenger$jscomp$3$$, "BadDeviceAck")).then($env$jscomp$5$$.$g$.bind($env$jscomp$5$$));
};
$JSCompiler_prototypeAlias$$.$showManualSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showManualSwitchUi$$($state$jscomp$20$$) {
  var $env$jscomp$6$$ = this.$b$.$b$, $messenger$jscomp$4$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $messenger$jscomp$4$$.sendMessage(new $castApp$protocol$WiFiSwitching$ConnectHotSpot$$($state$jscomp$20$$, this.$g$.name, this.$g$.ssid));
  5 === $state$jscomp$20$$ && $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$(this.$f$, $JSCompiler_StaticMethods_waitForMessage$$($messenger$jscomp$4$$, "BadDeviceAck")).then($env$jscomp$6$$.$g$.bind($env$jscomp$6$$));
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$finish$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$finish$$($setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$) {
  $setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$ = $setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$.getState();
  this.$b$.$i$($setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$);
  $setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$.eurekaInfoState.features.supportsDisplay ? $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$b$, new $castApp$core$storage$SetupState$$(3)) : $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$b$, new $castApp$core$storage$SetupState$$(4));
};
$JSCompiler_prototypeAlias$$.$logEvent$ = function $$JSCompiler_prototypeAlias$$$$logEvent$$($eventType$jscomp$13_logEventType$$) {
  ($eventType$jscomp$13_logEventType$$ = $castApp$core$HotSpotConnectionState$LOG_EVENT_MAP_$$.get($eventType$jscomp$13_logEventType$$)) && $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$b$, $eventType$jscomp$13_logEventType$$);
};
var $castApp$core$waitForDeviceReboot$$ = function $$castApp$core$waitForDeviceReboot$$$($ssdpUdn$jscomp$2$$, $networkingApi$jscomp$10$$, $eventPageClient$jscomp$4$$, $http$jscomp$9$$, $win$jscomp$23$$) {
  var $resolver$jscomp$19$$ = $goog$Promise$withResolver$$(), $deviceMonitor$jscomp$1$$ = new $castApp$core$NewDeviceMonitorImpl$$($networkingApi$jscomp$10$$, $eventPageClient$jscomp$4$$, $http$jscomp$9$$, $win$jscomp$23$$), $checkSsdpUdnMatch$$ = function $$checkSsdpUdnMatch$$$($device$jscomp$18$$) {
    return $device$jscomp$18$$.$setupApiClient$.getState().eurekaInfoState.ssdpUdn === $ssdpUdn$jscomp$2$$;
  }, $handleEvent$$ = function $$handleEvent$$$($event$jscomp$25_matchingDeviceDescription$$) {
    ($event$jscomp$25_matchingDeviceDescription$$ = $goog$array$find$$($event$jscomp$25_matchingDeviceDescription$$.devices, $checkSsdpUdnMatch$$)) && $resolver$jscomp$19$$.$c$($event$jscomp$25_matchingDeviceDescription$$.ipAddress);
  };
  $deviceMonitor$jscomp$1$$.listen("devices", $handleEvent$$);
  var $pollingInterval$$ = null;
  $deviceMonitor$jscomp$1$$.start().then(function() {
    $pollingInterval$$ = setInterval(function() {
      $JSCompiler_StaticMethods_startDeviceMonitor$$($deviceMonitor$jscomp$1$$.$h$);
      $deviceMonitor$jscomp$1$$.$rescan_$();
    }, 5E3);
  });
  var $timeoutId$jscomp$2$$ = setTimeout($resolver$jscomp$19$$.$f$.bind($resolver$jscomp$19$$), 18E4);
  return $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$19$$.$b$, function() {
    clearTimeout($timeoutId$jscomp$2$$);
    clearInterval($pollingInterval$$);
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($deviceMonitor$jscomp$1$$, "devices", $handleEvent$$);
    $deviceMonitor$jscomp$1$$.stop();
  });
};
var $castApp$core$OtaState$$ = function $$castApp$core$OtaState$$$($stateManager$jscomp$8$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$8$$, this.$j$.bind(this), null);
  this.$f$ = null;
  this.$m$ = 0;
  this.$g$ = null;
  this.$i$ = 0;
};
$goog$inherits$$($castApp$core$OtaState$$, $castApp$core$SetupState$$);
var $castApp$core$OtaState$logger_$$ = $castApp$log$getLogger$$("core.OtaState");
$castApp$core$OtaState$$.prototype.$j$ = function $$castApp$core$OtaState$$$$$j$$() {
  $castApp$log$info$$($castApp$core$OtaState$logger_$$, "starting");
  var $self$jscomp$39$$ = this;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$39$$.$b$, 30);
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$(this.$b$)).then(function($setupApiClient$jscomp$13$$) {
    $self$jscomp$39$$.$f$ = $setupApiClient$jscomp$13$$;
    $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$39$$).sendMessage(new $castApp$protocol$MessageWithDeviceType$$("OtaUpdate.Pending", $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$39$$.$b$)));
    $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$($self$jscomp$39$$, 0);
  });
};
var $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$ = function $$JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$, $delay$jscomp$4$$) {
  var $requestCounter$$ = 0;
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$c$, $goog$Timer$promise$$($delay$jscomp$4$$)).then(function() {
    $requestCounter$$ = ++$JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$m$;
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$c$, $JSCompiler_StaticMethods_getEurekaInfo$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$f$, {options:["ota_status", "setup.setup_state"]}));
  }).then(function($eurekaInfo$jscomp$17$$) {
    var $eurekaInfoState$jscomp$inline_933$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$f$), $newDownloadProgress$jscomp$inline_934$$ = 0;
    7 <= $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$f$.$b$ && ($newDownloadProgress$jscomp$inline_934$$ = $eurekaInfo$jscomp$17$$.ota_status.download_progress);
    if ($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$g$ !== $eurekaInfoState$jscomp$inline_933$$.setupState || $newDownloadProgress$jscomp$inline_934$$ !== $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$i$) {
      $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$g$ = $eurekaInfoState$jscomp$inline_933$$.setupState, $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$i$ = $newDownloadProgress$jscomp$inline_934$$, $castApp$log$info$$($castApp$core$OtaState$logger_$$, "OTA status: setup_state= " + $eurekaInfoState$jscomp$inline_933$$.setupState + ", progress=" + $newDownloadProgress$jscomp$inline_934$$ + "%"), 60 === $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$g$ && 
      $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$h$();
    }
    $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$, 3E3);
  }), function($err$jscomp$49_ssdpUdn$jscomp$3$$) {
    $castApp$utils$rethrowIfCancellationError$$($err$jscomp$49_ssdpUdn$jscomp$3$$);
    $castApp$log$infoWithCause$$($castApp$core$OtaState$logger_$$, $err$jscomp$49_ssdpUdn$jscomp$3$$, "Request #" + $requestCounter$$ + " failed.");
    $err$jscomp$49_ssdpUdn$jscomp$3$$ = $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$f$.getState().eurekaInfoState.ssdpUdn;
    var $env$jscomp$7$$ = $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$b$.$b$;
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$c$, $castApp$core$waitForDeviceReboot$$($err$jscomp$49_ssdpUdn$jscomp$3$$, $env$jscomp$7$$.$c$, $env$jscomp$7$$.$j$, $env$jscomp$7$$.$h$, $env$jscomp$7$$.window)).then($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$h$.bind($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$), 
    $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$l$.bind($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$));
  });
};
$castApp$core$OtaState$$.prototype.$h$ = function $$castApp$core$OtaState$$$$$h$$() {
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$b$, 31);
  var $messenger$jscomp$5$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_waitForMessage$$($messenger$jscomp$5$$, "OtaUpdate.Proceed")).then(function() {
    $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$(this.$b$);
  }.bind(this));
  $messenger$jscomp$5$$.sendMessage(new $castApp$protocol$MessageWithDeviceType$$("OtaUpdate.Done", $JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$b$)));
};
$castApp$core$OtaState$$.prototype.$l$ = function $$castApp$core$OtaState$$$$$l$$() {
  $castApp$log$info$$($castApp$core$OtaState$logger_$$, "Gave up on ever seeing the device.");
};
var $castApp$core$SetupStateManager$$ = function $$castApp$core$SetupStateManager$$$($env$jscomp$8$$, $ui$jscomp$2$$, $storedSession$$) {
  this.$g$ = new $castApp$StartStoppable$$(this.$o$.bind(this), this.$m$.bind(this));
  this.$b$ = $env$jscomp$8$$;
  this.$l$ = $ui$jscomp$2$$;
  this.$c$ = $storedSession$$;
  this.$f$ = null;
  this.$j$ = new $goog$events$EventTarget$$;
  $ui$jscomp$2$$.$b$.$b$.addListener("RestartSetup", this.$s$.bind(this));
  $ui$jscomp$2$$.$b$.$b$.addListener("GoToDeviceList", this.$b$.$g$.bind(this.$b$));
};
$castApp$core$SetupStateManager$$.prototype.start = function $$castApp$core$SetupStateManager$$$$start$() {
  return this.$g$.start();
};
$castApp$core$SetupStateManager$$.prototype.stop = function $$castApp$core$SetupStateManager$$$$stop$() {
  return this.$g$.stop();
};
var $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$) {
  var $commonState$jscomp$7_eventPageMsg$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$), $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$ = $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$c$.setupApiClientState || null, $deviceIpAddress$jscomp$3$$ = $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.deviceIpAddress;
  $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$ = $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.eurekaInfoState;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$, $commonState$jscomp$7_eventPageMsg$$.device && $commonState$jscomp$7_eventPageMsg$$.device.bssid ? 25 : 28);
  $commonState$jscomp$7_eventPageMsg$$ = new $castApp$eventPage$Message$$("deviceJustSetUp");
  $commonState$jscomp$7_eventPageMsg$$.deviceJustSetUp = new $castApp$eventPage$Message$DeviceJustSetUp$$($deviceIpAddress$jscomp$3$$, $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.name, $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.ssdpUdn, $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.modelName);
  var $capabilities$$ = new $castApp$eventPage$Message$DeviceCapabilities$$;
  $capabilities$$.audioOutSupported = !0;
  $capabilities$$.videoOutSupported = !!$eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.features.supportsDisplay;
  $commonState$jscomp$7_eventPageMsg$$.deviceJustSetUp.capabilities = $capabilities$$;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$b$.$m$.setItem("showDeviceBanner", $deviceIpAddress$jscomp$3$$);
  $castApp$core$storage$removeSetupSession$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$b$.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$c$);
  $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$g$, $castApp$utils$setPromiseExpiration$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$b$.$j$.sendMessage($commonState$jscomp$7_eventPageMsg$$), 10000)), function() {
    $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.stop(), function() {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$b$.$g$();
    });
  });
}, $JSCompiler_StaticMethods_getProtocolDeviceType$$ = function $$JSCompiler_StaticMethods_getProtocolDeviceType$$$($JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$) {
  return ($JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$ = $JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$.$c$.commonState && $JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$.$c$.commonState.device && $JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$.$c$.commonState.device.type) ? $castApp$core$utils$getProtocolDeviceType$$($JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$) : 
  2;
}, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$) {
  var $stateIo$$ = {read:function() {
    return $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$c$.setupApiClientState || null;
  }, write:$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$i$.bind($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$)};
  return $castApp$core$SetupApiClient$create$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$b$.$h$, $stateIo$$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$b$.$i$());
};
$castApp$core$SetupStateManager$$.prototype.$i$ = function $$castApp$core$SetupStateManager$$$$$i$$($newStateData$$) {
  $newStateData$$ ? this.$c$.setupApiClientState = $newStateData$$ : delete this.$c$.setupApiClientState;
  $castApp$core$storage$writeSetupSession$$(this.$b$.$b$, this.$c$);
};
var $JSCompiler_StaticMethods_readCommonState$$ = function $$JSCompiler_StaticMethods_readCommonState$$$($JSCompiler_StaticMethods_readCommonState$self$$) {
  return $JSCompiler_StaticMethods_readCommonState$self$$.$c$.commonState || new $castApp$core$storage$CommonSetupState$$;
}, $JSCompiler_StaticMethods_writeCommonState$$ = function $$JSCompiler_StaticMethods_writeCommonState$$$($JSCompiler_StaticMethods_writeCommonState$self$$, $newStateData$jscomp$1$$) {
  $newStateData$jscomp$1$$ ? $JSCompiler_StaticMethods_writeCommonState$self$$.$c$.commonState = $newStateData$jscomp$1$$ : delete $JSCompiler_StaticMethods_writeCommonState$self$$.$c$.commonState;
  $castApp$core$storage$writeSetupSession$$($JSCompiler_StaticMethods_writeCommonState$self$$.$b$.$b$, $JSCompiler_StaticMethods_writeCommonState$self$$.$c$);
}, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$, $newStateData$jscomp$3$$) {
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$f$.stop().then(function() {
    if ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$c$.states) {
      var $states$$ = $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$c$.states;
      $states$$.all = $states$$.all.slice(0, $states$$.current + 1);
      $states$$.all.push($newStateData$jscomp$3$$);
      $states$$.current = $states$$.all.length - 1;
    } else {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$c$.states = new $castApp$core$storage$SetupStateCollection$$(0, [$newStateData$jscomp$3$$]);
    }
    $castApp$core$storage$writeSetupSession$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$b$.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$c$);
    $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$f$ = $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$b$.$l$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$, $newStateData$jscomp$3$$.type);
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$j$, new $castApp$core$SetupStateManager$NewStateEvent$$($newStateData$jscomp$3$$.type));
    $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$g$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$f$.start()), function($err$jscomp$50$$) {
      if ($err$jscomp$50$$ instanceof $goog$Promise$CancellationError$$) {
        switch($castApp$log$info$$($castApp$core$SetupStateManager$logger_$$, "State " + $newStateData$jscomp$3$$.type + " start canceled."), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$g$.getState()) {
          case "starting":
          case "started":
            $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$h$();
        }
      } else {
        $castApp$log$errorWithCause$$($castApp$core$SetupStateManager$logger_$$, $err$jscomp$50$$, 'Failed to start state "' + $newStateData$jscomp$3$$.type + '".'), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$h$();
      }
    });
  });
};
$castApp$core$SetupStateManager$$.prototype.$h$ = function $$castApp$core$SetupStateManager$$$$$h$$() {
  $castApp$log$info$$($castApp$core$SetupStateManager$logger_$$, "Entering Generic Setup Failure state.");
  $castApp$core$storage$removeSetupSession$$(this.$b$.$b$, this.$c$);
  this.$l$.$b$.$b$.sendMessage(new $castApp$protocol$MessageWithDeviceType$$("ShowGenericSetupError", $JSCompiler_StaticMethods_getProtocolDeviceType$$(this)));
  $JSCompiler_StaticMethods_thenCatch$$(this.stop(), $goog$nullFunction$$);
};
var $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$self$$, $eventType$jscomp$14$$) {
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$self$$.$b$.$f$.$c$($eventType$jscomp$14$$);
};
$castApp$core$SetupStateManager$$.prototype.$o$ = function $$castApp$core$SetupStateManager$$$$$o$$() {
  var $commonState$jscomp$8_stateType$jscomp$1$$ = this.$c$.states.all[this.$c$.states.current].type;
  this.$f$ = this.$b$.$l$(this, $commonState$jscomp$8_stateType$jscomp$1$$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$j$, new $castApp$core$SetupStateManager$NewStateEvent$$($commonState$jscomp$8_stateType$jscomp$1$$));
  null === this.$b$.$b$.getItem("setupNoCountryDetection") && ($commonState$jscomp$8_stateType$jscomp$1$$ = $JSCompiler_StaticMethods_readCommonState$$(this), $commonState$jscomp$8_stateType$jscomp$1$$.country || $commonState$jscomp$8_stateType$jscomp$1$$.connectedHotSpotBssid || $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$g$, this.$l$.$b$.$b$.sendRequest(new $castApp$protocol$DetectCountry$Request$$)).then(function($rawMsg$jscomp$25$$) {
    var $commonState$jscomp$9$$ = $JSCompiler_StaticMethods_readCommonState$$(this);
    $commonState$jscomp$9$$.country || ($commonState$jscomp$9$$.country = $rawMsg$jscomp$25$$.countryCode, $JSCompiler_StaticMethods_writeCommonState$$(this, $commonState$jscomp$9$$));
  }.bind(this)));
  return this.$f$.start();
};
$castApp$core$SetupStateManager$$.prototype.$m$ = function $$castApp$core$SetupStateManager$$$$$m$$() {
  var $currentState$$ = this.$f$;
  this.$f$ = null;
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$j$, new $castApp$core$SetupStateManager$NewStateEvent$$(null));
  return $currentState$$.stop();
};
$castApp$core$SetupStateManager$$.prototype.$s$ = function $$castApp$core$SetupStateManager$$$$$s$$() {
  $castApp$core$storage$removeSetupSession$$(this.$b$.$b$, this.$c$);
  this.$b$.$o$();
};
var $castApp$core$SetupStateManager$NewStateEvent$$ = function $$castApp$core$SetupStateManager$NewStateEvent$$$($state$jscomp$21$$) {
  $goog$events$Event$$.call(this, "newState");
  this.state = $state$jscomp$21$$;
};
$goog$inherits$$($castApp$core$SetupStateManager$NewStateEvent$$, $goog$events$Event$$);
var $castApp$core$SetupStateManager$logger_$$ = $castApp$log$getLogger$$("core.SetupStateManager");
var $castApp$core$SetupStartState$$ = function $$castApp$core$SetupStartState$$$($stateManager$jscomp$9$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$9$$, this.$A$.bind(this), this.$w$.bind(this));
  this.$f$ = 1;
  this.$g$ = this.$i$ = null;
  this.$h$ = new $goog$structs$Map$$;
  this.$j$ = new $goog$structs$Map$$;
  this.$l$ = null;
  this.$u$ = this.$C$.bind(this);
  this.$m$ = this.$v$.bind(this);
};
$goog$inherits$$($castApp$core$SetupStartState$$, $castApp$core$SetupState$$);
var $castApp$core$SetupStartState$logger_$$ = $castApp$log$getLogger$$("core.SetupStartState");
$castApp$core$SetupStartState$$.prototype.$A$ = function $$castApp$core$SetupStartState$$$$$A$$() {
  var $self$jscomp$44$$ = this;
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$44$$, 1);
  $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$44$$).addListener("SetupStart.Proceed", $self$jscomp$44$$.$u$);
  var $startTasks$$ = [];
  $startTasks$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$44$$.$c$, this.$b$.$b$.$f$.$b$()).then(function($optIn$$) {
    $self$jscomp$44$$.$l$ = $optIn$$;
  }));
  var $commonState$jscomp$10$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$44$$.$b$);
  $commonState$jscomp$10$$.device && !$commonState$jscomp$10$$.pinned && ($commonState$jscomp$10$$.device = void 0, $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$44$$.$b$, $commonState$jscomp$10$$));
  var $env$jscomp$9_wiFiEventTarget$$ = $self$jscomp$44$$.$b$.$b$;
  $self$jscomp$44$$.$g$ = new $castApp$core$NewDeviceMonitorImpl$$($env$jscomp$9_wiFiEventTarget$$.$c$, $env$jscomp$9_wiFiEventTarget$$.$j$, $env$jscomp$9_wiFiEventTarget$$.$h$, $env$jscomp$9_wiFiEventTarget$$.window);
  $env$jscomp$9_wiFiEventTarget$$ = $self$jscomp$44$$.$g$.$g$.$b$;
  $env$jscomp$9_wiFiEventTarget$$.listen("added", $self$jscomp$44$$.$o$, !0, $self$jscomp$44$$);
  $env$jscomp$9_wiFiEventTarget$$.listen("connected", $self$jscomp$44$$.$s$, !0, $self$jscomp$44$$);
  $self$jscomp$44$$.$g$.listen("devices", this.$m$);
  $startTasks$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$44$$.$c$, $self$jscomp$44$$.$g$.start()));
  $JSCompiler_StaticMethods_waitUntilStarted$$($self$jscomp$44$$.$c$).then(function() {
    $commonState$jscomp$10$$.pinned && $commonState$jscomp$10$$.device ? ($self$jscomp$44$$.$i$ = $commonState$jscomp$10$$.device, $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$44$$, 5), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$44$$)) : 0 != $self$jscomp$44$$.$j$.$b$ ? $JSCompiler_StaticMethods_chooseEthernetDevice_$$($self$jscomp$44$$, $self$jscomp$44$$.$j$.$__iterator__$(!1).next()) : $goog$iter$every$$($self$jscomp$44$$.$h$, 
    function($hotSpot$$) {
      if ("NotConnected" === $hotSpot$$.ConnectionState) {
        return !0;
      }
      $JSCompiler_StaticMethods_chooseWiFiDevice_$$($self$jscomp$44$$, $hotSpot$$);
      return !1;
    }) && ($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$44$$, 2), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$44$$), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$44$$.$c$, $goog$Timer$promise$$(5E3)).then($self$jscomp$44$$.$B$.bind($self$jscomp$44$$)));
  });
  return $goog$Promise$all$$($startTasks$$);
};
$castApp$core$SetupStartState$$.prototype.$w$ = function $$castApp$core$SetupStartState$$$$$w$$() {
  this.$f$ = 1;
  this.$i$ = null;
  this.$h$ = new $goog$structs$Map$$;
  this.$j$ = new $goog$structs$Map$$;
  this.$l$ = null;
  $JSCompiler_StaticMethods_getUiMessenger$$(this).removeListener("SetupStart.Proceed", this.$u$);
  if (!this.$g$) {
    return $goog$Promise$resolve$$();
  }
  var $deviceMonitor$jscomp$2$$ = this.$g$;
  this.$g$ = null;
  var $wiFiEventTarget$jscomp$1$$ = $deviceMonitor$jscomp$2$$.$g$.$b$;
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($wiFiEventTarget$jscomp$1$$, "added", this.$o$, !0, this);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($wiFiEventTarget$jscomp$1$$, "connected", this.$s$, !0, this);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$($deviceMonitor$jscomp$2$$, "devices", this.$m$);
  return $deviceMonitor$jscomp$2$$.stop();
};
var $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$self$$, $newSubState$jscomp$1$$) {
  $newSubState$jscomp$1$$ !== $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$self$$.$f$ && ($castApp$log$info$$($castApp$core$SetupStartState$logger_$$, "New SubState: " + $newSubState$jscomp$1$$), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$self$$.$f$ = $newSubState$jscomp$1$$);
}, $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$) {
  var $messenger$jscomp$6$$ = $JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$);
  switch($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$.$f$) {
    case 1:
    case 2:
      $messenger$jscomp$6$$.sendMessage(new $castApp$protocol$DeviceDiscovery$ShowScanner$$(!1));
      break;
    case 3:
      $messenger$jscomp$6$$.sendMessage(new $castApp$protocol$DeviceDiscovery$ShowScanner$$(!0));
      break;
    case 4:
      $messenger$jscomp$6$$.sendMessage(new $castApp$protocol$Message$$("DeviceDiscovery.NotFound"));
      break;
    case 5:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 1);
      break;
    case 6:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 2);
      break;
    case 7:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 3);
      break;
    case 8:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 4);
  }
}, $JSCompiler_StaticMethods_sendShowDeviceMessage_$$ = function $$JSCompiler_StaticMethods_sendShowDeviceMessage_$$$($JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$, $msg$jscomp$745_state$jscomp$22$$) {
  var $deviceType$jscomp$10$$ = $castApp$core$utils$getProtocolDeviceType$$($JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$i$.type);
  $msg$jscomp$745_state$jscomp$22$$ = new $castApp$protocol$SetupStart$ShowDevice$$($msg$jscomp$745_state$jscomp$22$$, $deviceType$jscomp$10$$, $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$i$.name);
  $msg$jscomp$745_state$jscomp$22$$.otherDevicesExist = 1 < $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$h$.$b$ + $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$j$.$b$;
  $msg$jscomp$745_state$jscomp$22$$.analyticsOptIn = 3 !== $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$l$;
  $JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$).sendMessage($msg$jscomp$745_state$jscomp$22$$);
};
$castApp$core$SetupStartState$$.prototype.$B$ = function $$castApp$core$SetupStartState$$$$$B$$() {
  if (2 === this.$f$) {
    if ($castApp$log$info$$($castApp$core$SetupStartState$logger_$$, "Initial scan completed."), 0 === this.$h$.$b$) {
      $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$(this, 3), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$(this), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $goog$Timer$promise$$(45E3)).then(function() {
        3 === this.$f$ && (this.$g$.stop(), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$(this, 4), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$(this));
      }.bind(this));
    } else {
      var $strongestHotSpot$$ = $goog$iter$reduce$$(this.$h$, function($current$jscomp$6$$, $next$jscomp$2$$) {
        return "NotConnected" !== $next$jscomp$2$$.ConnectionState ? $next$jscomp$2$$ : ($next$jscomp$2$$.WiFi && $next$jscomp$2$$.WiFi.SignalStrength || -Infinity) < ($current$jscomp$6$$ && $current$jscomp$6$$.WiFi && $current$jscomp$6$$.WiFi.SignalStrength || -Infinity) ? $current$jscomp$6$$ : $next$jscomp$2$$;
      });
      $JSCompiler_StaticMethods_chooseWiFiDevice_$$(this, $strongestHotSpot$$);
    }
  }
};
var $JSCompiler_StaticMethods_chooseWiFiDevice_$$ = function $$JSCompiler_StaticMethods_chooseWiFiDevice_$$$($JSCompiler_StaticMethods_chooseWiFiDevice_$self$$, $hotSpot$jscomp$1_wiFi$jscomp$2$$) {
  $hotSpot$jscomp$1_wiFi$jscomp$2$$ = $hotSpot$jscomp$1_wiFi$jscomp$2$$ && $hotSpot$jscomp$1_wiFi$jscomp$2$$.WiFi;
  var $ssid$jscomp$13$$ = $hotSpot$jscomp$1_wiFi$jscomp$2$$.SSID, $parsedSsid$jscomp$2$$ = $castApp$core$utils$parseCastDeviceSsid$$($ssid$jscomp$13$$);
  $JSCompiler_StaticMethods_chooseWiFiDevice_$self$$.$i$ = new $castApp$core$storage$DeviceToSetUp$$({name:$parsedSsid$jscomp$2$$.name, type:$parsedSsid$jscomp$2$$.type, ssid:$ssid$jscomp$13$$, bssid:$hotSpot$jscomp$1_wiFi$jscomp$2$$.BSSID});
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($JSCompiler_StaticMethods_chooseWiFiDevice_$self$$, 5);
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($JSCompiler_StaticMethods_chooseWiFiDevice_$self$$);
}, $JSCompiler_StaticMethods_chooseEthernetDevice_$$ = function $$JSCompiler_StaticMethods_chooseEthernetDevice_$$$($JSCompiler_StaticMethods_chooseEthernetDevice_$self$$, $device$jscomp$19$$) {
  var $eurekaInfo$jscomp$19$$ = $device$jscomp$19$$.$setupApiClient$.getState().eurekaInfoState;
  $JSCompiler_StaticMethods_chooseEthernetDevice_$self$$.$i$ = new $castApp$core$storage$DeviceToSetUp$$({name:$eurekaInfo$jscomp$19$$.name, type:$eurekaInfo$jscomp$19$$.deviceType, ipAddress:$device$jscomp$19$$.ipAddress});
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($JSCompiler_StaticMethods_chooseEthernetDevice_$self$$, 5);
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($JSCompiler_StaticMethods_chooseEthernetDevice_$self$$);
};
$castApp$core$SetupStartState$$.prototype.$o$ = function $$castApp$core$SetupStartState$$$$$o$$($event$jscomp$26_hotspot$$) {
  $event$jscomp$26_hotspot$$ = $event$jscomp$26_hotspot$$.properties;
  var $hotSpotIsNew$$ = !$JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.$h$, $event$jscomp$26_hotspot$$.GUID);
  this.$h$.set($event$jscomp$26_hotspot$$.GUID, $event$jscomp$26_hotspot$$);
  5 === this.$f$ ? $hotSpotIsNew$$ && $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$(this) : 3 === this.$f$ && $JSCompiler_StaticMethods_chooseWiFiDevice_$$(this, $event$jscomp$26_hotspot$$);
};
$castApp$core$SetupStartState$$.prototype.$s$ = function $$castApp$core$SetupStartState$$$$$s$$($event$jscomp$27$$) {
  2 !== this.$f$ && 3 !== this.$f$ || $JSCompiler_StaticMethods_chooseWiFiDevice_$$(this, $event$jscomp$27$$.properties);
};
$castApp$core$SetupStartState$$.prototype.$v$ = function $$castApp$core$SetupStartState$$$$$v$$($event$jscomp$28$$) {
  var $self$jscomp$45$$ = this, $newDevice$$ = null;
  $event$jscomp$28$$.devices.filter(function($device$jscomp$20_eurekaInfo$jscomp$20$$) {
    $device$jscomp$20_eurekaInfo$jscomp$20$$ = $device$jscomp$20_eurekaInfo$jscomp$20$$.$setupApiClient$.getState().eurekaInfoState;
    return $device$jscomp$20_eurekaInfo$jscomp$20$$.features.supportsSetup && $device$jscomp$20_eurekaInfo$jscomp$20$$.ethernetConnected && !$device$jscomp$20_eurekaInfo$jscomp$20$$.tosAccepted;
  }).forEach(function($device$jscomp$21$$) {
    $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($self$jscomp$45$$.$j$, $device$jscomp$21$$.ipAddress) || ($self$jscomp$45$$.$j$.set($device$jscomp$21$$.ipAddress, $device$jscomp$21$$), $newDevice$$ = $newDevice$$ || $device$jscomp$21$$);
  });
  $newDevice$$ && (2 === $self$jscomp$45$$.$f$ || 3 === $self$jscomp$45$$.$f$ ? $JSCompiler_StaticMethods_chooseEthernetDevice_$$($self$jscomp$45$$, $newDevice$$) : 5 === $self$jscomp$45$$.$f$ && $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$45$$));
};
$castApp$core$SetupStartState$$.prototype.$C$ = function $$castApp$core$SetupStartState$$$$$C$$() {
  var $self$jscomp$46$$ = this;
  5 !== $self$jscomp$46$$.$f$ && 8 !== $self$jscomp$46$$.$f$ || $JSCompiler_StaticMethods_requireTosAcceptance_$$($self$jscomp$46$$).then(function() {
    var $commonState$jscomp$11$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$46$$.$b$);
    $commonState$jscomp$11$$.device = $self$jscomp$46$$.$i$;
    $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$46$$.$b$, $commonState$jscomp$11$$);
    if ($commonState$jscomp$11$$.device.bssid) {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$46$$.$b$, 3), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$46$$.$b$, new $castApp$core$storage$SetupState$$(2));
    } else {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$46$$.$b$, 27);
      $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$46$$, 7);
      $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$46$$);
      var $env$jscomp$10$$ = $self$jscomp$46$$.$b$.$b$;
      $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$46$$.$c$, $castApp$core$SetupApiClient$create$$($env$jscomp$10$$.$h$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$($commonState$jscomp$11$$.device.ipAddress), $env$jscomp$10$$.$i$())).then(function($setupApiClient$jscomp$14$$) {
        $self$jscomp$46$$.$b$.$i$($setupApiClient$jscomp$14$$.getState());
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$46$$.$b$, 27);
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$46$$.$b$, new $castApp$core$storage$SetupState$$(5));
      }), function() {
        $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$46$$, 8);
        $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$46$$);
      });
    }
  });
};
var $JSCompiler_StaticMethods_requireTosAcceptance_$$ = function $$JSCompiler_StaticMethods_requireTosAcceptance_$$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$) {
  var $localStorage$jscomp$2$$ = $JSCompiler_StaticMethods_requireTosAcceptance_$self$$.$b$.$b$.$b$;
  if (null !== $localStorage$jscomp$2$$.getItem("setupTosAccepted")) {
    return $goog$Promise$resolve$$();
  }
  var $analytics$jscomp$3$$ = $JSCompiler_StaticMethods_requireTosAcceptance_$self$$.$b$.$b$.$f$, $promise$jscomp$15$$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$.$c$, $JSCompiler_StaticMethods_waitForMessage$$($JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$), "SetupStart.TosAccepted")).then(function($rawMsg$jscomp$26$$) {
    $analytics$jscomp$3$$.$i$($rawMsg$jscomp$26$$.analyticsOptIn);
    $localStorage$jscomp$2$$.setItem("setupTosAccepted", "");
  }.bind($JSCompiler_StaticMethods_requireTosAcceptance_$self$$));
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$, 6);
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$);
  return $promise$jscomp$15$$;
};
var $castApp$core$DeviceWiFiMonitor$$ = function $$castApp$core$DeviceWiFiMonitor$$$($setupApiClient$jscomp$15$$) {
  this.$g$ = $setupApiClient$jscomp$15$$;
  this.$c$ = new $goog$events$EventTarget$$;
  this.networks = new $goog$structs$Map$$;
  this.$f$ = !1;
  this.$b$ = new $castApp$StartStoppable$$(function() {
    $JSCompiler_StaticMethods_runScanIteration_$$(this);
    return $goog$Promise$resolve$$();
  }.bind(this), function() {
    this.networks.clear();
    this.$f$ = !1;
    return $goog$Promise$resolve$$();
  }.bind(this));
};
$castApp$core$DeviceWiFiMonitor$$.prototype.start = function $$castApp$core$DeviceWiFiMonitor$$$$start$() {
  return this.$b$.start();
};
$castApp$core$DeviceWiFiMonitor$$.prototype.stop = function $$castApp$core$DeviceWiFiMonitor$$$$stop$() {
  return this.$b$.stop();
};
var $JSCompiler_StaticMethods_runScanIteration_$$ = function $$JSCompiler_StaticMethods_runScanIteration_$$$($JSCompiler_StaticMethods_runScanIteration_$self$$) {
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$b$, $JSCompiler_StaticMethods_postScanWiFi$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$g$)).then(function() {
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$b$, $goog$Timer$promise$$(3E3));
  }).then(function() {
    var $scanData$$ = new $castApp$core$DeviceWiFiMonitor$ScanData_$$;
    $JSCompiler_StaticMethods_runScanIteration_$self$$.$h$($scanData$$);
    return $scanData$$.$resolver$.$b$;
  }).then($JSCompiler_StaticMethods_runScanIteration_$self$$.$i$.bind($JSCompiler_StaticMethods_runScanIteration_$self$$)).then(function() {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$b$, $goog$Timer$promise$$(1E3));
  }).then(function() {
    $JSCompiler_StaticMethods_runScanIteration_$$($JSCompiler_StaticMethods_runScanIteration_$self$$);
  }), function($err$jscomp$51$$) {
    $castApp$utils$rethrowIfCancellationError$$($err$jscomp$51$$);
    $castApp$log$errorWithCause$$($castApp$core$DeviceWiFiMonitor$logger_$$, $err$jscomp$51$$, "Device Wi-Fi scanning failed with.");
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$c$, new $castApp$core$DeviceWiFiMonitor$ErrorEvent$$($err$jscomp$51$$));
    $JSCompiler_StaticMethods_runScanIteration_$self$$.stop();
  });
};
$castApp$core$DeviceWiFiMonitor$$.prototype.$h$ = function $$castApp$core$DeviceWiFiMonitor$$$$$h$$($scanData$jscomp$1$$) {
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $JSCompiler_StaticMethods_getScanResults$$(this.$g$)).then(this.$j$.bind(this, $scanData$jscomp$1$$)).then(function() {
    3 === $scanData$jscomp$1$$.$b$ ? $scanData$jscomp$1$$.$resolver$.$c$($scanData$jscomp$1$$.networks) : $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $goog$Timer$promise$$(2E3)).then(this.$h$.bind(this, $scanData$jscomp$1$$));
  }.bind(this)), function($err$jscomp$52$$) {
    $scanData$jscomp$1$$.$resolver$.$f$($err$jscomp$52$$);
  });
};
$castApp$core$DeviceWiFiMonitor$$.prototype.$j$ = function $$castApp$core$DeviceWiFiMonitor$$$$$j$$($scanData$jscomp$2$$, $scanResultsResponse$$) {
  var $scanNetworksAdded$$ = !1, $newNetworkFound$$ = !1;
  $scanResultsResponse$$.filter(function($scanResult$$) {
    return 1 !== $scanResult$$.wpa_auth ? !0 : !$castApp$core$utils$isEurekaHotSpotBssid$$($scanResult$$.bssid);
  }).forEach(function($scanResult$jscomp$1$$) {
    var $networkId$$ = $castApp$core$DeviceWiFiMonitor$computeNetworkId$$($scanResult$jscomp$1$$), $network$jscomp$5$$ = $scanData$jscomp$2$$.networks.get($networkId$$);
    $network$jscomp$5$$ ? $JSCompiler_StaticMethods_updateFromScanResult$$($network$jscomp$5$$, $scanResult$jscomp$1$$) : ($network$jscomp$5$$ = new $castApp$core$DeviceWiFiMonitor$Network$$($scanResult$jscomp$1$$), $scanData$jscomp$2$$.networks.set($networkId$$, $network$jscomp$5$$), $scanNetworksAdded$$ = !0, $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.networks, $networkId$$) || (this.networks.set($networkId$$, $network$jscomp$5$$), $newNetworkFound$$ = !0));
  }.bind(this));
  $scanData$jscomp$2$$.$b$ = $scanNetworksAdded$$ ? 0 : $scanData$jscomp$2$$.$b$ + 1;
  if ($newNetworkFound$$ || !this.$f$) {
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$c$, new $goog$events$Event$$("networksAdded")), this.$f$ = !0;
  }
};
$castApp$core$DeviceWiFiMonitor$$.prototype.$i$ = function $$castApp$core$DeviceWiFiMonitor$$$$$i$$($newNetworks$$) {
  $newNetworks$$.forEach(function($network$jscomp$6$$) {
    $network$jscomp$6$$.$initialScanComplete$ = !0;
  });
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$(this.networks.$getKeys$()), $newNetworks$$.$getKeys$()), function($networkId$jscomp$1$$) {
    var $disappearedNetwork$$ = this.networks.get($networkId$jscomp$1$$);
    $disappearedNetwork$$.$signalLevel$ = -Infinity;
    $newNetworks$$.set($networkId$jscomp$1$$, $disappearedNetwork$$);
  }.bind(this));
  this.networks = $newNetworks$$;
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$c$, new $goog$events$Event$$("scanCompleted"));
};
var $castApp$core$DeviceWiFiMonitor$Network$$ = function $$castApp$core$DeviceWiFiMonitor$Network$$$($scanResult$jscomp$2$$) {
  this.id = $castApp$core$DeviceWiFiMonitor$computeNetworkId$$($scanResult$jscomp$2$$);
  this.ssid = $scanResult$jscomp$2$$.ssid;
  this.$wpaAuth$ = $scanResult$jscomp$2$$.wpa_auth;
  this.$wpaCipher$ = $scanResult$jscomp$2$$.wpa_cipher;
  this.$wpaId$ = $scanResult$jscomp$2$$.wpa_id;
  this.$bssids$ = new $goog$structs$Set$$;
  this.$signalLevel$ = $scanResult$jscomp$2$$.signal_level;
  this.$initialScanComplete$ = this.$has5GhzAccessPoint$ = !1;
  $JSCompiler_StaticMethods_updateFromScanResult$$(this, $scanResult$jscomp$2$$);
}, $JSCompiler_StaticMethods_updateFromScanResult$$ = function $$JSCompiler_StaticMethods_updateFromScanResult$$$($JSCompiler_StaticMethods_updateFromScanResult$self$$, $scanResult$jscomp$3$$) {
  $JSCompiler_StaticMethods_updateFromScanResult$self$$.$bssids$.add($scanResult$jscomp$3$$.bssid);
  $JSCompiler_StaticMethods_updateFromScanResult$self$$.$signalLevel$ = Math.max($JSCompiler_StaticMethods_updateFromScanResult$self$$.$signalLevel$, $scanResult$jscomp$3$$.signal_level);
  $scanResult$jscomp$3$$.ap_list && $scanResult$jscomp$3$$.ap_list.forEach(function($ap$$) {
    this.$bssids$.add($ap$$.bssid);
    this.$signalLevel$ = Math.max(this.$signalLevel$, $ap$$.signal_level);
    this.$has5GhzAccessPoint$ = this.$has5GhzAccessPoint$ || 5000 <= $ap$$.frequency;
  }.bind($JSCompiler_StaticMethods_updateFromScanResult$self$$));
}, $castApp$core$DeviceWiFiMonitor$ErrorEvent$$ = function $$castApp$core$DeviceWiFiMonitor$ErrorEvent$$$() {
  $goog$events$Event$$.call(this, "error");
};
$goog$inherits$$($castApp$core$DeviceWiFiMonitor$ErrorEvent$$, $goog$events$Event$$);
var $castApp$core$DeviceWiFiMonitor$ScanData_$$ = function $$castApp$core$DeviceWiFiMonitor$ScanData_$$$() {
  this.networks = new $goog$structs$Map$$;
  this.$b$ = 0;
  this.$resolver$ = $goog$Promise$withResolver$$();
}, $castApp$core$DeviceWiFiMonitor$computeNetworkId$$ = function $$castApp$core$DeviceWiFiMonitor$computeNetworkId$$$($scanResultMsg$$) {
  return $scanResultMsg$$.wpa_id ? $scanResultMsg$$.wpa_id.toString() : $scanResultMsg$$.ssid + ":" + $scanResultMsg$$.wpa_auth + ":" + $scanResultMsg$$.wpa_cipher;
}, $castApp$core$DeviceWiFiMonitor$logger_$$ = $castApp$log$getLogger$$("core.DeviceWiFiMonitor");
var $castApp$core$WiFiConfigState$$ = function $$castApp$core$WiFiConfigState$$$($stateManager$jscomp$10$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$10$$, this.$v$.bind(this), this.$u$.bind(this));
  this.$i$ = this.$g$ = this.$f$ = this.$h$ = null;
  this.$s$ = this.$j$.bind(this);
  this.$l$ = this.$w$.bind(this);
  this.$o$ = this.$A$.bind(this);
};
$goog$inherits$$($castApp$core$WiFiConfigState$$, $castApp$core$SetupState$$);
var $castApp$core$WiFiConfigState$logger_$$ = $castApp$log$getLogger$$("core.WiFiConfigState");
$castApp$core$WiFiConfigState$$.prototype.$v$ = function $$castApp$core$WiFiConfigState$$$$$v$$() {
  $castApp$log$info$$($castApp$core$WiFiConfigState$logger_$$, "starting");
  var $self$jscomp$48$$ = this;
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$48$$.$c$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($self$jscomp$48$$.$b$)).then(function($messenger$jscomp$7_setupApiClient$jscomp$16$$) {
    $self$jscomp$48$$.$h$ = $messenger$jscomp$7_setupApiClient$jscomp$16$$;
    var $commonState$jscomp$12_result$jscomp$69$$ = null;
    $messenger$jscomp$7_setupApiClient$jscomp$16$$ = $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$48$$);
    $commonState$jscomp$12_result$jscomp$69$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$48$$.$b$);
    $self$jscomp$48$$.$g$ = $commonState$jscomp$12_result$jscomp$69$$.connectWiFi || null;
    if ($self$jscomp$48$$.$g$) {
      var $errorUiStateMessage$$ = $castApp$core$utils$createWiFiConfigUiMessage$$($self$jscomp$48$$.$g$, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$48$$.$b$));
      delete $commonState$jscomp$12_result$jscomp$69$$.connectWiFi;
      $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$48$$.$b$, $commonState$jscomp$12_result$jscomp$69$$);
      2 === $self$jscomp$48$$.$g$.$b$ ? $commonState$jscomp$12_result$jscomp$69$$ = $self$jscomp$48$$.$j$() : ($messenger$jscomp$7_setupApiClient$jscomp$16$$.addListener("WiFiConfig.ErrorAck", $self$jscomp$48$$.$s$), $commonState$jscomp$12_result$jscomp$69$$ = $goog$Promise$resolve$$());
      $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$($self$jscomp$48$$, $errorUiStateMessage$$);
    } else {
      $commonState$jscomp$12_result$jscomp$69$$ = $self$jscomp$48$$.$j$(), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$48$$.$c$, $goog$Timer$promise$$(7000)).then(function() {
        $self$jscomp$48$$.$i$ || $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$($self$jscomp$48$$, new $castApp$protocol$WiFiConfig$Show$$(1, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$48$$.$b$), [], null));
      });
    }
    $messenger$jscomp$7_setupApiClient$jscomp$16$$.addListener("WiFiConfig.Retry", $self$jscomp$48$$.$o$);
    return $commonState$jscomp$12_result$jscomp$69$$;
  });
};
$castApp$core$WiFiConfigState$$.prototype.$j$ = function $$castApp$core$WiFiConfigState$$$$$j$$() {
  if (this.$f$) {
    return $goog$Promise$resolve$$();
  }
  this.$f$ = new $castApp$core$DeviceWiFiMonitor$$(this.$h$);
  this.$f$.$c$.listen("networksAdded", this.$m$, !0, this);
  $JSCompiler_StaticMethods_getUiMessenger$$(this).addListener("WiFiConfig.Connect", this.$l$);
  $JSCompiler_StaticMethods_sendCountryToDevice_$$(this);
  return this.$f$.start();
};
$castApp$core$WiFiConfigState$$.prototype.$u$ = function $$castApp$core$WiFiConfigState$$$$$u$$() {
  this.$i$ = this.$h$ = null;
  var $deviceWiFiMonitor_messenger$jscomp$9$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $deviceWiFiMonitor_messenger$jscomp$9$$.removeListener("WiFiConfig.Connect", this.$l$);
  $deviceWiFiMonitor_messenger$jscomp$9$$.removeListener("WiFiConfig.Retry", this.$o$);
  $deviceWiFiMonitor_messenger$jscomp$9$$.removeListener("WiFiConfig.ErrorAck", this.$s$);
  return this.$f$ ? ($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$unlisten$$(this.$f$.$c$, "networksAdded", this.$m$, !0, this), $deviceWiFiMonitor_messenger$jscomp$9$$ = this.$f$, this.$f$ = null, $deviceWiFiMonitor_messenger$jscomp$9$$.stop()) : $goog$Promise$resolve$$();
};
var $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$ = function $$JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$$($JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$self$$, $msg$jscomp$747$$) {
  $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$self$$.$i$ = $msg$jscomp$747$$;
  $JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$self$$).sendMessage($msg$jscomp$747$$);
};
$castApp$core$WiFiConfigState$$.prototype.$m$ = function $$castApp$core$WiFiConfigState$$$$$m$$() {
  if (this.$i$) {
    $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$WiFiConfig$UpdateNetworks$$(this.$f$.networks.$getValues$().map(function($network$jscomp$7$$) {
      return new $castApp$protocol$WiFiConfig$Network$$($network$jscomp$7$$.id, $network$jscomp$7$$.ssid, $castApp$core$utils$getProtocolSecurity$$($network$jscomp$7$$.$wpaAuth$));
    })));
  } else {
    var $commonState$jscomp$13$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$b$), $originalNetworkBssid$$ = $commonState$jscomp$13$$.originalWiFiNetwork && $commonState$jscomp$13$$.originalWiFiNetwork.bssid, $networksForUi$$ = [], $selectedNetwork$jscomp$1$$ = null;
    $goog$iter$forEach$$(this.$f$.networks, function($network$jscomp$8$$) {
      var $networkForUi$$ = new $castApp$protocol$WiFiConfig$Network$$($network$jscomp$8$$.id, $network$jscomp$8$$.ssid, $castApp$core$utils$getProtocolSecurity$$($network$jscomp$8$$.$wpaAuth$));
      $networksForUi$$.push($networkForUi$$);
      $originalNetworkBssid$$ && $network$jscomp$8$$.$bssids$.contains($originalNetworkBssid$$) && ($selectedNetwork$jscomp$1$$ = $networkForUi$$);
    });
    $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$(this, new $castApp$protocol$WiFiConfig$Show$$(1, $JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$b$), $networksForUi$$, $selectedNetwork$jscomp$1$$));
  }
};
$castApp$core$WiFiConfigState$$.prototype.$w$ = function $$castApp$core$WiFiConfigState$$$$$w$$($rawMsg$jscomp$27$$) {
  var $self$jscomp$50$$ = this, $connectWiFiState$jscomp$1$$ = $JSCompiler_StaticMethods_createConnectWiFiState_$$($self$jscomp$50$$, $rawMsg$jscomp$27$$);
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$50$$.$c$, new $goog$Promise$$(function($resolve$jscomp$16$$) {
    $rawMsg$jscomp$27$$.password ? $resolve$jscomp$16$$($JSCompiler_StaticMethods_encryptPassword_$$($self$jscomp$50$$, $rawMsg$jscomp$27$$.password).then(function($encryptedPassword$$) {
      $connectWiFiState$jscomp$1$$.msg.enc_passwd = $encryptedPassword$$;
    })) : $resolve$jscomp$16$$();
  })).then(function() {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$50$$.$c$, $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$$($self$jscomp$50$$, $connectWiFiState$jscomp$1$$));
  }).then(function($commonState$jscomp$14_warningIsNeeded$$) {
    $commonState$jscomp$14_warningIsNeeded$$ ? ($self$jscomp$50$$.$g$ = $connectWiFiState$jscomp$1$$, $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$($self$jscomp$50$$, new $castApp$protocol$WiFiConfig$Show$$(5, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$50$$.$b$), $self$jscomp$50$$.$i$.networks, $rawMsg$jscomp$27$$.network))) : ($commonState$jscomp$14_warningIsNeeded$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$50$$.$b$), $commonState$jscomp$14_warningIsNeeded$$.connectWiFi = 
    $connectWiFiState$jscomp$1$$, $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$50$$.$b$, $commonState$jscomp$14_warningIsNeeded$$), $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_postConnectWiFi$$($self$jscomp$50$$.$h$, $connectWiFiState$jscomp$1$$.msg), $goog$nullFunction$$), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$50$$.$b$, 15), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$50$$.$b$, 
    new $castApp$core$storage$SetupState$$(7)));
  });
};
var $JSCompiler_StaticMethods_createConnectWiFiState_$$ = function $$JSCompiler_StaticMethods_createConnectWiFiState_$$$($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$, $msg$jscomp$749$$) {
  var $connectWiFiState$jscomp$2$$ = new $castApp$core$storage$ConnectWiFiState$$(new $castApp$core$setupApi$ConnectWiFiMsg$$($msg$jscomp$749$$.network.ssid, $castApp$core$utils$getSetupApiSecurity$$($msg$jscomp$749$$.network.security)));
  $msg$jscomp$749$$.network.id && ($connectWiFiState$jscomp$2$$.$c$ = $msg$jscomp$749$$.network.id, $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$f$ && $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$f$.networks, $msg$jscomp$749$$.network.id) ? ($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$ = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$f$.networks.get($msg$jscomp$749$$.network.id), 
  $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaCipher$ && ($connectWiFiState$jscomp$2$$.msg.wpa_cipher = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaCipher$), $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaId$ && ($connectWiFiState$jscomp$2$$.msg.wpa_id = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaId$)) : 
  $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$g$ && $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$g$.$c$ === $msg$jscomp$749$$.network.id && ($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$ = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$g$.msg, $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_cipher && 
  ($connectWiFiState$jscomp$2$$.msg.wpa_cipher = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_cipher), $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_id && ($connectWiFiState$jscomp$2$$.msg.wpa_id = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_id)));
  return $connectWiFiState$jscomp$2$$;
}, $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$$ = function $$JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$$$($JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$, $connectWiFiState$jscomp$3_network$jscomp$9$$) {
  var $commonState$jscomp$15$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$b$);
  if ("m" !== ($commonState$jscomp$15$$.device && $commonState$jscomp$15$$.device.type)) {
    return $goog$Promise$resolve$$(!1);
  }
  var $networkId$jscomp$2$$ = $connectWiFiState$jscomp$3_network$jscomp$9$$.$c$;
  if (!$networkId$jscomp$2$$) {
    return $goog$Promise$resolve$$(!1);
  }
  if ($connectWiFiState$jscomp$3_network$jscomp$9$$ = $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$f$.networks.get($networkId$jscomp$2$$)) {
    if ($connectWiFiState$jscomp$3_network$jscomp$9$$.$has5GhzAccessPoint$) {
      return $goog$Promise$resolve$$(!1);
    }
    if ($connectWiFiState$jscomp$3_network$jscomp$9$$.$initialScanComplete$) {
      return $goog$Promise$resolve$$(!0);
    }
  }
  return $castApp$utils$waitForEvent$$($JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$f$.$c$, "scanCompleted").then(function() {
    var $network$jscomp$10$$ = $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$f$.networks.get($networkId$jscomp$2$$);
    return $network$jscomp$10$$ && !$network$jscomp$10$$.$has5GhzAccessPoint$;
  });
};
$castApp$core$WiFiConfigState$$.prototype.$A$ = function $$castApp$core$WiFiConfigState$$$$$A$$() {
  var $commonState$jscomp$16$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$b$);
  $commonState$jscomp$16$$.connectWiFi = this.$g$;
  $JSCompiler_StaticMethods_writeCommonState$$(this.$b$, $commonState$jscomp$16$$);
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_postConnectWiFi$$(this.$h$, $commonState$jscomp$16$$.connectWiFi.msg), $goog$nullFunction$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$b$, 15);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$b$, new $castApp$core$storage$SetupState$$(7));
};
var $JSCompiler_StaticMethods_encryptPassword_$$ = function $$JSCompiler_StaticMethods_encryptPassword_$$$($JSCompiler_StaticMethods_encryptPassword_$self$$, $plainTextPassword$$) {
  var $verificationProperties$jscomp$2$$ = $JSCompiler_StaticMethods_encryptPassword_$self$$.$h$.getState().verificationState.verificationProperties;
  return $JSCompiler_StaticMethods_encryptPassword_$self$$.$b$.$b$.$c$.verifyAndEncryptData($verificationProperties$jscomp$2$$, $plainTextPassword$$);
}, $JSCompiler_StaticMethods_sendCountryToDevice_$$ = function $$JSCompiler_StaticMethods_sendCountryToDevice_$$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$) {
  var $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ = $JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$h$.$b$;
  if (!(4 > $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$)) {
    var $country$jscomp$2$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$b$).country, $setEurekaInfoMsg$jscomp$1$$ = null;
    7 > $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ ? ($apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV4$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.location = new $castApp$core$setupApi$EurekaInfoMsgV4$Location$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.location.country_code = $country$jscomp$2$$, $setEurekaInfoMsg$jscomp$1$$ = $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$) : ($apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ = 
    new $castApp$core$setupApi$SetEurekaInfoMsgV7$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.settings = new $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.settings.country_code = $country$jscomp$2$$, $setEurekaInfoMsg$jscomp$1$$ = $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$);
    $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$c$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$h$, $setEurekaInfoMsg$jscomp$1$$)), function($err$jscomp$54$$) {
      $castApp$log$warningWithCause$$($castApp$core$WiFiConfigState$logger_$$, $err$jscomp$54$$, "set_eureka_info failed.");
    });
  }
};
var $castApp$core$WiFiReconnectionState$$ = function $$castApp$core$WiFiReconnectionState$$$($stateManager$jscomp$11$$) {
  var $connectWiFi$jscomp$2$$ = $JSCompiler_StaticMethods_readCommonState$$($stateManager$jscomp$11$$).connectWiFi, $autoSwitchingEnabled$$ = $castApp$core$storage$readAutoNetworkSwitchingFlag$$($stateManager$jscomp$11$$.$b$.$b$);
  $goog$labs$userAgent$util$matchUserAgent$$("Macintosh") && 1 !== $connectWiFi$jscomp$2$$.msg.wpa_auth && ($autoSwitchingEnabled$$ = !1);
  $castApp$core$WiFiSwitchStateBase$$.call(this, $stateManager$jscomp$11$$, $connectWiFi$jscomp$2$$.msg.ssid, null, $autoSwitchingEnabled$$);
  this.$g$ = null;
};
$goog$inherits$$($castApp$core$WiFiReconnectionState$$, $castApp$core$WiFiSwitchStateBase$$);
var $castApp$core$WiFiReconnectionState$LOG_EVENT_MAP_$$ = new $goog$structs$Map$$(1, 20, 2, 21, 3, 22, 4, 23, 5, 24);
$castApp$log$getLogger$$("core.WiFiReconnectionState");
$castApp$core$WiFiReconnectionState$$.prototype.$o$ = function $$castApp$core$WiFiReconnectionState$$$$$o$$() {
  this.$g$ = null;
  return $castApp$core$WiFiReconnectionState$$.$superClass_$.$o$.call(this);
};
var $JSCompiler_StaticMethods_getConnectedIpAddress_$$ = function $$JSCompiler_StaticMethods_getConnectedIpAddress_$$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$) {
  return $JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$g$ ? $goog$Promise$resolve$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$g$) : $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$c$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$b$)).then(function($oldSetupApiClient$$) {
    $JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$g$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($oldSetupApiClient$$).connectedIpAddress;
    return $JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$g$;
  });
};
$JSCompiler_prototypeAlias$$ = $castApp$core$WiFiReconnectionState$$.prototype;
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$$() {
  var $self$jscomp$53$$ = this;
  return $JSCompiler_StaticMethods_getConnectedIpAddress_$$($self$jscomp$53$$).then(function($connectedIpAddress$$) {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$53$$.$c$, $castApp$core$SetupApiClient$create$$($self$jscomp$53$$.$b$.$b$.$h$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$($connectedIpAddress$$)));
  });
};
$JSCompiler_prototypeAlias$$.$showAutoSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showAutoSwitchUi$$($newFailureValue_state$jscomp$23$$) {
  var $commonState$jscomp$18$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$b$), $connectWiFi$jscomp$3$$ = $commonState$jscomp$18$$.connectWiFi;
  $newFailureValue_state$jscomp$23$$ = 2 === $newFailureValue_state$jscomp$23$$ || 3 === $newFailureValue_state$jscomp$23$$ ? 1 : void 0;
  $connectWiFi$jscomp$3$$.$b$ !== $newFailureValue_state$jscomp$23$$ && ($connectWiFi$jscomp$3$$.$b$ = $newFailureValue_state$jscomp$23$$, $JSCompiler_StaticMethods_writeCommonState$$(this.$b$, $commonState$jscomp$18$$));
  $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage($castApp$core$utils$createWiFiConfigUiMessage$$($connectWiFi$jscomp$3$$, $JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$b$)));
};
$JSCompiler_prototypeAlias$$.$showManualSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showManualSwitchUi$$($state$jscomp$24$$) {
  $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$WiFiSwitching$ReconnectWiFi$$($state$jscomp$24$$, $JSCompiler_StaticMethods_readCommonState$$(this.$b$).connectWiFi.msg.ssid));
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$finish$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$finish$$($setupApiClient$jscomp$17$$) {
  this.$b$.$i$($setupApiClient$jscomp$17$$.getState());
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$b$, new $castApp$core$storage$SetupState$$(9));
};
$JSCompiler_prototypeAlias$$.$logEvent$ = function $$JSCompiler_prototypeAlias$$$$logEvent$$($eventType$jscomp$15_logEventType$jscomp$1$$) {
  ($eventType$jscomp$15_logEventType$jscomp$1$$ = $castApp$core$WiFiReconnectionState$LOG_EVENT_MAP_$$.get($eventType$jscomp$15_logEventType$jscomp$1$$)) && $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$b$, $eventType$jscomp$15_logEventType$jscomp$1$$);
};
var $castApp$core$createSetupState$$ = function $$castApp$core$createSetupState$$$($stateManager$jscomp$12$$, $stateType$jscomp$2$$) {
  switch($stateType$jscomp$2$$) {
    case 1:
      return new $castApp$core$SetupStartState$$($stateManager$jscomp$12$$);
    case 2:
      return new $castApp$core$HotSpotConnectionState$$($stateManager$jscomp$12$$);
    case 3:
      return new $castApp$core$CodeConfirmationState$$($stateManager$jscomp$12$$);
    case 4:
      return new $castApp$core$AudioConfirmationState$$($stateManager$jscomp$12$$);
    case 5:
      return new $castApp$core$DeviceConfigState$$($stateManager$jscomp$12$$);
    case 6:
      return new $castApp$core$WiFiConfigState$$($stateManager$jscomp$12$$);
    case 7:
      return new $castApp$core$ConnectWiFiPendingState$$($stateManager$jscomp$12$$);
    case 8:
      return new $castApp$core$WiFiReconnectionState$$($stateManager$jscomp$12$$);
    case 9:
      return new $castApp$core$DeviceFoundState$$($stateManager$jscomp$12$$);
    case 10:
      return new $castApp$core$OtaState$$($stateManager$jscomp$12$$);
    default:
      return $goog$asserts$fail$$("Unsupported setup state: " + $stateType$jscomp$2$$), new $castApp$core$SetupState$$($stateManager$jscomp$12$$, null, null);
  }
};
var $castApp$app$setupManager$$ = null;
$goog$exportSymbol$$("castApp.app.setupManager", $castApp$app$setupManager$$);
var $castApp$app$PageHash_$$ = {$DEVICES$:"devices", $OFFERS$:"offers", $SETUP$:"setup", ERROR:"error"}, $castApp$app$OFFER_REDEMPTION_URL_FILTER_$$ = /^https?:/i, $castApp$app$parseHash_$$ = function $$castApp$app$parseHash_$$$($hash$jscomp$10_retVal$jscomp$6$$) {
  if (!$hash$jscomp$10_retVal$jscomp$6$$ || "#" == $hash$jscomp$10_retVal$jscomp$6$$) {
    return {};
  }
  $hash$jscomp$10_retVal$jscomp$6$$.startsWith("#") && ($hash$jscomp$10_retVal$jscomp$6$$ = $hash$jscomp$10_retVal$jscomp$6$$.slice(1));
  var $ipAddressString_redemptionUrl_splitHash$$ = $hash$jscomp$10_retVal$jscomp$6$$.split("/");
  if (!(0 <= $goog$array$indexOf$$($goog$object$getValues$$($castApp$app$PageHash_$$), $ipAddressString_redemptionUrl_splitHash$$[0]))) {
    return {};
  }
  $hash$jscomp$10_retVal$jscomp$6$$ = {$component$:$ipAddressString_redemptionUrl_splitHash$$[0]};
  if ($ipAddressString_redemptionUrl_splitHash$$[1]) {
    switch($hash$jscomp$10_retVal$jscomp$6$$.$component$) {
      case "devices":
        $ipAddressString_redemptionUrl_splitHash$$ = decodeURIComponent($ipAddressString_redemptionUrl_splitHash$$[1]);
        $goog$net$IpAddress$fromString$$($ipAddressString_redemptionUrl_splitHash$$) && ($hash$jscomp$10_retVal$jscomp$6$$.ipAddress = $ipAddressString_redemptionUrl_splitHash$$);
        break;
      case "setup":
        $hash$jscomp$10_retVal$jscomp$6$$.$setupSessionId$ = $ipAddressString_redemptionUrl_splitHash$$[1];
        break;
      case "offers":
        $ipAddressString_redemptionUrl_splitHash$$ = decodeURIComponent($ipAddressString_redemptionUrl_splitHash$$[1]), $castApp$app$OFFER_REDEMPTION_URL_FILTER_$$.test($ipAddressString_redemptionUrl_splitHash$$) && ($hash$jscomp$10_retVal$jscomp$6$$.$redemptionUrl$ = $ipAddressString_redemptionUrl_splitHash$$);
    }
  }
  return $hash$jscomp$10_retVal$jscomp$6$$;
};
window.addEventListener("hashchange", function($event$jscomp$29_newHash$$) {
  var $oldHash$$ = $goog$Uri$parse$$($event$jscomp$29_newHash$$.oldURL).$h$;
  $event$jscomp$29_newHash$$ = $goog$Uri$parse$$($event$jscomp$29_newHash$$.newURL).$h$;
  $castApp$app$parseHash_$$($oldHash$$).$component$ !== $castApp$app$parseHash_$$($event$jscomp$29_newHash$$).$component$ && location.reload();
});
var $castApp$app$goToDevicesPage_$$ = function $$castApp$app$goToDevicesPage_$$$() {
  window.location.hash = "devices";
}, $castApp$app$goToSetupPage_$$ = function $$castApp$app$goToSetupPage_$$$($setupSessionId$$) {
  window.location.hash = "setup/" + $setupSessionId$$;
}, $castApp$app$goToDeviceSettingsPage_$$ = function $$castApp$app$goToDeviceSettingsPage_$$$($ipAddress$jscomp$11$$) {
  window.location.hash = "devices/" + encodeURIComponent($ipAddress$jscomp$11$$);
}, $castApp$app$goToErrorPage_$$ = function $$castApp$app$goToErrorPage_$$$() {
  window.location.hash = "error";
}, $castApp$app$runSetup_$$ = function $$castApp$app$runSetup_$$$($webview$jscomp$6$$) {
  if ($goog$labs$userAgent$util$matchUserAgent$$("Linux")) {
    $castApp$app$goToErrorPage_$$();
  } else {
    var $analytics$jscomp$4$$ = chrome.metricsPrivate ? new $castApp$core$UmaAnalytics$$(window.localStorage) : new $castApp$core$NullAnalytics$$, $networkingPrivate$$ = chrome.networkingPrivate ? $castApp$core$ChromeNetworkingPrivate_$$.$getInstance$() : null, $env$jscomp$11$$ = new $castApp$core$SetupEnvironment$$(window, $networkingPrivate$$, new $castApp$core$HttpImpl$$, $analytics$jscomp$4$$), $ui$jscomp$3$$ = new $castApp$core$Ui$$($webview$jscomp$6$$), $handleHashChangeEvent$$ = function $$handleHashChangeEvent$$$() {
      var $parsedHash$jscomp$1$$ = $castApp$app$parseHash_$$(window.location.hash);
      if ("setup" === $parsedHash$jscomp$1$$.$component$) {
        var $session$jscomp$7$$ = null;
        if ($parsedHash$jscomp$1$$.$setupSessionId$) {
          if ($castApp$app$setupManager$$ && $castApp$app$setupManager$$.$c$.id === $parsedHash$jscomp$1$$.$setupSessionId$) {
            return;
          }
          $session$jscomp$7$$ = $goog$array$find$$($castApp$core$storage$readAllSetupSessions$$($env$jscomp$11$$.$b$), function($storedSession$jscomp$1$$) {
            return $storedSession$jscomp$1$$.id === $parsedHash$jscomp$1$$.$setupSessionId$;
          });
        }
        $session$jscomp$7$$ || ($session$jscomp$7$$ = new $castApp$core$storage$SetupSession$$($goog$string$getRandomString$$()), $session$jscomp$7$$.states = new $castApp$core$storage$SetupStateCollection$$(0, [new $castApp$core$storage$SetupState$$(1)]), $castApp$core$storage$writeSetupSession$$($env$jscomp$11$$.$b$, $session$jscomp$7$$), window.history.replaceState(null, "", "#setup/" + $session$jscomp$7$$.id));
        $castApp$app$setupManager$$ && $castApp$app$setupManager$$.stop();
        $castApp$app$setupManager$$ = new $castApp$core$SetupStateManager$$($env$jscomp$11$$, $ui$jscomp$3$$, $session$jscomp$7$$);
        $castApp$app$setupManager$$.start();
      }
    };
    $ui$jscomp$3$$.start().then(function() {
      $handleHashChangeEvent$$();
      window.addEventListener("hashchange", $handleHashChangeEvent$$);
    });
  }
}, $castApp$app$runDevices_$$ = function $$castApp$app$runDevices_$$$($webview$jscomp$7$$, $eventPageClient$jscomp$6$$) {
  if ($goog$labs$userAgent$util$matchUserAgent$$("Linux")) {
    $castApp$app$goToErrorPage_$$();
  } else {
    var $ui$jscomp$4$$ = new $castApp$core$Ui$$($webview$jscomp$7$$), $networkingPrivate$jscomp$1$$ = chrome.networkingPrivate ? $castApp$core$ChromeNetworkingPrivate_$$.$getInstance$() : null, $http$jscomp$10$$ = new $castApp$core$HttpImpl$$, $deviceManagerEnv$$ = new $castApp$core$DeviceManagerEnvironment$$(window, $ui$jscomp$4$$, $http$jscomp$10$$, $castApp$app$goToSetupPage_$$, $castApp$app$goToDevicesPage_$$, $castApp$app$goToDeviceSettingsPage_$$, window.location.reload.bind(window.location), 
    new $castApp$core$CastSdkImpl$$, $webview$jscomp$7$$, chrome.i18n.getUILanguage, new $castApp$core$NewDeviceMonitorImpl$$($networkingPrivate$jscomp$1$$, $eventPageClient$jscomp$6$$, $http$jscomp$10$$, window)), $deviceManager$$ = null, $deviceSettings$$ = null, $startDeviceSettings$$ = function $$startDeviceSettings$$$($deviceIpAddress$jscomp$5$$) {
      if (!$deviceSettings$$ || $deviceSettings$$.$j$ !== $deviceIpAddress$jscomp$5$$) {
        var $stopPromise$$ = $deviceManager$$ && $deviceManager$$.stop() || $deviceSettings$$ && $deviceSettings$$.stop() || $goog$Promise$resolve$$();
        $deviceManager$$ = null;
        var $tmpDeviceSettings$$ = $deviceSettings$$ = new $castApp$core$DeviceSettings$$($deviceManagerEnv$$, $deviceIpAddress$jscomp$5$$);
        $stopPromise$$.then(function() {
          $deviceSettings$$ === $tmpDeviceSettings$$ && $JSCompiler_StaticMethods_thenCatch$$($deviceSettings$$.start(), $castApp$app$goToDevicesPage_$$);
        });
      }
    }, $startDeviceManager$$ = function $$startDeviceManager$$$() {
      if (!$deviceManager$$) {
        var $stopPromise$jscomp$1$$ = $deviceSettings$$ && $deviceSettings$$.stop() || $goog$Promise$resolve$$(), $tmpDeviceManager$$ = $deviceManager$$ = new $castApp$core$DeviceManager$$($deviceManagerEnv$$);
        $deviceSettings$$ = null;
        $stopPromise$jscomp$1$$.then(function() {
          $tmpDeviceManager$$ === $deviceManager$$ && $deviceManager$$.start();
        });
      }
    }, $handleHashChangeEvent$jscomp$1$$ = function $$handleHashChangeEvent$jscomp$1$$$() {
      var $parsedHash$jscomp$2$$ = $castApp$app$parseHash_$$(location.hash);
      "devices" === $parsedHash$jscomp$2$$.$component$ && ($parsedHash$jscomp$2$$.ipAddress ? $startDeviceSettings$$($parsedHash$jscomp$2$$.ipAddress) : $startDeviceManager$$());
    };
    $ui$jscomp$4$$.start().then(function() {
      $handleHashChangeEvent$jscomp$1$$();
      window.addEventListener("hashchange", $handleHashChangeEvent$jscomp$1$$);
    });
  }
}, $castApp$app$runOfferScanner_$$ = function $$castApp$app$runOfferScanner_$$$($analytics$jscomp$5_webview$jscomp$8$$, $eventPageClient$jscomp$7$$) {
  var $ui$jscomp$5$$ = new $castApp$core$Ui$$($analytics$jscomp$5_webview$jscomp$8$$);
  $analytics$jscomp$5_webview$jscomp$8$$ = chrome.metricsPrivate ? new $castApp$core$UmaAnalytics$$(window.localStorage) : new $castApp$core$NullAnalytics$$;
  var $offersEnv$$ = new $castApp$core$offers$Environment$$(window, $ui$jscomp$5$$, $eventPageClient$jscomp$7$$, new $castApp$core$HttpImpl$$, $analytics$jscomp$5_webview$jscomp$8$$);
  $ui$jscomp$5$$.start().then(function() {
    var $uiMessenger$jscomp$4$$ = $ui$jscomp$5$$.$b$.$b$, $scanners$$ = new $goog$structs$Map$$;
    $uiMessenger$jscomp$4$$.addListener("Offers.Scan", function($rawMsg$jscomp$29_scanner$$) {
      var $scanId$jscomp$1$$ = $rawMsg$jscomp$29_scanner$$.scanId;
      $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($scanners$$, $scanId$jscomp$1$$) || ($rawMsg$jscomp$29_scanner$$ = new $castApp$core$offers$Scan$$($offersEnv$$, $scanId$jscomp$1$$), $scanners$$.set($scanId$jscomp$1$$, $rawMsg$jscomp$29_scanner$$), $castApp$utils$waitForEvent$$($rawMsg$jscomp$29_scanner$$.$g$.$c$, "stopped").then(function() {
        $scanners$$.remove($scanId$jscomp$1$$);
      }), $rawMsg$jscomp$29_scanner$$.start());
    });
    $uiMessenger$jscomp$4$$.addListener("Offers.Redeem", function($rawMsg$jscomp$30$$) {
      var $escapedRedemptionUrl$$ = encodeURIComponent($rawMsg$jscomp$30$$.url);
      $castApp$app$findOfferRedemptionTabs_$$($escapedRedemptionUrl$$).then(function($tabs$$) {
        0 === $tabs$$.length ? chrome.tabs.create({url:"chrome://cast/#offers/" + $escapedRedemptionUrl$$, active:!0}) : (chrome.tabs.update($tabs$$[0].tabId, {active:!0}), chrome.windows.update($tabs$$[0].windowId, {active:!0}));
      });
    });
    $uiMessenger$jscomp$4$$.addListener("Offers.AnalyticsEvent", function($rawMsg$jscomp$31$$) {
      $offersEnv$$.$f$.$g$($rawMsg$jscomp$31$$);
    });
    $uiMessenger$jscomp$4$$.sendMessage(new $castApp$protocol$Message$$("Offers.Show"));
  });
}, $castApp$app$runOfferRedemption_$$ = function $$castApp$app$runOfferRedemption_$$$($redemptionUrl$jscomp$1$$) {
  $castApp$core$setBodyClass_$$(window, "start");
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_requestJson$$(new $castApp$core$HttpImpl$$, {url:$redemptionUrl$jscomp$1$$}).then(function($response$jscomp$9$$) {
    var $redirectUrl$$ = $response$jscomp$9$$.url;
    return $redirectUrl$$ && $castApp$app$OFFER_REDEMPTION_URL_FILTER_$$.test($redirectUrl$$) ? $castApp$app$findOfferRedemptionTabs_$$(encodeURIComponent($redemptionUrl$jscomp$1$$)).then(function($tabs$jscomp$1$$) {
      $tabs$jscomp$1$$.forEach(function($tab$$) {
        chrome.tabs.update($tab$$.id, {url:$redirectUrl$$});
      });
    }) : $goog$Promise$reject$$();
  }), function() {
    $castApp$core$setBodyClass_$$(window, "unknown-error");
  });
}, $castApp$app$findOfferRedemptionTabs_$$ = function $$castApp$app$findOfferRedemptionTabs_$$$($escapedRedemptionUrl$jscomp$1$$) {
  return new $goog$Promise$$(function($resolve$jscomp$17$$) {
    chrome.tabs.query({url:["chrome://cast/*", "chrome-extension://" + chrome.runtime.id + "/cast_setup*"]}, function($tabs$jscomp$2$$) {
      var $ret$jscomp$10$$ = [];
      $tabs$jscomp$2$$.forEach(function($tab$jscomp$1$$) {
        -1 !== $tab$jscomp$1$$.url.indexOf($escapedRedemptionUrl$jscomp$1$$) && $ret$jscomp$10$$.push($tab$jscomp$1$$);
      });
      $resolve$jscomp$17$$($ret$jscomp$10$$);
    });
  });
};
window.addEventListener("load", function() {
  var $eventPageClient$jscomp$5$$ = new $castApp$eventPage$ChromeClient$$, $webview$jscomp$5$$ = new $castApp$core$WebViewImpl$$(window);
  $webview$jscomp$5$$.$g$.listen("originViolation", $castApp$app$goToErrorPage_$$);
  var $crypto$jscomp$3_salt$jscomp$inline_947$$ = window.crypto, $crypto$jscomp$inline_946_parsedHash$$ = $crypto$jscomp$3_salt$jscomp$inline_947$$.subtle;
  $crypto$jscomp$3_salt$jscomp$inline_947$$ = $castApp$core$storage$readLogSalt$$(window.localStorage, $crypto$jscomp$3_salt$jscomp$inline_947$$.getRandomValues.bind($crypto$jscomp$3_salt$jscomp$inline_947$$));
  $JSCompiler_StaticMethods_initAnonymizer$$($castApp$log$Manager_$$.$getInstance$(), $crypto$jscomp$inline_946_parsedHash$$, $crypto$jscomp$3_salt$jscomp$inline_947$$);
  $castApp$core$storage$removeStaleSetupSessions$$();
  $crypto$jscomp$inline_946_parsedHash$$ = $castApp$app$parseHash_$$(location.hash);
  switch($crypto$jscomp$inline_946_parsedHash$$.$component$) {
    case "devices":
      $castApp$app$runDevices_$$($webview$jscomp$5$$, $eventPageClient$jscomp$5$$);
      break;
    case "offers":
      $crypto$jscomp$inline_946_parsedHash$$.$redemptionUrl$ ? $castApp$app$runOfferRedemption_$$($crypto$jscomp$inline_946_parsedHash$$.$redemptionUrl$) : $castApp$app$runOfferScanner_$$($webview$jscomp$5$$, $eventPageClient$jscomp$5$$);
      break;
    case "setup":
      $castApp$app$runSetup_$$($webview$jscomp$5$$);
      break;
    case "error":
      $castApp$core$setBodyClass_$$(window, "unknown-error");
      break;
    default:
      $castApp$log$error$$($castApp$log$getLogger$$("app.main_"), "Error 404 " + JSON.stringify($crypto$jscomp$inline_946_parsedHash$$)), $castApp$app$goToDevicesPage_$$();
  }
});

