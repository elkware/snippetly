import Prism from 'prismjs';
// plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';

// languages
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-abap'
import 'prismjs/components/prism-abnf'
import 'prismjs/components/prism-actionscript'
import 'prismjs/components/prism-ada'
import 'prismjs/components/prism-agda'
import 'prismjs/components/prism-al'
import 'prismjs/components/prism-antlr4'
import 'prismjs/components/prism-apacheconf'
import 'prismjs/components/prism-apex'
import 'prismjs/components/prism-apl'
import 'prismjs/components/prism-applescript'
import 'prismjs/components/prism-aql'
import 'prismjs/components/prism-arduino'
import 'prismjs/components/prism-arff'
import 'prismjs/components/prism-armasm'
import 'prismjs/components/prism-arturo'
import 'prismjs/components/prism-asciidoc'
import 'prismjs/components/prism-asm6502'
import 'prismjs/components/prism-asmatmel'
import 'prismjs/components/prism-aspnet'
import 'prismjs/components/prism-autohotkey'
import 'prismjs/components/prism-autoit'
import 'prismjs/components/prism-avisynth'
import 'prismjs/components/prism-avro-idl'
import 'prismjs/components/prism-awk'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-basic'
import 'prismjs/components/prism-batch'
import 'prismjs/components/prism-bbcode'
import 'prismjs/components/prism-bbj'
import 'prismjs/components/prism-bicep'
import 'prismjs/components/prism-birb'
import 'prismjs/components/prism-bison'
import 'prismjs/components/prism-bnf'
import 'prismjs/components/prism-bqn'
import 'prismjs/components/prism-brainfuck'
import 'prismjs/components/prism-brightscript'
import 'prismjs/components/prism-bro'
import 'prismjs/components/prism-bsl'
import 'prismjs/components/prism-cfscript'
import 'prismjs/components/prism-chaiscript'
import 'prismjs/components/prism-cil'
import 'prismjs/components/prism-cilkc'
import 'prismjs/components/prism-cilkcpp'
import 'prismjs/components/prism-clojure'
import 'prismjs/components/prism-cmake'
import 'prismjs/components/prism-cobol'
import 'prismjs/components/prism-coffeescript'
import 'prismjs/components/prism-concurnas'
import 'prismjs/components/prism-cooklang'
import 'prismjs/components/prism-coq'


import 'prismjs/components/prism-csp'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-css-extras'
import 'prismjs/components/prism-csv'
import 'prismjs/components/prism-cue'
import 'prismjs/components/prism-cypher'
import 'prismjs/components/prism-d'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-dataweave'
import 'prismjs/components/prism-dax'
import 'prismjs/components/prism-dhall'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-django'
import 'prismjs/components/prism-dns-zone-file'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-dot'
import 'prismjs/components/prism-ebnf'
import 'prismjs/components/prism-editorconfig'
import 'prismjs/components/prism-eiffel'
import 'prismjs/components/prism-ejs'
import 'prismjs/components/prism-elixir'
import 'prismjs/components/prism-elm'
import 'prismjs/components/prism-erb'
import 'prismjs/components/prism-erlang'
import 'prismjs/components/prism-etlua'
import 'prismjs/components/prism-excel-formula'
import 'prismjs/components/prism-factor'
import 'prismjs/components/prism-false'
import 'prismjs/components/prism-firestore-security-rules'
import 'prismjs/components/prism-flow'
import 'prismjs/components/prism-fortran'
import 'prismjs/components/prism-fsharp'
import 'prismjs/components/prism-ftl'
import 'prismjs/components/prism-gap'
import 'prismjs/components/prism-gcode'
import 'prismjs/components/prism-gdscript'
import 'prismjs/components/prism-gedcom'
import 'prismjs/components/prism-gettext'
import 'prismjs/components/prism-gherkin'
import 'prismjs/components/prism-git'
import 'prismjs/components/prism-glsl'
import 'prismjs/components/prism-gml'
import 'prismjs/components/prism-gn'
import 'prismjs/components/prism-go-module'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-gradle'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-groovy'
import 'prismjs/components/prism-haml'
import 'prismjs/components/prism-handlebars'
import 'prismjs/components/prism-haskell'
import 'prismjs/components/prism-haxe'
import 'prismjs/components/prism-hcl'
import 'prismjs/components/prism-hlsl'
import 'prismjs/components/prism-hoon'
import 'prismjs/components/prism-hpkp'
import 'prismjs/components/prism-hsts'
import 'prismjs/components/prism-http'
import 'prismjs/components/prism-ichigojam'
import 'prismjs/components/prism-icon'
import 'prismjs/components/prism-icu-message-format'
import 'prismjs/components/prism-idris'
import 'prismjs/components/prism-iecst'
import 'prismjs/components/prism-ignore'
import 'prismjs/components/prism-inform7'
import 'prismjs/components/prism-ini'
import 'prismjs/components/prism-io'
import 'prismjs/components/prism-j'
import 'prismjs/components/prism-java'

import 'prismjs/components/prism-javadoclike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-javastacktrace'
import 'prismjs/components/prism-jexl'
import 'prismjs/components/prism-jolie'
import 'prismjs/components/prism-jq'
import 'prismjs/components/prism-js-extras'
import 'prismjs/components/prism-js-templates'

import 'prismjs/components/prism-json'
import 'prismjs/components/prism-json5'
import 'prismjs/components/prism-jsonp'
import 'prismjs/components/prism-jsstacktrace'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-julia'
import 'prismjs/components/prism-keepalived'
import 'prismjs/components/prism-keyman'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-kumir'
import 'prismjs/components/prism-kusto'
import 'prismjs/components/prism-latex'
import 'prismjs/components/prism-latte'
import 'prismjs/components/prism-less'
import 'prismjs/components/prism-lilypond'
import 'prismjs/components/prism-linker-script'
import 'prismjs/components/prism-liquid'
import 'prismjs/components/prism-lisp'
import 'prismjs/components/prism-livescript'
import 'prismjs/components/prism-llvm'
import 'prismjs/components/prism-log'
import 'prismjs/components/prism-lolcode'
import 'prismjs/components/prism-lua'
import 'prismjs/components/prism-magma'
import 'prismjs/components/prism-makefile'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-mata'
import 'prismjs/components/prism-matlab'
import 'prismjs/components/prism-maxscript'
import 'prismjs/components/prism-mel'
import 'prismjs/components/prism-mermaid'
import 'prismjs/components/prism-metafont'
import 'prismjs/components/prism-mizar'
import 'prismjs/components/prism-mongodb'
import 'prismjs/components/prism-monkey'
import 'prismjs/components/prism-moonscript'
import 'prismjs/components/prism-n1ql'
import 'prismjs/components/prism-n4js'
import 'prismjs/components/prism-nand2tetris-hdl'
import 'prismjs/components/prism-naniscript'
import 'prismjs/components/prism-nasm'
import 'prismjs/components/prism-neon'
import 'prismjs/components/prism-nevod'
import 'prismjs/components/prism-nginx'
import 'prismjs/components/prism-nim'
import 'prismjs/components/prism-nix'
import 'prismjs/components/prism-nsis'
import 'prismjs/components/prism-objectivec'
import 'prismjs/components/prism-ocaml'
import 'prismjs/components/prism-odin'
import 'prismjs/components/prism-opencl'
import 'prismjs/components/prism-openqasm'
import 'prismjs/components/prism-oz'
import 'prismjs/components/prism-parigp'
import 'prismjs/components/prism-parser'
import 'prismjs/components/prism-pascal'
import 'prismjs/components/prism-pascaligo'
import 'prismjs/components/prism-pcaxis'
import 'prismjs/components/prism-peoplecode'
import 'prismjs/components/prism-perl'
import 'prismjs/components/prism-php-extras'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-phpdoc'
import 'prismjs/components/prism-plant-uml'

import 'prismjs/components/prism-powerquery'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-processing'
import 'prismjs/components/prism-prolog'
import 'prismjs/components/prism-promql'
import 'prismjs/components/prism-properties'
import 'prismjs/components/prism-protobuf'
import 'prismjs/components/prism-psl'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-puppet'
import 'prismjs/components/prism-pure'
import 'prismjs/components/prism-purebasic'
import 'prismjs/components/prism-purescript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-q'
import 'prismjs/components/prism-qml'
import 'prismjs/components/prism-qore'
import 'prismjs/components/prism-qsharp'
import 'prismjs/components/prism-r'

import 'prismjs/components/prism-reason'
import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-rego'
import 'prismjs/components/prism-renpy'
import 'prismjs/components/prism-rescript'
import 'prismjs/components/prism-rest'
import 'prismjs/components/prism-rip'
import 'prismjs/components/prism-roboconf'
import 'prismjs/components/prism-robotframework'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-sas'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-scala'
import 'prismjs/components/prism-scheme'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-smali'
import 'prismjs/components/prism-smalltalk'
import 'prismjs/components/prism-smarty'
import 'prismjs/components/prism-sml'
import 'prismjs/components/prism-solidity'
import 'prismjs/components/prism-solution-file'
import 'prismjs/components/prism-soy'

import 'prismjs/components/prism-splunk-spl'
import 'prismjs/components/prism-sqf'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-squirrel'
import 'prismjs/components/prism-stan'
import 'prismjs/components/prism-stata'
import 'prismjs/components/prism-stylus'
import 'prismjs/components/prism-supercollider'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-systemd'

import 'prismjs/components/prism-t4-templating'
import 'prismjs/components/prism-t4-vb'
import 'prismjs/components/prism-tap'
import 'prismjs/components/prism-tcl'
import 'prismjs/components/prism-textile'
import 'prismjs/components/prism-toml'
import 'prismjs/components/prism-tremor'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-tt2'
import 'prismjs/components/prism-turtle'
import 'prismjs/components/prism-twig'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-typoscript'
import 'prismjs/components/prism-unrealscript'
import 'prismjs/components/prism-uorazor'
import 'prismjs/components/prism-uri'
import 'prismjs/components/prism-v'
import 'prismjs/components/prism-vala'
import 'prismjs/components/prism-vbnet'
import 'prismjs/components/prism-velocity'
import 'prismjs/components/prism-verilog'
import 'prismjs/components/prism-vhdl'
import 'prismjs/components/prism-vim'
import 'prismjs/components/prism-visual-basic'
import 'prismjs/components/prism-warpscript'
import 'prismjs/components/prism-wasm'
import 'prismjs/components/prism-web-idl'
import 'prismjs/components/prism-wgsl'
import 'prismjs/components/prism-wiki'
import 'prismjs/components/prism-wolfram'
import 'prismjs/components/prism-wren'
import 'prismjs/components/prism-xeora'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/components/prism-xojo'
import 'prismjs/components/prism-xquery'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-yang'
import 'prismjs/components/prism-zig'

import 'prismjs/components/prism-crystal'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-cshtml'
import 'prismjs/components/prism-javadoc'
import 'prismjs/components/prism-jsdoc'
import 'prismjs/components/prism-plsql'
import 'prismjs/components/prism-racket'
import 'prismjs/components/prism-sparql'
import 'prismjs/components/prism-t4-cs'

export function highlightAll() {
    Prism.highlightAll();
}

export const languages = [
    // {
    //     name: "Abap",
    //     value: "abap"
    // },
    // {
    //     name: "Abnf",
    //     value: "abnf"
    // },
    {
        name: "Actionscript",
        value: "actionscript"
    },
    // {
    //     name: "ADA",
    //     value: "ada"
    // },
    // {
    //     name: "Agda",
    //     value: "agda"
    // },
    // {
    //     name: "AL",
    //     value: "al"
    // },
    // {
    //     name: "Antlr4",
    //     value: "antlr4"
    // },
    // {
    //     name: "Apacheconf",
    //     value: "apacheconf"
    // },
    // {
    //     name: "Apex",
    //     value: "apex"
    // },
    // {
    //     name: "APL",
    //     value: "apl"
    // },
    {
        name: "Applescript",
        value: "applescript"
    },
    // {
    //     name: "AQL",
    //     value: "aql"
    // },
    {
        name: "Arduino",
        value: "arduino"
    },
    // {
    //     name: "Arff",
    //     value: "arff"
    // },
    // {
    //     name: "Armasm",
    //     value: "armasm"
    // },
    // {
    //     name: "Arturo",
    //     value: "arturo"
    // },
    {
        name: "Asciidoc",
        value: "asciidoc"
    },
    {
        name: "6502 ASM",
        value: "asm6502"
    },
    // {
    //     name: "Asmatmel",
    //     value: "asmatmel"
    // },
    {
        name: "Aspnet",
        value: "aspnet"
    },
    // {
    //     name: "Autohotkey",
    //     value: "autohotkey"
    // },
    // {
    //     name: "Autoit",
    //     value: "autoit"
    // },
    // {
    //     name: "Avisynth",
    //     value: "avisynth"
    // },
    // {
    //     name: "Avro idl",
    //     value: "avro-idl"
    // },
    {
        name: "AWK",
        value: "awk"
    },
    {
        name: "Bash",
        value: "bash"
    },
    {
        name: "Basic",
        value: "basic"
    },
    {
        name: "Batch",
        value: "batch"
    },
    {
        name: "BBcode",
        value: "bbcode"
    },
    // {
    //     name: "BBJ",
    //     value: "bbj"
    // },
    {
        name: "Bicep",
        value: "bicep"
    },
    // {
    //     name: "Birb",
    //     value: "birb"
    // },
    // {
    //     name: "Bison",
    //     value: "bison"
    // },
    // {
    //     name: "BNF",
    //     value: "bnf"
    // },
    // {
    //     name: "BQN",
    //     value: "bqn"
    // },
    {
        name: "Brainfuck",
        value: "brainfuck"
    },
    // {
    //     name: "Brightscript",
    //     value: "brightscript"
    // },
    // {
    //     name: "BRO",
    //     value: "bro"
    // },
    // {
    //     name: "BSL",
    //     value: "bsl"
    // },
    {
        name: "C",
        value: "c"
    },
    // {
    //     name: "CFscript",
    //     value: "cfscript"
    // },
    // {
    //     name: "Chaiscript",
    //     value: "chaiscript"
    // },
    // {
    //     name: "CIL",
    //     value: "cil"
    // },
    // {
    //     name: "Cilkc",
    //     value: "cilkc"
    // },
    // {
    //     name: "Cilkcpp",
    //     value: "cilkcpp"
    // },
    // {
    //     name: "Clike",
    //     value: "clike"
    // },
    {
        name: "Clojure",
        value: "clojure"
    },
    {
        name: "CMake",
        value: "cmake"
    },
    {
        name: "Cobol",
        value: "cobol"
    },
    {
        name: "Coffeescript",
        value: "coffeescript"
    },
    // {
    //     name: "Concurnas",
    //     value: "concurnas"
    // },
    // {
    //     name: "Cooklang",
    //     value: "cooklang"
    // },
    {
        name: "COQ",
        value: "coq"
    },
    // {
    //     name: "Core",
    //     value: "core"
    // },
    {
        name: "C++",
        value: "cpp"
    },
    // {
    //     name: "Crystal",
    //     value: "crystal"
    // },
    {
        name: "C#",
        value: "csharp"
    },
    {
        name: "C# HTML",
        value: "cshtml"
    },
    // {
    //     name: "CSP",
    //     value: "csp"
    // },
    {
        name: "CSS",
        value: "css"
    },
    {
        name: "CSS extras",
        value: "css-extras"
    },
    {
        name: "CSV",
        value: "csv"
    },
    // {
    //     name: "CUE",
    //     value: "cue"
    // },
    // {
    //     name: "Cypher",
    //     value: "cypher"
    // },
    // {
    //     name: "D",
    //     value: "d"
    // },
    {
        name: "Dart",
        value: "dart"
    },
    // {
    //     name: "Dataweave",
    //     value: "dataweave"
    // },
    // {
    //     name: "DAX",
    //     value: "dax"
    // },
    // {
    //     name: "Dhall",
    //     value: "dhall"
    // },
    {
        name: "Diff",
        value: "diff"
    },
    // {
    //     name: "Django",
    //     value: "django"
    // },
    // {
    //     name: "Dns zone file",
    //     value: "dns-zone-file"
    // },
    {
        name: "Docker",
        value: "docker"
    },
    // {
    //     name: "DOT",
    //     value: "dot"
    // },
    // {
    //     name: "Ebnf",
    //     value: "ebnf"
    // },
    // {
    //     name: "Editorconfig",
    //     value: "editorconfig"
    // },
    {
        name: "Eiffel",
        value: "eiffel"
    },
    // {
    //     name: "EJS",
    //     value: "ejs"
    // },
    {
        name: "Elixir",
        value: "elixir"
    },
    {
        name: "ELM",
        value: "elm"
    },
    // {
    //     name: "ERB",
    //     value: "erb"
    // },
    {
        name: "Erlang",
        value: "erlang"
    },
    // {
    //     name: "Etlua",
    //     value: "etlua"
    // },
    // {
    //     name: "Excel formula",
    //     value: "excel-formula"
    // },
    // {
    //     name: "Factor",
    //     value: "factor"
    // },
    // {
    //     name: "False",
    //     value: "false"
    // },
    // {
    //     name: "Firestore security rules",
    //     value: "firestore-security-rules"
    // },
    // {
    //     name: "Flow",
    //     value: "flow"
    // },
    {
        name: "Fortran",
        value: "fortran"
    },
    {
        name: "F#",
        value: "fsharp"
    },
    // {
    //     name: "FTL",
    //     value: "ftl"
    // },
    // {
    //     name: "GAP",
    //     value: "gap"
    // },
    {
        name: "Gcode",
        value: "gcode"
    },
    // {
    //     name: "Gdscript",
    //     value: "gdscript"
    // },
    // {
    //     name: "Gedcom",
    //     value: "gedcom"
    // },
    // {
    //     name: "Gettext",
    //     value: "gettext"
    // },
    {
        name: "Gherkin",
        value: "gherkin"
    },
    {
        name: "GIT",
        value: "git"
    },
    {
        name: "Glsl",
        value: "glsl"
    },
    // {
    //     name: "GML",
    //     value: "gml"
    // },
    // {
    //     name: "GN",
    //     value: "gn"
    // },
    {
        name: "Go",
        value: "go"
    },
    {
        name: "Go module",
        value: "go-module"
    },
    {
        name: "Gradle",
        value: "gradle"
    },
    {
        name: "Graphql",
        value: "graphql"
    },
    {
        name: "Groovy",
        value: "groovy"
    },
    // {
    //     name: "Haml",
    //     value: "haml"
    // },
    // {
    //     name: "Handlebars",
    //     value: "handlebars"
    // },
    {
        name: "Haskell",
        value: "haskell"
    },
    // {
    //     name: "Haxe",
    //     value: "haxe"
    // },
    // {
    //     name: "HCL",
    //     value: "hcl"
    // },
    {
        name: "Hlsl",
        value: "hlsl"
    },
    // {
    //     name: "Hoon",
    //     value: "hoon"
    // },
    // {
    //     name: "Hpkp",
    //     value: "hpkp"
    // },
    // {
    //     name: "Hsts",
    //     value: "hsts"
    // },
    {
        name: "HTTP",
        value: "http"
    },
    // {
    //     name: "Ichigojam",
    //     value: "ichigojam"
    // },
    // {
    //     name: "Icon",
    //     value: "icon"
    // },
    // {
    //     name: "Icu message format",
    //     value: "icu-message-format"
    // },
    // {
    //     name: "Idris",
    //     value: "idris"
    // },
    // {
    //     name: "Iecst",
    //     value: "iecst"
    // },
    // {
    //     name: "Ignore",
    //     value: "ignore"
    // },
    // {
    //     name: "Inform7",
    //     value: "inform7"
    // },
    {
        name: "INI",
        value: "ini"
    },
    // {
    //     name: "IO",
    //     value: "io"
    // },
    // {
    //     name: "J",
    //     value: "j"
    // },
    {
        name: "Java",
        value: "java"
    },
    {
        name: "Javadoc",
        value: "javadoc"
    },
    // {
    //     name: "Javadoclike",
    //     value: "javadoclike"
    // },
    {
        name: "Javascript",
        value: "javascript"
    },
    {
        name: "Java Stacktrace",
        value: "javastacktrace"
    },
    // {
    //     name: "Jexl",
    //     value: "jexl"
    // },
    // {
    //     name: "Jolie",
    //     value: "jolie"
    // },
    // {
    //     name: "JQ",
    //     value: "jq"
    // },
    // {
    //     name: "Js extras",
    //     value: "js-extras"
    // },
    // {
    //     name: "Js templates",
    //     value: "js-templates"
    // },
    {
        name: "JSdoc",
        value: "jsdoc"
    },
    {
        name: "JSON",
        value: "json"
    },
    {
        name: "JSON5",
        value: "json5"
    },
    {
        name: "JsonP",
        value: "jsonp"
    },
    // {
    //     name: "Jsstacktrace",
    //     value: "jsstacktrace"
    // },
    {
        name: "JSX",
        value: "jsx"
    },
    {
        name: "Julia",
        value: "julia"
    },
    // {
    //     name: "Keepalived",
    //     value: "keepalived"
    // },
    // {
    //     name: "Keyman",
    //     value: "keyman"
    // },
    {
        name: "Kotlin",
        value: "kotlin"
    },
    // {
    //     name: "Kumir",
    //     value: "kumir"
    // },
    // {
    //     name: "Kusto",
    //     value: "kusto"
    // },
    {
        name: "Latex",
        value: "latex"
    },
    // {
    //     name: "Latte",
    //     value: "latte"
    // },
    // {
    //     name: "Less",
    //     value: "less"
    // },
    // {
    //     name: "Lilypond",
    //     value: "lilypond"
    // },
    // {
    //     name: "Linker script",
    //     value: "linker-script"
    // },
    // {
    //     name: "Liquid",
    //     value: "liquid"
    // },
    {
        name: "Lisp",
        value: "lisp"
    },
    // {
    //     name: "Livescript",
    //     value: "livescript"
    // },
    {
        name: "Llvm",
        value: "llvm"
    },
    // {
    //     name: "LOG",
    //     value: "log"
    // },
    // {
    //     name: "Lolcode",
    //     value: "lolcode"
    // },
    {
        name: "LUA",
        value: "lua"
    },
    // {
    //     name: "Magma",
    //     value: "magma"
    // },
    {
        name: "Makefile",
        value: "makefile"
    },
    {
        name: "Markdown",
        value: "markdown"
    },
    // {
    //     name: "Markup",
    //     value: "markup"
    // },
    // {
    //     name: "Markup templating",
    //     value: "markup-templating"
    // },
    // {
    //     name: "Mata",
    //     value: "mata"
    // },
    {
        name: "Matlab",
        value: "matlab"
    },
    // {
    //     name: "Maxscript",
    //     value: "maxscript"
    // },
    // {
    //     name: "MEL",
    //     value: "mel"
    // },
    {
        name: "Mermaid",
        value: "mermaid"
    },
    // {
    //     name: "Metafont",
    //     value: "metafont"
    // },
    // {
    //     name: "Mizar",
    //     value: "mizar"
    // },
    {
        name: "Mongodb",
        value: "mongodb"
    },
    // {
    //     name: "Monkey",
    //     value: "monkey"
    // },
    // {
    //     name: "Moonscript",
    //     value: "moonscript"
    // },
    // {
    //     name: "N1ql",
    //     value: "n1ql"
    // },
    // {
    //     name: "N4js",
    //     value: "n4js"
    // },
    // {
    //     name: "Nand2tetris hdl",
    //     value: "nand2tetris-hdl"
    // },
    // {
    //     name: "Naniscript",
    //     value: "naniscript"
    // },
    {
        name: "Nasm",
        value: "nasm"
    },
    // {
    //     name: "Neon",
    //     value: "neon"
    // },
    // {
    //     name: "Nevod",
    //     value: "nevod"
    // },
    // {
    //     name: "Nginx",
    //     value: "nginx"
    // },
    {
        name: "NIM",
        value: "nim"
    },
    // {
    //     name: "NIX",
    //     value: "nix"
    // },
    // {
    //     name: "Nsis",
    //     value: "nsis"
    // },
    {
        name: "Objective C",
        value: "objectivec"
    },
    {
        name: "Ocaml",
        value: "ocaml"
    },
    {
        name: "Odin",
        value: "odin"
    },
    {
        name: "OpenCL",
        value: "opencl"
    },
    // {
    //     name: "Openqasm",
    //     value: "openqasm"
    // },
    // {
    //     name: "OZ",
    //     value: "oz"
    // },
    // {
    //     name: "Parigp",
    //     value: "parigp"
    // },
    // {
    //     name: "Parser",
    //     value: "parser"
    // },
    {
        name: "Pascal",
        value: "pascal"
    },
    // {
    //     name: "Pascaligo",
    //     value: "pascaligo"
    // },
    // {
    //     name: "Pcaxis",
    //     value: "pcaxis"
    // },
    // {
    //     name: "Peoplecode",
    //     value: "peoplecode"
    // },
    {
        name: "Perl",
        value: "perl"
    },
    {
        name: "PHP",
        value: "php"
    },
    // {
    //     name: "Php extras",
    //     value: "php-extras"
    // },
    // {
    //     name: "Phpdoc",
    //     value: "phpdoc"
    // },
    // {
    //     name: "Plant uml",
    //     value: "plant-uml"
    // },
    {
        name: "PL/SQL",
        value: "plsql"
    },
    // {
    //     name: "Powerquery",
    //     value: "powerquery"
    // },
    {
        name: "Powershell",
        value: "powershell"
    },
    {
        name: "Processing",
        value: "processing"
    },
    {
        name: "Prolog",
        value: "prolog"
    },
    // {
    //     name: "Promql",
    //     value: "promql"
    // },
    // {
    //     name: "Properties",
    //     value: "properties"
    // },
    // {
    //     name: "Protobuf",
    //     value: "protobuf"
    // },
    // {
    //     name: "PSL",
    //     value: "psl"
    // },
    // {
    //     name: "PUG",
    //     value: "pug"
    // },
    {
        name: "Puppet",
        value: "puppet"
    },
    // {
    //     name: "Pure",
    //     value: "pure"
    // },
    // {
    //     name: "Purebasic",
    //     value: "purebasic"
    // },
    // {
    //     name: "Purescript",
    //     value: "purescript"
    // },
    {
        name: "Python",
        value: "python"
    },
    // {
    //     name: "Q",
    //     value: "q"
    // },
    // {
    //     name: "QML",
    //     value: "qml"
    // },
    // {
    //     name: "Qore",
    //     value: "qore"
    // },
    // {
    //     name: "Qsharp",
    //     value: "qsharp"
    // },
    {
        name: "R",
        value: "r"
    },
    // {
    //     name: "Racket",
    //     value: "racket"
    // },
    // {
    //     name: "Reason",
    //     value: "reason"
    // },
    {
        name: "Regex",
        value: "regex"
    },
    // {
    //     name: "Rego",
    //     value: "rego"
    // },
    // {
    //     name: "Renpy",
    //     value: "renpy"
    // },
    // {
    //     name: "Rescript",
    //     value: "rescript"
    // },
    // {
    //     name: "Rest",
    //     value: "rest"
    // },
    // {
    //     name: "RIP",
    //     value: "rip"
    // },
    // {
    //     name: "Roboconf",
    //     value: "roboconf"
    // },
    // {
    //     name: "Robotframework",
    //     value: "robotframework"
    // },
    {
        name: "Ruby",
        value: "ruby"
    },
    {
        name: "Rust",
        value: "rust"
    },
    // {
    //     name: "SAS",
    //     value: "sas"
    // },
    {
        name: "Sass",
        value: "sass"
    },
    {
        name: "Scala",
        value: "scala"
    },
    // {
    //     name: "Scheme",
    //     value: "scheme"
    // },
    {
        name: "Scss",
        value: "scss"
    },
    // {
    //     name: "Shell session",
    //     value: "shell-session"
    // },
    // {
    //     name: "Smali",
    //     value: "smali"
    // },
    // {
    //     name: "Smalltalk",
    //     value: "smalltalk"
    // },
    // {
    //     name: "Smarty",
    //     value: "smarty"
    // },
    // {
    //     name: "SML",
    //     value: "sml"
    // },
    {
        name: "Solidity",
        value: "solidity"
    },
    // {
    //     name: "Solution file",
    //     value: "solution-file"
    // },
    // {
    //     name: "SOY",
    //     value: "soy"
    // },
    // {
    //     name: "Sparql",
    //     value: "sparql"
    // },
    // {
    //     name: "Splunk spl",
    //     value: "splunk-spl"
    // },
    // {
    //     name: "SQF",
    //     value: "sqf"
    // },
    {
        name: "SQL",
        value: "sql"
    },
    // {
    //     name: "Squirrel",
    //     value: "squirrel"
    // },
    // {
    //     name: "Stan",
    //     value: "stan"
    // },
    // {
    //     name: "Stata",
    //     value: "stata"
    // },
    // {
    //     name: "Stylus",
    //     value: "stylus"
    // },
    // {
    //     name: "Supercollider",
    //     value: "supercollider"
    // },
    {
        name: "Swift",
        value: "swift"
    },
    // {
    //     name: "Systemd",
    //     value: "systemd"
    // },
    // {
    //     name: "T4 cs",
    //     value: "t4-cs"
    // },
    // {
    //     name: "T4 templating",
    //     value: "t4-templating"
    // },
    // {
    //     name: "T4 vb",
    //     value: "t4-vb"
    // },
    // {
    //     name: "TAP",
    //     value: "tap"
    // },
    // {
    //     name: "TCL",
    //     value: "tcl"
    // },
    {
        name: "Textile",
        value: "textile"
    },
    {
        name: "TOML",
        value: "toml"
    },
    // {
    //     name: "Tremor",
    //     value: "tremor"
    // },
    {
        name: "TSX",
        value: "tsx"
    },
    // {
    //     name: "TT2",
    //     value: "tt2"
    // },
    {
        name: "Turtle",
        value: "turtle"
    },
    // {
    //     name: "Twig",
    //     value: "twig"
    // },
    {
        name: "Typescript",
        value: "typescript"
    },
    // {
    //     name: "Typoscript",
    //     value: "typoscript"
    // },
    // {
    //     name: "Unrealscript",
    //     value: "unrealscript"
    // },
    // {
    //     name: "Uorazor",
    //     value: "uorazor"
    // },
    {
        name: "URI",
        value: "uri"
    },
    // {
    //     name: "V",
    //     value: "v"
    // },
    {
        name: "Vala",
        value: "vala"
    },
    {
        name: "Vb .net",
        value: "vbnet"
    },
    {
        name: "Velocity",
        value: "velocity"
    },
    {
        name: "Verilog",
        value: "verilog"
    },
    {
        name: "VHDL",
        value: "vhdl"
    },
    {
        name: "VIM",
        value: "vim"
    },
    {
        name: "Visual basic",
        value: "visual-basic"
    },
    // {
    //     name: "Warpscript",
    //     value: "warpscript"
    // },
    {
        name: "Wasm",
        value: "wasm"
    },
    // {
    //     name: "Web idl",
    //     value: "web-idl"
    // },
    // {
    //     name: "Wgsl",
    //     value: "wgsl"
    // },
    {
        name: "Wiki",
        value: "wiki"
    },
    // {
    //     name: "Wolfram",
    //     value: "wolfram"
    // },
    // {
    //     name: "Wren",
    //     value: "wren"
    // },
    // {
    //     name: "Xeora",
    //     value: "xeora"
    // },
    // {
    //     name: "Xml doc",
    //     value: "xml-doc"
    // },
    // {
    //     name: "Xojo",
    //     value: "xojo"
    // },
    // {
    //     name: "Xquery",
    //     value: "xquery"
    // },
    {
        name: "Yaml",
        value: "yaml"
    },
    // {
    //     name: "Yang",
    //     value: "yang"
    // },
    {
        name: "ZIG",
        value: "zig"
    },
];