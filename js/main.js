$(document).ready(function () {
  $(".calc_dlina, .calc_shir, .calc_visota").change(function () {
    if (
      $(".calc_dlina").val() != "" &&
      $(".calc_shir").val() != "" &&
      $(".calc_visota").val() != ""
    ) {
      function round(value, decimals) {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
      }

      var dlina = $(".calc_dlina").val();
      var shir = $(".calc_shir").val();
      var visota = $(".calc_visota").val();

      kirp = round(dlina * shir * visota * 318, 0); // add round
      mosh = round(
        ((dlina * 1 + shir * 1) * 2 * visota + dlina * shir) * 300,
        2
      );
      moshv = round(mosh * 1.163, 1);
      plosh = round(mosh / 50, 1);
      massa = round(kirp * 1.2 * 4, 2);

      $(".kirp").empty().val(kirp);
      $(".mosh_k").empty().val(mosh);
      $(".mosh_v").empty().val(moshv);
      $(".plosh").empty().val(plosh);
      $(".massa").empty().val(massa);
    }
  });
});
