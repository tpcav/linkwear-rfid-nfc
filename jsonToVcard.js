var VCARD;

VCARD = (function() {
  var generate_adr, generate_bday, generate_categories, generate_class, generate_email, generate_fn, generate_geo, generate_key, generate_label, generate_logo, generate_mailer, generate_n, generate_nickname, generate_note, generate_org, generate_photo, generate_prodid, generate_rev, generate_role, generate_sort_string, generate_sound, generate_tel, generate_title, generate_tz, generate_uid, generate_url, m, parse_adr, parse_bday, parse_categories, parse_class, parse_email, parse_fn, parse_geo, parse_key, parse_label, parse_line, parse_logo, parse_mailer, parse_n, parse_nickname, parse_note, parse_org, parse_params, parse_photo, parse_prodid, parse_rev, parse_role, parse_sort_string, parse_sound, parse_tel, parse_title, parse_tz, parse_uid, parse_url;
  m = {};
  m.generate = function(json) {
    var adr, email, i, j, k, klass, l, label, len, len1, len10, len11, len12, len2, len3, len4, len5, len6, len7, len8, len9, logo, note, o, org, p, photo, q, r, ref, ref1, ref10, ref11, ref12, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, role, s, sound, string, t, tel, title, u, url, v, w, x, y;
    string = "";
    string += "BEGIN:VCARD\r\n";
    for (k in json) {
      v = json[k];
      switch (k) {
        case "version":
          string += "VERSION:" + v + "\r\n";
          break;
        case "fn":
          string += generate_fn(json.fn);
          break;
        case "n":
          string += generate_n(json.n);
          break;
        case "nickname":
          string += generate_nickname(json.nickname);
          break;
        case "photos":
          ref = json.photos;
          for (i = 0, len = ref.length; i < len; i++) {
            photo = ref[i];
            string += generate_photo(photo);
          }
          break;
        case "bday":
          string += generate_bday(json.bday);
          break;
        case "adrs":
          ref1 = json.adrs;
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            adr = ref1[j];
            string += generate_adr(adr);
          }
          break;
        case "labels":
          ref2 = json.labels;
          for (l = 0, len2 = ref2.length; l < len2; l++) {
            label = ref2[l];
            string += generate_label(label);
          }
          break;
        case "tels":
          ref3 = json.tels;
          for (o = 0, len3 = ref3.length; o < len3; o++) {
            tel = ref3[o];
            string += generate_tel(tel);
          }
          break;
        case "emails":
          ref4 = json.emails;
          for (p = 0, len4 = ref4.length; p < len4; p++) {
            email = ref4[p];
            string += generate_email(email);
          }
          break;
        case "mailer":
          string += generate_mailer(json.mailer);
          break;
        case "tz":
          string += generate_tz(json.tz);
          break;
        case "geo":
          string += generate_geo(json.geo);
          break;
        case "titles":
          ref5 = json.titles;
          for (q = 0, len5 = ref5.length; q < len5; q++) {
            title = ref5[q];
            string += generate_title(title);
          }
          break;
        case "roles":
          ref6 = json.roles;
          for (r = 0, len6 = ref6.length; r < len6; r++) {
            role = ref6[r];
            string += generate_role(role);
          }
          break;
        case "logos":
          ref7 = json.logos;
          for (s = 0, len7 = ref7.length; s < len7; s++) {
            logo = ref7[s];
            string += generate_logo(logo);
          }
          break;
        case "orgs":
          ref8 = json.orgs;
          for (t = 0, len8 = ref8.length; t < len8; t++) {
            org = ref8[t];
            string += generate_org(org);
          }
          break;
        case "categories":
          string += generate_categories(json.categories);
          break;
        case "notes":
          ref9 = json.notes;
          for (u = 0, len9 = ref9.length; u < len9; u++) {
            note = ref9[u];
            string += generate_note(note);
          }
          break;
        case "prodid":
          string += generate_prodid(json.prodid);
          break;
        case "rev":
          string += generate_rev(json.rev);
          break;
        case "sort_string":
          string += generate_sort_string(json.sort_string);
          break;
        case "sounds":
          ref10 = json.sounds;
          for (w = 0, len10 = ref10.length; w < len10; w++) {
            sound = ref10[w];
            string += generate_sound(sound);
          }
          break;
        case "uid":
          string += generate_uid(json.uid);
          break;
        case "urls":
          ref11 = json.urls;
          for (x = 0, len11 = ref11.length; x < len11; x++) {
            url = ref11[x];
            string += generate_url(url);
          }
          break;
        case "classes":
          ref12 = json.classes;
          for (y = 0, len12 = ref12.length; y < len12; y++) {
            klass = ref12[y];
            string += generate_class(klass);
          }
          break;
        case "key":
          string += generate_key(json.key);
      }
    }
    return string += "END:VCARD";
  };
  m.parse = function(string) {
    var i, j, len, len1, line, lines, newline, newlines, stringlines;
    stringlines = string.split("\r\n");
    newlines = [];
    for (i = 0, len = stringlines.length; i < len; i++) {
      line = stringlines[i];
      if (!line.match(/BEGIN:VCARD|END:VCARD/)) {
        newlines.push(parse_line(line));
      }
    }
    lines = {};
    for (j = 0, len1 = newlines.length; j < len1; j++) {
      newline = newlines[j];
      switch (newline.name) {
        case "VERSION":
          lines.version = newline.value;
          break;
        case "FN":
          lines.fn = parse_fn(newline);
          break;
        case "N":
          lines.n = parse_n(newline);
          break;
        case "NICKNAME":
          lines.nickname = parse_nickname(newline);
          break;
        case "PHOTO":
          lines.photos || (lines.photos = []);
          lines.photos.push(parse_photo(newline));
          break;
        case "BDAY":
          lines.bday = parse_bday(newline);
          break;
        case "ADR":
          lines.adrs || (lines.adrs = []);
          lines.adrs.push(parse_adr(newline));
          break;
        case "LABEL":
          lines.labels || (lines.labels = []);
          lines.labels.push(parse_label(newline));
          break;
        case "TEL":
          lines.tels || (lines.tels = []);
          lines.tels.push(parse_tel(newline));
          break;
        case "EMAIL":
          lines.emails || (lines.emails = []);
          lines.emails.push(parse_email(newline));
          break;
        case "MAILER":
          lines.mailer = parse_mailer(newline);
          break;
        case "TZ":
          lines.tz = parse_tz(newline);
          break;
        case "GEO":
          lines.geo = parse_geo(newline);
          break;
        case "TITLE":
          lines.titles || (lines.titles = []);
          lines.titles.push(parse_title(newline));
          break;
        case "ROLE":
          lines.roles || (lines.roles = []);
          lines.roles.push(parse_role(newline));
          break;
        case "LOGO":
          lines.logos || (lines.logos = []);
          lines.logos.push(parse_logo(newline));
          break;
        case "ORG":
          lines.orgs || (lines.orgs = []);
          lines.orgs.push(parse_org(newline));
          break;
        case "CATEGORIES":
          lines.categories = parse_categories(newline);
          break;
        case "NOTE":
          lines.notes || (lines.notes = []);
          lines.notes.push(parse_note(newline));
          break;
        case "PRODID":
          lines.prodid = parse_prodid(newline);
          break;
        case "REV":
          lines.rev = parse_rev(newline);
          break;
        case "SORT-STRING":
          lines.sort_string = parse_sort_string(newline);
          break;
        case "SOUND":
          lines.sounds || (lines.sounds = []);
          lines.sounds.push(parse_sound(newline));
          break;
        case "UID":
          lines.uid = parse_uid(newline);
          break;
        case "URL":
          lines.urls || (lines.urls = []);
          lines.urls.push(parse_url(newline));
          break;
        case "CLASS":
          lines.classes || (lines.classes = []);
          lines.classes.push(parse_class(newline));
          break;
        case "KEY":
          lines.key = parse_key(newline);
      }
    }
    return lines;
  };
  parse_line = function(string) {
    var json, res;
    json = {};
    res = string.match(/^(?:(\w+)\.)?([a-zA-Z-_]+)((?:;[a-zA-Z0-9-_]+=[a-zA-Z0-9-,]+)+)?:((?:.|\n)+)$/);
    if (res[1]) {
      json.group = res[1];
    }
    json.name = res[2];
    if (res[3]) {
      json.params = parse_params(res[3]);
    }
    json.value = res[4];
    return json;
  };
  parse_params = function(string) {
    var i, json, k, len, param, params, v;
    params = string.split(";");
    params.shift();
    json = {};
    for (i = 0, len = params.length; i < len; i++) {
      param = params[i];
      k = param.split("=")[0];
      v = param.split("=")[1];
      json[k.toLowerCase()] = v.toLowerCase();
    }
    return json;
  };
  parse_fn = function(json) {
    var fn, k, ref, v;
    fn = {};
    if (json.group) {
      fn.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        fn.params || (fn.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          fn.params[k] = v;
        }
      }
    }
    fn.name = json.value;
    return fn;
  };
  parse_n = function(json) {
    var k, n, names, ref, v;
    n = {};
    if (json.group) {
      n.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        n.params || (n.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          n.params[k] = v;
        }
      }
    }
    names = json.value.split(';');
    if (names[0]) {
      n.families = names[0].split(',');
    }
    if (names[1]) {
      n.givens = names[1].split(',');
    }
    if (names[2]) {
      n.middles = names[2].split(',');
    }
    if (names[3]) {
      n.prefixes = names[3].split(',');
    }
    if (names[4]) {
      n.suffixes = names[4].split(',');
    }
    return n;
  };
  parse_nickname = function(json) {
    var k, names, nickname, ref, v;
    nickname = {};
    if (json.group) {
      nickname.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        nickname.params || (nickname.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          nickname.params[k] = v;
        }
      }
    }
    names = json.value.split(',');
    nickname.names = names;
    return nickname;
  };
  parse_photo = function(json) {
    var k, photo, ref, v;
    photo = {};
    if (json.group) {
      photo.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        photo.params || (photo.params = {});
        if (k.match(/value|encoding|type/i)) {
          photo.params[k] = v;
        }
      }
    }
    photo.image = json.value;
    return photo;
  };
  parse_bday = function(json) {
    var bday, k, ref, res, v;
    res = json.value.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})Z)?$/);
    bday = {};
    if (json.group) {
      bday.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        bday.params || (bday.params = {});
        if (k.match(/value/i)) {
          bday.params[k] = v;
        }
      }
    }
    bday.year = res[1];
    bday.month = res[2];
    bday.day = res[3];
    if (json.params && json.params.value && json.params.value.match(/date-time/i)) {
      if (res[4]) {
        bday.hour = res[4];
      }
      if (res[5]) {
        bday.minute = res[5];
      }
      if (res[6]) {
        bday.second = res[6];
      }
    }
    return bday;
  };
  parse_adr = function(json) {
    var a, adr, arr, i, k, len, ref, res, v;
    adr = {};
    if (json.group) {
      adr.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        adr.params || (adr.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          adr.params[k] = v;
        }
        if (k.match("type")) {
          adr.params.types || (adr.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (i = 0, len = arr.length; i < len; i++) {
              a = arr[i];
              adr.params.types.push(a);
            }
          } else {
            adr.params.types.push(v);
          }
        }
      }
    }
    res = json.value.split(';');
    if (res[0]) {
      adr.pobox = res[0];
    }
    if (res[1]) {
      adr.extended = res[1];
    }
    if (res[2]) {
      adr.street = res[2];
    }
    if (res[3]) {
      adr.locality = res[3];
    }
    if (res[4]) {
      adr.region = res[4];
    }
    if (res[5]) {
      adr.code = res[5];
    }
    if (res[6]) {
      adr.country = res[6];
    }
    return adr;
  };
  parse_label = function(json) {
    var a, arr, i, k, label, len, ref, v;
    label = {};
    if (json.group) {
      label.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        label.params || (label.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          label.params[k] = v;
        }
        if (k.match("type")) {
          label.params.types || (label.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (i = 0, len = arr.length; i < len; i++) {
              a = arr[i];
              label.params.types.push(a);
            }
          } else {
            label.params.types.push(v);
          }
        }
      }
    }
    label.address = json.value;
    return label;
  };
  parse_tel = function(json) {
    var a, arr, i, k, len, ref, tel, v;
    tel = {};
    if (json.group) {
      tel.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match("type")) {
          tel.params || (tel.params = {});
          tel.params.types || (tel.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (i = 0, len = arr.length; i < len; i++) {
              a = arr[i];
              tel.params.types.push(a);
            }
          } else {
            tel.params.types.push(v);
          }
        }
      }
    }
    tel.number = json.value;
    return tel;
  };
  parse_email = function(json) {
    var a, arr, email, i, k, len, ref, v;
    email = {};
    if (json.group) {
      email.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match("type")) {
          email.params || (email.params = {});
          email.params.types || (email.params.types = []);
          if (v.match(/,/)) {
            arr = v.split(',');
            for (i = 0, len = arr.length; i < len; i++) {
              a = arr[i];
              email.params.types.push(a);
            }
          } else {
            email.params.types.push(v);
          }
        }
      }
    }
    email.address = json.value;
    return email;
  };
  parse_mailer = function(json) {
    var k, mailer, ref, v;
    mailer = {};
    if (json.group) {
      mailer.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        mailer.params || (mailer.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          mailer.params[k] = v;
        }
      }
    }
    mailer.name = json.value;
    return mailer;
  };
  parse_tz = function(json) {
    var k, ref, tz, v;
    tz = {};
    if (json.group) {
      tz.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        tz.params || (tz.params = {});
        if (k.match(/value/i)) {
          tz.params[k] = v;
        }
      }
    }
    tz.zone = json.value;
    return tz;
  };
  parse_geo = function(json) {
    var geo, res;
    geo = {};
    if (json.group) {
      geo.group = json.group;
    }
    res = json.value.split(';');
    geo.latitude = res[0];
    geo.longitude = res[1];
    return geo;
  };
  parse_title = function(json) {
    var k, ref, title, v;
    title = {};
    if (json.group) {
      title.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        title.params || (title.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          title.params[k] = v;
        }
      }
    }
    title.name = json.value;
    return title;
  };
  parse_role = function(json) {
    var k, ref, role, v;
    role = {};
    if (json.group) {
      role.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        role.params || (role.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          role.params[k] = v;
        }
      }
    }
    role.name = json.value;
    return role;
  };
  parse_logo = function(json) {
    var k, logo, ref, v;
    logo = {};
    if (json.group) {
      logo.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        logo.params || (logo.params = {});
        if (k.match(/value|encoding|type/i)) {
          logo.params[k] = v;
        }
      }
    }
    logo.image = json.value;
    return logo;
  };
  parse_org = function(json) {
    var k, org, ref, res, v;
    org = {};
    if (json.group) {
      org.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        org.params || (org.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          org.params[k] = v;
        }
      }
    }
    res = json.value.split(';');
    if (res[0]) {
      org.name = res[0];
    }
    if (res[1]) {
      org.unit = res[1];
    }
    if (res[2]) {
      org.unit2 = res[2];
    }
    return org;
  };
  parse_categories = function(json) {
    var categories, k, ref, v;
    categories = {};
    if (json.group) {
      categories.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        categories.params || (categories.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          categories.params[k] = v;
        }
      }
    }
    categories.names = json.value.split(',');
    return categories;
  };
  parse_note = function(json) {
    var k, note, ref, v;
    note = {};
    if (json.group) {
      note.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        note.params || (note.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          note.params[k] = v;
        }
      }
    }
    note.description = json.value;
    return note;
  };
  parse_prodid = function(json) {
    var prodid;
    prodid = {};
    if (json.group) {
      prodid.group = json.group;
    }
    prodid.id = json.value;
    return prodid;
  };
  parse_rev = function(json) {
    var k, ref, res, rev, v;
    res = json.value.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})Z)?$/);
    rev = {};
    if (json.group) {
      rev.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        rev.params || (rev.params = {});
        if (k.match(/value/i)) {
          rev.params[k] = v;
        }
      }
    }
    rev.year = res[1];
    rev.month = res[2];
    rev.day = res[3];
    if (res[4]) {
      rev.hour = res[4];
    }
    if (res[5]) {
      rev.minute = res[5];
    }
    if (res[6]) {
      rev.second = res[6];
    }
    return rev;
  };
  parse_sort_string = function(json) {
    var k, ref, sort_string, v;
    sort_string = {};
    if (json.group) {
      sort_string.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        sort_string.params || (sort_string.params = {});
        if (k.match(/value|language|x-\w+/i)) {
          sort_string.params[k] = v;
        }
      }
    }
    sort_string.name = json.value;
    return sort_string;
  };
  parse_sound = function(json) {
    var k, ref, sound, v;
    sound = {};
    if (json.group) {
      sound.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        sound.params || (sound.params = {});
        if (k.match(/value|encoding|type/i)) {
          sound.params[k] = v;
        }
      }
    }
    sound.value = json.value;
    return sound;
  };
  parse_uid = function(json) {
    var k, ref, uid, v;
    uid = {};
    if (json.group) {
      uid.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        uid.params || (uid.params = {});
        if (k.match(/type/i)) {
          uid.params[k] = v;
        }
      }
    }
    uid.id = json.value;
    return uid;
  };
  parse_url = function(json) {
    var url;
    url = {};
    if (json.group) {
      url.group = json.group;
    }
    url.uri = json.value;
    return url;
  };
  parse_class = function(json) {
    var klass;
    klass = {};
    if (json.group) {
      klass.group = json.group;
    }
    klass.name = json.value.toLowerCase();
    return klass;
  };
  parse_key = function(json) {
    var k, key, ref, v;
    key = {};
    if (json.group) {
      key.group = json.group;
    }
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        key.params || (key.params = {});
        if (k.match(/value|encoding|type/i)) {
          key.params[k] = v;
        }
      }
    }
    key.value = json.value;
    return key;
  };
  generate_fn = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "FN";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_n = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "N";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += json.families ? ":" + json.families + ";" : ":;";
    string += json.givens ? json.givens + ";" : ";";
    string += json.middles ? (json.middles.join(',')) + ";" : ";";
    string += json.prefixes ? (json.prefixes.join(',')) + ";" : ";";
    string += json.suffixes ? (json.suffixes.join(',')) + "\r\n" : "\r\n";
    return string;
  };
  generate_nickname = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "NICKNAME";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + (json.names.join(',')) + "\r\n";
    return string;
  };
  generate_photo = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "PHOTO";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.image + "\r\n";
    return string;
  };
  generate_bday = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "BDAY";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.year + "-" + json.month + "-" + json.day;
    if (json.params && json.params.value && (json.params.value === "date-time")) {
      string += "T" + json.hour + ":" + json.minute + ":" + json.second + "Z";
    }
    string += "\r\n";
    return string;
  };
  generate_adr = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "ADR";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    if (json.pobox) {
      string += ":" + json.pobox + ";";
    } else {
      string += ":;";
    }
    if (json.extended) {
      string += json.extended + ";";
    } else {
      string += ";";
    }
    if (json.street) {
      string += json.street + ";";
    } else {
      string += ";";
    }
    if (json.locality) {
      string += json.locality + ";";
    } else {
      string += ";";
    }
    if (json.region) {
      string += json.region + ";";
    } else {
      string += ";";
    }
    if (json.code) {
      string += json.code + ";";
    } else {
      string += ";";
    }
    if (json.country) {
      string += json.country + "\r\n";
    } else {
      string += "\r\n";
    }
    return string;
  };
  generate_label = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "LABEL";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    string += ":" + json.address + "\r\n";
    return string;
  };
  generate_tel = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "TEL";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    string += ":" + json.number + "\r\n";
    return string;
  };
  generate_email = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "EMAIL";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/types/)) {
          string += ";TYPE=" + (v.join(',').toUpperCase());
        }
      }
    }
    string += ":" + json.address + "\r\n";
    return string;
  };
  generate_mailer = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "MAILER";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_tz = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "TZ";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.zone;
    string += "\r\n";
    return string;
  };
  generate_geo = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "GEO";
    string += ":" + json.latitude + ";" + json.longitude + "\r\n";
    return string;
  };
  generate_title = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "TITLE";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_role = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "ROLE";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_logo = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "LOGO";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.image + "\r\n";
    return string;
  };
  generate_org = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "ORG";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name;
    string += ";" + json.unit;
    string += ";" + json.unit2;
    string += "\r\n";
    return string;
  };
  generate_categories = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "CATEGORIES";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + (json.names.join(',')) + "\r\n";
    return string;
  };
  generate_note = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "NOTE";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.description + "\r\n";
    return string;
  };
  generate_prodid = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "PRODID";
    string += ":" + json.id + "\r\n";
    return string;
  };
  generate_rev = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "REV";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.year + "-" + json.month + "-" + json.day;
    if (json.hour && json.minute && json.second) {
      string += "T" + json.hour + ":" + json.minute + ":" + json.second + "Z";
    }
    string += "\r\n";
    return string;
  };
  generate_sort_string = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "SORT-STRING";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|language|x-\w+/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.name + "\r\n";
    return string;
  };
  generate_sound = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "SOUND";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.value + "\r\n";
    return string;
  };
  generate_uid = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "UID";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.id + "\r\n";
    return string;
  };
  generate_url = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "URL";
    string += ":" + json.uri + "\r\n";
    return string;
  };
  generate_class = function(json) {
    var string;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "CLASS";
    string += ":" + (json.name.toUpperCase()) + "\r\n";
    return string;
  };
  generate_key = function(json) {
    var k, ref, string, v;
    string = "";
    if (json.group) {
      string += json.group + ".";
    }
    string += "KEY";
    if (json.params) {
      ref = json.params;
      for (k in ref) {
        v = ref[k];
        if (k.match(/value|encoding|type/i)) {
          string += ";" + (k.toUpperCase()) + "=" + (v.toUpperCase());
        }
      }
    }
    string += ":" + json.value + "\r\n";
    return string;
  };
  return m;
})();
Raw
script.js
angular.module('app', []).controller('MainCtrl', function($scope) {

  var textFile = null;
  var vCardContacts;

  // Function to create a text file from a string
  var makeTextFile = function( text ) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };

  // Loop through each contact object to create the vCard formatted version and
  // append it to the end of vCardContacts
  _.forEach(contacts, function(contact) {
    vCardContacts = vCardContacts + VCARD.generate(contact);
  });

  // For some reason VCARD.generate outputs 'undefined' at the beginning of the
  // file each time. So we will strip out the first 9 characters
  vCardContacts = vCardContacts.substr(9);

  // Create a file from the vCardContacts string
  textFile = makeTextFile(vCardContacts);

  // Wire up a button to create the file
  $scope.createLink = function() {
    var link = document.getElementById('downloadLink');
    link.href = textFile;
  };

});