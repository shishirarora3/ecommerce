'use strict';
var $JSCompiler_prototypeAlias$$, $$jscomp$arrayIteratorImpl$$ = function($array$jscomp$6$$) {
  var $index$jscomp$71$$ = 0;
  return function() {
    return $index$jscomp$71$$ < $array$jscomp$6$$.length ? {done:!1, value:$array$jscomp$6$$[$index$jscomp$71$$++]} : {done:!0};
  };
}, $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$84$$, $property$jscomp$4$$, $descriptor$jscomp$2$$) {
  $target$jscomp$84$$ != Array.prototype && $target$jscomp$84$$ != Object.prototype && ($target$jscomp$84$$[$property$jscomp$4$$] = $descriptor$jscomp$2$$.value);
}, $$jscomp$global$$ = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, $$jscomp$initSymbol$$ = function() {
  $$jscomp$initSymbol$$ = function() {
  };
  $$jscomp$global$$.Symbol || ($$jscomp$global$$.Symbol = $$jscomp$Symbol$$);
}, $$jscomp$SymbolClass$$ = function($id$jscomp$51$$, $opt_description$jscomp$1$$) {
  this.$b$ = $id$jscomp$51$$;
  $$jscomp$defineProperty$$(this, "description", {configurable:!0, writable:!0, value:$opt_description$jscomp$1$$});
};
$$jscomp$SymbolClass$$.prototype.toString = function() {
  return this.$b$;
};
var $$jscomp$Symbol$$ = function() {
  function $Symbol$jscomp$1$$($opt_description$jscomp$2$$) {
    if (this instanceof $Symbol$jscomp$1$$) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $$jscomp$SymbolClass$$("jscomp_symbol_" + ($opt_description$jscomp$2$$ || "") + "_" + $counter$$++, $opt_description$jscomp$2$$);
  }
  var $counter$$ = 0;
  return $Symbol$jscomp$1$$;
}(), $$jscomp$initSymbolIterator$$ = function() {
  $$jscomp$initSymbol$$();
  var $symbolIterator$$ = $$jscomp$global$$.Symbol.iterator;
  $symbolIterator$$ || ($symbolIterator$$ = $$jscomp$global$$.Symbol.iterator = $$jscomp$global$$.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[$symbolIterator$$] && $$jscomp$defineProperty$$(Array.prototype, $symbolIterator$$, {configurable:!0, writable:!0, value:function() {
    return $$jscomp$iteratorPrototype$$($$jscomp$arrayIteratorImpl$$(this));
  }});
  $$jscomp$initSymbolIterator$$ = function() {
  };
}, $$jscomp$iteratorPrototype$$ = function($iterator$jscomp$7_next$$) {
  $$jscomp$initSymbolIterator$$();
  $iterator$jscomp$7_next$$ = {next:$iterator$jscomp$7_next$$};
  $iterator$jscomp$7_next$$[$$jscomp$global$$.Symbol.iterator] = function() {
    return this;
  };
  return $iterator$jscomp$7_next$$;
}, $$jscomp$makeIterator$$ = function($iterable$jscomp$2$$) {
  var $iteratorFunction$$ = "undefined" != typeof Symbol && Symbol.iterator && $iterable$jscomp$2$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$jscomp$2$$) : {next:$$jscomp$arrayIteratorImpl$$($iterable$jscomp$2$$)};
}, $$jscomp$arrayFromIterable$$ = function($JSCompiler_temp$jscomp$419_iterable$jscomp$3_iterator$jscomp$inline_985$$) {
  if (!($JSCompiler_temp$jscomp$419_iterable$jscomp$3_iterator$jscomp$inline_985$$ instanceof Array)) {
    $JSCompiler_temp$jscomp$419_iterable$jscomp$3_iterator$jscomp$inline_985$$ = $$jscomp$makeIterator$$($JSCompiler_temp$jscomp$419_iterable$jscomp$3_iterator$jscomp$inline_985$$);
    for (var $i$jscomp$inline_986$$, $arr$jscomp$inline_987$$ = []; !($i$jscomp$inline_986$$ = $JSCompiler_temp$jscomp$419_iterable$jscomp$3_iterator$jscomp$inline_985$$.next()).done;) {
      $arr$jscomp$inline_987$$.push($i$jscomp$inline_986$$.value);
    }
    $JSCompiler_temp$jscomp$419_iterable$jscomp$3_iterator$jscomp$inline_985$$ = $arr$jscomp$inline_987$$;
  }
  return $JSCompiler_temp$jscomp$419_iterable$jscomp$3_iterator$jscomp$inline_985$$;
}, $$jscomp$objectCreate$$ = "function" == typeof Object.create ? Object.create : function($prototype$$) {
  var $ctor$$ = function() {
  };
  $ctor$$.prototype = $prototype$$;
  return new $ctor$$;
}, $JSCompiler_temp$jscomp$420$$;
if ("function" == typeof Object.setPrototypeOf) {
  $JSCompiler_temp$jscomp$420$$ = Object.setPrototypeOf;
} else {
  var $JSCompiler_inline_result$jscomp$421$$;
  a: {
    var $x$jscomp$inline_989$$ = {$a$:!0}, $y$jscomp$inline_990$$ = {};
    try {
      $y$jscomp$inline_990$$.__proto__ = $x$jscomp$inline_989$$;
      $JSCompiler_inline_result$jscomp$421$$ = $y$jscomp$inline_990$$.$a$;
      break a;
    } catch ($e$jscomp$inline_991$$) {
    }
    $JSCompiler_inline_result$jscomp$421$$ = !1;
  }
  $JSCompiler_temp$jscomp$420$$ = $JSCompiler_inline_result$jscomp$421$$ ? function($target$jscomp$85$$, $proto$jscomp$4$$) {
    $target$jscomp$85$$.__proto__ = $proto$jscomp$4$$;
    if ($target$jscomp$85$$.__proto__ !== $proto$jscomp$4$$) {
      throw new TypeError($target$jscomp$85$$ + " is not extensible");
    }
    return $target$jscomp$85$$;
  } : null;
}
var $$jscomp$setPrototypeOf$$ = $JSCompiler_temp$jscomp$420$$, $$jscomp$inherits$$ = function($childCtor$$, $parentCtor$$) {
  $childCtor$$.prototype = $$jscomp$objectCreate$$($parentCtor$$.prototype);
  $childCtor$$.prototype.constructor = $childCtor$$;
  if ($$jscomp$setPrototypeOf$$) {
    $$jscomp$setPrototypeOf$$($childCtor$$, $parentCtor$$);
  } else {
    for (var $p$$ in $parentCtor$$) {
      if ("prototype" != $p$$) {
        if (Object.defineProperties) {
          var $descriptor$jscomp$3$$ = Object.getOwnPropertyDescriptor($parentCtor$$, $p$$);
          $descriptor$jscomp$3$$ && Object.defineProperty($childCtor$$, $p$$, $descriptor$jscomp$3$$);
        } else {
          $childCtor$$[$p$$] = $parentCtor$$[$p$$];
        }
      }
    }
  }
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
}, $$jscomp$polyfill$$ = function($property$jscomp$5_split_target$jscomp$86$$, $impl$jscomp$1_polyfill$$) {
  if ($impl$jscomp$1_polyfill$$) {
    var $obj$jscomp$32$$ = $$jscomp$global$$;
    $property$jscomp$5_split_target$jscomp$86$$ = $property$jscomp$5_split_target$jscomp$86$$.split(".");
    for (var $i$jscomp$4_orig$$ = 0; $i$jscomp$4_orig$$ < $property$jscomp$5_split_target$jscomp$86$$.length - 1; $i$jscomp$4_orig$$++) {
      var $key$jscomp$54$$ = $property$jscomp$5_split_target$jscomp$86$$[$i$jscomp$4_orig$$];
      $key$jscomp$54$$ in $obj$jscomp$32$$ || ($obj$jscomp$32$$[$key$jscomp$54$$] = {});
      $obj$jscomp$32$$ = $obj$jscomp$32$$[$key$jscomp$54$$];
    }
    $property$jscomp$5_split_target$jscomp$86$$ = $property$jscomp$5_split_target$jscomp$86$$[$property$jscomp$5_split_target$jscomp$86$$.length - 1];
    $i$jscomp$4_orig$$ = $obj$jscomp$32$$[$property$jscomp$5_split_target$jscomp$86$$];
    $impl$jscomp$1_polyfill$$ = $impl$jscomp$1_polyfill$$($i$jscomp$4_orig$$);
    $impl$jscomp$1_polyfill$$ != $i$jscomp$4_orig$$ && null != $impl$jscomp$1_polyfill$$ && $$jscomp$defineProperty$$($obj$jscomp$32$$, $property$jscomp$5_split_target$jscomp$86$$, {configurable:!0, writable:!0, value:$impl$jscomp$1_polyfill$$});
  }
};
$$jscomp$polyfill$$("Promise", function($NativePromise$$) {
  function $AsyncExecutor$$() {
    this.$b$ = null;
  }
  function $resolvingPromise$$($opt_value$jscomp$28$$) {
    return $opt_value$jscomp$28$$ instanceof $PolyfillPromise$$ ? $opt_value$jscomp$28$$ : new $PolyfillPromise$$(function($resolve$jscomp$1$$) {
      $resolve$jscomp$1$$($opt_value$jscomp$28$$);
    });
  }
  if ($NativePromise$$) {
    return $NativePromise$$;
  }
  $AsyncExecutor$$.prototype.$f$ = function($f$jscomp$1$$) {
    if (null == this.$b$) {
      this.$b$ = [];
      var $self$jscomp$2$$ = this;
      this.$g$(function() {
        $self$jscomp$2$$.$l$();
      });
    }
    this.$b$.push($f$jscomp$1$$);
  };
  var $nativeSetTimeout$$ = $$jscomp$global$$.setTimeout;
  $AsyncExecutor$$.prototype.$g$ = function($f$jscomp$2$$) {
    $nativeSetTimeout$$($f$jscomp$2$$, 0);
  };
  $AsyncExecutor$$.prototype.$l$ = function() {
    for (; this.$b$ && this.$b$.length;) {
      var $executingBatch$$ = this.$b$;
      this.$b$ = [];
      for (var $i$jscomp$5$$ = 0; $i$jscomp$5$$ < $executingBatch$$.length; ++$i$jscomp$5$$) {
        var $f$jscomp$3$$ = $executingBatch$$[$i$jscomp$5$$];
        $executingBatch$$[$i$jscomp$5$$] = null;
        try {
          $f$jscomp$3$$();
        } catch ($error$jscomp$3$$) {
          this.$h$($error$jscomp$3$$);
        }
      }
    }
    this.$b$ = null;
  };
  $AsyncExecutor$$.prototype.$h$ = function($exception$jscomp$2$$) {
    this.$g$(function() {
      throw $exception$jscomp$2$$;
    });
  };
  var $PolyfillPromise$$ = function($executor$$) {
    this.$f$ = 0;
    this.$g$ = void 0;
    this.$b$ = [];
    var $resolveAndReject$$ = this.$l$();
    try {
      $executor$$($resolveAndReject$$.resolve, $resolveAndReject$$.reject);
    } catch ($e$jscomp$8$$) {
      $resolveAndReject$$.reject($e$jscomp$8$$);
    }
  };
  $PolyfillPromise$$.prototype.$l$ = function() {
    function $firstCallWins$$($method$jscomp$5$$) {
      return function($x$jscomp$83$$) {
        $alreadyCalled$$ || ($alreadyCalled$$ = !0, $method$jscomp$5$$.call($thisPromise$$, $x$jscomp$83$$));
      };
    }
    var $thisPromise$$ = this, $alreadyCalled$$ = !1;
    return {resolve:$firstCallWins$$(this.$G$), reject:$firstCallWins$$(this.$h$)};
  };
  $PolyfillPromise$$.prototype.$G$ = function($value$jscomp$114$$) {
    if ($value$jscomp$114$$ === this) {
      this.$h$(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if ($value$jscomp$114$$ instanceof $PolyfillPromise$$) {
        this.$H$($value$jscomp$114$$);
      } else {
        a: {
          switch(typeof $value$jscomp$114$$) {
            case "object":
              var $JSCompiler_inline_result$jscomp$424$$ = null != $value$jscomp$114$$;
              break a;
            case "function":
              $JSCompiler_inline_result$jscomp$424$$ = !0;
              break a;
            default:
              $JSCompiler_inline_result$jscomp$424$$ = !1;
          }
        }
        $JSCompiler_inline_result$jscomp$424$$ ? this.$C$($value$jscomp$114$$) : this.$m$($value$jscomp$114$$);
      }
    }
  };
  $PolyfillPromise$$.prototype.$C$ = function($obj$jscomp$33$$) {
    var $thenMethod$$ = void 0;
    try {
      $thenMethod$$ = $obj$jscomp$33$$.then;
    } catch ($error$jscomp$4$$) {
      this.$h$($error$jscomp$4$$);
      return;
    }
    "function" == typeof $thenMethod$$ ? this.$J$($thenMethod$$, $obj$jscomp$33$$) : this.$m$($obj$jscomp$33$$);
  };
  $PolyfillPromise$$.prototype.$h$ = function($reason$jscomp$7$$) {
    this.$o$(2, $reason$jscomp$7$$);
  };
  $PolyfillPromise$$.prototype.$m$ = function($value$jscomp$116$$) {
    this.$o$(1, $value$jscomp$116$$);
  };
  $PolyfillPromise$$.prototype.$o$ = function($settledState$$, $valueOrReason$$) {
    if (0 != this.$f$) {
      throw Error("Cannot settle(" + $settledState$$ + ", " + $valueOrReason$$ + "): Promise already settled in state" + this.$f$);
    }
    this.$f$ = $settledState$$;
    this.$g$ = $valueOrReason$$;
    this.$s$();
  };
  $PolyfillPromise$$.prototype.$s$ = function() {
    if (null != this.$b$) {
      for (var $i$jscomp$6$$ = 0; $i$jscomp$6$$ < this.$b$.length; ++$i$jscomp$6$$) {
        $asyncExecutor$$.$f$(this.$b$[$i$jscomp$6$$]);
      }
      this.$b$ = null;
    }
  };
  var $asyncExecutor$$ = new $AsyncExecutor$$;
  $PolyfillPromise$$.prototype.$H$ = function($promise$jscomp$3$$) {
    var $methods$jscomp$1$$ = this.$l$();
    $promise$jscomp$3$$.$callWhenSettled_$($methods$jscomp$1$$.resolve, $methods$jscomp$1$$.reject);
  };
  $PolyfillPromise$$.prototype.$J$ = function($thenMethod$jscomp$1$$, $thenable$$) {
    var $methods$jscomp$2$$ = this.$l$();
    try {
      $thenMethod$jscomp$1$$.call($thenable$$, $methods$jscomp$2$$.resolve, $methods$jscomp$2$$.reject);
    } catch ($error$jscomp$5$$) {
      $methods$jscomp$2$$.reject($error$jscomp$5$$);
    }
  };
  $PolyfillPromise$$.prototype.then = function($onFulfilled$$, $onRejected$jscomp$1$$) {
    function $createCallback$$($paramF$$, $defaultF$$) {
      return "function" == typeof $paramF$$ ? function($x$jscomp$84$$) {
        try {
          $resolveChild$$($paramF$$($x$jscomp$84$$));
        } catch ($error$jscomp$6$$) {
          $rejectChild$$($error$jscomp$6$$);
        }
      } : $defaultF$$;
    }
    var $resolveChild$$, $rejectChild$$, $childPromise$$ = new $PolyfillPromise$$(function($resolve$$, $reject$$) {
      $resolveChild$$ = $resolve$$;
      $rejectChild$$ = $reject$$;
    });
    this.$callWhenSettled_$($createCallback$$($onFulfilled$$, $resolveChild$$), $createCallback$$($onRejected$jscomp$1$$, $rejectChild$$));
    return $childPromise$$;
  };
  $PolyfillPromise$$.prototype.catch = function($onRejected$jscomp$2$$) {
    return this.then(void 0, $onRejected$jscomp$2$$);
  };
  $PolyfillPromise$$.prototype.$callWhenSettled_$ = function($onFulfilled$jscomp$1$$, $onRejected$jscomp$3$$) {
    function $callback$jscomp$359$$() {
      switch($thisPromise$jscomp$1$$.$f$) {
        case 1:
          $onFulfilled$jscomp$1$$($thisPromise$jscomp$1$$.$g$);
          break;
        case 2:
          $onRejected$jscomp$3$$($thisPromise$jscomp$1$$.$g$);
          break;
        default:
          throw Error("Unexpected state: " + $thisPromise$jscomp$1$$.$f$);
      }
    }
    var $thisPromise$jscomp$1$$ = this;
    null == this.$b$ ? $asyncExecutor$$.$f$($callback$jscomp$359$$) : this.$b$.push($callback$jscomp$359$$);
  };
  $PolyfillPromise$$.resolve = $resolvingPromise$$;
  $PolyfillPromise$$.reject = function($opt_reason$jscomp$6$$) {
    return new $PolyfillPromise$$(function($resolve$jscomp$2$$, $reject$jscomp$2$$) {
      $reject$jscomp$2$$($opt_reason$jscomp$6$$);
    });
  };
  $PolyfillPromise$$.race = function($thenablesOrValues$$) {
    return new $PolyfillPromise$$(function($resolve$jscomp$3$$, $reject$jscomp$3$$) {
      for (var $iterator$jscomp$9$$ = $$jscomp$makeIterator$$($thenablesOrValues$$), $iterRec$$ = $iterator$jscomp$9$$.next(); !$iterRec$$.done; $iterRec$$ = $iterator$jscomp$9$$.next()) {
        $resolvingPromise$$($iterRec$$.value).$callWhenSettled_$($resolve$jscomp$3$$, $reject$jscomp$3$$);
      }
    });
  };
  $PolyfillPromise$$.all = function($thenablesOrValues$jscomp$1$$) {
    var $iterator$jscomp$10$$ = $$jscomp$makeIterator$$($thenablesOrValues$jscomp$1$$), $iterRec$jscomp$1$$ = $iterator$jscomp$10$$.next();
    return $iterRec$jscomp$1$$.done ? $resolvingPromise$$([]) : new $PolyfillPromise$$(function($resolveAll$$, $rejectAll$$) {
      function $onFulfilled$jscomp$2$$($i$jscomp$7$$) {
        return function($ithResult$$) {
          $resultsArray$$[$i$jscomp$7$$] = $ithResult$$;
          $unresolvedCount$$--;
          0 == $unresolvedCount$$ && $resolveAll$$($resultsArray$$);
        };
      }
      var $resultsArray$$ = [], $unresolvedCount$$ = 0;
      do {
        $resultsArray$$.push(void 0), $unresolvedCount$$++, $resolvingPromise$$($iterRec$jscomp$1$$.value).$callWhenSettled_$($onFulfilled$jscomp$2$$($resultsArray$$.length - 1), $rejectAll$$), $iterRec$jscomp$1$$ = $iterator$jscomp$10$$.next();
      } while (!$iterRec$jscomp$1$$.done);
    });
  };
  return $PolyfillPromise$$;
});
$$jscomp$polyfill$$("Promise.prototype.finally", function($orig$jscomp$1$$) {
  return $orig$jscomp$1$$ ? $orig$jscomp$1$$ : function($onFinally$$) {
    return this.then(function($value$jscomp$117$$) {
      return Promise.resolve($onFinally$$()).then(function() {
        return $value$jscomp$117$$;
      });
    }, function($reason$jscomp$8$$) {
      return Promise.resolve($onFinally$$()).then(function() {
        throw $reason$jscomp$8$$;
      });
    });
  };
});
var $$jscomp$generator$Context$$ = function() {
  this.$o$ = !1;
  this.$h$ = null;
  this.$f$ = void 0;
  this.$b$ = 1;
  this.$l$ = this.$m$ = 0;
  this.$C$ = this.$g$ = null;
}, $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$start_$$ = function($JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$start_$self$$) {
  if ($JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$start_$self$$.$o$) {
    throw new TypeError("Generator is already running");
  }
  $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$start_$self$$.$o$ = !0;
};
$$jscomp$generator$Context$$.prototype.$s$ = function($value$jscomp$118$$) {
  this.$f$ = $value$jscomp$118$$;
};
var $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$$ = function($JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$self$$, $e$jscomp$9$$) {
  $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$self$$.$g$ = {$exception$:$e$jscomp$9$$, $isException$:!0};
  $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$self$$.$b$ = $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$self$$.$m$ || $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$self$$.$l$;
};
$$jscomp$generator$Context$$.prototype.return = function($value$jscomp$119$$) {
  this.$g$ = {return:$value$jscomp$119$$};
  this.$b$ = this.$l$;
};
var $JSCompiler_StaticMethods_yield$$ = function($JSCompiler_StaticMethods_yield$self$$, $value$jscomp$120$$, $resumeAddress$$) {
  $JSCompiler_StaticMethods_yield$self$$.$b$ = $resumeAddress$$;
  return {value:$value$jscomp$120$$};
};
$$jscomp$generator$Context$$.prototype.$jumpTo$ = function($nextAddress$jscomp$1$$) {
  this.$b$ = $nextAddress$jscomp$1$$;
};
var $JSCompiler_StaticMethods_setCatchFinallyBlocks$$ = function($JSCompiler_StaticMethods_setCatchFinallyBlocks$self$$, $catchAddress$$, $finallyAddress$$) {
  $JSCompiler_StaticMethods_setCatchFinallyBlocks$self$$.$m$ = $catchAddress$$;
  void 0 != $finallyAddress$$ && ($JSCompiler_StaticMethods_setCatchFinallyBlocks$self$$.$l$ = $finallyAddress$$);
}, $JSCompiler_StaticMethods_leaveTryBlock$$ = function($JSCompiler_StaticMethods_leaveTryBlock$self$$, $nextAddress$jscomp$2$$) {
  $JSCompiler_StaticMethods_leaveTryBlock$self$$.$b$ = $nextAddress$jscomp$2$$;
  $JSCompiler_StaticMethods_leaveTryBlock$self$$.$m$ = 0;
}, $JSCompiler_StaticMethods_enterCatchBlock$$ = function($JSCompiler_StaticMethods_enterCatchBlock$self$$) {
  $JSCompiler_StaticMethods_enterCatchBlock$self$$.$m$ = 0;
  var $exception$jscomp$3$$ = $JSCompiler_StaticMethods_enterCatchBlock$self$$.$g$.$exception$;
  $JSCompiler_StaticMethods_enterCatchBlock$self$$.$g$ = null;
  return $exception$jscomp$3$$;
}, $$jscomp$generator$Engine_$$ = function($program$jscomp$25$$) {
  this.$b$ = new $$jscomp$generator$Context$$;
  this.$f$ = $program$jscomp$25$$;
}, $JSCompiler_StaticMethods_return_$$ = function($JSCompiler_StaticMethods_return_$self$$, $value$jscomp$122$$) {
  $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$start_$$($JSCompiler_StaticMethods_return_$self$$.$b$);
  var $yieldAllIterator$$ = $JSCompiler_StaticMethods_return_$self$$.$b$.$h$;
  if ($yieldAllIterator$$) {
    return $JSCompiler_StaticMethods_yieldAllStep_$$($JSCompiler_StaticMethods_return_$self$$, "return" in $yieldAllIterator$$ ? $yieldAllIterator$$["return"] : function($v$$) {
      return {value:$v$$, done:!0};
    }, $value$jscomp$122$$, $JSCompiler_StaticMethods_return_$self$$.$b$.return);
  }
  $JSCompiler_StaticMethods_return_$self$$.$b$.return($value$jscomp$122$$);
  return $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_return_$self$$);
}, $JSCompiler_StaticMethods_yieldAllStep_$$ = function($JSCompiler_StaticMethods_yieldAllStep_$self$$, $action$jscomp$1$$, $value$jscomp$123$$, $nextAction$$) {
  try {
    var $result$jscomp$2$$ = $action$jscomp$1$$.call($JSCompiler_StaticMethods_yieldAllStep_$self$$.$b$.$h$, $value$jscomp$123$$);
    if (!($result$jscomp$2$$ instanceof Object)) {
      throw new TypeError("Iterator result " + $result$jscomp$2$$ + " is not an object");
    }
    if (!$result$jscomp$2$$.done) {
      return $JSCompiler_StaticMethods_yieldAllStep_$self$$.$b$.$o$ = !1, $result$jscomp$2$$;
    }
    var $resultValue$$ = $result$jscomp$2$$.value;
  } catch ($e$jscomp$10$$) {
    return $JSCompiler_StaticMethods_yieldAllStep_$self$$.$b$.$h$ = null, $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$.$b$, $e$jscomp$10$$), $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$);
  }
  $JSCompiler_StaticMethods_yieldAllStep_$self$$.$b$.$h$ = null;
  $nextAction$$.call($JSCompiler_StaticMethods_yieldAllStep_$self$$.$b$, $resultValue$$);
  return $JSCompiler_StaticMethods_nextStep_$$($JSCompiler_StaticMethods_yieldAllStep_$self$$);
}, $JSCompiler_StaticMethods_nextStep_$$ = function($JSCompiler_StaticMethods_nextStep_$self$$) {
  for (; $JSCompiler_StaticMethods_nextStep_$self$$.$b$.$b$;) {
    try {
      var $abruptCompletion$jscomp$1_yieldValue$$ = $JSCompiler_StaticMethods_nextStep_$self$$.$f$($JSCompiler_StaticMethods_nextStep_$self$$.$b$);
      if ($abruptCompletion$jscomp$1_yieldValue$$) {
        return $JSCompiler_StaticMethods_nextStep_$self$$.$b$.$o$ = !1, {value:$abruptCompletion$jscomp$1_yieldValue$$.value, done:!1};
      }
    } catch ($e$jscomp$11$$) {
      $JSCompiler_StaticMethods_nextStep_$self$$.$b$.$f$ = void 0, $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$$($JSCompiler_StaticMethods_nextStep_$self$$.$b$, $e$jscomp$11$$);
    }
  }
  $JSCompiler_StaticMethods_nextStep_$self$$.$b$.$o$ = !1;
  if ($JSCompiler_StaticMethods_nextStep_$self$$.$b$.$g$) {
    $abruptCompletion$jscomp$1_yieldValue$$ = $JSCompiler_StaticMethods_nextStep_$self$$.$b$.$g$;
    $JSCompiler_StaticMethods_nextStep_$self$$.$b$.$g$ = null;
    if ($abruptCompletion$jscomp$1_yieldValue$$.$isException$) {
      throw $abruptCompletion$jscomp$1_yieldValue$$.$exception$;
    }
    return {value:$abruptCompletion$jscomp$1_yieldValue$$.return, done:!0};
  }
  return {value:void 0, done:!0};
}, $$jscomp$generator$Generator_$$ = function($engine$$) {
  this.next = function($JSCompiler_inline_result$jscomp$425_opt_value$jscomp$29$$) {
    $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$start_$$($engine$$.$b$);
    $engine$$.$b$.$h$ ? $JSCompiler_inline_result$jscomp$425_opt_value$jscomp$29$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$b$.$h$.next, $JSCompiler_inline_result$jscomp$425_opt_value$jscomp$29$$, $engine$$.$b$.$s$) : ($engine$$.$b$.$s$($JSCompiler_inline_result$jscomp$425_opt_value$jscomp$29$$), $JSCompiler_inline_result$jscomp$425_opt_value$jscomp$29$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$425_opt_value$jscomp$29$$;
  };
  this.throw = function($JSCompiler_inline_result$jscomp$426_exception$jscomp$5$$) {
    $JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$start_$$($engine$$.$b$);
    $engine$$.$b$.$h$ ? $JSCompiler_inline_result$jscomp$426_exception$jscomp$5$$ = $JSCompiler_StaticMethods_yieldAllStep_$$($engine$$, $engine$$.$b$.$h$["throw"], $JSCompiler_inline_result$jscomp$426_exception$jscomp$5$$, $engine$$.$b$.$s$) : ($JSCompiler_StaticMethods_$jscomp_generator_Context_prototype$throw_$$($engine$$.$b$, $JSCompiler_inline_result$jscomp$426_exception$jscomp$5$$), $JSCompiler_inline_result$jscomp$426_exception$jscomp$5$$ = $JSCompiler_StaticMethods_nextStep_$$($engine$$));
    return $JSCompiler_inline_result$jscomp$426_exception$jscomp$5$$;
  };
  this.return = function($value$jscomp$124$$) {
    return $JSCompiler_StaticMethods_return_$$($engine$$, $value$jscomp$124$$);
  };
  $$jscomp$initSymbolIterator$$();
  this[Symbol.iterator] = function() {
    return this;
  };
}, $$jscomp$asyncExecutePromiseGenerator$$ = function($generator$jscomp$1$$) {
  function $passValueToGenerator$$($value$jscomp$125$$) {
    return $generator$jscomp$1$$.next($value$jscomp$125$$);
  }
  function $passErrorToGenerator$$($error$jscomp$7$$) {
    return $generator$jscomp$1$$.throw($error$jscomp$7$$);
  }
  return new Promise(function($resolve$jscomp$4$$, $reject$jscomp$4$$) {
    function $handleGeneratorRecord$$($genRec$$) {
      $genRec$$.done ? $resolve$jscomp$4$$($genRec$$.value) : Promise.resolve($genRec$$.value).then($passValueToGenerator$$, $passErrorToGenerator$$).then($handleGeneratorRecord$$, $reject$jscomp$4$$);
    }
    $handleGeneratorRecord$$($generator$jscomp$1$$.next());
  });
}, $$jscomp$asyncExecutePromiseGeneratorProgram$$ = function($program$jscomp$27$$) {
  return $$jscomp$asyncExecutePromiseGenerator$$(new $$jscomp$generator$Generator_$$(new $$jscomp$generator$Engine_$$($program$jscomp$27$$)));
}, $goog$$ = $goog$$ || {}, $goog$global$$ = this || self, $goog$isDef$$ = function($val$jscomp$1$$) {
  return void 0 !== $val$jscomp$1$$;
}, $goog$isString$$ = function($val$jscomp$2$$) {
  return "string" == typeof $val$jscomp$2$$;
}, $goog$isNumber$$ = function($val$jscomp$4$$) {
  return "number" == typeof $val$jscomp$4$$;
}, $goog$getScriptNonce$$ = function($opt_window$jscomp$1$$) {
  if ($opt_window$jscomp$1$$ && $opt_window$jscomp$1$$ != $goog$global$$) {
    return $goog$getScriptNonce_$$($opt_window$jscomp$1$$.document);
  }
  null === $goog$cspNonce_$$ && ($goog$cspNonce_$$ = $goog$getScriptNonce_$$($goog$global$$.document));
  return $goog$cspNonce_$$;
}, $goog$NONCE_PATTERN_$$ = /^[\w+/_-]+[=]{0,2}$/, $goog$cspNonce_$$ = null, $goog$getScriptNonce_$$ = function($doc_nonce$jscomp$1_script$$) {
  return ($doc_nonce$jscomp$1_script$$ = $doc_nonce$jscomp$1_script$$.querySelector && $doc_nonce$jscomp$1_script$$.querySelector("script[nonce]")) && ($doc_nonce$jscomp$1_script$$ = $doc_nonce$jscomp$1_script$$.nonce || $doc_nonce$jscomp$1_script$$.getAttribute("nonce")) && $goog$NONCE_PATTERN_$$.test($doc_nonce$jscomp$1_script$$) ? $doc_nonce$jscomp$1_script$$ : "";
}, $goog$getObjectByName$$ = function($name$jscomp$123_parts$jscomp$1$$, $cur$jscomp$1_opt_obj$jscomp$2$$) {
  $name$jscomp$123_parts$jscomp$1$$ = $name$jscomp$123_parts$jscomp$1$$.split(".");
  $cur$jscomp$1_opt_obj$jscomp$2$$ = $cur$jscomp$1_opt_obj$jscomp$2$$ || $goog$global$$;
  for (var $i$jscomp$8$$ = 0; $i$jscomp$8$$ < $name$jscomp$123_parts$jscomp$1$$.length; $i$jscomp$8$$++) {
    if ($cur$jscomp$1_opt_obj$jscomp$2$$ = $cur$jscomp$1_opt_obj$jscomp$2$$[$name$jscomp$123_parts$jscomp$1$$[$i$jscomp$8$$]], null == $cur$jscomp$1_opt_obj$jscomp$2$$) {
      return null;
    }
  }
  return $cur$jscomp$1_opt_obj$jscomp$2$$;
}, $goog$nullFunction$$ = function() {
}, $goog$addSingletonGetter$$ = function($ctor$jscomp$1$$) {
  $ctor$jscomp$1$$.$instance_$ = void 0;
  $ctor$jscomp$1$$.$getInstance$ = function() {
    return $ctor$jscomp$1$$.$instance_$ ? $ctor$jscomp$1$$.$instance_$ : $ctor$jscomp$1$$.$instance_$ = new $ctor$jscomp$1$$;
  };
}, $goog$typeOf$$ = function($value$jscomp$127$$) {
  var $s$jscomp$8$$ = typeof $value$jscomp$127$$;
  if ("object" == $s$jscomp$8$$) {
    if ($value$jscomp$127$$) {
      if ($value$jscomp$127$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$127$$ instanceof Object) {
        return $s$jscomp$8$$;
      }
      var $className$jscomp$4$$ = Object.prototype.toString.call($value$jscomp$127$$);
      if ("[object Window]" == $className$jscomp$4$$) {
        return "object";
      }
      if ("[object Array]" == $className$jscomp$4$$ || "number" == typeof $value$jscomp$127$$.length && "undefined" != typeof $value$jscomp$127$$.splice && "undefined" != typeof $value$jscomp$127$$.propertyIsEnumerable && !$value$jscomp$127$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$jscomp$4$$ || "undefined" != typeof $value$jscomp$127$$.call && "undefined" != typeof $value$jscomp$127$$.propertyIsEnumerable && !$value$jscomp$127$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$8$$ && "undefined" == typeof $value$jscomp$127$$.call) {
      return "object";
    }
  }
  return $s$jscomp$8$$;
}, $goog$isNull$$ = function($val$jscomp$5$$) {
  return null === $val$jscomp$5$$;
}, $goog$isArray$$ = function($val$jscomp$7$$) {
  return "array" == $goog$typeOf$$($val$jscomp$7$$);
}, $goog$isArrayLike$$ = function($val$jscomp$8$$) {
  var $type$jscomp$154$$ = $goog$typeOf$$($val$jscomp$8$$);
  return "array" == $type$jscomp$154$$ || "object" == $type$jscomp$154$$ && "number" == typeof $val$jscomp$8$$.length;
}, $goog$isFunction$$ = function($val$jscomp$10$$) {
  return "function" == $goog$typeOf$$($val$jscomp$10$$);
}, $goog$isObject$$ = function($val$jscomp$11$$) {
  var $type$jscomp$155$$ = typeof $val$jscomp$11$$;
  return "object" == $type$jscomp$155$$ && null != $val$jscomp$11$$ || "function" == $type$jscomp$155$$;
}, $goog$removeUid$$ = function($obj$jscomp$37$$) {
  null !== $obj$jscomp$37$$ && "removeAttribute" in $obj$jscomp$37$$ && $obj$jscomp$37$$.removeAttribute($goog$UID_PROPERTY_$$);
  try {
    delete $obj$jscomp$37$$[$goog$UID_PROPERTY_$$];
  } catch ($ex$$) {
  }
}, $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$bindNative_$$ = function($fn$jscomp$11$$, $selfObj$jscomp$2$$, $var_args$jscomp$40$$) {
  return $fn$jscomp$11$$.call.apply($fn$jscomp$11$$.bind, arguments);
}, $goog$bindJs_$$ = function($fn$jscomp$12$$, $selfObj$jscomp$3$$, $var_args$jscomp$41$$) {
  if (!$fn$jscomp$12$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$jscomp$12$$.apply($selfObj$jscomp$3$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$jscomp$12$$.apply($selfObj$jscomp$3$$, arguments);
  };
}, $goog$bind$$ = function($fn$jscomp$13$$, $selfObj$jscomp$4$$, $var_args$jscomp$42$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bind$$ = $goog$bindNative_$$ : $goog$bind$$ = $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}, $goog$partial$$ = function($fn$jscomp$14$$, $var_args$jscomp$43$$) {
  var $args$jscomp$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$jscomp$1$$ = $args$jscomp$3$$.slice();
    $newArgs$jscomp$1$$.push.apply($newArgs$jscomp$1$$, arguments);
    return $fn$jscomp$14$$.apply(this, $newArgs$jscomp$1$$);
  };
}, $goog$now$$ = Date.now || function() {
  return +new Date;
}, $goog$exportSymbol$$ = function($parts$jscomp$inline_1012_publicPath$$, $object$jscomp$9$$) {
  $parts$jscomp$inline_1012_publicPath$$ = $parts$jscomp$inline_1012_publicPath$$.split(".");
  var $cur$jscomp$inline_1013$$ = $goog$global$$;
  $parts$jscomp$inline_1012_publicPath$$[0] in $cur$jscomp$inline_1013$$ || "undefined" == typeof $cur$jscomp$inline_1013$$.execScript || $cur$jscomp$inline_1013$$.execScript("var " + $parts$jscomp$inline_1012_publicPath$$[0]);
  for (var $part$jscomp$inline_1014$$; $parts$jscomp$inline_1012_publicPath$$.length && ($part$jscomp$inline_1014$$ = $parts$jscomp$inline_1012_publicPath$$.shift());) {
    !$parts$jscomp$inline_1012_publicPath$$.length && $goog$isDef$$($object$jscomp$9$$) ? $cur$jscomp$inline_1013$$[$part$jscomp$inline_1014$$] = $object$jscomp$9$$ : $cur$jscomp$inline_1013$$[$part$jscomp$inline_1014$$] && $cur$jscomp$inline_1013$$[$part$jscomp$inline_1014$$] !== Object.prototype[$part$jscomp$inline_1014$$] ? $cur$jscomp$inline_1013$$ = $cur$jscomp$inline_1013$$[$part$jscomp$inline_1014$$] : $cur$jscomp$inline_1013$$ = $cur$jscomp$inline_1013$$[$part$jscomp$inline_1014$$] = {};
  }
}, $goog$inherits$$ = function($childCtor$jscomp$1$$, $parentCtor$jscomp$1$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.$superClass_$ = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.prototype = new $tempCtor$$;
  $childCtor$jscomp$1$$.prototype.constructor = $childCtor$jscomp$1$$;
};
var chrome = chrome || window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var mojo = {};
var $module$contents$mr$Assertions_AssertionError$$ = function($message$jscomp$42$$) {
  var $$jscomp$tmp$error$$ = Error.call(this);
  this.message = $$jscomp$tmp$error$$.message;
  "stack" in $$jscomp$tmp$error$$ && (this.stack = $$jscomp$tmp$error$$.stack);
  this.name = "AssertionError";
  this.message = void 0 === $message$jscomp$42$$ ? "" : $message$jscomp$42$$;
  Error.captureStackTrace ? Error.captureStackTrace(this, $module$contents$mr$Assertions_AssertionError$$) : this.stack = Error().stack;
};
$$jscomp$inherits$$($module$contents$mr$Assertions_AssertionError$$, Error);
var $mr$Assertions$assert$$ = function($condition$jscomp$2$$, $message$jscomp$43$$) {
  if (!$condition$jscomp$2$$) {
    throw new $module$contents$mr$Assertions_AssertionError$$($message$jscomp$43$$);
  }
  return $condition$jscomp$2$$;
}, $mr$Assertions$assertString$$ = function($value$jscomp$128$$) {
  if ("string" !== typeof $value$jscomp$128$$) {
    throw new $module$contents$mr$Assertions_AssertionError$$;
  }
  return $value$jscomp$128$$;
}, $mr$Assertions$rejectNotImplemented$$ = function() {
  return Promise.reject(Error("Not implemented"));
};
var $mr$Logger$$ = function($name$jscomp$125$$) {
  this.$b$ = $name$jscomp$125$$;
}, $mr$Logger$getInstance$$ = function($name$jscomp$126$$) {
  var $instance$jscomp$1$$ = $mr$Logger$instances_$$.get($name$jscomp$126$$);
  $instance$jscomp$1$$ || ($instance$jscomp$1$$ = new $mr$Logger$$($name$jscomp$126$$), $mr$Logger$instances_$$.set($name$jscomp$126$$, $instance$jscomp$1$$));
  return $instance$jscomp$1$$;
}, $mr$Logger$logRecord$$ = function($record$$) {
  $record$$.level >= $mr$Logger$level$$ && $mr$Logger$handlers_$$.forEach(function($handler$jscomp$9$$) {
    return $handler$jscomp$9$$($record$$);
  });
};
$mr$Logger$$.prototype.log = function($level$jscomp$20$$, $message$jscomp$45$$, $exception$jscomp$6$$) {
  if (!($level$jscomp$20$$ < $mr$Logger$level$$)) {
    "function" == typeof $message$jscomp$45$$ && ($message$jscomp$45$$ = $message$jscomp$45$$());
    $mr$Assertions$assert$$("string" == typeof $message$jscomp$45$$, "Expected message to be a string.");
    var $record$jscomp$1$$ = {$logger$:this.$b$, level:$level$jscomp$20$$, time:Date.now(), message:$message$jscomp$45$$, $exception$:$exception$jscomp$6$$};
    $mr$Logger$handlers_$$.forEach(function($handler$jscomp$10$$) {
      return $handler$jscomp$10$$($record$jscomp$1$$);
    });
  }
};
$mr$Logger$$.prototype.error = function($message$jscomp$46$$, $exception$jscomp$7$$) {
  this.log(3, $message$jscomp$46$$, $exception$jscomp$7$$);
};
$mr$Logger$$.prototype.$warning$ = function($message$jscomp$47$$, $exception$jscomp$8$$) {
  this.log(2, $message$jscomp$47$$, $exception$jscomp$8$$);
};
$mr$Logger$$.prototype.info = function($message$jscomp$48$$, $exception$jscomp$9$$) {
  this.log(1, $message$jscomp$48$$, $exception$jscomp$9$$);
};
var $JSCompiler_StaticMethods_mr_Logger_prototype$fine$$ = function($JSCompiler_StaticMethods_mr_Logger_prototype$fine$self$$, $message$jscomp$49$$, $exception$jscomp$10$$) {
  $JSCompiler_StaticMethods_mr_Logger_prototype$fine$self$$.log(0, $message$jscomp$49$$, $exception$jscomp$10$$);
}, $mr$Logger$stringToLevel$$ = function($index$jscomp$72_levelName$$) {
  $index$jscomp$72_levelName$$ = $mr$Logger$LEVEL_NAMES_$$.indexOf($index$jscomp$72_levelName$$);
  return -1 == $index$jscomp$72_levelName$$ ? 0 : $index$jscomp$72_levelName$$;
}, $mr$Logger$numberToLevel$$ = function($levelValue$$) {
  return 600 >= $levelValue$$ ? 0 : 850 >= $levelValue$$ ? 1 : 950 >= $levelValue$$ ? 2 : 3;
}, $mr$Logger$handlers_$$ = [], $mr$Logger$instances_$$ = new Map, $mr$Logger$LEVEL_NAMES_$$ = ["FINE", "INFO", "WARNING", "SEVERE"], $mr$Logger$level$$ = 1;
var $mr$Timing$$ = function($name$jscomp$127$$) {
  this.$b$ = $name$jscomp$127$$;
  this.$f$ = Date.now();
}, $JSCompiler_StaticMethods_getFullName_$$ = function($name$jscomp$128$$, $opt_suffix$$) {
  null != $opt_suffix$$ && ($name$jscomp$128$$ += "_" + $opt_suffix$$);
  return $name$jscomp$128$$;
};
$mr$Timing$$.prototype.end = function($opt_suffix$jscomp$1$$) {
  $mr$Timing$recordDuration$$($JSCompiler_StaticMethods_getFullName_$$(this.$b$, $opt_suffix$jscomp$1$$), Date.now() - this.$f$);
};
var $mr$Timing$recordDuration$$ = function($name$jscomp$131$$, $duration$jscomp$3$$) {
  0 > $duration$jscomp$3$$ && ($mr$Timing$logger_$$.$warning$("Timing analytics event with negative time"), $duration$jscomp$3$$ = 0);
  1E4 < $duration$jscomp$3$$ && ($duration$jscomp$3$$ = 1E4);
  try {
    chrome.metricsPrivate.recordTime($name$jscomp$131$$, $duration$jscomp$3$$);
  } catch ($e$jscomp$14$$) {
    $mr$Timing$logger_$$.$warning$("Failed to record time " + $duration$jscomp$3$$ + " in " + $name$jscomp$131$$);
  }
}, $mr$Timing$logger_$$ = $mr$Logger$getInstance$$("mr.Timing"), $mr$MediumTiming$$ = function($name$jscomp$132$$) {
  $mr$Timing$$.call(this, $name$jscomp$132$$);
};
$$jscomp$inherits$$($mr$MediumTiming$$, $mr$Timing$$);
$mr$MediumTiming$$.prototype.end = function($name$jscomp$inline_1016_opt_suffix$jscomp$2$$) {
  $name$jscomp$inline_1016_opt_suffix$jscomp$2$$ = $JSCompiler_StaticMethods_getFullName_$$(this.$b$, $name$jscomp$inline_1016_opt_suffix$jscomp$2$$);
  var $duration$jscomp$inline_1017$$ = Date.now() - this.$f$;
  if (0 > $duration$jscomp$inline_1017$$) {
    $mr$MediumTiming$logger_$$.$warning$("Timing analytics event with negative time");
  } else {
    1E4 > $duration$jscomp$inline_1017$$ && ($duration$jscomp$inline_1017$$ = 1E4);
    18E4 < $duration$jscomp$inline_1017$$ && ($duration$jscomp$inline_1017$$ = 18E4);
    try {
      chrome.metricsPrivate.recordMediumTime($name$jscomp$inline_1016_opt_suffix$jscomp$2$$, $duration$jscomp$inline_1017$$);
    } catch ($e$jscomp$inline_1018$$) {
      $mr$MediumTiming$logger_$$.$warning$("Failed to record time " + $duration$jscomp$inline_1017$$ + " in " + $name$jscomp$inline_1016_opt_suffix$jscomp$2$$);
    }
  }
};
var $mr$MediumTiming$logger_$$ = $mr$Logger$getInstance$$("mr.MediumTiming"), $mr$LongTiming$$ = function($name$jscomp$135$$) {
  $mr$Timing$$.call(this, $name$jscomp$135$$);
};
$$jscomp$inherits$$($mr$LongTiming$$, $mr$Timing$$);
$mr$LongTiming$$.prototype.end = function($name$jscomp$inline_1020_opt_suffix$jscomp$3$$) {
  $name$jscomp$inline_1020_opt_suffix$jscomp$3$$ = $JSCompiler_StaticMethods_getFullName_$$(this.$b$, $name$jscomp$inline_1020_opt_suffix$jscomp$3$$);
  var $duration$jscomp$inline_1021$$ = Date.now() - this.$f$;
  if (0 > $duration$jscomp$inline_1021$$) {
    $mr$LongTiming$logger_$$.$warning$("Timing analytics event with negative time");
  } else {
    18E4 > $duration$jscomp$inline_1021$$ && ($duration$jscomp$inline_1021$$ = 18E4);
    36E5 < $duration$jscomp$inline_1021$$ && ($duration$jscomp$inline_1021$$ = 36E5);
    try {
      chrome.metricsPrivate.recordLongTime($name$jscomp$inline_1020_opt_suffix$jscomp$3$$, $duration$jscomp$inline_1021$$);
    } catch ($e$jscomp$inline_1022$$) {
      $mr$LongTiming$logger_$$.$warning$("Failed to record time " + $duration$jscomp$inline_1021$$ + " in " + $name$jscomp$inline_1020_opt_suffix$jscomp$3$$);
    }
  }
};
var $mr$LongTiming$logger_$$ = $mr$Logger$getInstance$$("mr.LongTiming"), $mr$Analytics$logger_$$ = $mr$Logger$getInstance$$("mr.Analytics"), $mr$Analytics$recordEvent$$ = function($name$jscomp$138$$) {
  try {
    chrome.metricsPrivate.recordUserAction($name$jscomp$138$$);
  } catch ($e$jscomp$17$$) {
    $mr$Analytics$logger_$$.$warning$("Failed to record event " + $name$jscomp$138$$);
  }
}, $mr$Analytics$recordEnum$$ = function($name$jscomp$139$$, $value$jscomp$129$$, $config$jscomp$8_values$jscomp$14$$) {
  var $foundKey$$, $size$jscomp$19$$ = 0, $key$jscomp$63$$;
  for ($key$jscomp$63$$ in $config$jscomp$8_values$jscomp$14$$) {
    $size$jscomp$19$$++, $config$jscomp$8_values$jscomp$14$$[$key$jscomp$63$$] == $value$jscomp$129$$ && ($foundKey$$ = $key$jscomp$63$$);
  }
  if ($foundKey$$) {
    $config$jscomp$8_values$jscomp$14$$ = {metricName:$name$jscomp$139$$, type:"histogram-linear", min:1, max:$size$jscomp$19$$, buckets:$size$jscomp$19$$ + 1};
    try {
      chrome.metricsPrivate.recordValue($config$jscomp$8_values$jscomp$14$$, $value$jscomp$129$$);
    } catch ($e$jscomp$18$$) {
      $mr$Analytics$logger_$$.$warning$("Failed to record enum value " + $foundKey$$ + " (" + $value$jscomp$129$$ + ") in " + $name$jscomp$139$$, $e$jscomp$18$$);
    }
  } else {
    $mr$Analytics$logger_$$.error("Unknown analytics value, " + $value$jscomp$129$$ + " for histogram, " + $name$jscomp$139$$, Error());
  }
};
var $mr$PromiseResolver$$ = function() {
  var $$jscomp$this$$ = this;
  this.$b$ = new Promise(function($resolve$jscomp$6$$, $reject$jscomp$5$$) {
    $$jscomp$this$$.$g$ = $resolve$jscomp$6$$;
    $$jscomp$this$$.$f$ = $reject$jscomp$5$$;
  });
};
$mr$PromiseResolver$$.prototype.resolve = function($value$jscomp$130$$) {
  this.$g$($value$jscomp$130$$);
};
$mr$PromiseResolver$$.prototype.reject = function($reason$jscomp$9$$) {
  this.$f$($reason$jscomp$9$$);
};
var $goog$debug$Error$$ = function($opt_msg$$) {
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
var $goog$dom$defaultDomHelper_$$;
var $goog$asserts$AssertionError$$ = function($messagePattern_splitParts$jscomp$inline_1026$$, $messageArgs$$) {
  $messagePattern_splitParts$jscomp$inline_1026$$ = $messagePattern_splitParts$jscomp$inline_1026$$.split("%s");
  for (var $returnString$jscomp$inline_1027$$ = "", $subLast$jscomp$inline_1028$$ = $messagePattern_splitParts$jscomp$inline_1026$$.length - 1, $i$jscomp$inline_1029$$ = 0; $i$jscomp$inline_1029$$ < $subLast$jscomp$inline_1028$$; $i$jscomp$inline_1029$$++) {
    $returnString$jscomp$inline_1027$$ += $messagePattern_splitParts$jscomp$inline_1026$$[$i$jscomp$inline_1029$$] + ($i$jscomp$inline_1029$$ < $messageArgs$$.length ? $messageArgs$$[$i$jscomp$inline_1029$$] : "%s");
  }
  $goog$debug$Error$$.call(this, $returnString$jscomp$inline_1027$$ + $messagePattern_splitParts$jscomp$inline_1026$$[$subLast$jscomp$inline_1028$$]);
};
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
var $goog$asserts$doAssertFailure_$$ = function($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$jscomp$50$$ = "Assertion failed";
  if ($givenMessage$$) {
    $message$jscomp$50$$ += ": " + $givenMessage$$;
    var $args$jscomp$7$$ = $givenArgs$$;
  } else {
    $defaultMessage$$ && ($message$jscomp$50$$ += ": " + $defaultMessage$$, $args$jscomp$7$$ = $defaultArgs$$);
  }
  throw new $goog$asserts$AssertionError$$("" + $message$jscomp$50$$, $args$jscomp$7$$ || []);
}, $goog$asserts$assert$$ = function($condition$jscomp$3$$, $opt_message$jscomp$9$$, $var_args$jscomp$47$$) {
  $condition$jscomp$3$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$jscomp$9$$, Array.prototype.slice.call(arguments, 2));
  return $condition$jscomp$3$$;
}, $goog$asserts$fail$$ = function($opt_message$jscomp$11$$, $var_args$jscomp$49$$) {
  throw new $goog$asserts$AssertionError$$("Failure" + ($opt_message$jscomp$11$$ ? ": " + $opt_message$jscomp$11$$ : ""), Array.prototype.slice.call(arguments, 1));
}, $goog$asserts$assertNumber$$ = function($value$jscomp$132$$, $opt_message$jscomp$12$$, $var_args$jscomp$50$$) {
  $goog$isNumber$$($value$jscomp$132$$) || $goog$asserts$doAssertFailure_$$("Expected number but got %s: %s.", [$goog$typeOf$$($value$jscomp$132$$), $value$jscomp$132$$], $opt_message$jscomp$12$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$132$$;
}, $goog$asserts$assertString$$ = function($value$jscomp$133$$, $opt_message$jscomp$13$$, $var_args$jscomp$51$$) {
  $goog$isString$$($value$jscomp$133$$) || $goog$asserts$doAssertFailure_$$("Expected string but got %s: %s.", [$goog$typeOf$$($value$jscomp$133$$), $value$jscomp$133$$], $opt_message$jscomp$13$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$133$$;
}, $goog$asserts$assertFunction$$ = function($value$jscomp$134$$, $opt_message$jscomp$14$$, $var_args$jscomp$52$$) {
  $goog$isFunction$$($value$jscomp$134$$) || $goog$asserts$doAssertFailure_$$("Expected function but got %s: %s.", [$goog$typeOf$$($value$jscomp$134$$), $value$jscomp$134$$], $opt_message$jscomp$14$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$134$$;
}, $goog$asserts$assertObject$$ = function($value$jscomp$135$$, $opt_message$jscomp$15$$, $var_args$jscomp$53$$) {
  $goog$isObject$$($value$jscomp$135$$) || $goog$asserts$doAssertFailure_$$("Expected object but got %s: %s.", [$goog$typeOf$$($value$jscomp$135$$), $value$jscomp$135$$], $opt_message$jscomp$15$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$135$$;
}, $goog$asserts$assertArray$$ = function($value$jscomp$136$$, $opt_message$jscomp$16$$, $var_args$jscomp$54$$) {
  $goog$isArray$$($value$jscomp$136$$) || $goog$asserts$doAssertFailure_$$("Expected array but got %s: %s.", [$goog$typeOf$$($value$jscomp$136$$), $value$jscomp$136$$], $opt_message$jscomp$16$$, Array.prototype.slice.call(arguments, 2));
  return $value$jscomp$136$$;
}, $goog$asserts$assertInstanceof$$ = function($value$jscomp$139$$, $type$jscomp$159$$, $opt_message$jscomp$19$$, $var_args$jscomp$57$$) {
  $value$jscomp$139$$ instanceof $type$jscomp$159$$ || $goog$asserts$doAssertFailure_$$("Expected instanceof %s but got %s.", [$goog$asserts$getType_$$($type$jscomp$159$$), $goog$asserts$getType_$$($value$jscomp$139$$)], $opt_message$jscomp$19$$, Array.prototype.slice.call(arguments, 3));
  return $value$jscomp$139$$;
}, $goog$asserts$getType_$$ = function($value$jscomp$141$$) {
  return $value$jscomp$141$$ instanceof Function ? $value$jscomp$141$$.displayName || $value$jscomp$141$$.name || "unknown type name" : $value$jscomp$141$$ instanceof Object ? $value$jscomp$141$$.constructor.displayName || $value$jscomp$141$$.constructor.name || Object.prototype.toString.call($value$jscomp$141$$) : null === $value$jscomp$141$$ ? "null" : typeof $value$jscomp$141$$;
};
var $goog$array$peek$$ = function($array$jscomp$8$$) {
  return $array$jscomp$8$$[$array$jscomp$8$$.length - 1];
}, $goog$array$indexOf$$ = Array.prototype.indexOf ? function($arr$jscomp$9$$, $obj$jscomp$40$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$9$$.length);
  return Array.prototype.indexOf.call($arr$jscomp$9$$, $obj$jscomp$40$$, void 0);
} : function($arr$jscomp$10$$, $obj$jscomp$41$$) {
  if ($goog$isString$$($arr$jscomp$10$$)) {
    return $goog$isString$$($obj$jscomp$41$$) && 1 == $obj$jscomp$41$$.length ? $arr$jscomp$10$$.indexOf($obj$jscomp$41$$, 0) : -1;
  }
  for (var $i$jscomp$25$$ = 0; $i$jscomp$25$$ < $arr$jscomp$10$$.length; $i$jscomp$25$$++) {
    if ($i$jscomp$25$$ in $arr$jscomp$10$$ && $arr$jscomp$10$$[$i$jscomp$25$$] === $obj$jscomp$41$$) {
      return $i$jscomp$25$$;
    }
  }
  return -1;
}, $goog$array$lastIndexOf$$ = Array.prototype.lastIndexOf ? function($arr$jscomp$11$$, $obj$jscomp$42$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$11$$.length);
  return Array.prototype.lastIndexOf.call($arr$jscomp$11$$, $obj$jscomp$42$$, $arr$jscomp$11$$.length - 1);
} : function($arr$jscomp$12$$, $obj$jscomp$43$$) {
  var $fromIndex$jscomp$2_i$jscomp$26$$ = $arr$jscomp$12$$.length - 1;
  0 > $fromIndex$jscomp$2_i$jscomp$26$$ && ($fromIndex$jscomp$2_i$jscomp$26$$ = Math.max(0, $arr$jscomp$12$$.length + $fromIndex$jscomp$2_i$jscomp$26$$));
  if ($goog$isString$$($arr$jscomp$12$$)) {
    return $goog$isString$$($obj$jscomp$43$$) && 1 == $obj$jscomp$43$$.length ? $arr$jscomp$12$$.lastIndexOf($obj$jscomp$43$$, $fromIndex$jscomp$2_i$jscomp$26$$) : -1;
  }
  for (; 0 <= $fromIndex$jscomp$2_i$jscomp$26$$; $fromIndex$jscomp$2_i$jscomp$26$$--) {
    if ($fromIndex$jscomp$2_i$jscomp$26$$ in $arr$jscomp$12$$ && $arr$jscomp$12$$[$fromIndex$jscomp$2_i$jscomp$26$$] === $obj$jscomp$43$$) {
      return $fromIndex$jscomp$2_i$jscomp$26$$;
    }
  }
  return -1;
}, $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$jscomp$13$$, $f$jscomp$4$$, $opt_obj$jscomp$3$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$13$$.length);
  Array.prototype.forEach.call($arr$jscomp$13$$, $f$jscomp$4$$, $opt_obj$jscomp$3$$);
} : function($arr$jscomp$14$$, $f$jscomp$5$$, $opt_obj$jscomp$4$$) {
  for (var $l$jscomp$1$$ = $arr$jscomp$14$$.length, $arr2$$ = $goog$isString$$($arr$jscomp$14$$) ? $arr$jscomp$14$$.split("") : $arr$jscomp$14$$, $i$jscomp$27$$ = 0; $i$jscomp$27$$ < $l$jscomp$1$$; $i$jscomp$27$$++) {
    $i$jscomp$27$$ in $arr2$$ && $f$jscomp$5$$.call($opt_obj$jscomp$4$$, $arr2$$[$i$jscomp$27$$], $i$jscomp$27$$, $arr$jscomp$14$$);
  }
}, $goog$array$forEachRight$$ = function($arr$jscomp$15$$, $f$jscomp$6$$) {
  for (var $arr2$jscomp$1$$ = $goog$isString$$($arr$jscomp$15$$) ? $arr$jscomp$15$$.split("") : $arr$jscomp$15$$, $i$jscomp$28$$ = $arr$jscomp$15$$.length - 1; 0 <= $i$jscomp$28$$; --$i$jscomp$28$$) {
    $i$jscomp$28$$ in $arr2$jscomp$1$$ && $f$jscomp$6$$.call(void 0, $arr2$jscomp$1$$[$i$jscomp$28$$], $i$jscomp$28$$, $arr$jscomp$15$$);
  }
}, $goog$array$filter$$ = Array.prototype.filter ? function($arr$jscomp$16$$, $f$jscomp$7$$, $opt_obj$jscomp$6$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$16$$.length);
  return Array.prototype.filter.call($arr$jscomp$16$$, $f$jscomp$7$$, $opt_obj$jscomp$6$$);
} : function($arr$jscomp$17$$, $f$jscomp$8$$, $opt_obj$jscomp$7$$) {
  for (var $l$jscomp$3$$ = $arr$jscomp$17$$.length, $res$$ = [], $resLength$$ = 0, $arr2$jscomp$2$$ = $goog$isString$$($arr$jscomp$17$$) ? $arr$jscomp$17$$.split("") : $arr$jscomp$17$$, $i$jscomp$29$$ = 0; $i$jscomp$29$$ < $l$jscomp$3$$; $i$jscomp$29$$++) {
    if ($i$jscomp$29$$ in $arr2$jscomp$2$$) {
      var $val$jscomp$12$$ = $arr2$jscomp$2$$[$i$jscomp$29$$];
      $f$jscomp$8$$.call($opt_obj$jscomp$7$$, $val$jscomp$12$$, $i$jscomp$29$$, $arr$jscomp$17$$) && ($res$$[$resLength$$++] = $val$jscomp$12$$);
    }
  }
  return $res$$;
}, $goog$array$map$$ = Array.prototype.map ? function($arr$jscomp$18$$, $f$jscomp$9$$, $opt_obj$jscomp$8$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$18$$.length);
  return Array.prototype.map.call($arr$jscomp$18$$, $f$jscomp$9$$, $opt_obj$jscomp$8$$);
} : function($arr$jscomp$19$$, $f$jscomp$10$$, $opt_obj$jscomp$9$$) {
  for (var $l$jscomp$4$$ = $arr$jscomp$19$$.length, $res$jscomp$1$$ = Array($l$jscomp$4$$), $arr2$jscomp$3$$ = $goog$isString$$($arr$jscomp$19$$) ? $arr$jscomp$19$$.split("") : $arr$jscomp$19$$, $i$jscomp$30$$ = 0; $i$jscomp$30$$ < $l$jscomp$4$$; $i$jscomp$30$$++) {
    $i$jscomp$30$$ in $arr2$jscomp$3$$ && ($res$jscomp$1$$[$i$jscomp$30$$] = $f$jscomp$10$$.call($opt_obj$jscomp$9$$, $arr2$jscomp$3$$[$i$jscomp$30$$], $i$jscomp$30$$, $arr$jscomp$19$$));
  }
  return $res$jscomp$1$$;
}, $goog$array$reduce$$ = Array.prototype.reduce ? function($arr$jscomp$20$$, $f$jscomp$11$$, $val$jscomp$13$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$20$$.length);
  return Array.prototype.reduce.call($arr$jscomp$20$$, $f$jscomp$11$$, $val$jscomp$13$$);
} : function($arr$jscomp$21$$, $f$jscomp$12$$, $val$jscomp$14$$) {
  var $rval$$ = $val$jscomp$14$$;
  $goog$array$forEach$$($arr$jscomp$21$$, function($val$jscomp$15$$, $index$jscomp$73$$) {
    $rval$$ = $f$jscomp$12$$.call(void 0, $rval$$, $val$jscomp$15$$, $index$jscomp$73$$, $arr$jscomp$21$$);
  });
  return $rval$$;
}, $goog$array$some$$ = Array.prototype.some ? function($arr$jscomp$24$$, $f$jscomp$15$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$24$$.length);
  return Array.prototype.some.call($arr$jscomp$24$$, $f$jscomp$15$$, void 0);
} : function($arr$jscomp$25$$, $f$jscomp$16$$) {
  for (var $l$jscomp$5$$ = $arr$jscomp$25$$.length, $arr2$jscomp$4$$ = $goog$isString$$($arr$jscomp$25$$) ? $arr$jscomp$25$$.split("") : $arr$jscomp$25$$, $i$jscomp$31$$ = 0; $i$jscomp$31$$ < $l$jscomp$5$$; $i$jscomp$31$$++) {
    if ($i$jscomp$31$$ in $arr2$jscomp$4$$ && $f$jscomp$16$$.call(void 0, $arr2$jscomp$4$$[$i$jscomp$31$$], $i$jscomp$31$$, $arr$jscomp$25$$)) {
      return !0;
    }
  }
  return !1;
}, $goog$array$every$$ = Array.prototype.every ? function($arr$jscomp$26$$, $f$jscomp$17$$, $opt_obj$jscomp$16$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$26$$.length);
  return Array.prototype.every.call($arr$jscomp$26$$, $f$jscomp$17$$, $opt_obj$jscomp$16$$);
} : function($arr$jscomp$27$$, $f$jscomp$18$$, $opt_obj$jscomp$17$$) {
  for (var $l$jscomp$6$$ = $arr$jscomp$27$$.length, $arr2$jscomp$5$$ = $goog$isString$$($arr$jscomp$27$$) ? $arr$jscomp$27$$.split("") : $arr$jscomp$27$$, $i$jscomp$32$$ = 0; $i$jscomp$32$$ < $l$jscomp$6$$; $i$jscomp$32$$++) {
    if ($i$jscomp$32$$ in $arr2$jscomp$5$$ && !$f$jscomp$18$$.call($opt_obj$jscomp$17$$, $arr2$jscomp$5$$[$i$jscomp$32$$], $i$jscomp$32$$, $arr$jscomp$27$$)) {
      return !1;
    }
  }
  return !0;
}, $goog$array$find$$ = function($arr$jscomp$30$$, $f$jscomp$20_i$jscomp$33$$) {
  $f$jscomp$20_i$jscomp$33$$ = $goog$array$findIndex$$($arr$jscomp$30$$, $f$jscomp$20_i$jscomp$33$$, void 0);
  return 0 > $f$jscomp$20_i$jscomp$33$$ ? null : $goog$isString$$($arr$jscomp$30$$) ? $arr$jscomp$30$$.charAt($f$jscomp$20_i$jscomp$33$$) : $arr$jscomp$30$$[$f$jscomp$20_i$jscomp$33$$];
}, $goog$array$findIndex$$ = function($arr$jscomp$31$$, $f$jscomp$21$$, $opt_obj$jscomp$20$$) {
  for (var $l$jscomp$7$$ = $arr$jscomp$31$$.length, $arr2$jscomp$6$$ = $goog$isString$$($arr$jscomp$31$$) ? $arr$jscomp$31$$.split("") : $arr$jscomp$31$$, $i$jscomp$34$$ = 0; $i$jscomp$34$$ < $l$jscomp$7$$; $i$jscomp$34$$++) {
    if ($i$jscomp$34$$ in $arr2$jscomp$6$$ && $f$jscomp$21$$.call($opt_obj$jscomp$20$$, $arr2$jscomp$6$$[$i$jscomp$34$$], $i$jscomp$34$$, $arr$jscomp$31$$)) {
      return $i$jscomp$34$$;
    }
  }
  return -1;
}, $goog$array$findRight$$ = function($arr$jscomp$32$$, $f$jscomp$22_i$jscomp$35$$) {
  a: {
    for (var $arr2$jscomp$inline_1038$$ = $goog$isString$$($arr$jscomp$32$$) ? $arr$jscomp$32$$.split("") : $arr$jscomp$32$$, $i$jscomp$inline_1039$$ = $arr$jscomp$32$$.length - 1; 0 <= $i$jscomp$inline_1039$$; $i$jscomp$inline_1039$$--) {
      if ($i$jscomp$inline_1039$$ in $arr2$jscomp$inline_1038$$ && $f$jscomp$22_i$jscomp$35$$.call(void 0, $arr2$jscomp$inline_1038$$[$i$jscomp$inline_1039$$], $i$jscomp$inline_1039$$, $arr$jscomp$32$$)) {
        $f$jscomp$22_i$jscomp$35$$ = $i$jscomp$inline_1039$$;
        break a;
      }
    }
    $f$jscomp$22_i$jscomp$35$$ = -1;
  }
  return 0 > $f$jscomp$22_i$jscomp$35$$ ? null : $goog$isString$$($arr$jscomp$32$$) ? $arr$jscomp$32$$.charAt($f$jscomp$22_i$jscomp$35$$) : $arr$jscomp$32$$[$f$jscomp$22_i$jscomp$35$$];
}, $goog$array$contains$$ = function($arr$jscomp$34$$, $obj$jscomp$44$$) {
  return 0 <= $goog$array$indexOf$$($arr$jscomp$34$$, $obj$jscomp$44$$);
}, $goog$array$isEmpty$$ = function($arr$jscomp$35$$) {
  return 0 == $arr$jscomp$35$$.length;
}, $goog$array$clear$$ = function($arr$jscomp$36$$) {
  if (!$goog$isArray$$($arr$jscomp$36$$)) {
    for (var $i$jscomp$37$$ = $arr$jscomp$36$$.length - 1; 0 <= $i$jscomp$37$$; $i$jscomp$37$$--) {
      delete $arr$jscomp$36$$[$i$jscomp$37$$];
    }
  }
  $arr$jscomp$36$$.length = 0;
}, $goog$array$insert$$ = function($arr$jscomp$37$$, $obj$jscomp$45$$) {
  $goog$array$contains$$($arr$jscomp$37$$, $obj$jscomp$45$$) || $arr$jscomp$37$$.push($obj$jscomp$45$$);
}, $goog$array$insertBefore$$ = function($arr$jscomp$40$$, $obj$jscomp$47$$, $opt_obj2$$) {
  var $i$jscomp$38$$;
  2 == arguments.length || 0 > ($i$jscomp$38$$ = $goog$array$indexOf$$($arr$jscomp$40$$, $opt_obj2$$)) ? $arr$jscomp$40$$.push($obj$jscomp$47$$) : $goog$array$splice$$($arr$jscomp$40$$, $i$jscomp$38$$, 0, $obj$jscomp$47$$);
}, $goog$array$remove$$ = function($arr$jscomp$41$$, $i$jscomp$39_obj$jscomp$48$$) {
  $i$jscomp$39_obj$jscomp$48$$ = $goog$array$indexOf$$($arr$jscomp$41$$, $i$jscomp$39_obj$jscomp$48$$);
  var $rv$$;
  ($rv$$ = 0 <= $i$jscomp$39_obj$jscomp$48$$) && $goog$array$removeAt$$($arr$jscomp$41$$, $i$jscomp$39_obj$jscomp$48$$);
  return $rv$$;
}, $goog$array$removeAt$$ = function($arr$jscomp$43$$, $i$jscomp$41$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$43$$.length);
  return 1 == Array.prototype.splice.call($arr$jscomp$43$$, $i$jscomp$41$$, 1).length;
}, $goog$array$removeIf$$ = function($arr$jscomp$44$$, $f$jscomp$24_i$jscomp$42$$) {
  $f$jscomp$24_i$jscomp$42$$ = $goog$array$findIndex$$($arr$jscomp$44$$, $f$jscomp$24_i$jscomp$42$$, void 0);
  return 0 <= $f$jscomp$24_i$jscomp$42$$ ? ($goog$array$removeAt$$($arr$jscomp$44$$, $f$jscomp$24_i$jscomp$42$$), !0) : !1;
}, $goog$array$removeAllIf$$ = function($arr$jscomp$45$$, $f$jscomp$25$$) {
  var $removedCount$$ = 0;
  $goog$array$forEachRight$$($arr$jscomp$45$$, function($val$jscomp$19$$, $index$jscomp$76$$) {
    $f$jscomp$25$$.call(void 0, $val$jscomp$19$$, $index$jscomp$76$$, $arr$jscomp$45$$) && $goog$array$removeAt$$($arr$jscomp$45$$, $index$jscomp$76$$) && $removedCount$$++;
  });
}, $goog$array$concat$$ = function($var_args$jscomp$59$$) {
  return Array.prototype.concat.apply([], arguments);
}, $goog$array$join$$ = function($var_args$jscomp$60$$) {
  return Array.prototype.concat.apply([], arguments);
}, $goog$array$toArray$$ = function($object$jscomp$11$$) {
  var $length$jscomp$16$$ = $object$jscomp$11$$.length;
  if (0 < $length$jscomp$16$$) {
    for (var $rv$jscomp$1$$ = Array($length$jscomp$16$$), $i$jscomp$43$$ = 0; $i$jscomp$43$$ < $length$jscomp$16$$; $i$jscomp$43$$++) {
      $rv$jscomp$1$$[$i$jscomp$43$$] = $object$jscomp$11$$[$i$jscomp$43$$];
    }
    return $rv$jscomp$1$$;
  }
  return [];
}, $goog$array$extend$$ = function($arr1$$, $var_args$jscomp$61$$) {
  for (var $i$jscomp$44$$ = 1; $i$jscomp$44$$ < arguments.length; $i$jscomp$44$$++) {
    var $arr2$jscomp$8$$ = arguments[$i$jscomp$44$$];
    if ($goog$isArrayLike$$($arr2$jscomp$8$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$jscomp$8$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$jscomp$1$$ = 0; $j$jscomp$1$$ < $len2$$; $j$jscomp$1$$++) {
        $arr1$$[$len1$$ + $j$jscomp$1$$] = $arr2$jscomp$8$$[$j$jscomp$1$$];
      }
    } else {
      $arr1$$.push($arr2$jscomp$8$$);
    }
  }
}, $goog$array$splice$$ = function($arr$jscomp$46$$, $index$jscomp$77$$, $howMany$jscomp$1$$, $var_args$jscomp$62$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$46$$.length);
  Array.prototype.splice.apply($arr$jscomp$46$$, $goog$array$slice$$(arguments, 1));
}, $goog$array$slice$$ = function($arr$jscomp$47$$, $start$jscomp$12$$, $opt_end$jscomp$10$$) {
  $goog$asserts$assert$$(null != $arr$jscomp$47$$.length);
  return 2 >= arguments.length ? Array.prototype.slice.call($arr$jscomp$47$$, $start$jscomp$12$$) : Array.prototype.slice.call($arr$jscomp$47$$, $start$jscomp$12$$, $opt_end$jscomp$10$$);
}, $goog$array$removeDuplicates$$ = function($arr$jscomp$48$$, $opt_rv_returnArray$$) {
  $opt_rv_returnArray$$ = $opt_rv_returnArray$$ || $arr$jscomp$48$$;
  for (var $seen$$ = {}, $cursorInsert$$ = 0, $cursorRead$$ = 0; $cursorRead$$ < $arr$jscomp$48$$.length;) {
    var $current$$ = $arr$jscomp$48$$[$cursorRead$$++];
    var $item$jscomp$inline_7974_key$jscomp$65$$ = $current$$;
    $item$jscomp$inline_7974_key$jscomp$65$$ = $goog$isObject$$($item$jscomp$inline_7974_key$jscomp$65$$) ? "o" + ($item$jscomp$inline_7974_key$jscomp$65$$[$goog$UID_PROPERTY_$$] || ($item$jscomp$inline_7974_key$jscomp$65$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)) : (typeof $item$jscomp$inline_7974_key$jscomp$65$$).charAt(0) + $item$jscomp$inline_7974_key$jscomp$65$$;
    Object.prototype.hasOwnProperty.call($seen$$, $item$jscomp$inline_7974_key$jscomp$65$$) || ($seen$$[$item$jscomp$inline_7974_key$jscomp$65$$] = !0, $opt_rv_returnArray$$[$cursorInsert$$++] = $current$$);
  }
  $opt_rv_returnArray$$.length = $cursorInsert$$;
}, $goog$array$binarySearch$$ = function($arr$jscomp$49$$, $target$jscomp$90$$, $opt_compareFn$jscomp$1$$) {
  return $goog$array$binarySearch_$$($arr$jscomp$49$$, $opt_compareFn$jscomp$1$$ || $goog$array$defaultCompare$$, !1, $target$jscomp$90$$);
}, $goog$array$binarySelect$$ = function($arr$jscomp$50$$, $evaluator$$) {
  return $goog$array$binarySearch_$$($arr$jscomp$50$$, $evaluator$$, !0, void 0, void 0);
}, $goog$array$binarySearch_$$ = function($arr$jscomp$51$$, $compareFn$$, $isEvaluator$$, $opt_target$$, $opt_selfObj$$) {
  for (var $left$jscomp$3$$ = 0, $right$jscomp$2$$ = $arr$jscomp$51$$.length, $found$$; $left$jscomp$3$$ < $right$jscomp$2$$;) {
    var $middle$$ = $left$jscomp$3$$ + $right$jscomp$2$$ >> 1, $compareResult$$;
    $isEvaluator$$ ? $compareResult$$ = $compareFn$$.call($opt_selfObj$$, $arr$jscomp$51$$[$middle$$], $middle$$, $arr$jscomp$51$$) : $compareResult$$ = $compareFn$$($opt_target$$, $arr$jscomp$51$$[$middle$$]);
    0 < $compareResult$$ ? $left$jscomp$3$$ = $middle$$ + 1 : ($right$jscomp$2$$ = $middle$$, $found$$ = !$compareResult$$);
  }
  return $found$$ ? $left$jscomp$3$$ : ~$left$jscomp$3$$;
}, $goog$array$sort$$ = function($arr$jscomp$52$$, $opt_compareFn$jscomp$2$$) {
  $arr$jscomp$52$$.sort($opt_compareFn$jscomp$2$$ || $goog$array$defaultCompare$$);
}, $goog$array$sortByKey$$ = function($arr$jscomp$54$$, $keyFn$$) {
  var $keyCompareFn$$ = $goog$array$defaultCompare$$;
  $goog$array$sort$$($arr$jscomp$54$$, function($a$jscomp$3$$, $b$jscomp$2$$) {
    return $keyCompareFn$$($keyFn$$($a$jscomp$3$$), $keyFn$$($b$jscomp$2$$));
  });
}, $goog$array$sortObjectsByKey$$ = function($arr$jscomp$55$$) {
  $goog$array$sortByKey$$($arr$jscomp$55$$, function($obj$jscomp$50$$) {
    return $obj$jscomp$50$$.t;
  });
}, $goog$array$equals$$ = function($arr1$jscomp$1$$, $arr2$jscomp$9$$, $equalsFn_opt_equalsFn$$) {
  if (!$goog$isArrayLike$$($arr1$jscomp$1$$) || !$goog$isArrayLike$$($arr2$jscomp$9$$) || $arr1$jscomp$1$$.length != $arr2$jscomp$9$$.length) {
    return !1;
  }
  var $l$jscomp$9$$ = $arr1$jscomp$1$$.length;
  $equalsFn_opt_equalsFn$$ = $equalsFn_opt_equalsFn$$ || $goog$array$defaultCompareEquality$$;
  for (var $i$jscomp$47$$ = 0; $i$jscomp$47$$ < $l$jscomp$9$$; $i$jscomp$47$$++) {
    if (!$equalsFn_opt_equalsFn$$($arr1$jscomp$1$$[$i$jscomp$47$$], $arr2$jscomp$9$$[$i$jscomp$47$$])) {
      return !1;
    }
  }
  return !0;
}, $goog$array$defaultCompare$$ = function($a$jscomp$4$$, $b$jscomp$3$$) {
  return $a$jscomp$4$$ > $b$jscomp$3$$ ? 1 : $a$jscomp$4$$ < $b$jscomp$3$$ ? -1 : 0;
}, $goog$array$defaultCompareEquality$$ = function($a$jscomp$6$$, $b$jscomp$5$$) {
  return $a$jscomp$6$$ === $b$jscomp$5$$;
}, $goog$array$toObject$$ = function($arr$jscomp$57$$, $keyFunc$$) {
  var $ret$$ = {};
  $goog$array$forEach$$($arr$jscomp$57$$, function($element$jscomp$28$$, $index$jscomp$80$$) {
    $ret$$[$keyFunc$$.call(void 0, $element$jscomp$28$$, $index$jscomp$80$$, $arr$jscomp$57$$)] = $element$jscomp$28$$;
  });
  return $ret$$;
}, $goog$array$concatMap$$ = function($arr$jscomp$61$$, $f$jscomp$26$$) {
  return $goog$array$concat$$.apply([], $goog$array$map$$($arr$jscomp$61$$, $f$jscomp$26$$, void 0));
};
var $goog$dom$asserts$assertIsElementType_$$ = function($o$jscomp$1$$, $typename$$) {
  a: {
    try {
      var $doc$jscomp$inline_1046$$ = $o$jscomp$1$$ && $o$jscomp$1$$.ownerDocument, $win$jscomp$inline_1047$$ = $doc$jscomp$inline_1046$$ && ($doc$jscomp$inline_1046$$.defaultView || $doc$jscomp$inline_1046$$.parentWindow);
      $win$jscomp$inline_1047$$ = $win$jscomp$inline_1047$$ || $goog$global$$;
      if ($win$jscomp$inline_1047$$.Element && $win$jscomp$inline_1047$$.Location) {
        var $win$jscomp$1$$ = $win$jscomp$inline_1047$$;
        break a;
      }
    } catch ($ex$jscomp$inline_1048$$) {
    }
    $win$jscomp$1$$ = null;
  }
  if ($win$jscomp$1$$ && "undefined" != typeof $win$jscomp$1$$[$typename$$] && (!$o$jscomp$1$$ || !($o$jscomp$1$$ instanceof $win$jscomp$1$$[$typename$$]) && ($o$jscomp$1$$ instanceof $win$jscomp$1$$.Location || $o$jscomp$1$$ instanceof $win$jscomp$1$$.Element))) {
    if ($goog$isObject$$($o$jscomp$1$$)) {
      try {
        var $JSCompiler_inline_result$jscomp$436$$ = $o$jscomp$1$$.constructor.displayName || $o$jscomp$1$$.constructor.name || Object.prototype.toString.call($o$jscomp$1$$);
      } catch ($e$jscomp$inline_1051$$) {
        $JSCompiler_inline_result$jscomp$436$$ = "<object could not be stringified>";
      }
    } else {
      $JSCompiler_inline_result$jscomp$436$$ = void 0 === $o$jscomp$1$$ ? "undefined" : null === $o$jscomp$1$$ ? "null" : typeof $o$jscomp$1$$;
    }
    $goog$asserts$fail$$("Argument is not a %s (or a non-Element, non-Location mock); got: %s", $typename$$, $JSCompiler_inline_result$jscomp$436$$);
  }
};
var $goog$functions$constant$$ = function($retValue$$) {
  return function() {
    return $retValue$$;
  };
}, $goog$functions$TRUE$$ = function() {
  return !0;
}, $goog$functions$NULL$$ = function() {
  return null;
}, $goog$functions$identity$$ = function($opt_returnValue$jscomp$1$$) {
  return $opt_returnValue$jscomp$1$$;
}, $goog$functions$error$$ = function($message$jscomp$51$$) {
  return function() {
    throw Error($message$jscomp$51$$);
  };
}, $goog$functions$lock$$ = function($f$jscomp$27$$) {
  var $opt_numArgs$$ = $opt_numArgs$$ || 0;
  return function() {
    return $f$jscomp$27$$.apply(this, Array.prototype.slice.call(arguments, 0, $opt_numArgs$$));
  };
};
var $goog$object$forEach$$ = function($obj$jscomp$52$$, $f$jscomp$34$$, $opt_obj$jscomp$29$$) {
  for (var $key$jscomp$68$$ in $obj$jscomp$52$$) {
    $f$jscomp$34$$.call($opt_obj$jscomp$29$$, $obj$jscomp$52$$[$key$jscomp$68$$], $key$jscomp$68$$, $obj$jscomp$52$$);
  }
}, $goog$object$map$$ = function($obj$jscomp$54$$, $f$jscomp$36$$) {
  var $res$jscomp$3$$ = {}, $key$jscomp$70$$;
  for ($key$jscomp$70$$ in $obj$jscomp$54$$) {
    $res$jscomp$3$$[$key$jscomp$70$$] = $f$jscomp$36$$.call(void 0, $obj$jscomp$54$$[$key$jscomp$70$$], $key$jscomp$70$$, $obj$jscomp$54$$);
  }
  return $res$jscomp$3$$;
}, $goog$object$some$$ = function($obj$jscomp$55$$, $f$jscomp$37$$) {
  for (var $key$jscomp$71$$ in $obj$jscomp$55$$) {
    if ($f$jscomp$37$$.call(void 0, $obj$jscomp$55$$[$key$jscomp$71$$], $key$jscomp$71$$, $obj$jscomp$55$$)) {
      return !0;
    }
  }
  return !1;
}, $goog$object$getCount$$ = function($obj$jscomp$57$$) {
  var $rv$jscomp$2$$ = 0, $key$jscomp$73$$;
  for ($key$jscomp$73$$ in $obj$jscomp$57$$) {
    $rv$jscomp$2$$++;
  }
  return $rv$jscomp$2$$;
}, $goog$object$getAnyKey$$ = function($obj$jscomp$58$$) {
  for (var $key$jscomp$74$$ in $obj$jscomp$58$$) {
    return $key$jscomp$74$$;
  }
}, $goog$object$getValues$$ = function($obj$jscomp$61$$) {
  var $res$jscomp$4$$ = [], $i$jscomp$59$$ = 0, $key$jscomp$76$$;
  for ($key$jscomp$76$$ in $obj$jscomp$61$$) {
    $res$jscomp$4$$[$i$jscomp$59$$++] = $obj$jscomp$61$$[$key$jscomp$76$$];
  }
  return $res$jscomp$4$$;
}, $goog$object$getKeys$$ = function($obj$jscomp$62$$) {
  var $res$jscomp$5$$ = [], $i$jscomp$60$$ = 0, $key$jscomp$77$$;
  for ($key$jscomp$77$$ in $obj$jscomp$62$$) {
    $res$jscomp$5$$[$i$jscomp$60$$++] = $key$jscomp$77$$;
  }
  return $res$jscomp$5$$;
}, $goog$object$containsKey$$ = function($obj$jscomp$64$$, $key$jscomp$78$$) {
  return null !== $obj$jscomp$64$$ && $key$jscomp$78$$ in $obj$jscomp$64$$;
}, $goog$object$containsValue$$ = function($obj$jscomp$65$$, $val$jscomp$21$$) {
  for (var $key$jscomp$79$$ in $obj$jscomp$65$$) {
    if ($obj$jscomp$65$$[$key$jscomp$79$$] == $val$jscomp$21$$) {
      return !0;
    }
  }
  return !1;
}, $goog$object$isEmpty$$ = function($obj$jscomp$68$$) {
  for (var $key$jscomp$82$$ in $obj$jscomp$68$$) {
    return !1;
  }
  return !0;
}, $goog$object$clear$$ = function($obj$jscomp$69$$) {
  for (var $i$jscomp$62$$ in $obj$jscomp$69$$) {
    delete $obj$jscomp$69$$[$i$jscomp$62$$];
  }
}, $goog$object$clone$$ = function($obj$jscomp$76$$) {
  var $res$jscomp$6$$ = {}, $key$jscomp$89$$;
  for ($key$jscomp$89$$ in $obj$jscomp$76$$) {
    $res$jscomp$6$$[$key$jscomp$89$$] = $obj$jscomp$76$$[$key$jscomp$89$$];
  }
  return $res$jscomp$6$$;
}, $goog$object$unsafeClone$$ = function($obj$jscomp$77$$) {
  var $clone$jscomp$1_type$jscomp$160$$ = $goog$typeOf$$($obj$jscomp$77$$);
  if ("object" == $clone$jscomp$1_type$jscomp$160$$ || "array" == $clone$jscomp$1_type$jscomp$160$$) {
    if ($goog$isFunction$$($obj$jscomp$77$$.clone)) {
      return $obj$jscomp$77$$.clone();
    }
    $clone$jscomp$1_type$jscomp$160$$ = "array" == $clone$jscomp$1_type$jscomp$160$$ ? [] : {};
    for (var $key$jscomp$90$$ in $obj$jscomp$77$$) {
      $clone$jscomp$1_type$jscomp$160$$[$key$jscomp$90$$] = $goog$object$unsafeClone$$($obj$jscomp$77$$[$key$jscomp$90$$]);
    }
    return $clone$jscomp$1_type$jscomp$160$$;
  }
  return $obj$jscomp$77$$;
}, $goog$object$transpose$$ = function($obj$jscomp$78$$) {
  var $transposed$$ = {}, $key$jscomp$91$$;
  for ($key$jscomp$91$$ in $obj$jscomp$78$$) {
    $transposed$$[$obj$jscomp$78$$[$key$jscomp$91$$]] = $key$jscomp$91$$;
  }
  return $transposed$$;
}, $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), $goog$object$extend$$ = function($target$jscomp$91$$, $var_args$jscomp$76$$) {
  for (var $key$jscomp$92$$, $source$jscomp$15$$, $i$jscomp$63$$ = 1; $i$jscomp$63$$ < arguments.length; $i$jscomp$63$$++) {
    $source$jscomp$15$$ = arguments[$i$jscomp$63$$];
    for ($key$jscomp$92$$ in $source$jscomp$15$$) {
      $target$jscomp$91$$[$key$jscomp$92$$] = $source$jscomp$15$$[$key$jscomp$92$$];
    }
    for (var $j$jscomp$4$$ = 0; $j$jscomp$4$$ < $goog$object$PROTOTYPE_FIELDS_$$.length; $j$jscomp$4$$++) {
      $key$jscomp$92$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$jscomp$4$$], Object.prototype.hasOwnProperty.call($source$jscomp$15$$, $key$jscomp$92$$) && ($target$jscomp$91$$[$key$jscomp$92$$] = $source$jscomp$15$$[$key$jscomp$92$$]);
    }
  }
}, $goog$object$createSet$$ = function($var_args$jscomp$78$$) {
  var $argLength$jscomp$1$$ = arguments.length;
  if (1 == $argLength$jscomp$1$$ && $goog$isArray$$(arguments[0])) {
    return $goog$object$createSet$$.apply(null, arguments[0]);
  }
  for (var $rv$jscomp$5$$ = {}, $i$jscomp$65$$ = 0; $i$jscomp$65$$ < $argLength$jscomp$1$$; $i$jscomp$65$$++) {
    $rv$jscomp$5$$[arguments[$i$jscomp$65$$]] = !0;
  }
  return $rv$jscomp$5$$;
};
var $goog$string$Const$$ = function($opt_token$jscomp$1$$, $opt_content$$) {
  this.$b$ = $opt_token$jscomp$1$$ === $goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_content$$ || "";
  this.$f$ = $goog$string$Const$TYPE_MARKER_$$;
};
$goog$string$Const$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$string$Const$$.prototype.$getTypedStringValue$ = function() {
  return this.$b$;
};
$goog$string$Const$$.prototype.toString = function() {
  return "Const{" + this.$b$ + "}";
};
var $goog$string$Const$unwrap$$ = function($stringConst$$) {
  if ($stringConst$$ instanceof $goog$string$Const$$ && $stringConst$$.constructor === $goog$string$Const$$ && $stringConst$$.$f$ === $goog$string$Const$TYPE_MARKER_$$) {
    return $stringConst$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type Const, got '" + $stringConst$$ + "'");
  return "type_error:Const";
}, $goog$string$Const$from$$ = function($s$jscomp$10$$) {
  return new $goog$string$Const$$($goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$, $s$jscomp$10$$);
}, $goog$string$Const$TYPE_MARKER_$$ = {}, $goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_$$ = {}, $goog$string$Const$EMPTY$$ = $goog$string$Const$from$$("");
var $goog$html$SafeScript$$ = function() {
  this.$b$ = $goog$html$SafeScript$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeScript$$.prototype.$implementsGoogStringTypedString$ = !0;
var $goog$html$SafeScript$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
$goog$html$SafeScript$$.prototype.$getTypedStringValue$ = function() {
  return "".toString();
};
$goog$html$SafeScript$$.prototype.toString = function() {
  return "SafeScript{}";
};
var $goog$html$SafeScript$unwrapTrustedScript$$ = function($safeScript$jscomp$1$$) {
  if ($safeScript$jscomp$1$$ instanceof $goog$html$SafeScript$$ && $safeScript$jscomp$1$$.constructor === $goog$html$SafeScript$$ && $safeScript$jscomp$1$$.$b$ === $goog$html$SafeScript$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return "";
  }
  $goog$asserts$fail$$("expected object of type SafeScript, got '" + $safeScript$jscomp$1$$ + "' of type " + $goog$typeOf$$($safeScript$jscomp$1$$));
  return "type_error:SafeScript";
};
var $goog$i18n$bidi$ltrCharReg_$$ = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, $goog$i18n$bidi$rtlDirCheckRe_$$ = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/, $goog$i18n$bidi$isRequiredLtrRe_$$ = 
/^http:\/\/.*/, $goog$i18n$bidi$wordSeparatorRe_$$ = /\s+/, $goog$i18n$bidi$hasNumeralsRe_$$ = /[\d\u06f0-\u06f9]/;
var $goog$html$TrustedResourceUrl$$ = function($opt_token$jscomp$2$$, $opt_content$jscomp$1$$, $opt_trustedUrl$$) {
  this.$b$ = $opt_token$jscomp$2$$ === $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_content$jscomp$1$$ || "";
  this.$f$ = $opt_token$jscomp$2$$ === $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_trustedUrl$$ || null;
  this.$g$ = $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$TrustedResourceUrl$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$html$TrustedResourceUrl$$.prototype.$getTypedStringValue$ = function() {
  return this.$b$.toString();
};
$goog$html$TrustedResourceUrl$$.prototype.toString = function() {
  return "TrustedResourceUrl{" + this.$b$ + "}";
};
var $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$ = function($trustedResourceUrl$jscomp$1$$) {
  if ($trustedResourceUrl$jscomp$1$$ instanceof $goog$html$TrustedResourceUrl$$ && $trustedResourceUrl$jscomp$1$$.constructor === $goog$html$TrustedResourceUrl$$ && $trustedResourceUrl$jscomp$1$$.$g$ === $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $trustedResourceUrl$jscomp$1$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type TrustedResourceUrl, got '" + $trustedResourceUrl$jscomp$1$$ + "' of type " + $goog$typeOf$$($trustedResourceUrl$jscomp$1$$));
  return "type_error:TrustedResourceUrl";
}, $goog$html$TrustedResourceUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ = {};
var $goog$string$internal$startsWith$$ = function($str$jscomp$26$$, $prefix$jscomp$3$$) {
  return 0 == $str$jscomp$26$$.lastIndexOf($prefix$jscomp$3$$, 0);
}, $goog$string$internal$caseInsensitiveEquals$$ = function($str1$$, $str2$$) {
  return $str1$$.toLowerCase() == $str2$$.toLowerCase();
}, $goog$string$internal$isEmptyOrWhitespace$$ = function($str$jscomp$30$$) {
  return /^[\s\xa0]*$/.test($str$jscomp$30$$);
}, $goog$string$internal$trim$$ = String.prototype.trim ? function($str$jscomp$31$$) {
  return $str$jscomp$31$$.trim();
} : function($str$jscomp$32$$) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec($str$jscomp$32$$)[1];
}, $goog$string$internal$caseInsensitiveCompare$$ = function($str1$jscomp$1_test1$$, $str2$jscomp$1_test2$$) {
  $str1$jscomp$1_test1$$ = String($str1$jscomp$1_test1$$).toLowerCase();
  $str2$jscomp$1_test2$$ = String($str2$jscomp$1_test2$$).toLowerCase();
  return $str1$jscomp$1_test1$$ < $str2$jscomp$1_test2$$ ? -1 : $str1$jscomp$1_test1$$ == $str2$jscomp$1_test2$$ ? 0 : 1;
}, $goog$string$internal$AMP_RE_$$ = /&/g, $goog$string$internal$LT_RE_$$ = /</g, $goog$string$internal$GT_RE_$$ = />/g, $goog$string$internal$QUOT_RE_$$ = /"/g, $goog$string$internal$SINGLE_QUOTE_RE_$$ = /'/g, $goog$string$internal$NULL_RE_$$ = /\x00/g, $goog$string$internal$ALL_RE_$$ = /[\x00&<>"']/, $goog$string$internal$compareVersions$$ = function($v1Subs_version1$$, $v2Subs_version2$$) {
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
}, $goog$string$internal$compareElements_$$ = function($left$jscomp$4$$, $right$jscomp$3$$) {
  return $left$jscomp$4$$ < $right$jscomp$3$$ ? -1 : $left$jscomp$4$$ > $right$jscomp$3$$ ? 1 : 0;
};
var $goog$html$SafeUrl$$ = function($opt_token$jscomp$3$$, $opt_content$jscomp$2$$) {
  this.$b$ = $opt_token$jscomp$3$$ === $goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ && $opt_content$jscomp$2$$ || "";
  this.$f$ = $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeUrl$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$html$SafeUrl$$.prototype.$getTypedStringValue$ = function() {
  return this.$b$.toString();
};
$goog$html$SafeUrl$$.prototype.toString = function() {
  return "SafeUrl{" + this.$b$ + "}";
};
var $goog$html$SafeUrl$unwrapTrustedURL$$ = function($safeUrl$jscomp$1$$) {
  if ($safeUrl$jscomp$1$$ instanceof $goog$html$SafeUrl$$ && $safeUrl$jscomp$1$$.constructor === $goog$html$SafeUrl$$ && $safeUrl$jscomp$1$$.$f$ === $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeUrl$jscomp$1$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type SafeUrl, got '" + $safeUrl$jscomp$1$$ + "' of type " + $goog$typeOf$$($safeUrl$jscomp$1$$));
  return "type_error:SafeUrl";
}, $goog$html$SAFE_URL_PATTERN_$$ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, $goog$html$SafeUrl$sanitize$$ = function($url$jscomp$65$$) {
  if ($url$jscomp$65$$ instanceof $goog$html$SafeUrl$$) {
    return $url$jscomp$65$$;
  }
  $url$jscomp$65$$ = "object" == typeof $url$jscomp$65$$ && $url$jscomp$65$$.$implementsGoogStringTypedString$ ? $url$jscomp$65$$.$getTypedStringValue$() : String($url$jscomp$65$$);
  $goog$html$SAFE_URL_PATTERN_$$.test($url$jscomp$65$$) || ($url$jscomp$65$$ = "about:invalid#zClosurez");
  return new $goog$html$SafeUrl$$($goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$, $url$jscomp$65$$);
}, $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$ = {};
var $goog$html$SafeStyle$$ = function() {
  this.$b$ = "";
  this.$f$ = $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeStyle$$.prototype.$implementsGoogStringTypedString$ = !0;
var $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
$goog$html$SafeStyle$$.prototype.$getTypedStringValue$ = function() {
  return this.$b$;
};
$goog$html$SafeStyle$$.prototype.toString = function() {
  return "SafeStyle{" + this.$b$ + "}";
};
var $goog$html$SafeStyle$unwrap$$ = function($safeStyle$$) {
  if ($safeStyle$$ instanceof $goog$html$SafeStyle$$ && $safeStyle$$.constructor === $goog$html$SafeStyle$$ && $safeStyle$$.$f$ === $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeStyle$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type SafeStyle, got '" + $safeStyle$$ + "' of type " + $goog$typeOf$$($safeStyle$$));
  return "type_error:SafeStyle";
}, $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$$ = function($style$jscomp$6$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$ = new $goog$html$SafeStyle$$;
  $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$b$ = $style$jscomp$6$$;
  return $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$;
}, $goog$html$SafeStyle$EMPTY$$ = $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$$(""), $goog$html$SafeStyle$sanitizePropertyValue_$$ = function($result$jscomp$13_value$jscomp$155$$) {
  if ($result$jscomp$13_value$jscomp$155$$ instanceof $goog$html$SafeUrl$$) {
    return 'url("' + $goog$html$SafeUrl$unwrapTrustedURL$$($result$jscomp$13_value$jscomp$155$$).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
  }
  $result$jscomp$13_value$jscomp$155$$ = $result$jscomp$13_value$jscomp$155$$ instanceof $goog$string$Const$$ ? $goog$string$Const$unwrap$$($result$jscomp$13_value$jscomp$155$$) : $goog$html$SafeStyle$sanitizePropertyValueString_$$(String($result$jscomp$13_value$jscomp$155$$));
  if (/[{;}]/.test($result$jscomp$13_value$jscomp$155$$)) {
    throw new $goog$asserts$AssertionError$$("Value does not allow [{;}], got: %s.", [$result$jscomp$13_value$jscomp$155$$]);
  }
  return $result$jscomp$13_value$jscomp$155$$;
}, $goog$html$SafeStyle$sanitizePropertyValueString_$$ = function($value$jscomp$156$$) {
  var $outsideSingle$jscomp$inline_1054_valueWithoutFunctions$$ = $value$jscomp$156$$.replace($goog$html$SafeStyle$FUNCTIONS_RE_$$, "$1").replace($goog$html$SafeStyle$FUNCTIONS_RE_$$, "$1").replace($goog$html$SafeStyle$URL_RE_$$, "url");
  if ($goog$html$SafeStyle$VALUE_RE_$$.test($outsideSingle$jscomp$inline_1054_valueWithoutFunctions$$)) {
    if ($goog$html$SafeStyle$COMMENT_RE_$$.test($value$jscomp$156$$)) {
      return $goog$asserts$fail$$("String value disallows comments, got: " + $value$jscomp$156$$), "zClosurez";
    }
    for (var $outsideDouble$jscomp$inline_1055$$ = $outsideSingle$jscomp$inline_1054_valueWithoutFunctions$$ = !0, $i$jscomp$inline_1056$$ = 0; $i$jscomp$inline_1056$$ < $value$jscomp$156$$.length; $i$jscomp$inline_1056$$++) {
      var $c$jscomp$inline_1057$$ = $value$jscomp$156$$.charAt($i$jscomp$inline_1056$$);
      "'" == $c$jscomp$inline_1057$$ && $outsideDouble$jscomp$inline_1055$$ ? $outsideSingle$jscomp$inline_1054_valueWithoutFunctions$$ = !$outsideSingle$jscomp$inline_1054_valueWithoutFunctions$$ : '"' == $c$jscomp$inline_1057$$ && $outsideSingle$jscomp$inline_1054_valueWithoutFunctions$$ && ($outsideDouble$jscomp$inline_1055$$ = !$outsideDouble$jscomp$inline_1055$$);
    }
    if (!$outsideSingle$jscomp$inline_1054_valueWithoutFunctions$$ || !$outsideDouble$jscomp$inline_1055$$) {
      return $goog$asserts$fail$$("String value requires balanced quotes, got: " + $value$jscomp$156$$), "zClosurez";
    }
    if (!$goog$html$SafeStyle$hasBalancedSquareBrackets_$$($value$jscomp$156$$)) {
      return $goog$asserts$fail$$("String value requires balanced square brackets and one identifier per pair of brackets, got: " + $value$jscomp$156$$), "zClosurez";
    }
  } else {
    return $goog$asserts$fail$$("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + $value$jscomp$156$$), "zClosurez";
  }
  return $goog$html$SafeStyle$sanitizeUrl_$$($value$jscomp$156$$);
}, $goog$html$SafeStyle$hasBalancedSquareBrackets_$$ = function($value$jscomp$158$$) {
  for (var $outside$$ = !0, $tokenRe$$ = /^[-_a-zA-Z0-9]$/, $i$jscomp$72$$ = 0; $i$jscomp$72$$ < $value$jscomp$158$$.length; $i$jscomp$72$$++) {
    var $c$jscomp$2$$ = $value$jscomp$158$$.charAt($i$jscomp$72$$);
    if ("]" == $c$jscomp$2$$) {
      if ($outside$$) {
        return !1;
      }
      $outside$$ = !0;
    } else {
      if ("[" == $c$jscomp$2$$) {
        if (!$outside$$) {
          return !1;
        }
        $outside$$ = !1;
      } else {
        if (!$outside$$ && !$tokenRe$$.test($c$jscomp$2$$)) {
          return !1;
        }
      }
    }
  }
  return $outside$$;
}, $goog$html$SafeStyle$VALUE_RE_$$ = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/, $goog$html$SafeStyle$URL_RE_$$ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g, $goog$html$SafeStyle$FUNCTIONS_RE_$$ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g, $goog$html$SafeStyle$COMMENT_RE_$$ = /\/\*/, $goog$html$SafeStyle$sanitizeUrl_$$ = function($value$jscomp$159$$) {
  return $value$jscomp$159$$.replace($goog$html$SafeStyle$URL_RE_$$, function($match$jscomp$4_sanitized$$, $before$jscomp$1$$, $url$jscomp$69$$, $after$$) {
    var $quote$$ = "";
    $url$jscomp$69$$ = $url$jscomp$69$$.replace(/^(['"])(.*)\1$/, function($match$jscomp$5$$, $start$jscomp$14$$, $inside$$) {
      $quote$$ = $start$jscomp$14$$;
      return $inside$$;
    });
    $match$jscomp$4_sanitized$$ = $goog$html$SafeUrl$sanitize$$($url$jscomp$69$$).$getTypedStringValue$();
    return $before$jscomp$1$$ + $quote$$ + $match$jscomp$4_sanitized$$ + $quote$$ + $after$$;
  });
};
var $goog$html$SafeStyleSheet$$ = function() {
  this.$b$ = "";
  this.$f$ = $goog$html$SafeStyleSheet$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
};
$goog$html$SafeStyleSheet$$.prototype.$implementsGoogStringTypedString$ = !0;
var $goog$html$SafeStyleSheet$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $goog$html$SafeStyleSheet$createRule$$ = function($selector$jscomp$2_styleSheet$$, $map$jscomp$inline_1065_style$jscomp$9$$) {
  if (-1 != $selector$jscomp$2_styleSheet$$.indexOf("<")) {
    throw Error("Selector does not allow '<', got: " + $selector$jscomp$2_styleSheet$$);
  }
  var $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$ = $selector$jscomp$2_styleSheet$$.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test($JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$)) {
    throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + $selector$jscomp$2_styleSheet$$);
  }
  a: {
    for (var $brackets$jscomp$inline_1060_value$jscomp$inline_1068$$ = {"(":")", "[":"]"}, $expectedBrackets$jscomp$inline_1061$$ = [], $i$jscomp$inline_1062$$ = 0; $i$jscomp$inline_1062$$ < $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$.length; $i$jscomp$inline_1062$$++) {
      var $ch$jscomp$inline_1063$$ = $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$[$i$jscomp$inline_1062$$];
      if ($brackets$jscomp$inline_1060_value$jscomp$inline_1068$$[$ch$jscomp$inline_1063$$]) {
        $expectedBrackets$jscomp$inline_1061$$.push($brackets$jscomp$inline_1060_value$jscomp$inline_1068$$[$ch$jscomp$inline_1063$$]);
      } else {
        if ($goog$object$containsValue$$($brackets$jscomp$inline_1060_value$jscomp$inline_1068$$, $ch$jscomp$inline_1063$$) && $expectedBrackets$jscomp$inline_1061$$.pop() != $ch$jscomp$inline_1063$$) {
          $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$ = !1;
          break a;
        }
      }
    }
    $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$ = 0 == $expectedBrackets$jscomp$inline_1061$$.length;
  }
  if (!$JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$) {
    throw Error("() and [] in selector must be balanced, got: " + $selector$jscomp$2_styleSheet$$);
  }
  if (!($map$jscomp$inline_1065_style$jscomp$9$$ instanceof $goog$html$SafeStyle$$)) {
    $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$ = "";
    for (var $name$jscomp$inline_1067$$ in $map$jscomp$inline_1065_style$jscomp$9$$) {
      if (!/^[-_a-zA-Z0-9]+$/.test($name$jscomp$inline_1067$$)) {
        throw Error("Name allows only [-_a-zA-Z0-9], got: " + $name$jscomp$inline_1067$$);
      }
      $brackets$jscomp$inline_1060_value$jscomp$inline_1068$$ = $map$jscomp$inline_1065_style$jscomp$9$$[$name$jscomp$inline_1067$$];
      null != $brackets$jscomp$inline_1060_value$jscomp$inline_1068$$ && ($brackets$jscomp$inline_1060_value$jscomp$inline_1068$$ = $goog$isArray$$($brackets$jscomp$inline_1060_value$jscomp$inline_1068$$) ? $goog$array$map$$($brackets$jscomp$inline_1060_value$jscomp$inline_1068$$, $goog$html$SafeStyle$sanitizePropertyValue_$$).join(" ") : $goog$html$SafeStyle$sanitizePropertyValue_$$($brackets$jscomp$inline_1060_value$jscomp$inline_1068$$), $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$ += 
      $name$jscomp$inline_1067$$ + ":" + $brackets$jscomp$inline_1060_value$jscomp$inline_1068$$ + ";");
    }
    $map$jscomp$inline_1065_style$jscomp$9$$ = $JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$ ? $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_inline_result$jscomp$442_selectorToCheck_style$jscomp$inline_1066$$) : $goog$html$SafeStyle$EMPTY$$;
  }
  $selector$jscomp$2_styleSheet$$ = $selector$jscomp$2_styleSheet$$ + "{" + $goog$html$SafeStyle$unwrap$$($map$jscomp$inline_1065_style$jscomp$9$$).replace(/</g, "\\3C ") + "}";
  return $JSCompiler_StaticMethods_goog_html_SafeStyleSheet_prototype$initSecurityPrivateDoNotAccessOrElse_$$($selector$jscomp$2_styleSheet$$);
}, $goog$html$SafeStyleSheet$concat$$ = function($var_args$jscomp$81$$) {
  var $result$jscomp$14$$ = "", $addArgument$jscomp$1$$ = function($argument$jscomp$1$$) {
    $goog$isArray$$($argument$jscomp$1$$) ? $goog$array$forEach$$($argument$jscomp$1$$, $addArgument$jscomp$1$$) : $result$jscomp$14$$ += $goog$html$SafeStyleSheet$unwrap$$($argument$jscomp$1$$);
  };
  $goog$array$forEach$$(arguments, $addArgument$jscomp$1$$);
  return $JSCompiler_StaticMethods_goog_html_SafeStyleSheet_prototype$initSecurityPrivateDoNotAccessOrElse_$$($result$jscomp$14$$);
};
$goog$html$SafeStyleSheet$$.prototype.$getTypedStringValue$ = function() {
  return this.$b$;
};
$goog$html$SafeStyleSheet$$.prototype.toString = function() {
  return "SafeStyleSheet{" + this.$b$ + "}";
};
var $goog$html$SafeStyleSheet$unwrap$$ = function($safeStyleSheet$$) {
  if ($safeStyleSheet$$ instanceof $goog$html$SafeStyleSheet$$ && $safeStyleSheet$$.constructor === $goog$html$SafeStyleSheet$$ && $safeStyleSheet$$.$f$ === $goog$html$SafeStyleSheet$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeStyleSheet$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type SafeStyleSheet, got '" + $safeStyleSheet$$ + "' of type " + $goog$typeOf$$($safeStyleSheet$$));
  return "type_error:SafeStyleSheet";
}, $JSCompiler_StaticMethods_goog_html_SafeStyleSheet_prototype$initSecurityPrivateDoNotAccessOrElse_$$ = function($styleSheet$jscomp$3$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeStyleSheet_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$ = new $goog$html$SafeStyleSheet$$;
  $JSCompiler_StaticMethods_goog_html_SafeStyleSheet_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$b$ = $styleSheet$jscomp$3$$;
  return $JSCompiler_StaticMethods_goog_html_SafeStyleSheet_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$;
}, $goog$html$SafeStyleSheet$EMPTY$$ = $JSCompiler_StaticMethods_goog_html_SafeStyleSheet_prototype$initSecurityPrivateDoNotAccessOrElse_$$("");
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$jscomp$inline_1070$$ = $goog$global$$.navigator;
  if ($navigator$jscomp$inline_1070$$) {
    var $userAgent$jscomp$inline_1071$$ = $navigator$jscomp$inline_1070$$.userAgent;
    if ($userAgent$jscomp$inline_1071$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$jscomp$inline_1071$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
var $goog$labs$userAgent$util$matchUserAgent$$ = function($str$jscomp$38$$) {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$jscomp$38$$);
};
var $goog$labs$userAgent$browser$matchFirefox_$$ = function() {
  return $goog$labs$userAgent$util$matchUserAgent$$("Firefox") || $goog$labs$userAgent$util$matchUserAgent$$("FxiOS");
}, $goog$labs$userAgent$browser$matchChrome_$$ = function() {
  return ($goog$labs$userAgent$util$matchUserAgent$$("Chrome") || $goog$labs$userAgent$util$matchUserAgent$$("CriOS")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge");
};
var $goog$html$SafeHtml$$ = function() {
  this.$b$ = "";
  this.$f$ = $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
  this.$dir_$ = null;
};
$goog$html$SafeHtml$$.prototype.$implementsGoogStringTypedString$ = !0;
$goog$html$SafeHtml$$.prototype.$getTypedStringValue$ = function() {
  return this.$b$.toString();
};
$goog$html$SafeHtml$$.prototype.toString = function() {
  return "SafeHtml{" + this.$b$ + "}";
};
var $goog$html$SafeHtml$unwrapTrustedHTML$$ = function($safeHtml$jscomp$1$$) {
  if ($safeHtml$jscomp$1$$ instanceof $goog$html$SafeHtml$$ && $safeHtml$jscomp$1$$.constructor === $goog$html$SafeHtml$$ && $safeHtml$jscomp$1$$.$f$ === $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
    return $safeHtml$jscomp$1$$.$b$;
  }
  $goog$asserts$fail$$("expected object of type SafeHtml, got '" + $safeHtml$jscomp$1$$ + "' of type " + $goog$typeOf$$($safeHtml$jscomp$1$$));
  return "type_error:SafeHtml";
}, $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {}, $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$ = function($html$jscomp$8$$, $dir$jscomp$6$$) {
  var $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$ = new $goog$html$SafeHtml$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$b$ = $html$jscomp$8$$;
  $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$.$dir_$ = $dir$jscomp$6$$;
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$self$$;
};
$JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("<!DOCTYPE html>", 0);
var $goog$html$SafeHtml$EMPTY$$ = $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("", 0);
$JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$("<br>", 0);
var $goog$html$uncheckedconversions$safeHtmlFromStringKnownToSatisfyTypeContract$$ = function($justification$$, $html$jscomp$10$$) {
  $goog$asserts$assertString$$($goog$string$Const$unwrap$$($justification$$), "must provide justification");
  $goog$asserts$assert$$(!$goog$string$internal$isEmptyOrWhitespace$$($goog$string$Const$unwrap$$($justification$$)), "must provide non-empty justification");
  return $JSCompiler_StaticMethods_goog_html_SafeHtml_prototype$initSecurityPrivateDoNotAccessOrElse_$$($html$jscomp$10$$, null);
}, $goog$html$uncheckedconversions$safeStyleFromStringKnownToSatisfyTypeContract$$ = function($style$jscomp$10$$) {
  var $justification$jscomp$2$$ = $goog$string$Const$from$$("Output of CSS sanitizer");
  $goog$asserts$assertString$$($goog$string$Const$unwrap$$($justification$jscomp$2$$), "must provide justification");
  $goog$asserts$assert$$(!$goog$string$internal$isEmptyOrWhitespace$$($goog$string$Const$unwrap$$($justification$jscomp$2$$)), "must provide non-empty justification");
  return $JSCompiler_StaticMethods_goog_html_SafeStyle_prototype$initSecurityPrivateDoNotAccessOrElse_$$($style$jscomp$10$$);
};
var $goog$dom$safe$SET_INNER_HTML_DISALLOWED_TAGS_$$ = {MATH:!0, SCRIPT:!0, STYLE:!0, SVG:!0, TEMPLATE:!0}, $goog$dom$safe$isInnerHtmlCleanupRecursive_$$ = function($fn$jscomp$18$$) {
  var $called$$ = !1, $value$jscomp$149$$;
  return function() {
    $called$$ || ($value$jscomp$149$$ = $fn$jscomp$18$$(), $called$$ = !0);
    return $value$jscomp$149$$;
  };
}(function() {
  if ("undefined" === typeof document) {
    return !1;
  }
  var $div$$ = document.createElement("div"), $childDiv_innerChild$$ = document.createElement("div");
  $childDiv_innerChild$$.appendChild(document.createElement("div"));
  $div$$.appendChild($childDiv_innerChild$$);
  if (!$div$$.firstChild) {
    return !1;
  }
  $childDiv_innerChild$$ = $div$$.firstChild.firstChild;
  $div$$.innerHTML = $goog$html$SafeHtml$unwrapTrustedHTML$$($goog$html$SafeHtml$EMPTY$$);
  return !$childDiv_innerChild$$.parentElement;
}), $goog$dom$safe$unsafeSetInnerHtmlDoNotUseOrElse$$ = function($elem$jscomp$1$$, $html$jscomp$12$$) {
  if ($goog$dom$safe$isInnerHtmlCleanupRecursive_$$()) {
    for (; $elem$jscomp$1$$.lastChild;) {
      $elem$jscomp$1$$.removeChild($elem$jscomp$1$$.lastChild);
    }
  }
  $elem$jscomp$1$$.innerHTML = $goog$html$SafeHtml$unwrapTrustedHTML$$($html$jscomp$12$$);
}, $goog$dom$safe$setInnerHtml$$ = function($elem$jscomp$2$$, $html$jscomp$13$$) {
  if ($goog$dom$safe$SET_INNER_HTML_DISALLOWED_TAGS_$$[$elem$jscomp$2$$.tagName.toUpperCase()]) {
    throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + $elem$jscomp$2$$.tagName + ".");
  }
  $goog$dom$safe$unsafeSetInnerHtmlDoNotUseOrElse$$($elem$jscomp$2$$, $html$jscomp$13$$);
}, $goog$dom$safe$setIframeSrc$$ = function($iframe$jscomp$2$$) {
  var $url$jscomp$82$$ = new $goog$html$TrustedResourceUrl$$($goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_$$, $goog$string$Const$unwrap$$($goog$string$Const$EMPTY$$), null);
  $goog$dom$asserts$assertIsElementType_$$($iframe$jscomp$2$$, "HTMLIFrameElement");
  $iframe$jscomp$2$$.src = $url$jscomp$82$$.$f$ ? $url$jscomp$82$$.$f$ : $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($url$jscomp$82$$).toString();
}, $goog$dom$safe$setScriptSrc$$ = function($script$jscomp$13$$, $nonce$jscomp$4_url$jscomp$85$$) {
  $goog$dom$asserts$assertIsElementType_$$($script$jscomp$13$$, "HTMLScriptElement");
  $script$jscomp$13$$.src = $goog$html$TrustedResourceUrl$unwrapTrustedScriptURL$$($nonce$jscomp$4_url$jscomp$85$$);
  ($nonce$jscomp$4_url$jscomp$85$$ = $goog$getScriptNonce$$()) && $script$jscomp$13$$.setAttribute("nonce", $nonce$jscomp$4_url$jscomp$85$$);
};
var $goog$string$repeat$$ = String.prototype.repeat ? function($string$jscomp$3$$, $length$jscomp$22$$) {
  return $string$jscomp$3$$.repeat($length$jscomp$22$$);
} : function($string$jscomp$4$$, $length$jscomp$23$$) {
  return Array($length$jscomp$23$$ + 1).join($string$jscomp$4$$);
}, $goog$string$padNumber$$ = function($num$jscomp$5_s$jscomp$21$$, $length$jscomp$24$$) {
  $num$jscomp$5_s$jscomp$21$$ = $goog$isDef$$(void 0) ? $num$jscomp$5_s$jscomp$21$$.toFixed(void 0) : String($num$jscomp$5_s$jscomp$21$$);
  var $index$jscomp$83$$ = $num$jscomp$5_s$jscomp$21$$.indexOf(".");
  -1 == $index$jscomp$83$$ && ($index$jscomp$83$$ = $num$jscomp$5_s$jscomp$21$$.length);
  return $goog$string$repeat$$("0", Math.max(0, $length$jscomp$24$$ - $index$jscomp$83$$)) + $num$jscomp$5_s$jscomp$21$$;
}, $goog$string$makeSafe$$ = function($obj$jscomp$82$$) {
  return null == $obj$jscomp$82$$ ? "" : String($obj$jscomp$82$$);
}, $goog$string$buildString$$ = function($var_args$jscomp$85$$) {
  return Array.prototype.join.call(arguments, "");
}, $goog$string$getRandomString$$ = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36);
}, $goog$string$splitLimit$$ = function($parts$jscomp$6_str$jscomp$77$$, $separator$jscomp$1$$, $limit$jscomp$1$$) {
  $parts$jscomp$6_str$jscomp$77$$ = $parts$jscomp$6_str$jscomp$77$$.split($separator$jscomp$1$$);
  for (var $returnVal$$ = []; 0 < $limit$jscomp$1$$ && $parts$jscomp$6_str$jscomp$77$$.length;) {
    $returnVal$$.push($parts$jscomp$6_str$jscomp$77$$.shift()), $limit$jscomp$1$$--;
  }
  $parts$jscomp$6_str$jscomp$77$$.length && $returnVal$$.push($parts$jscomp$6_str$jscomp$77$$.join($separator$jscomp$1$$));
  return $returnVal$$;
};
var $goog$labs$userAgent$platform$isIphone$$ = function() {
  return $goog$labs$userAgent$util$matchUserAgent$$("iPhone") && !$goog$labs$userAgent$util$matchUserAgent$$("iPod") && !$goog$labs$userAgent$util$matchUserAgent$$("iPad");
};
var $goog$reflect$sinkValue$$ = function($x$jscomp$89$$) {
  $goog$reflect$sinkValue$$[" "]($x$jscomp$89$$);
  return $x$jscomp$89$$;
};
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
var $goog$reflect$canAccessProperty$$ = function($obj$jscomp$83$$, $prop$jscomp$3$$) {
  try {
    return $goog$reflect$sinkValue$$($obj$jscomp$83$$[$prop$jscomp$3$$]), !0;
  } catch ($e$jscomp$23$$) {
  }
  return !1;
}, $goog$reflect$cache$$ = function($key$jscomp$97$$, $valueFn$$) {
  var $cacheObj$$ = $goog$userAgent$isVersionOrHigherCache_$$;
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $key$jscomp$97$$) ? $cacheObj$$[$key$jscomp$97$$] : $cacheObj$$[$key$jscomp$97$$] = $valueFn$$($key$jscomp$97$$);
};
var $goog$userAgent$getNavigatorTyped$$ = function() {
  return $goog$global$$.navigator || null;
}, $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera"), $goog$userAgent$IE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE"), $goog$userAgent$EDGE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge")) && 
!($goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$WEBKIT$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$MOBILE$$ = $goog$userAgent$WEBKIT$$ && $goog$labs$userAgent$util$matchUserAgent$$("Mobile"), $JSCompiler_inline_result$jscomp$448$$, $navigator$jscomp$inline_1077$$ = 
$goog$userAgent$getNavigatorTyped$$();
$JSCompiler_inline_result$jscomp$448$$ = $navigator$jscomp$inline_1077$$ && $navigator$jscomp$inline_1077$$.platform || "";
var $goog$userAgent$MAC$$ = $goog$labs$userAgent$util$matchUserAgent$$("Macintosh"), $goog$userAgent$WINDOWS$$ = $goog$labs$userAgent$util$matchUserAgent$$("Windows"), $goog$userAgent$LINUX$$ = $goog$labs$userAgent$util$matchUserAgent$$("Linux") || $goog$labs$userAgent$util$matchUserAgent$$("CrOS"), $goog$userAgent$ANDROID$$ = $goog$labs$userAgent$util$matchUserAgent$$("Android"), $goog$userAgent$IPHONE$$ = $goog$labs$userAgent$platform$isIphone$$(), $goog$userAgent$IPAD$$ = $goog$labs$userAgent$util$matchUserAgent$$("iPad"), 
$goog$userAgent$IPOD$$ = $goog$labs$userAgent$util$matchUserAgent$$("iPod"), $goog$userAgent$getDocumentMode_$$ = function() {
  var $doc$jscomp$12$$ = $goog$global$$.document;
  return $doc$jscomp$12$$ ? $doc$jscomp$12$$.documentMode : void 0;
}, $JSCompiler_inline_result$jscomp$449$$;
a: {
  var $version$jscomp$inline_1079$$ = "", $arr$jscomp$inline_1080$$ = function() {
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
  $arr$jscomp$inline_1080$$ && ($version$jscomp$inline_1079$$ = $arr$jscomp$inline_1080$$ ? $arr$jscomp$inline_1080$$[1] : "");
  if ($goog$userAgent$IE$$) {
    var $docMode$jscomp$inline_1081$$ = $goog$userAgent$getDocumentMode_$$();
    if (null != $docMode$jscomp$inline_1081$$ && $docMode$jscomp$inline_1081$$ > parseFloat($version$jscomp$inline_1079$$)) {
      $JSCompiler_inline_result$jscomp$449$$ = String($docMode$jscomp$inline_1081$$);
      break a;
    }
  }
  $JSCompiler_inline_result$jscomp$449$$ = $version$jscomp$inline_1079$$;
}
var $goog$userAgent$VERSION$$ = $JSCompiler_inline_result$jscomp$449$$, $goog$userAgent$isVersionOrHigherCache_$$ = {}, $goog$userAgent$isVersionOrHigher$$ = function($version$jscomp$11$$) {
  return $goog$reflect$cache$$($version$jscomp$11$$, function() {
    return 0 <= $goog$string$internal$compareVersions$$($goog$userAgent$VERSION$$, $version$jscomp$11$$);
  });
}, $JSCompiler_inline_result$jscomp$450$$;
$JSCompiler_inline_result$jscomp$450$$ = $goog$global$$.document && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() : void 0;
var $goog$userAgent$product$FIREFOX$$ = $goog$labs$userAgent$browser$matchFirefox_$$(), $goog$userAgent$product$IPHONE$$ = $goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPod"), $goog$userAgent$product$IPAD$$ = $goog$labs$userAgent$util$matchUserAgent$$("iPad"), $goog$userAgent$product$ANDROID$$ = $goog$labs$userAgent$util$matchUserAgent$$("Android") && !($goog$labs$userAgent$browser$matchChrome_$$() || $goog$labs$userAgent$browser$matchFirefox_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Opera") || 
$goog$labs$userAgent$util$matchUserAgent$$("Silk")), $goog$userAgent$product$CHROME$$ = $goog$labs$userAgent$browser$matchChrome_$$(), $goog$userAgent$product$SAFARI$$ = $goog$labs$userAgent$util$matchUserAgent$$("Safari") && !($goog$labs$userAgent$browser$matchChrome_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Coast") || $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("Edge") || $goog$labs$userAgent$util$matchUserAgent$$("Edg/") || $goog$labs$userAgent$util$matchUserAgent$$("OPR") || 
$goog$labs$userAgent$browser$matchFirefox_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Silk") || $goog$labs$userAgent$util$matchUserAgent$$("Android")) && !($goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod"));
var $goog$math$uniformRandom$$ = function($a$jscomp$11$$, $b$jscomp$9$$) {
  return $a$jscomp$11$$ + Math.random() * ($b$jscomp$9$$ - $a$jscomp$11$$);
};
var $module$exports$mr$Retry$$ = function($onAttempt$$, $retryDelay$$, $maxAttempts$$) {
  $mr$Assertions$assert$$(0 < $maxAttempts$$);
  $mr$Assertions$assert$$(0 < $retryDelay$$);
  this.$s$ = $onAttempt$$;
  this.$g$ = $retryDelay$$;
  this.$o$ = $maxAttempts$$;
  this.$l$ = 0;
  this.$h$ = !1;
  this.$b$ = this.$f$ = null;
};
$module$exports$mr$Retry$$.prototype.start = function() {
  if (null != this.$b$) {
    throw Error("Cannot call Retry.start more than once.");
  }
  this.$b$ = new $mr$PromiseResolver$$;
  this.$m$();
  return this.$b$.$b$;
};
$module$exports$mr$Retry$$.prototype.$m$ = function() {
  var $$jscomp$this$jscomp$1$$ = this;
  this.$f$ = null;
  this.$h$ || (this.$l$++, this.$s$().then(function($result$jscomp$19$$) {
    $JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$$($$jscomp$this$jscomp$1$$);
    $$jscomp$this$jscomp$1$$.$b$.resolve($result$jscomp$19$$);
  }, function($error$jscomp$9$$) {
    $$jscomp$this$jscomp$1$$.$l$ >= $$jscomp$this$jscomp$1$$.$o$ ? ($JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$$($$jscomp$this$jscomp$1$$), $$jscomp$this$jscomp$1$$.$b$.reject($error$jscomp$9$$)) : ($$jscomp$this$jscomp$1$$.$f$ = setTimeout($$jscomp$this$jscomp$1$$.$m$.bind($$jscomp$this$jscomp$1$$), $$jscomp$this$jscomp$1$$.$g$), $$jscomp$this$jscomp$1$$.$g$ *= 2);
  }));
};
$module$exports$mr$Retry$$.prototype.abort = function($error$jscomp$10$$) {
  $JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$$(this);
  this.$b$.reject(void 0 === $error$jscomp$10$$ ? Error("abort") : $error$jscomp$10$$);
};
var $JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$$ = function($JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$self$$) {
  null != $JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$self$$.$f$ && (clearTimeout($JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$self$$.$f$), $JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$self$$.$f$ = null);
  $JSCompiler_StaticMethods_module$exports$mr$Retry_prototype$cleanup_$self$$.$h$ = !0;
};
var $module$contents$mr$XhrManager_XhrManager$$ = function($maxRequests$$, $defaultTimeoutMillis$$) {
  this.$g$ = $maxRequests$$;
  this.$h$ = $defaultTimeoutMillis$$;
  this.$b$ = 0;
  this.$f$ = [];
};
$module$contents$mr$XhrManager_XhrManager$$.prototype.send = function($entry$jscomp$4_url$jscomp$90$$, $method$jscomp$6$$, $body$jscomp$1$$, $$jscomp$destructuring$var0_timeoutMillis$$) {
  var $$jscomp$destructuring$var1_responseType$$ = void 0 === $$jscomp$destructuring$var0_timeoutMillis$$ ? {} : $$jscomp$destructuring$var0_timeoutMillis$$;
  $$jscomp$destructuring$var0_timeoutMillis$$ = void 0 === $$jscomp$destructuring$var1_responseType$$.timeoutMillis ? this.$h$ : $$jscomp$destructuring$var1_responseType$$.timeoutMillis;
  var $numAttempts$$ = void 0 === $$jscomp$destructuring$var1_responseType$$.$numAttempts$ ? 1 : $$jscomp$destructuring$var1_responseType$$.$numAttempts$, $headers$$ = void 0 === $$jscomp$destructuring$var1_responseType$$.headers ? null : $$jscomp$destructuring$var1_responseType$$.headers;
  $$jscomp$destructuring$var1_responseType$$ = void 0 === $$jscomp$destructuring$var1_responseType$$.responseType ? "" : $$jscomp$destructuring$var1_responseType$$.responseType;
  $entry$jscomp$4_url$jscomp$90$$ = {$resolver$:new $mr$PromiseResolver$$, url:$entry$jscomp$4_url$jscomp$90$$, method:$method$jscomp$6$$, headers:$headers$$, responseType:$$jscomp$destructuring$var1_responseType$$, body:$body$jscomp$1$$, timeoutMillis:$$jscomp$destructuring$var0_timeoutMillis$$, $numAttemptsLeft$:$numAttempts$$};
  this.$b$ < this.$g$ ? $JSCompiler_StaticMethods_startRequest_$$(this, $entry$jscomp$4_url$jscomp$90$$) : this.$f$.push($entry$jscomp$4_url$jscomp$90$$);
  return $entry$jscomp$4_url$jscomp$90$$.$resolver$.$b$;
};
var $JSCompiler_StaticMethods_startNextRequestFromQueue_$$ = function($JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$) {
  if (0 < $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$f$.length && $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$b$ < $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$g$) {
    var $request$jscomp$11$$ = $JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$.$f$.shift();
    $JSCompiler_StaticMethods_startRequest_$$($JSCompiler_StaticMethods_startNextRequestFromQueue_$self$$, $request$jscomp$11$$);
  }
}, $JSCompiler_StaticMethods_startRequest_$$ = function($JSCompiler_StaticMethods_startRequest_$self$$, $request$jscomp$12$$) {
  $JSCompiler_StaticMethods_startRequest_$self$$.$b$++;
  $mr$Assertions$assert$$(0 < $request$jscomp$12$$.$numAttemptsLeft$, "request.numAttemptsLeft > 0");
  $request$jscomp$12$$.$numAttemptsLeft$--;
  $JSCompiler_StaticMethods_sendOneAttempt_$$($request$jscomp$12$$).then(function($response$jscomp$4$$) {
    $request$jscomp$12$$.$resolver$.resolve($response$jscomp$4$$);
    $JSCompiler_StaticMethods_startRequest_$self$$.$b$--;
    $JSCompiler_StaticMethods_startNextRequestFromQueue_$$($JSCompiler_StaticMethods_startRequest_$self$$);
  }, function($e$jscomp$24$$) {
    0 == $request$jscomp$12$$.$numAttemptsLeft$ ? $request$jscomp$12$$.$resolver$.reject($e$jscomp$24$$) : $JSCompiler_StaticMethods_startRequest_$self$$.$f$.push($request$jscomp$12$$);
    $JSCompiler_StaticMethods_startRequest_$self$$.$b$--;
    $JSCompiler_StaticMethods_startNextRequestFromQueue_$$($JSCompiler_StaticMethods_startRequest_$self$$);
  });
}, $JSCompiler_StaticMethods_sendOneAttempt_$$ = function($request$jscomp$13$$) {
  return new Promise(function($resolve$jscomp$7$$, $reject$jscomp$6$$) {
    var $xhr$jscomp$1$$ = new XMLHttpRequest;
    $xhr$jscomp$1$$.onreadystatechange = function() {
      $xhr$jscomp$1$$.readyState == XMLHttpRequest.DONE && $resolve$jscomp$7$$($xhr$jscomp$1$$);
    };
    $xhr$jscomp$1$$.timeout = $request$jscomp$13$$.timeoutMillis;
    $xhr$jscomp$1$$.ontimeout = function() {
      $reject$jscomp$6$$(Error("Timed out"));
    };
    $xhr$jscomp$1$$.open($request$jscomp$13$$.method, $request$jscomp$13$$.url, !0);
    null == $request$jscomp$13$$.headers ? $xhr$jscomp$1$$.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8") : $request$jscomp$13$$.headers.forEach(function($header$jscomp$2$$) {
      return $xhr$jscomp$1$$.setRequestHeader($header$jscomp$2$$[0], $header$jscomp$2$$[1]);
    });
    $xhr$jscomp$1$$.responseType = $request$jscomp$13$$.responseType;
    $xhr$jscomp$1$$.send($request$jscomp$13$$.body);
  });
};
var $module$contents$mr$DongleUtils_DongleUtils$requestDeviceToSendLogs$$ = function($ipAddress$$, $logId$$, $callback$jscomp$369$$) {
  null == $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$ && ($module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$ = new $module$contents$mr$XhrManager_XhrManager$$(1, 3E5));
  var $reportUrl$$ = "https://crash.corp.google.com/samples?reportid=&q=" + encodeURIComponent("UserComments='" + $logId$$ + "'"), $deviceUrl$$ = "http://" + $ipAddress$$ + ":8008/setup/send_log_report";
  $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$.send($deviceUrl$$, "POST", JSON.stringify({uuid:$logId$$}), {headers:[["Content-Type", "application/json"]]}).then(function($response$jscomp$5$$) {
    200 == $response$jscomp$5$$.status ? $callback$jscomp$369$$("ok", $reportUrl$$) : $callback$jscomp$369$$("error", "Unable to POST to " + $deviceUrl$$ + ", error = " + $response$jscomp$5$$.status);
  }, function($error$jscomp$11$$) {
    $callback$jscomp$369$$("error", String($error$jscomp$11$$));
  });
  return $reportUrl$$;
}, $module$contents$mr$DongleUtils_DongleUtils$getSetupInfo$$ = function($ipAddress$jscomp$1$$) {
  var $result$jscomp$20$$ = new $module$contents$mr$DongleUtils_DongleUtils$SetupInfo$$;
  if ("string" !== typeof $ipAddress$jscomp$1$$) {
    return Promise.resolve($result$jscomp$20$$);
  }
  null == $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$ && ($module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$ = new $module$contents$mr$XhrManager_XhrManager$$(1, 3E3));
  return $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$.send("http://" + $ipAddress$jscomp$1$$ + ":8008/setup/eureka_info", "GET", void 0, {responseType:"text"}).then(function($info$jscomp$3_response$jscomp$6_value$jscomp$168$$) {
    $info$jscomp$3_response$jscomp$6_value$jscomp$168$$ = JSON.parse($info$jscomp$3_response$jscomp$6_value$jscomp$168$$.responseText);
    "cast_build_revision" in $info$jscomp$3_response$jscomp$6_value$jscomp$168$$ ? $result$jscomp$20$$.$b$ = String($info$jscomp$3_response$jscomp$6_value$jscomp$168$$.cast_build_revision) : "build_version" in $info$jscomp$3_response$jscomp$6_value$jscomp$168$$ && ($result$jscomp$20$$.$b$ = String($info$jscomp$3_response$jscomp$6_value$jscomp$168$$.build_version));
    "connected" in $info$jscomp$3_response$jscomp$6_value$jscomp$168$$ && ($result$jscomp$20$$.$h$ = "true" == String($info$jscomp$3_response$jscomp$6_value$jscomp$168$$.connected));
    "ethernet_connected" in $info$jscomp$3_response$jscomp$6_value$jscomp$168$$ && ($result$jscomp$20$$.$f$ = "true" == String($info$jscomp$3_response$jscomp$6_value$jscomp$168$$.ethernet_connected));
    "has_update" in $info$jscomp$3_response$jscomp$6_value$jscomp$168$$ && ($result$jscomp$20$$.$g$ = "true" == String($info$jscomp$3_response$jscomp$6_value$jscomp$168$$.has_update));
    "uptime" in $info$jscomp$3_response$jscomp$6_value$jscomp$168$$ && ($info$jscomp$3_response$jscomp$6_value$jscomp$168$$ = Number($info$jscomp$3_response$jscomp$6_value$jscomp$168$$.uptime), Number.isFinite($info$jscomp$3_response$jscomp$6_value$jscomp$168$$) && ($result$jscomp$20$$.$l$ = $info$jscomp$3_response$jscomp$6_value$jscomp$168$$));
  }).catch(function($error$jscomp$12$$) {
    $mr$Logger$getInstance$$("mr.DongleUtils").$warning$("Unable to fetch/parse setup info.", $error$jscomp$12$$);
  }).then(function() {
    return $result$jscomp$20$$;
  });
}, $module$contents$mr$DongleUtils_DongleUtils$SetupInfo$$ = function() {
  this.$l$ = this.$g$ = this.$f$ = this.$h$ = this.$b$ = null;
}, $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSendLogs_$$ = null, $module$contents$mr$DongleUtils_DongleUtils$xhrManagerForSetupInfo_$$ = null;
var $mr$InternalMessage$$ = function($source$jscomp$16$$, $type$jscomp$163$$, $opt_message$jscomp$21$$) {
  this.source = $source$jscomp$16$$;
  this.type = $type$jscomp$163$$;
  this.message = $opt_message$jscomp$21$$;
};
var $goog$debug$deepExpose$$ = function($i$jscomp$85_obj$jscomp$85$$) {
  var $str$jscomp$80$$ = [], $uidsToCleanup$$ = [], $ancestorUids$$ = {}, $helper$$ = function($obj$jscomp$86$$, $space$$) {
    var $nestspace$$ = $space$$ + "  ";
    try {
      if ($goog$isDef$$($obj$jscomp$86$$)) {
        if (null === $obj$jscomp$86$$) {
          $str$jscomp$80$$.push("NULL");
        } else {
          if ($goog$isString$$($obj$jscomp$86$$)) {
            $str$jscomp$80$$.push('"' + $obj$jscomp$86$$.replace(/\n/g, "\n" + $space$$) + '"');
          } else {
            if ($goog$isFunction$$($obj$jscomp$86$$)) {
              $str$jscomp$80$$.push(String($obj$jscomp$86$$).replace(/\n/g, "\n" + $space$$));
            } else {
              if ($goog$isObject$$($obj$jscomp$86$$)) {
                $obj$jscomp$86$$[$goog$UID_PROPERTY_$$] || $uidsToCleanup$$.push($obj$jscomp$86$$);
                var $uid$$ = $obj$jscomp$86$$[$goog$UID_PROPERTY_$$] || ($obj$jscomp$86$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
                if ($ancestorUids$$[$uid$$]) {
                  $str$jscomp$80$$.push("*** reference loop detected (id=" + $uid$$ + ") ***");
                } else {
                  $ancestorUids$$[$uid$$] = !0;
                  $str$jscomp$80$$.push("{");
                  for (var $x$jscomp$94$$ in $obj$jscomp$86$$) {
                    $goog$isFunction$$($obj$jscomp$86$$[$x$jscomp$94$$]) || ($str$jscomp$80$$.push("\n"), $str$jscomp$80$$.push($nestspace$$), $str$jscomp$80$$.push($x$jscomp$94$$ + " = "), $helper$$($obj$jscomp$86$$[$x$jscomp$94$$], $nestspace$$));
                  }
                  $str$jscomp$80$$.push("\n" + $space$$ + "}");
                  delete $ancestorUids$$[$uid$$];
                }
              } else {
                $str$jscomp$80$$.push($obj$jscomp$86$$);
              }
            }
          }
        }
      } else {
        $str$jscomp$80$$.push("undefined");
      }
    } catch ($e$jscomp$26$$) {
      $str$jscomp$80$$.push("*** " + $e$jscomp$26$$ + " ***");
    }
  };
  $helper$$($i$jscomp$85_obj$jscomp$85$$, "");
  for ($i$jscomp$85_obj$jscomp$85$$ = 0; $i$jscomp$85_obj$jscomp$85$$ < $uidsToCleanup$$.length; $i$jscomp$85_obj$jscomp$85$$++) {
    $goog$removeUid$$($uidsToCleanup$$[$i$jscomp$85_obj$jscomp$85$$]);
  }
  return $str$jscomp$80$$.join("");
}, $goog$debug$getStacktraceSimple$$ = function($opt_depth$$) {
  var $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$ = $goog$debug$getStacktraceSimple$$;
  var $fn$jscomp$19_tempErr$jscomp$inline_1087$$ = Error();
  if (Error.captureStackTrace) {
    Error.captureStackTrace($fn$jscomp$19_tempErr$jscomp$inline_1087$$, $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$), $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$ = String($fn$jscomp$19_tempErr$jscomp$inline_1087$$.stack);
  } else {
    try {
      throw $fn$jscomp$19_tempErr$jscomp$inline_1087$$;
    } catch ($e$jscomp$inline_1089$$) {
      $fn$jscomp$19_tempErr$jscomp$inline_1087$$ = $e$jscomp$inline_1089$$;
    }
    $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$ = ($fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$ = $fn$jscomp$19_tempErr$jscomp$inline_1087$$.stack) ? String($fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$) : null;
  }
  if ($fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$) {
    return $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$;
  }
  $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$ = [];
  $fn$jscomp$19_tempErr$jscomp$inline_1087$$ = arguments.callee.caller;
  for (var $depth$jscomp$8$$ = 0; $fn$jscomp$19_tempErr$jscomp$inline_1087$$ && (!$opt_depth$$ || $depth$jscomp$8$$ < $opt_depth$$);) {
    $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$.push($goog$debug$getFunctionName$$($fn$jscomp$19_tempErr$jscomp$inline_1087$$));
    $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$.push("()\n");
    try {
      $fn$jscomp$19_tempErr$jscomp$inline_1087$$ = $fn$jscomp$19_tempErr$jscomp$inline_1087$$.caller;
    } catch ($e$jscomp$28$$) {
      $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$.push("[exception trying to get caller]\n");
      break;
    }
    $depth$jscomp$8$$++;
    if (50 <= $depth$jscomp$8$$) {
      $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$.push("[...long stack...]");
      break;
    }
  }
  $opt_depth$$ && $depth$jscomp$8$$ >= $opt_depth$$ ? $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$.push("[...reached max depth limit...]") : $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$.push("[end]");
  return $fn$jscomp$inline_1086_sb$jscomp$2_stack$jscomp$1_stack$jscomp$inline_1088$$.join("");
}, $goog$debug$getFunctionName$$ = function($fn$jscomp$23_functionSource$$) {
  if ($goog$debug$fnNameCache_$$[$fn$jscomp$23_functionSource$$]) {
    return $goog$debug$fnNameCache_$$[$fn$jscomp$23_functionSource$$];
  }
  $fn$jscomp$23_functionSource$$ = String($fn$jscomp$23_functionSource$$);
  if (!$goog$debug$fnNameCache_$$[$fn$jscomp$23_functionSource$$]) {
    var $matches$jscomp$1$$ = /function\s+([^\(]+)/m.exec($fn$jscomp$23_functionSource$$);
    $goog$debug$fnNameCache_$$[$fn$jscomp$23_functionSource$$] = $matches$jscomp$1$$ ? $matches$jscomp$1$$[1] : "[Anonymous]";
  }
  return $goog$debug$fnNameCache_$$[$fn$jscomp$23_functionSource$$];
}, $goog$debug$fnNameCache_$$ = {}, $goog$debug$freezeInternal_$$ = Object.freeze || function($arg$jscomp$9$$) {
  return $arg$jscomp$9$$;
};
var $goog$debug$LogRecord$$ = function($level$jscomp$22$$, $msg$jscomp$1$$, $loggerName$$) {
  this.reset($level$jscomp$22$$, $msg$jscomp$1$$, $loggerName$$, void 0, void 0);
};
$goog$debug$LogRecord$$.prototype.$b$ = null;
var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
$goog$debug$LogRecord$$.prototype.reset = function($level$jscomp$23$$, $msg$jscomp$2$$, $loggerName$jscomp$1$$, $opt_time$jscomp$1$$, $opt_sequenceNumber$jscomp$1$$) {
  "number" == typeof $opt_sequenceNumber$jscomp$1$$ || $goog$debug$LogRecord$nextSequenceNumber_$$++;
  this.$l$ = $opt_time$jscomp$1$$ || $goog$now$$();
  this.$f$ = $level$jscomp$23$$;
  this.$h$ = $msg$jscomp$2$$;
  this.$g$ = $loggerName$jscomp$1$$;
  delete this.$b$;
};
$goog$debug$LogRecord$$.prototype.getMessage = function() {
  return this.$h$;
};
var $goog$debug$Logger$$ = function($name$jscomp$145$$) {
  this.$l$ = $name$jscomp$145$$;
  this.$b$ = this.$h$ = this.$f$ = this.$g$ = null;
}, $goog$debug$Logger$Level$$ = function($name$jscomp$146$$, $value$jscomp$171$$) {
  this.name = $name$jscomp$146$$;
  this.value = $value$jscomp$171$$;
};
$goog$debug$Logger$Level$$.prototype.toString = function() {
  return this.name;
};
var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1000), $goog$debug$Logger$Level$WARNING$$ = new $goog$debug$Logger$Level$$("WARNING", 900), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700), $goog$debug$Logger$Level$FINE$$ = new $goog$debug$Logger$Level$$("FINE", 500), $goog$debug$Logger$Level$FINER$$ = new $goog$debug$Logger$Level$$("FINER", 400), $goog$debug$Logger$Level$ALL$$ = 
new $goog$debug$Logger$Level$$("ALL", 0);
$goog$debug$Logger$$.prototype.getName = function() {
  return this.$l$;
};
$goog$debug$Logger$$.prototype.getChildren = function() {
  this.$h$ || (this.$h$ = {});
  return this.$h$;
};
var $JSCompiler_StaticMethods_getEffectiveLevel$$ = function($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$f$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$f$;
  }
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$g$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$g$);
  }
  $goog$asserts$fail$$("Root logger has no level set.");
  return null;
};
$JSCompiler_prototypeAlias$$ = $goog$debug$Logger$$.prototype;
$JSCompiler_prototypeAlias$$.log = function($level$jscomp$30_logRecord$jscomp$inline_1095$$, $msg$jscomp$6$$, $opt_exception$$) {
  $level$jscomp$30_logRecord$jscomp$inline_1095$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value && ($goog$isFunction$$($msg$jscomp$6$$) && ($msg$jscomp$6$$ = $msg$jscomp$6$$()), $level$jscomp$30_logRecord$jscomp$inline_1095$$ = new $goog$debug$LogRecord$$($level$jscomp$30_logRecord$jscomp$inline_1095$$, String($msg$jscomp$6$$), this.$l$), $opt_exception$$ && ($level$jscomp$30_logRecord$jscomp$inline_1095$$.$b$ = $opt_exception$$), $JSCompiler_StaticMethods_doLogRecord_$$(this, 
  $level$jscomp$30_logRecord$jscomp$inline_1095$$));
};
$JSCompiler_prototypeAlias$$.$warning$ = function($msg$jscomp$10$$, $opt_exception$jscomp$4$$) {
  this.log($goog$debug$Logger$Level$WARNING$$, $msg$jscomp$10$$, $opt_exception$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.info = function($msg$jscomp$11$$, $opt_exception$jscomp$5$$) {
  this.log($goog$debug$Logger$Level$INFO$$, $msg$jscomp$11$$, $opt_exception$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.config = function($msg$jscomp$12$$, $opt_exception$jscomp$6$$) {
  this.log($goog$debug$Logger$Level$CONFIG$$, $msg$jscomp$12$$, $opt_exception$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$.logRecord = function($logRecord$jscomp$1$$) {
  $logRecord$jscomp$1$$.$f$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value && $JSCompiler_StaticMethods_doLogRecord_$$(this, $logRecord$jscomp$1$$);
};
var $JSCompiler_StaticMethods_doLogRecord_$$ = function($JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$93$$, $logRecord$jscomp$2$$) {
  for (; $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$93$$;) {
    var $handler$jscomp$inline_1103$$, $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_1100$$ = $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$93$$, $logRecord$jscomp$inline_1101$$ = $logRecord$jscomp$2$$;
    if ($JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_1100$$.$b$) {
      for (var $i$jscomp$inline_1102$$ = 0; $handler$jscomp$inline_1103$$ = $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_1100$$.$b$[$i$jscomp$inline_1102$$]; $i$jscomp$inline_1102$$++) {
        $handler$jscomp$inline_1103$$($logRecord$jscomp$inline_1101$$);
      }
    }
    $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$93$$ = $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$93$$.$g$;
  }
}, $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = null, $goog$debug$LogManager$initialize$$ = function() {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$f$ = $goog$debug$Logger$Level$CONFIG$$);
}, $goog$debug$LogManager$getLogger$$ = function($name$jscomp$150$$) {
  $goog$debug$LogManager$initialize$$();
  var $JSCompiler_temp$jscomp$458_logger$jscomp$inline_1109$$;
  if (!($JSCompiler_temp$jscomp$458_logger$jscomp$inline_1109$$ = $goog$debug$LogManager$loggers_$$[$name$jscomp$150$$])) {
    $JSCompiler_temp$jscomp$458_logger$jscomp$inline_1109$$ = new $goog$debug$Logger$$($name$jscomp$150$$);
    var $lastDotIndex$jscomp$inline_1110_parentLogger$jscomp$inline_1112$$ = $name$jscomp$150$$.lastIndexOf("."), $leafName$jscomp$inline_1111$$ = $name$jscomp$150$$.substr($lastDotIndex$jscomp$inline_1110_parentLogger$jscomp$inline_1112$$ + 1);
    $lastDotIndex$jscomp$inline_1110_parentLogger$jscomp$inline_1112$$ = $goog$debug$LogManager$getLogger$$($name$jscomp$150$$.substr(0, $lastDotIndex$jscomp$inline_1110_parentLogger$jscomp$inline_1112$$));
    $lastDotIndex$jscomp$inline_1110_parentLogger$jscomp$inline_1112$$.getChildren()[$leafName$jscomp$inline_1111$$] = $JSCompiler_temp$jscomp$458_logger$jscomp$inline_1109$$;
    $JSCompiler_temp$jscomp$458_logger$jscomp$inline_1109$$.$g$ = $lastDotIndex$jscomp$inline_1110_parentLogger$jscomp$inline_1112$$;
    $goog$debug$LogManager$loggers_$$[$name$jscomp$150$$] = $JSCompiler_temp$jscomp$458_logger$jscomp$inline_1109$$;
  }
  return $JSCompiler_temp$jscomp$458_logger$jscomp$inline_1109$$;
};
var $goog$log$log$$ = function($logger$jscomp$6$$, $level$jscomp$32$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$) {
  $logger$jscomp$6$$ && $logger$jscomp$6$$.log($level$jscomp$32$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$);
}, $goog$log$error$$ = function($logger$jscomp$7$$, $msg$jscomp$17$$, $opt_exception$jscomp$11$$) {
  $logger$jscomp$7$$ && $logger$jscomp$7$$.log($goog$debug$Logger$Level$SEVERE$$, $msg$jscomp$17$$, $opt_exception$jscomp$11$$);
}, $goog$log$warning$$ = function($logger$jscomp$8$$, $msg$jscomp$18$$, $opt_exception$jscomp$12$$) {
  $logger$jscomp$8$$ && $logger$jscomp$8$$.$warning$($msg$jscomp$18$$, $opt_exception$jscomp$12$$);
}, $goog$log$info$$ = function($logger$jscomp$9$$, $msg$jscomp$19$$) {
  $logger$jscomp$9$$ && $logger$jscomp$9$$.info($msg$jscomp$19$$, void 0);
}, $goog$log$fine$$ = function($logger$jscomp$10$$, $msg$jscomp$20$$) {
  $logger$jscomp$10$$ && $logger$jscomp$10$$.log($goog$debug$Logger$Level$FINE$$, $msg$jscomp$20$$, void 0);
};
try {
  (new self.OffscreenCanvas(0, 0)).getContext("2d");
} catch ($ex$jscomp$inline_1129$$) {
}
var $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ = !$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= Number($JSCompiler_inline_result$jscomp$450$$) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1");
var $goog$math$Coordinate$$ = function($opt_x$jscomp$2$$, $opt_y$jscomp$6$$) {
  this.x = $goog$isDef$$($opt_x$jscomp$2$$) ? $opt_x$jscomp$2$$ : 0;
  this.y = $goog$isDef$$($opt_y$jscomp$6$$) ? $opt_y$jscomp$6$$ : 0;
};
$goog$math$Coordinate$$.prototype.clone = function() {
  return new $goog$math$Coordinate$$(this.x, this.y);
};
$goog$math$Coordinate$$.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
};
$goog$math$Coordinate$$.prototype.equals = function($other$jscomp$5$$) {
  return $other$jscomp$5$$ instanceof $goog$math$Coordinate$$ && (this == $other$jscomp$5$$ ? !0 : this && $other$jscomp$5$$ ? this.x == $other$jscomp$5$$.x && this.y == $other$jscomp$5$$.y : !1);
};
var $goog$math$Coordinate$difference$$ = function($a$jscomp$21$$, $b$jscomp$17$$) {
  return new $goog$math$Coordinate$$($a$jscomp$21$$.x - $b$jscomp$17$$.x, $a$jscomp$21$$.y - $b$jscomp$17$$.y);
};
$goog$math$Coordinate$$.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
$goog$math$Coordinate$$.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
$goog$math$Coordinate$$.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
var $goog$math$Size$$ = function($width$jscomp$29$$, $height$jscomp$28$$) {
  this.width = $width$jscomp$29$$;
  this.height = $height$jscomp$28$$;
};
$JSCompiler_prototypeAlias$$ = $goog$math$Size$$.prototype;
$JSCompiler_prototypeAlias$$.clone = function() {
  return new $goog$math$Size$$(this.width, this.height);
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return "(" + this.width + " x " + this.height + ")";
};
$JSCompiler_prototypeAlias$$.aspectRatio = function() {
  return this.width / this.height;
};
$JSCompiler_prototypeAlias$$.$isEmpty$ = function() {
  return !(this.width * this.height);
};
$JSCompiler_prototypeAlias$$.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
$JSCompiler_prototypeAlias$$.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
$JSCompiler_prototypeAlias$$.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
var $JSCompiler_StaticMethods_goog_math_Size_prototype$scale$$ = function($JSCompiler_StaticMethods_goog_math_Size_prototype$scale$self$$, $sx$jscomp$2$$) {
  var $sy$jscomp$2$$ = $goog$isNumber$$(void 0) ? void 0 : $sx$jscomp$2$$;
  $JSCompiler_StaticMethods_goog_math_Size_prototype$scale$self$$.width *= $sx$jscomp$2$$;
  $JSCompiler_StaticMethods_goog_math_Size_prototype$scale$self$$.height *= $sy$jscomp$2$$;
};
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"}, $goog$dom$getViewportSize_$$ = function($doc$jscomp$18_el$jscomp$2_win$jscomp$4$$) {
  $doc$jscomp$18_el$jscomp$2_win$jscomp$4$$ = $doc$jscomp$18_el$jscomp$2_win$jscomp$4$$.document;
  $doc$jscomp$18_el$jscomp$2_win$jscomp$4$$ = "CSS1Compat" == $doc$jscomp$18_el$jscomp$2_win$jscomp$4$$.compatMode ? $doc$jscomp$18_el$jscomp$2_win$jscomp$4$$.documentElement : $doc$jscomp$18_el$jscomp$2_win$jscomp$4$$.body;
  return new $goog$math$Size$$($doc$jscomp$18_el$jscomp$2_win$jscomp$4$$.clientWidth, $doc$jscomp$18_el$jscomp$2_win$jscomp$4$$.clientHeight);
}, $goog$dom$getWindow$$ = function($opt_doc$$) {
  return $opt_doc$$ ? $goog$dom$getWindow_$$($opt_doc$$) : window;
}, $goog$dom$getWindow_$$ = function($doc$jscomp$22$$) {
  return $doc$jscomp$22$$.parentWindow || $doc$jscomp$22$$.defaultView;
}, $goog$dom$removeChildren$$ = function($node$jscomp$7$$) {
  for (var $child$jscomp$2$$; $child$jscomp$2$$ = $node$jscomp$7$$.firstChild;) {
    $node$jscomp$7$$.removeChild($child$jscomp$2$$);
  }
}, $goog$dom$removeNode$$ = function($node$jscomp$8$$) {
  return $node$jscomp$8$$ && $node$jscomp$8$$.parentNode ? $node$jscomp$8$$.parentNode.removeChild($node$jscomp$8$$) : null;
}, $goog$dom$getOwnerDocument$$ = function($node$jscomp$20$$) {
  $goog$asserts$assert$$($node$jscomp$20$$, "Node cannot be null or undefined.");
  return 9 == $node$jscomp$20$$.nodeType ? $node$jscomp$20$$ : $node$jscomp$20$$.ownerDocument || $node$jscomp$20$$.document;
}, $goog$dom$setTextContent$$ = function($node$jscomp$21$$, $text$jscomp$14$$) {
  $goog$asserts$assert$$(null != $node$jscomp$21$$, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in $node$jscomp$21$$) {
    $node$jscomp$21$$.textContent = $text$jscomp$14$$;
  } else {
    if (3 == $node$jscomp$21$$.nodeType) {
      $node$jscomp$21$$.data = String($text$jscomp$14$$);
    } else {
      if ($node$jscomp$21$$.firstChild && 3 == $node$jscomp$21$$.firstChild.nodeType) {
        for (; $node$jscomp$21$$.lastChild != $node$jscomp$21$$.firstChild;) {
          $node$jscomp$21$$.removeChild($goog$asserts$assert$$($node$jscomp$21$$.lastChild));
        }
        $node$jscomp$21$$.firstChild.data = String($text$jscomp$14$$);
      } else {
        $goog$dom$removeChildren$$($node$jscomp$21$$);
        var $doc$jscomp$31$$ = $goog$dom$getOwnerDocument$$($node$jscomp$21$$);
        $node$jscomp$21$$.appendChild($doc$jscomp$31$$.createTextNode(String($text$jscomp$14$$)));
      }
    }
  }
}, $goog$dom$DomHelper$$ = function($opt_document$jscomp$1$$) {
  this.$b$ = $opt_document$jscomp$1$$ || $goog$global$$.document || document;
};
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.setProperties = function($element$jscomp$35$$, $properties$jscomp$8$$) {
  $goog$object$forEach$$($properties$jscomp$8$$, function($val$jscomp$27$$, $key$jscomp$99$$) {
    $val$jscomp$27$$ && "object" == typeof $val$jscomp$27$$ && $val$jscomp$27$$.$implementsGoogStringTypedString$ && ($val$jscomp$27$$ = $val$jscomp$27$$.$getTypedStringValue$());
    "style" == $key$jscomp$99$$ ? $element$jscomp$35$$.style.cssText = $val$jscomp$27$$ : "class" == $key$jscomp$99$$ ? $element$jscomp$35$$.className = $val$jscomp$27$$ : "for" == $key$jscomp$99$$ ? $element$jscomp$35$$.htmlFor = $val$jscomp$27$$ : $goog$dom$DIRECT_ATTRIBUTE_MAP_$$.hasOwnProperty($key$jscomp$99$$) ? $element$jscomp$35$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$jscomp$99$$], $val$jscomp$27$$) : $goog$string$internal$startsWith$$($key$jscomp$99$$, "aria-") || $goog$string$internal$startsWith$$($key$jscomp$99$$, 
    "data-") ? $element$jscomp$35$$.setAttribute($key$jscomp$99$$, $val$jscomp$27$$) : $element$jscomp$35$$[$key$jscomp$99$$] = $val$jscomp$27$$;
  });
};
$JSCompiler_prototypeAlias$$.appendChild = function($parent$jscomp$16$$, $child$jscomp$1$$) {
  $goog$asserts$assert$$(null != $parent$jscomp$16$$ && null != $child$jscomp$1$$, "goog.dom.appendChild expects non-null arguments");
  $parent$jscomp$16$$.appendChild($child$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$goog_dom_DomHelper_prototype$removeNode$ = $goog$dom$removeNode$$;
$JSCompiler_prototypeAlias$$.getChildren = function($element$jscomp$38$$) {
  return $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ && void 0 != $element$jscomp$38$$.children ? $element$jscomp$38$$.children : $goog$array$filter$$($element$jscomp$38$$.childNodes, function($node$jscomp$9$$) {
    return 1 == $node$jscomp$9$$.nodeType;
  });
};
$JSCompiler_prototypeAlias$$.isElement = function($obj$jscomp$88$$) {
  return $goog$isObject$$($obj$jscomp$88$$) && 1 == $obj$jscomp$88$$.nodeType;
};
$JSCompiler_prototypeAlias$$.contains = function($parent$jscomp$22$$, $descendant$$) {
  if (!$parent$jscomp$22$$ || !$descendant$$) {
    return !1;
  }
  if ($parent$jscomp$22$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$jscomp$22$$ == $descendant$$ || $parent$jscomp$22$$.contains($descendant$$);
  }
  if ("undefined" != typeof $parent$jscomp$22$$.compareDocumentPosition) {
    return $parent$jscomp$22$$ == $descendant$$ || !!($parent$jscomp$22$$.compareDocumentPosition($descendant$$) & 16);
  }
  for (; $descendant$$ && $parent$jscomp$22$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode;
  }
  return $descendant$$ == $parent$jscomp$22$$;
};
var $goog$i18n$BidiFormatter$$ = function($contextDir$$) {
  this.$b$ = "number" == typeof $contextDir$$ ? 0 < $contextDir$$ ? 1 : 0 > $contextDir$$ ? -1 : null : null == $contextDir$$ ? null : $contextDir$$ ? -1 : 1;
};

