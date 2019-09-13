'use strict';
$mr$Logger$getInstance$$("mr.TestProvider");
var $mr$Init$wakeTiming_$$, $mr$Init$providerManager_$$, $mr$Init$logger_$$ = $mr$Logger$getInstance$$("mr.Init");
$module$contents$mr$LogManager_LogManager$getInstance$$().init();
$mr$Init$wakeTiming_$$ = new $mr$MediumTiming$$("MediaRouter.Provider.WakeDuration");
$mr$Init$providerManager_$$ = new $mr$ProviderManager$$;
var $promise$jscomp$inline_2505$$ = (new Promise(function($resolve$jscomp$54$$, $reject$jscomp$52$$) {
  switch(window.location.host) {
    case "enhhojjnijigcajfphajepfemndkmdlo":
      $resolve$jscomp$54$$();
      break;
    case "pkedcjkdefgpdelpbcmbmeomcjbeemfm":
      chrome.management.get("enhhojjnijigcajfphajepfemndkmdlo", function($result$jscomp$80$$) {
        chrome.runtime.lastError || !$result$jscomp$80$$.enabled ? $resolve$jscomp$54$$() : $reject$jscomp$52$$(Error("Dev extension is enabled"));
      });
      break;
    default:
      $reject$jscomp$52$$(Error("Unknown extension id"));
  }
})).then(function() {
  return chrome.mojoPrivate && chrome.mojoPrivate.requireAsync ? new Promise(function($resolve$jscomp$52$$) {
    chrome.mojoPrivate.requireAsync("media_router_bindings").then(function($mr$jscomp$1$$) {
      mojo = $mr$jscomp$1$$.getMojoExports && $mr$jscomp$1$$.getMojoExports();
      $mr$jscomp$1$$.start().then(function($result$jscomp$79$$) {
        $resolve$jscomp$52$$({mrService:$mr$jscomp$1$$, mrInstanceId:$result$jscomp$79$$.instance_id || $result$jscomp$79$$, mrConfig:$result$jscomp$79$$.config});
      });
    });
  }) : Promise.reject(Error("No mojo service loaded"));
}).then(function($result$jscomp$81$$) {
  if (!$result$jscomp$81$$.mrService) {
    throw Error("Failed to get MR service");
  }
  var $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$ = $result$jscomp$81$$.mrInstanceId;
  if (!$JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$) {
    throw Error("Failed to get MR instance ID.");
  }
  $mr$Init$logger_$$.info("MR instance ID: " + $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$);
  var $config$jscomp$inline_2488_mediaRouterService$jscomp$1$$ = $result$jscomp$81$$.mrConfig;
  void 0 !== $config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.use_views_dialog && $mr$Init$logger_$$.info("Using the " + ($config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.use_views_dialog ? "Views (Harmony)" : "WebUI") + " dialog.");
  void 0 !== $config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.enable_cast_sink_query && $mr$Init$logger_$$.info("Native Cast MRP is " + ($config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.enable_cast_sink_query ? "disabled" : "enabled") + ".");
  void 0 !== $config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.enable_dial_sink_query && $mr$Init$logger_$$.info("Native DIAL MRP is " + ($config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.enable_dial_sink_query ? "disabled" : "enabled") + ".");
  void 0 !== $config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.use_mirroring_service && $mr$Init$logger_$$.info("Native Mirroring Service is " + ($config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.use_mirroring_service ? "enabled" : "disabled") + ".");
  $config$jscomp$inline_2488_mediaRouterService$jscomp$1$$ = $result$jscomp$81$$.mrService;
  if (!$mr$Init$providerManager_$$) {
    throw Error("providerManager not initialized.");
  }
  $config$jscomp$inline_2488_mediaRouterService$jscomp$1$$.setHandlers($mr$Init$providerManager_$$);
  $mr$PersistentDataManager$isChromeReloaded$$($JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$) && ($mr$Init$wakeTiming_$$.$b$ = "MediaRouter.Provider.FirstWakeDuration");
  chrome.runtime.onSuspend.addListener($mr$Init$wakeTiming_$$.end.bind($mr$Init$wakeTiming_$$));
  for (var $castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$ = 0, $$jscomp$inline_2495$$ = $$jscomp$makeIterator$$(Object.keys($mr$PersistentData$storageObj_$$)), $$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$ = $$jscomp$inline_2495$$.next(); !$$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$.done; $$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$ = $$jscomp$inline_2495$$.next()) {
    $$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$ = $$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$.value;
    var $itemSize$jscomp$inline_2498$$ = $$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$.length + window.localStorage.getItem($$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$).length;
    $$jscomp$key$key$jscomp$inline_2496_key$jscomp$inline_2497$$.startsWith("mr.") ? $mr$PersistentDataManager$charsUsed_$$ += $itemSize$jscomp$inline_2498$$ : $castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$ += $itemSize$jscomp$inline_2498$$;
  }
  $mr$PersistentDataManager$mrInstanceId_$$ = $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$;
  (window.localStorage.getItem("version") && window.localStorage.getItem("version") !== chrome.runtime.getManifest().version || $mr$PersistentDataManager$isChromeReloaded$$($JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$)) && $mr$PersistentDataManager$removeTemporary_$$();
  $mr$PersistentDataManager$logger_$$.info("initialize: " + $mr$PersistentDataManager$charsUsed_$$ + " chars used, " + $castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$ + " other chars");
  chrome.runtime.onSuspend.addListener($mr$PersistentDataManager$onSuspend_$$);
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$ = $module$contents$mr$LogManager_LogManager$getInstance$$();
  $mr$PersistentDataManager$register$$($JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$);
  $castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$ = $mr$Init$providerManager_$$;
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$ = new $mr$CastProvider$$($castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$);
  $castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$ = new $module$contents$mr$cast$DialProviderWrapper_DialProviderWrapper$$($castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$);
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$ = [$JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$, $castDialWrapper$jscomp$inline_8522_otherChars$jscomp$inline_2494_providerManagerCallbacks$jscomp$inline_8520$$];
  $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$.push(new $mr$CloudProvider$$);
  window.e2eTestService = new $mr$E2ETestService$$;
  $mr$Init$providerManager_$$.initialize($config$jscomp$inline_2488_mediaRouterService$jscomp$1$$, $JSCompiler_StaticMethods_registerDataManager$self$jscomp$inline_2500_castProvider$jscomp$inline_8521_mrInstanceId$jscomp$2_providers$jscomp$inline_8055$$, $result$jscomp$81$$.mrConfig);
}).then(void 0, function($error$jscomp$71$$) {
  $mr$Init$logger_$$.$warning$($error$jscomp$71$$.message);
  throw $error$jscomp$71$$;
});
[].concat($$jscomp$arrayFromIterable$$([$mr$InternalMessageListener$get$$(), $mr$ExternalMessageListener$get$$()].concat($$jscomp$arrayFromIterable$$($mr$cast$EventListeners$getChannelListeners$$()), $$jscomp$arrayFromIterable$$([$mr$WeaveGcmEventListener$get$$(), $module$exports$mr$cloud$slarti$GcmEventListener$get$$()])))).forEach(function($eventListener$jscomp$inline_6907$$) {
  $mr$PersistentDataManager$register$$($eventListener$jscomp$inline_6907$$);
});
$mr$InternalMessageListener$get$$().addListener();
$mr$ExternalMessageListener$get$$().addListener();
chrome.runtime.onStartup.addListener(function() {
});
$promise$jscomp$inline_2505$$.then(void 0, function() {
  return window.close();
});

